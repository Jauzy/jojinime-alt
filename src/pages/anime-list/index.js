import React from 'react'
import { navigateTo } from 'gatsby'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip'
import Pagination from '@material-ui/lab/Pagination'

import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import SteamGame from '../../components/Cards/SteamGame'
import Header from '../../components/AnimePage/Header'
import SEO from '../../components/Seo'

const queryString = require('query-string');

const AnimeList = props => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        search: '', season: '', year: '', status: '', genres: [],
    })
    const [animes, setAnimes] = React.useState(null)

    const changePage = (e, value) => {
        navigateTo(`/anime-list?page=${value}`)
    }

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

    React.useEffect(() => {
        axios.post('https://graphql.anilist.co', {
            variables: { page: queryString.parse(props.location.search).page },
            query
        }).then(response => {
            setAnimes(response.data.data.Page.media)
        }).catch(err => console.log(err.response.data))
    }, [props.location.search])

    return (
        <div style={{ margin: '5em 0' }}>
            <SEO title='Anime List' />
            <Header image={'https://images.alphacoders.com/175/thumb-1920-175253.jpg'} title='Anime List'
                desc='Temukan Anime Favorit Kamu Disini' social />
            <div className='skew-divider' />

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
                    <Grid item xs={12} md={1}>
                        <IconButton color='primary' variant='contained'><MenuIcon /></IconButton>
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
                    <Pagination count={10} page={parseInt(queryString.parse(props.location.search).page || 1)} onChange={changePage} color="primary" />
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
                    <Pagination count={10} page={parseInt(queryString.parse(props.location.search).page || 1)} onChange={changePage} color="primary" />
                </Box>
            </Container>

        </div >
    )
}

export default AnimeList

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