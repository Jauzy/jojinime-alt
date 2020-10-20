import React from 'react'
import ReactJWPlayer from 'react-jw-player'
import Countdown from 'react-countdown';
import { navigateTo } from 'gatsby'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SortIcon from '@material-ui/icons/Sort';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import axios from 'axios'
import queryString from 'query-string'
import { useRecoilState } from 'recoil'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

import { animeData } from '../config/recoil/atoms/anime'
import { animeQuery } from '../config/queries'

const Streaming = props => {

    const [anime, setAnime] = useRecoilState(animeData)
    const [episode, setEpisode] = React.useState(1)
    const [state, setState] = React.useState({
        epsIndex: 0
    })

    const changeEpisode = (eps, idx) => {
        setEpisode(eps)
        setState({ ...state, epsIndex: idx })
    }

    React.useEffect(() => {
        if (!anime || anime?.id !== queryString.parse(props.location.search).id) {
            axios.post('https://graphql.anilist.co', {
                variables: { id: queryString.parse(props.location.search).id },
                query: animeQuery
            }).then(response => {
                setAnime(response.data.data.Media)
            }).catch(err => console.log(err.response.data))
        }
    }, [props.location])

    return (
        <Layout style={{ marginTop: '6em', marginBottom: '5em' }}>
            <SEO title={anime?.title ? anime?.title?.romaji : 'Anime Page'} />

            <Box style={{ margin: '0 5vw', }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <Paper elevation={6} style={{ marginBottom: '2em' }}>
                            <ReactJWPlayer
                                playerId={player.id}
                                playerScript={player.script}

                                playlist={[{
                                    file: episodes[episode - 1],
                                    image: anime?.streamingEpisodes[state.epsIndex].thumbnail
                                }]}
                            />
                        </Paper>
                        <Typography variant='h4' color='textSecondary'>
                            {anime?.title.native}
                        </Typography>
                        <Typography variant='h3' style={{ fontWeight: 'bold' }}>
                            {anime?.title.romaji}
                        </Typography>
                        <Box style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                            <Typography variant='subtitle1' color='textSecondary' style={{ marginRight: 'auto' }}>
                                {!anime?.nextAiringEpisode ? `${anime?.season} ${anime?.seasonYear}` :
                                    <Countdown
                                        date={Date.now() + anime?.nextAiringEpisode.timeUntilAiring * 1000}
                                        renderer={(props) => {
                                            if (props.days >= 1) {
                                                return (
                                                    `Episode ${anime?.nextAiringEpisode.episode} airing in ${props.days} days`
                                                )
                                            } else if (props.hours >= 1)
                                                return (
                                                    `Episode ${anime?.nextAiringEpisode.episode} airing in ${props.hours} hours`
                                                )
                                            else {
                                                return (
                                                    `Episode ${anime?.nextAiringEpisode.episode} airing in ${props.minutes} minutes`
                                                )
                                            }
                                        }}
                                    />
                                }
                                {` • ${anime?.episodes} Episodes`}
                            </Typography>
                            <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Box style={{ margin: '0 .5em' }}>
                                    <IconButton color='primary'>
                                        <ThumbUpAltIcon />
                                    </IconButton>
                                        0
                                    </Box>
                                <Box style={{ margin: '0 .5em' }}>
                                    <IconButton color='secondary'>
                                        <ThumbDownIcon />
                                    </IconButton>
                                        0
                                </Box>
                                <Button startIcon={<ShareIcon />} style={{ margin: '0 .5em' }}>
                                    Bagikan
                                </Button>
                                <Button startIcon={<PlaylistAddIcon />} style={{ margin: '0 .5em' }}>
                                    Simpan
                                </Button>
                            </Box>
                        </Box>
                        <Divider style={{ marginTop: '.5em', marginBottom: '1em' }} />
                        <Typography variant='body1' dangerouslySetInnerHTML={{ __html: anime?.description }} />
                        <Divider style={{ margin: '1em 0' }} />
                        <table>
                            <tr>
                                <td>
                                    <Typography variant='subtitle1' color='textSecondary'>
                                        Studio
                                    </Typography>
                                </td>
                                <td>
                                    <Typography variant='subtitle1'>
                                        {anime?.studios.edges.filter(node => node.node.isAnimationStudio)[0].node.name}
                                    </Typography>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography variant='subtitle1' color='textSecondary' style={{ marginTop: '.5em' }}>
                                        Genre
                                    </Typography>
                                </td>
                                <td>
                                    {anime?.genres?.map(genre => (
                                        <Chip label={genre} key={genre} style={{ margin: '0.5em 0.5em 0 0' }} />
                                    ))}
                                </td>
                            </tr>
                        </table>
                        <Button color='primary' variant='contained' style={{ margin: '1em 0' }}
                            onClick={() => navigateTo(`/anime-page?id=${anime?.id}`)}>
                            Go to Anime Page
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant='h6' color='textSecondary'>
                            エピソードリスト
                        </Typography>
                        <Typography variant='h4' color='textSecondary' style={{ fontWeight: 'bold' }} gutterBottom>
                            Episodes List
                        </Typography>
                        <Paper elevation={6} style={{ padding: '.5em' }}>
                            <GridList cols={1} cellHeight={100} style={{ maxHeight: '100vh    ' }}>
                                {anime?.streamingEpisodes?.map((eps, idx) => (
                                    <GridListTile key={eps.title} style={{ margin: '.2em 0' }}>
                                        <img src={eps.thumbnail} alt={eps.title} />
                                        <GridListTileBar
                                            title={eps.title}
                                            subtitle={<span>{anime?.title.native}</span>}
                                            actionIcon={
                                                <IconButton color={episode == eps.title.split(" ")[1] ? 'primary' : 'default'}
                                                    onClick={() => changeEpisode(eps.title.split(" ")[1], idx)}>
                                                    <PlayCircleFilledIcon />
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Divider style={{ margin: '1em 0' }} />
            <Box style={{ margin: '0 5vw', }}>
                <Box style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Typography variant='h6' style={{ marginRight: '1em' }}>
                        2 Komentar
                    </Typography>
                    <Button startIcon={<SortIcon />} color='secondary'>
                        Urutkan
                    </Button>
                </Box>

                {/* comment */}
                <Box style={{ margin: '.5em 0', display: 'flex' }}>
                    <Avatar alt="Jauzy" src="/static/images/avatar/1.jpg" style={{ marginRight: '1em' }} />
                    <Box>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='subtitle1' style={{ marginRight: '1em', fontWeight: 'bold' }}>
                                Weeb Developer
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary'>
                                Tuesday 20/10/2020, 4:51
                            </Typography>
                        </Box>
                        <Typography variant='body1'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Box>
                            <IconButton color='primary'>
                                <ThumbUpAltIcon />
                            </IconButton>
                            <IconButton color='secondary'>
                                <ThumbDownIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                <Box style={{ margin: '.5em 0', display: 'flex' }}>
                    <Avatar alt="Jauzy" src="/static/images/avatar/1.jpg" style={{ marginRight: '1em' }} />
                    <Box>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='subtitle1' style={{ marginRight: '1em', fontWeight: 'bold' }}>
                                Weeb Developer
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary'>
                                Tuesday 20/10/2020, 4:51
                            </Typography>
                        </Box>
                        <Typography variant='body1'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Box>
                            <IconButton color='primary'>
                                <ThumbUpAltIcon />
                            </IconButton>
                            <IconButton color='secondary'>
                                <ThumbDownIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </Layout >
    )
}

export default Streaming

const player = {
    id: 'video-stream',
    script: 'https://cdn.jwplayer.com/libraries/OJReti3u.js',
}

const episodes = [
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--01_360p.mp4',
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--02_360p.mp4',
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--03_360p.mp4',
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--04_360p.mp4',
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--05_360p.mp4',
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--06_360p.mp4',
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--07_360p.mp4',
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--08_360p.mp4',
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--09_360p.mp4',
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--10_360p.mp4',
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--11_360p.mp4',
    'https://storage.googleapis.com/jojinime-anime/anime/360%20P/Gabriel%20Dropout/Otakudesu_GabrlDrOut--12_End_360p.mp4'
]