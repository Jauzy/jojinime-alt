import React, { useState, useEffect } from "react"
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'

import axios from 'axios'
import queryString from 'query-string'
import { useRecoilState } from 'recoil'

import SEO from '../components/Seo'
import SpeedDial from '../components/AnimePage/SpeedDial'

import Characters from '../components/Sections/Characters'
import Details from '../components/Sections/Details'
import Recommendations from '../components/Sections/Recommendations'
import Share from '../components/Sections/Share'
import Description from '../components/AnimePage/Description'

import { animeData } from '../config/recoil/atoms/anime'
import { animeQuery } from '../config/queries'

const AnimePage = props => {
    const [onHover, setOnHover] = useState(0)
    const [anime, setAnime] = useRecoilState(animeData)

    useEffect(() => {
        if (!(anime && anime?.id === queryString.parse(props.location.search).id)) {
            axios.post('https://graphql.anilist.co', {
                variables: { id: queryString.parse(props.location.search).id },
                query: animeQuery
            }).then(response => {
                setAnime(response.data.data.Media)
            }).catch(err => console.log(err.response.data))
        }
    }, [anime])

    return (
        <div>
            <SEO title={anime?.title ? anime?.title?.romaji : 'Anime Page'} />
            <SpeedDial location={props.location} />
            <Details anime={anime} />

            <Characters characters={anime?.characters} />

            <section id='description'>
                <div className='skew-divider' />
                <Container style={{ overflow: 'hidden', }}>
                    <Description description={anime?.description} image={anime?.coverImage?.extraLarge} />
                </Container>
            </section>

            <section id='episodes'>
                <Paper elevation={0} style={{ display: 'flex', alignItems: 'center' }}>
                    <Container style={{ paddingBottom: '10em', paddingTop: '3em' }}>
                        <Grid container spacing={6} style={{ display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={12} sm={8}>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography variant='h2' style={{ textAlign: 'center', marginBottom: '.5em' }}>
                                    Episodes
                                </Typography>
                                <Grid container spacing={2}>
                                    {anime?.streamingEpisodes?.map((item, index) => (
                                        <Grid item xs={2} key={item.title} lg={1}>
                                            <Tooltip title={item.title} onMouseEnter={() => setOnHover(index)}>
                                                <div className={`epsBox${onHover === index ? '-active' : ''}`}>{index + 1}</div>
                                            </Tooltip>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </section>

            <div className='skew-divider' />
            <Container>
                <Typography variant='h2'>
                    Other Recommendations
                </Typography>
                <Typography variant='h4'>
                    Based on Genres.
                </Typography>
            </Container>
            <Recommendations recommendations={anime?.recommendations} />

            <section id='share'>
                <Container>
                    <Typography variant='h2' style={{ marginBottom: '0.2em', textAlign: 'center' }}>
                        Please Share to Support Us from Keeping this Website Free for Everyone.
                    </Typography>
                    <Share location={props.location} />
                </Container>
            </section>

        </div >
    )
}

export default AnimePage