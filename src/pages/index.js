import React, { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'

import axios from 'axios'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import SpeedDial from '../components/AnimePage/SpeedDial'
import Character from '../components/AnimePage/Characters'
import Header from '../components/AnimePage/Header'
import Details from '../components/AnimePage/Details'
import ShareSection from '../components/AnimePage/Share'
import Description from '../components/AnimePage/Description'

import { Parallax } from 'react-scroll-parallax';

const IndexPage = props => {
    const [state, setState] = useState({})
    const [onHover, setOnHover] = useState(0)
    const classes = useStyles()

    useEffect(() => {
        axios.post('https://graphql.anilist.co', { variables, query }).then(response => {
            setState(response.data.data.Media)
        })
    }, [])

    return (
        <Layout>
            <SEO title={state.title?.romaji} />
            <SpeedDial location={props.location} />
            <section id='details'>
                <Header image={'https://images6.alphacoders.com/993/thumb-1920-993076.png'} title={state.title} />
                <div className='skew-divider' />
                <Container style={{ marginTop: '-15em' }}>
                    <Details details={state} />
                    <Parallax y={[10, 50]} tagOuter="div">
                        <Typography variant='h1' className='text-secondary' style={{ textAlign: 'right' }}>
                            <strong>DETAILS</strong>
                        </Typography>
                    </Parallax>
                </Container>
            </section>

            <section id='characters'>
                <div className='skew-divider-secondary' style={{ marginTop: '2em' }} />
                <Paper elevation={0} style={{ marginBottom: '.3em', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                    <Grid container spacing={1}>
                        <Grid item xs={11}>
                            <Container style={{ overflow: 'hidden', paddingBottom: '7em' }}>
                                <Character characters={state.characters} />
                            </Container>
                        </Grid>
                        <Grid item xs={1} style={{ display: 'flex', alignItems: 'center' }}>
                            <Parallax y={[-20, 20]} tagOuter="div">
                                <Typography variant="h1">
                                    {'CHARA'.split('').map(item => (
                                        <div>{item}</div>
                                    ))}
                                </Typography>
                            </Parallax>
                        </Grid>
                    </Grid>
                </Paper>
            </section>

            <section id='description'>
                <div className='skew-divider' />
                <Container style={{ overflow: 'hidden', }}>
                    <Description description={state.description} image={state.coverImage?.extraLarge} />
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
                                    {state.streamingEpisodes?.map((item, index) => (
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
            <section id='recommendations' style={{ marginTop: '0em' }}>
                <Grid container spacing={0} style={{ paddingBottom: '5em', paddingTop: '3em', overflow: 'hidden' }}>
                    {state.recommendations?.edges.map(item => (
                        <Grid item xs={12} sm={6} md={3}>
                            <div class="style_prevu_kit">
                                <img src={item.node.mediaRecommendation.coverImage.extraLarge} />
                                <div>
                                    <Typography variant='h6'>
                                        {item.node.mediaRecommendation.title.native}
                                    </Typography>
                                    <Typography variant='h6'>
                                        {item.node.mediaRecommendation.title.romaji}
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </section>

            <section id='share'>
                <Container>
                    <Typography variant='h2' style={{ marginBottom: '0.2em', textAlign: 'center' }}>
                        Please Share to Support Us from Keeping this Website Free for Everyone.
                    </Typography>
                    <ShareSection location={props.location} />
                </Container>
            </section>

        </Layout >
    )
}

export default IndexPage

const useStyles = makeStyles((theme) => ({
    epsSec: { width: '2em', height: '2em', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
}));

const query = `
    query($id: Int) {
        Media(id: $id){
            title {
                romaji
                english
                native
            }
            coverImage {
                extraLarge
                large
            }
            bannerImage
            episodes
            description
            genres
            rankings {
                rank
                allTime
                context
                type
            }
            meanScore
            studios {
                edges {
                    node {
                        name
                    }
                }
            }
            characters {
                edges {
                    id
                    role
                    node {
                        id
                        name {
                            full
                            first
                            last
                            native
                        }
                        image {
                            large
                        }
                        description(asHtml: true)
                    }
                    voiceActors {
                        id
                        name {
                            full
                        }
                        image {
                            large
                        }
                    }
                }
            }
            streamingEpisodes {
                title
                thumbnail
            }
            recommendations(perPage: 8) {
                edges {
                    node {
                        id
                        mediaRecommendation {
                            id
                            title {
                                romaji
                                native
                            }
                            coverImage {
                                extraLarge
                            }
                        }
                    }
                }
            }
        }
    }
    `
const variables = {
    id: 99263
    // id: 21202
}