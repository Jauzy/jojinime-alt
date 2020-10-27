import React from 'react'
import baseURL from '../../config/baseURL'
import { useRecoilState } from 'recoil'
import { Parallax } from 'react-scroll-parallax'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import AnimeList from '../../components/Sections/Dashboard/AnimeList'
import SettingsSVG from '../../components/SVG/Settings'

import { animesData } from '../../config/recoil/atoms/anime'

const Animes = props => {

    const [animes, setAnimes] = useRecoilState(animesData)
    const [animeSearch, setAnimeSearch] = React.useState([])
    const [state, setState] = React.useState({
        open: false, searchTitle: '', newAnime: null, jumbotron: ''
    })

    const searchAnime = () => {
        baseURL.post('https://graphql.anilist.co', {
            variables: { search: state.searchTitle },
            query
        }).then(response => {
            setAnimeSearch(response.data.data.Page.media)
        }).catch(err => console.log(err))
    }

    const onAddNewAnime = () => {
        baseURL.post('/anime', { id: state.newAnime?.id, jumbotron: state.jumbotron })
        setState({ ...state, newAnime: null, jumbotron: '', open: true })
        baseURL.get('/anime').then(response => {
            setAnimes(response.data.animes)
        }).catch(err => console.log(err.response?.data))
    }

    const onState = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    React.useEffect(() => {
        if (!animes) {
            baseURL.get('/anime').then(response => {
                setAnimes(response.data.animes)
            }).catch(err => console.log(err.response?.data))
        }
    }, [])

    return (
        <Layout style={{ padding: '6em 5vw' }}>
            <SEO title='Anime Dashboard' />
            <Grid container spacing={3} alignItems='center'>
                <Grid item xs={12} md>
                    <Typography variant='h3' color='primary' style={{ fontWeight: 'bold' }}>
                        お帰りなさい
                    </Typography>
                    <Typography variant='h2'>
                        Muhammad Abdurrahman Al Jauzy
                        </Typography>
                    <Typography variant='h4' style={{ fontWeight: 'bold' }} color='textSecondary'>
                        Animes Dashboard
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Parallax y={[50, -50]} tagOuter='div'>
                        <SettingsSVG />
                    </Parallax>
                </Grid>
            </Grid>
            <Box>
                <Grid container spacing={3} style={{ justifyContent: 'center' }}>
                    <Grid item xs={12} md={3}>
                        <Paper style={{ padding: '1em' }}>
                            <Typography variant='h5' style={{ fontWeight: 'bold' }} gutterBottom>
                                Add New Anime
                            </Typography>
                            <Autocomplete
                                style={{ margin: '.5em 0' }}
                                options={animeSearch}
                                fullWidth
                                getOptionLabel={(option) => option?.title?.romaji}
                                onChange={(e, val) => setState({ ...state, newAnime: val })}
                                onInputChange={(e, val) => setState({ ...state, searchTitle: val })}
                                onKeyUp={() => typewatch(searchAnime(), 5000)}
                                value={state.newAnime}
                                renderInput={(params) => <TextField {...params} label="Anime Title" variant="outlined" />}
                            />
                            <TextField style={{ margin: '.5em 0' }} id="jumbotron" label="Jumbotron Url" fullWidth
                                onChange={onState} value={state.jumbotron}
                                variant="outlined" helperText='Help: Input an Image Url as Jumbotron' />
                            <Button variant='contained' color='primary' fullWidth
                                onClick={onAddNewAnime} disabled={!state.newAnime || state.jumbotron == ''}>
                                Submit
                            </Button>
                        </Paper>

                        <Paper style={{ padding: '1em', marginTop: '1em' }}>
                            <Typography variant='h5' style={{ fontWeight: 'bold' }} gutterBottom>
                                Add Episode Streaming URL
                            </Typography>
                            <Autocomplete
                                style={{ margin: '.5em 0' }}
                                options={animes}
                                fullWidth
                                getOptionLabel={(option) => option.title.romaji}
                                renderInput={(params) => <TextField {...params} label="Anime Title" variant="outlined" />}
                            />
                            <TextField style={{ margin: '.5em 0' }} id="episode-number" type='number' label="Episode" fullWidth
                                variant="outlined" />
                            <TextField style={{ margin: '.5em 0' }} id="episode-url" label="Episode Streaming URL" fullWidth
                                variant="outlined" helperText='Help: Episode`s Video URL From Google Cloud' />
                            <Button variant='contained' color='primary' fullWidth>
                                Submit
                            </Button>
                        </Paper>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} md={8} style={{ padding: '1em', maxHeight: '100vh' }}>
                        <Typography variant='h5' gutterBottom style={{ fontWeight: 'bold' }}>
                            Anime List in Database
                        </Typography>
                        <AnimeList animes={animes} />
                    </Grid>
                </Grid>
            </Box>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={state.open}
                onClose={handleClose}
                autoHideDuration={6000}
            >
                <Alert onClose={handleClose} severity="success">
                    Anime Added Successfully!
                </Alert>
            </Snackbar>
        </Layout>
    )
}

export default Animes

var typewatch = function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    }
}();

const query = `
query($search: String) {
    Page(page: 1, perPage: 5){
        media(search: $search, type:ANIME) {
            id
            title {
                romaji
            }
        }
    }
}
`