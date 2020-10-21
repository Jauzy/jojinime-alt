import React from 'react'
import axios from 'axios'

import Header from '../../components/Sections/AnimePage/Header'
import SEO from '../../components/Seo'
import Layout from '../../components/Layout'
import GridMode from '../../components/Sections/AnimeList/GridMode'
import ListMode from '../../components/Sections/AnimeList/ListMode'

const AnimeList = props => {

    const [isListMode, setMode] = React.useState(true)
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
        <Layout style={{ margin: '5em 0' }}>
            <SEO title='Anime List' />
            <Header image={'https://images.alphacoders.com/175/thumb-1920-175253.jpg'} title='Anime List'
                desc='Temukan Anime Favorit Kamu Disini' social />
            <div className='skew-divider' />

            {!isListMode && <GridMode animes={animes} setListMode={setMode} />}
            {isListMode && <ListMode animes={animes} setListMode={setMode} />}

        </Layout >
    )
}

export default AnimeList

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