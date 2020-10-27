import React, { useEffect } from "react"
import baseURL from '../config/baseURL'
import queryString from 'query-string'
import { useRecoilState } from 'recoil'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Layout from '../components/Layout'

import Characters from '../components/Sections/Characters'
import Details from '../components/Sections/Details'
import Recommendations from '../components/Sections/Recommendations'
import Share from '../components/Sections/Share'
import Description from '../components/Sections/AnimePage/Description'
import Episodes from '../components/Sections/Episodes'

import SEO from '../components/Seo'
import SpeedDial from '../components/Sections/AnimePage/SpeedDial'

import { animeData } from '../config/recoil/atoms/anime'

const AnimePage = props => {
    const [anime, setAnime] = useRecoilState(animeData)

    useEffect(() => {
        if (!anime || anime?.id !== queryString.parse(props.location.search).id) {
            baseURL.get(`/anime/${queryString.parse(props.location.search).id}`).then(response => {
                setAnime(response.data.anime)
            }).catch(err => console.log(err.data))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.location])

    return (
        <Layout>
            <SEO title={anime?.title ? anime?.title?.romaji : 'Anime Page'} />
            <SpeedDial location={props.location} />
            <Details anime={anime} />

            <Characters characters={anime?.characters} charaImage={anime?.imageCharacters} />

            <section id='description'>
                <div className='skew-divider' />
                <Container style={{ overflow: 'hidden', }}>
                    <Description description={anime?.description} image={anime?.coverImage?.extraLarge} />
                </Container>
            </section>

            <Episodes anime={anime} />

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

        </Layout>
    )
}

export default AnimePage

