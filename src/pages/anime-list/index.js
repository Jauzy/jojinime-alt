import React from 'react'
import baseURL from '../../config/baseURL'
import { useRecoilState } from 'recoil'

import Header from '../../components/Sections/AnimePage/Header'
import SEO from '../../components/Seo'
import Layout from '../../components/Layout'
import GridMode from '../../components/Sections/AnimeList/GridMode'
import ListMode from '../../components/Sections/AnimeList/ListMode'

import { animesData } from '../../config/recoil/atoms/anime'

const AnimeList = props => {

    const [isListMode, setMode] = React.useState(true)
    const [animes, setAnimes] = useRecoilState(animesData)

    React.useEffect(() => {
        if (!animes) {
            baseURL.get('/anime').then(response => {
                setAnimes(response.data.animes)
            }).catch(err => console.log(err.response?.data))
        }
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