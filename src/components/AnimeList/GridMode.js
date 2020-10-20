import React from 'react'
import { navigateTo } from 'gatsby'
import axios from 'axios'

import Tooltip from '@material-ui/core/Tooltip'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';

import Pagination from '@material-ui/lab/Pagination'

import SearchIcon from '@material-ui/icons/Search';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import SteamGame from '../../components/Cards/SteamGame'

const queryString = require('query-string');

const GridMode = ({ setListMode, location }) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        search: '', season: '', year: '', status: '', genres: [], page: 1
    })
    const [animes, setAnimes] = React.useState(null)

    const onChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    };

    const dropdowns = [
        {
            title: 'Season',
            choices: ['Winter', 'Spring', 'Summer', 'Fall']
        },
        {
            title: 'Year',
            choices: ['2019', '2020']
        },
        {
            title: 'Status',
            choices: ['Airing', 'Finished']
        }
    ]

    const changePage = (e, value) => {
        navigateTo(`/anime-list?page=${value}`)
    }

    React.useEffect(() => {
        setState({ ...state, page: parseInt(queryString.parse(location.search).page) || 1 })
        axios.post('https://graphql.anilist.co', {
            variables: { page: queryString.parse(location.search).page },
            query
        }).then(response => {
            setAnimes(response.data.data.Page.media)
        }).catch(err => console.log(err.response?.data))
    }, [location.search])

    return (
        <Box>
            <Container style={{}}>
                <Grid container spacing={3} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={3}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Search</InputLabel>
                            <Input
                                type='text'
                                onChange={(e) => setState({ ...state, search: e.target.value })}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    {dropdowns.map((item, index) => (
                        <Grid item xs={12} md={2} key={index + 'form'}>
                            <FormControl variant='filled' className={classes.formControl}>
                                <InputLabel >{item.title}</InputLabel>
                                <Select
                                    name={item.title.toLowerCase()}
                                    value={state[item.title.toLowerCase()]}
                                    onChange={onChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {item.choices.map((choice, index) => (
                                        <MenuItem value={choice} key={`choice-${index}-${item.title}`} >{choice}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    ))}
                    <Grid item xs={2} md={1}>
                        <Tooltip title='Change To List Mode'>
                            <IconButton color='primary' variant='contained' onClick={() => setListMode(true)}><FormatListBulletedIcon /></IconButton>
                        </Tooltip>
                    </Grid>

                </Grid>
                {(state.search !== '' || state.season !== '' || state.year !== '' || state.status !== '') && <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <LocalOfferIcon />
                    <Box style={{ marginLeft: '1em' }}>
                        {state.search !== '' && <Chip label={`Search: ${state.search}`} color='primary' style={{ margin: '1em .5em' }} />}
                        {state.season !== '' && <Chip label={`Season: ${state.season}`} color='primary' style={{ margin: '1em .5em' }} />}
                        {state.year !== '' && <Chip label={`Year: ${state.year}`} color='primary' style={{ margin: '1em .5em' }} />}
                        {state.status !== '' && <Chip label={`Status: ${state.status}`} color='primary' style={{ margin: '1em .5em' }} />}
                    </Box>
                </Box>}
            </Container>

            {!animes && <Container style={{ marginTop: '1em' }}>
                <Grid container spacing={3}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item, index) => (
                        <Grid item xs={6} sm={3} md={2} key={index + 'item'}>
                            <SteamGame />
                        </Grid>
                    ))}
                </Grid>
                <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '2em' }}>
                    <Pagination count={10} page={state.page} onChange={changePage} color="primary" />
                </Box>
            </Container>}

            <Container style={{ marginTop: '1em' }}>
                <Grid container spacing={3}>
                    {animes?.map((item, index) => (
                        <Grid item xs={6} sm={3} md={2} key={index + 'item'}>
                            <SteamGame anime={item} label />
                        </Grid>
                    ))}
                </Grid>
                <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '2em' }}>
                    <Pagination count={10} page={state.page} onChange={changePage} color="primary" />
                </Box>
            </Container>
        </Box>
    )
}

export default GridMode

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 150, width: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const query = `
query($page: Int) {
    Page(perPage: 18, page: $page){
        media {
        title {
            romaji
            english
            native
        }
        nextAiringEpisode {
            episode
            timeUntilAiring
        }
        season
        seasonYear
        coverImage{
            color
            extraLarge
        }
        meanScore
        studios {
            edges {
            node {
                isAnimationStudio
                name
            }
            }
        }
        episodes
        format
        genres
        }
    }   
}
`