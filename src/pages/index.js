import React from 'react'
import { navigateTo } from 'gatsby'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import FastForwardIcon from '@material-ui/icons/FastForward';
import PhonelinkIcon from '@material-ui/icons/Phonelink';

import Header from '../components/Sections/AnimePage/Header'
import SEO from '../components/Seo'
import SittingSvg from '../components/SVG/Sitting'
import StreamingSvg from '../components/SVG/Streaming'

import { Parallax } from 'react-scroll-parallax'

import Layout from '../components/Layout'
import Advantages from '../components/Sections/Advantages'
import CubeAnimation from '../components/SVG/CubeAnimation'

const IndexPage = props => {
    return (
        <Layout style={{ overflow: "hidden" }}>
            <SEO title='Home' />
            <Header image={'https://images2.alphacoders.com/748/thumb-1920-748309.png'} title='Jojinime.'
                desc='Next Generation Anime Streaming Platform.' blur={3} social />
            <div className='skew-divider' />

            <Advantages firstRow={firstRow} secondRow={secondRow} svg={StreamingSvg} title1='The Next Generation Of' title2='Anime Streaming Platform' />

            <Container style={{ marginTop: '5em' }}>
                <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} md={7} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='h4' className="title">ストリーム.</Typography>
                        <Parallax y={[50, -50]} tagOuter="div">
                            <CubeAnimation />
                        </Parallax>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant='h3' style={{ fontWeight: 'bold' }}>Dah Nonton Berapa Season Hari Ini?</Typography>
                        <Typography variant='body1' color='textSecondary'>Yuk nonton terus di jojinime, streaming tanpa buffer dengan server google cloud platform.</Typography>
                        <Button color='primary' variant='contained' startIcon={<SubdirectoryArrowRightIcon />}
                            onClick={() => navigateTo('/anime-list')} style={{ margin: '0.5em 0em', padding: '0.5em 3em' }}>Anime List</Button>
                    </Grid>
                </Grid>
            </Container>

            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box style={{ padding: '2vw' }}>
                            <Typography variant='h4'>
                                Okaerinasai Senpai!
                        </Typography>
                            <Typography variant='h4'>
                                おかえりなさい せんぱい!
                        </Typography>
                            <Typography variant='h2'>
                                Daftar dan Login Sekarang!
                        </Typography>
                            <Typography variant='body1' color='textSecondary'>
                                Login untuk menggunakan fitur - fitur lain seperti anime favorit, warna tema, dan lain - lain.
                        </Typography>
                            <Button color='primary' variant='contained' startIcon={<SubdirectoryArrowRightIcon />}
                                onClick={() => navigateTo('/login')} style={{ margin: '0.5em 0em', padding: '0.5em 3em' }}>Login</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Parallax y={[50, -50]} tagOuter="div">
                            <SittingSvg defaultSize={true} />
                        </Parallax>
                    </Grid>
                </Grid>
            </Box>

        </Layout>
    )
}

export default IndexPage

const firstRow = [
    {
        icon: FastForwardIcon,
        title: 'Streaming Cepat',
        desc: 'Streaming cepat tanpa buffer karna kita menggunakan server google cloud untuk menyimpan file streaming. Yuk Mulai Streaming !'
    },
    {
        icon: PhonelinkIcon,
        title: 'Fleksibel',
        desc: 'Tonton anime yang kamu suka kapanpun dimanapun kamu suka dengan Smartphonemu atau Desktopmu.'
    }
]

const secondRow = [
    {
        icon: ColorLensIcon,
        title: 'Ubah Tema Sesukamu',
        desc: 'Sesuaikan selera warnamu hingga kamu merasa nyaman untuk selalu berkunjung kemari.',
        btnLabel: 'Login',
        url: '/login'
    },
    {
        icon: FavoriteIcon,
        title: 'Temukan Obsesimu',
        desc: 'Ratusan anime menunggumu untuk ditonton, ayo temukan anime favoritmu dan tonton segera!',
        btnLabel: 'Anime List',
        url: '/anime-list'
    }
]