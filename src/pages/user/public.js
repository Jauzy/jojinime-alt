import React from 'react'
import axios from 'axios'
import { Parallax } from 'react-scroll-parallax'

import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import Header from '../../components/Sections/AnimePage/Header'
import EpisodeList from '../../components/Sections/Streaming/EpisodesList'
import PostCard from '../../components/Cards/PostCard'
import FriendSection from '../../components/Sections/PublicProfile/Friend'
import FavouriteAnime from '../../components/Sections/AnimeList/GridMode'

const PublicProfile = props => {
    const [activeTab, setActiveTab] = React.useState(0)
    const [animes, setAnimes] = React.useState(null)

    React.useEffect(() => {
        axios.post('https://graphql.anilist.co', {
            variables: { page: 1 },
            query
        }).then(response => {
            setAnimes(response.data.data.Page.media)
        }).catch(err => console.log(err.response?.data))
    }, [])

    return (
        <Layout>
            <SEO title={'Public Profile'} />
            <Header image={user.banner} height='50vh' />
            <Paper>
                <Container>
                    <Grid container spacing={3} style={{ padding: '1em 0', paddingRight: '2em' }}>
                        <Grid item xs={12} md={3} style={{ marginTop: '-9em', display: 'flex', flexDirection: 'column' }}>
                            <Avatar alt={user.name} src={user.profile_pict} style={{ width: '10em', height: '10em', margin: 'auto' }} />
                            <Button variant='contained' color='primary' fullWidth style={{ marginTop: '1em' }}>
                                Add Friend
                        </Button>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography variant='h3' style={{ fontWeight: 'bold' }}>
                                {user.name}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                @{user.username} • Joined at {user.joined}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>

            <AppBar position="static" color="inherit">
                <Container>
                    <Tabs
                        value={activeTab}
                        onChange={(e, value) => setActiveTab(value)}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="Beranda" />
                        <Tab label="Tentang" />
                        <Tab label="Teman" />
                        <Tab label="Anime Favorit" />
                    </Tabs>
                </Container>
            </AppBar>
            <Divider />

            <Container>
                <Box style={{ padding: "2em 0" }}>
                    {activeTab === 0 && <Box>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Parallax y={[50, -50]} tagOuter="div">
                                    <Typography variant='h4' style={{ fontWeight: 'bold' }} gutterBottom>
                                        Recently Watched
                                    </Typography>
                                    <EpisodeList maxHeight='100vh' />
                                </Parallax>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <PostCard />
                                <PostCard />
                            </Grid>
                        </Grid>
                    </Box>
                    }
                    {activeTab === 1 && <Box>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Box style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant='h6' color='primary'>
                                        About Me
                                    </Typography>
                                    <Box style={{ width: '100%', height: '10px', maxWidth: '100px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                                </Box>
                                <Typography color='textSecondary' variant='body1'>
                                    Pemograman bukan hanya cara untuk mengembangkan suatu ide, bukan hanya sebagai tuntutan pekerjaan. Tapi, sesuatu yang bisa membuat kita
                                    kadang merasa gembira dan emosi. Sesuatu yang selalu membuat kita berkembang tanpa kita sadari.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant='h6' color='primary'>
                                        Contact and Social Media
                                    </Typography>
                                    <Box style={{ width: '100%', height: '10px', maxWidth: '100px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    }
                    {activeTab === 2 && <Box>
                        <FriendSection />
                    </Box>
                    }
                    {activeTab === 3 && <Box>
                        <FavouriteAnime animes={animes} />
                    </Box>
                    }
                </Box>
            </Container>

        </Layout>
    )
}

export default PublicProfile

const user = {
    banner: require('../../images/nms.png'),
    profile_pict: require('../../images/Joji-Square.jpg'),
    name: 'Muhammad Abdurrahman Al Jauzy',
    username: 'al.zaujy',
    joined: 'October 21, 2020'
}

const query = `
query($page: Int) {
    Page(perPage: 50, page: $page){
        media {
        id
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