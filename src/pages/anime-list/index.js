import React from 'react'

import Header from '../../components/AnimePage/Header'
import SEO from '../../components/Seo'
import Layout from '../../components/Layout'
import GridMode from '../../components/AnimeList/GridMode'
import ListMode from '../../components/AnimeList/ListMode'


const AnimeList = props => {

    const [isListMode, setMode] = React.useState(true)

    return (
        <Layout style={{ margin: '5em 0' }}>
            <SEO title='Anime List' />
            <Header image={'https://images.alphacoders.com/175/thumb-1920-175253.jpg'} title='Anime List'
                desc='Temukan Anime Favorit Kamu Disini' social />
            <div className='skew-divider' />

            {!isListMode && <GridMode location={props.location} setListMode={setMode} />}
            {isListMode && <ListMode setListMode={setMode} />}

        </Layout >
    )
}

export default AnimeList