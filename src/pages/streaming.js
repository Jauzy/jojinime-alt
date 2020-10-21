import React from 'react'
import ReactJWPlayer from 'react-jw-player'
import { navigateTo } from 'gatsby'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';

import SortIcon from '@material-ui/icons/Sort';

import Skeleton from '@material-ui/lab/Skeleton'

import axios from 'axios'
import queryString from 'query-string'
import { useRecoilState } from 'recoil'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import CommentCard from '../components/Cards/CommentCard'
import EpisodesList from '../components/Sections/Streaming/EpisodesList'
import VideoBody from '../components/Sections/Streaming/VideoBody'
import VideoHeader from '../components/Sections/Streaming/VideoHeader'

import { animeData } from '../config/recoil/atoms/anime'
import { animeQuery } from '../config/queries'

const Streaming = ({ location }) => {

    const [anime, setAnime] = useRecoilState(animeData)
    const [episode, setEpisode] = React.useState('1')
    const [state, setState] = React.useState({
        epsIndex: 0
    })

    const changeEpisode = (eps, idx) => {
        setEpisode(eps)
        setState({ ...state, epsIndex: idx })
        navigateTo(`/streaming?id=${anime?.id}&&episode=${eps}`)
    }

    React.useEffect(() => {
        const episode = queryString.parse(location.search).episode || '1'
        setEpisode(episode)
        if (!anime || anime?.id !== queryString.parse(location.search).id) {
            axios.post('https://graphql.anilist.co', {
                variables: { id: queryString.parse(location.search).id },
                query: animeQuery
            }).then(response => {
                setAnime(response.data.data.Media)
                setState({ ...state, epsIndex: response.data.data.Media?.streamingEpisodes.findIndex(eps => eps.title.split(" ")[1] === episode) })
            }).catch(err => console.log(err.response.data))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return (
        <Layout style={{ marginTop: '6em', marginBottom: '5em' }}>
            <SEO title={anime?.title ? anime?.title?.romaji : 'Anime Page'} />

            <Box style={{ margin: '0 5vw', }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <Paper elevation={6} style={{ marginBottom: '2em' }}>
                            {anime ? <ReactJWPlayer
                                playerId={player.id}
                                playerScript={player.script}

                                playlist={[{
                                    file: episodes[episode - 1],
                                    image: anime?.streamingEpisodes[state.epsIndex].thumbnail
                                }]}
                            /> : <Skeleton variant='rect' width='100%' height='70vh' />}
                        </Paper>
                        <VideoHeader anime={anime} />
                        <Divider style={{ marginTop: '.5em', marginBottom: '1em' }} />
                        <VideoBody anime={anime} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant='h6' color='textSecondary'>
                            エピソードリスト
                        </Typography>
                        <Typography variant='h4' color='textSecondary' style={{ fontWeight: 'bold' }} gutterBottom>
                            Episodes List
                        </Typography>
                        <EpisodesList title={anime?.title} streamingEpisodes={anime?.streamingEpisodes} changeEpisode={changeEpisode} episode={episode} />
                    </Grid>
                </Grid>
            </Box>

            <Divider style={{ margin: '1em 0' }} />
            {/* comment section */}
            <Box style={{ margin: '0 5vw', }}>
                <Box style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Typography variant='h6' style={{ marginRight: '1em' }}>
                        {comment.length} Komentar
                    </Typography>
                    <Button startIcon={<SortIcon />} color='secondary'>
                        Urutkan
                    </Button>
                </Box>

                {comment.map((item, idx) => (
                    <CommentCard data={item} key={`comment-${idx}`} />
                ))}

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

const comment = [
    {
        user: {
            name: 'Weeb Developer',
            profile_pict: '"/static/images/avatar/1.jpg"'
        },
        date: 'Tuesday 20/10/2020, 4:51',
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged.`
    }
]