import React, { useState, useEffect } from "react"
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import axios from 'axios'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import SpeedDial from '../components/AnimePage/SpeedDial'
import Character from '../components/AnimePage/Characters'
import Header from '../components/AnimePage/Header'
import Details from '../components/AnimePage/Details'

const IndexPage = props => {
    const [state, setState] = useState({

    })

    useEffect(() => {
        axios.post('https://graphql.anilist.co', { variables, query }).then(response => {
            setState(response.data.data.Media)
        })
    }, [])

    return (
        <Layout>
            <SEO title="Home" />
            <SpeedDial location={props.location} />
            <section id='details'>
                <Header image={'https://images6.alphacoders.com/993/thumb-1920-993076.png'} title={state.title} />
                <div className='skew-divider' />
                <Container style={{ marginTop: '-15em' }}>
                    <Details details={state} />
                </Container>
            </section>

            <section id='characters'>
                <div className='skew-divider-secondary' style={{ marginTop: '6em' }} />
                <Paper elevation={0}>
                    <Container style={{ overflow: 'hidden', paddingBottom: '7em' }}>
                        <Character characters={state.characters} />
                    </Container>
                </Paper>
            </section>

            <div className='skew-divider' />
            <Container style={{ overflow: 'hidden' }}>
                <section style={{ marginBottom: '3em' }} id='description'>
                    <Typography variant='h2' style={{ marginBottom: '0.2em' }}>
                        Synopsis
                    </Typography>
                    <Typography variant='body1' dangerouslySetInnerHTML={{ __html: state.description }} />
                </section>
            </Container>

            <section id='recommendations'>
                <Container>
                    <Typography variant='h2' style={{ marginBottom: '0.2em' }}>
                        Other Recommendations
                    </Typography>
                </Container>
                <Grid container spacing={0} style={{ paddingBottom: '5em', paddingTop:'3em', overflow: 'hidden' }}>
                    {state.recommendations?.edges.map(item => (
                        <Grid item xs={12} sm={6} md={3}>
                            <div class="style_prevu_kit" style={{ width: '100%', height: '100%' }}>
                                <img src={item.node.mediaRecommendation.coverImage.extraLarge} width='100%' />
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
                    <Typography variant='h2' style={{ marginBottom: '0.2em' }}>
                        Share
                    </Typography>
                </Container>
            </section>

        </Layout >
    )
}

export default IndexPage

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
}