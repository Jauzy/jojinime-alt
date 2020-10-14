import React, { useEffect } from 'react'
import { navigateTo } from 'gatsby'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

import anime from 'animejs'
import MoodIcon from '@material-ui/icons/Mood';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

import Header from '../components/AnimePage/Header'
import SEO from '../components/Seo'
import SittingSvg from '../components/SVG/Sitting'

import SteamGame from '../components/Cards/SteamGame'

const IndexPage = props => {
    useEffect(() => {
        cubeAnime()
    }, [])
    return (
        <Box>
            <SEO title='Home' />
            <Header image={'https://images2.alphacoders.com/748/thumb-1920-748309.png'} title='Jojinime.'
                desc='Next Generation Anime Streaming Platform.' blur={3} social />
            <div className='skew-divider' />

            <Container style={{ marginBottom: '2em' }}>
                <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h5'>
                            Okaerinasai Senpai!
                        </Typography>
                        <Typography variant='h5'>
                            おかえりなさい せんぱい!
                        </Typography>
                        <Typography variant='h3' style={{ fontWeight: 'bold' }}>
                            Daftar dan Login Sekarang!
                        </Typography>
                        <Typography variant='body1' color='textSecondary'>
                            Login untuk menggunakan fitur - fitur lain seperti anime favorit, warna tema, dan lain - lain.
                        </Typography>
                        <Button color='primary' variant='contained' startIcon={<SubdirectoryArrowRightIcon />}
                            onClick={() => navigateTo('/login')} style={{ margin: '0.5em 0em', padding: '0.5em 3em' }}>Login</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SittingSvg />
                    </Grid>
                </Grid>
            </Container>

            <Container style={{ marginBottom: '4em' }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                        Trending Now
                    </Typography>
                    <Typography variant='body1' color='textSecondary' style={{ marginLeft: "auto" }}>
                        View All
                    </Typography>
                </Box>
                <Paper style={{ padding: '0 1em', margin: '2em 0' }}>
                    <Grid container spacing={3}>
                        {[1, 2, 3, 4, 5, 6].map(item => (
                            <Grid item xs={6} sm={4} md={2}>
                                <SteamGame />
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>

            <Container style={{ marginBottom: '4em' }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                        Popular This Season
                    </Typography>
                    <Typography variant='body1' color='textSecondary' style={{ marginLeft: "auto" }}>
                        View All
                    </Typography>
                </Box>
                <Paper style={{ padding: '0 1em', margin: '2em 0' }}>
                    <Grid container spacing={3}>
                        {[1, 2, 3, 4, 5, 6].map(item => (
                            <Grid item xs={6} sm={4} md={2}>
                                <SteamGame />
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>

            <Container style={{ marginBottom: '5em' }}>
                <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} md={7} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='h4' className="title">ストリーム.</Typography>
                        {/* <Typography variant='h6' className='title'>Sutorīmu</Typography> */}
                        <div className="svg-cont">
                            <svg className='cube-svg' viewBox="0 0 615.23 443.15">
                                <g id="shadow">
                                    <polygon id="shadow-2" data-name="shadow" className="cls-1"
                                        points="307.15 80.38 614.19 266.7 307.05 443.15 0 256.83 307.15 80.38" />
                                </g>
                                <g id="platform-cont">
                                    <g id="platform">
                                        <polygon className="cls-2"
                                            points="308.08 362.76 307.09 403.11 0.05 216.79 1.04 176.45 308.08 362.76" />
                                        <polygon className="cls-3"
                                            points="615.23 186.32 614.24 226.66 307.09 403.11 308.08 362.76 615.23 186.32" />
                                        <polygon className="cls-4" points="308.19 0 615.23 186.32 308.08 362.76 1.04 176.45 308.19 0" />
                                    </g>
                                    <polygon id="Square" className="cls-5"
                                        points="307.13 56.82 517.99 184.77 307.06 305.94 96.2 178 307.13 56.82" />
                                    <polygon id="Triangle" className="cls-6"
                                        points="307.13 56.82 517.99 184.77 195.2 238.07 195.2 238.07 307.13 56.82" />
                                    <polygon id="Pause-right" className="cls-7"
                                        points="307.13 56.82 517.99 184.77 448.15 224.89 237.29 96.94 307.13 56.82" />
                                    <polygon id="Pause-left" className="cls-7"
                                        points="166.04 137.87 376.9 265.82 307.06 305.94 96.2 178 166.04 137.87" />
                                    <polygon id="Line-left" className="cls-7"
                                        points="96.2 178 307.06 305.94 307.06 305.94 96.2 178 96.2 178" />
                                    <polygon id="Next-right" className="cls-8"
                                        points="307.13 56.82 517.99 184.77 227.65 216.51 227.65 216.51 307.13 56.82" />
                                    <polygon id="Next-left" className="cls-8"
                                        points="131.12 157.93 341.98 285.88 307.06 305.94 96.2 178 131.12 157.93" />
                                </g>
                            </svg>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant='h3' style={{ fontWeight: 'bold' }}>Dah Nonton Berapa Season Hari Ini?</Typography>
                        <Typography variant='body1' color='textSecondary'>Yuk nonton terus di jojinime, streaming tanpa buffer dengan server google cloud platform.</Typography>
                        <Button color='primary' variant='contained' startIcon={<SubdirectoryArrowRightIcon />} style={{ margin: '0.5em 0em', padding: '0.5em 3em' }}>Anime List</Button>
                    </Grid>
                </Grid>
            </Container>

            <Container style={{ marginBottom: '2em' }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                        Latest Updated Streaming Anime
                    </Typography>
                    <Typography variant='body1' color='textSecondary' style={{ marginLeft: "auto" }}>
                        View All
                    </Typography>
                </Box>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
                    <Box style={{ margin: '1em 0' }}>
                        <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={12} sm={1}>
                                <Typography variant='h3' style={{ fontWeight: 'bold' }} color='textSecondary'>
                                    #{index}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Paper style={{ padding: '1em' }}>
                                    <Grid container spacing={1} style={{ display: 'flex', alignItems: 'center' }}>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant='h6'>
                                                Tensei Shitara Slime Datta Ken
                                        </Typography>
                                            {[1, 2, 3, 4, 5].map(item => (
                                                <Chip label="Basic" variant="outlined" style={{ margin: '0.5em 0.5em 0 0' }} />
                                            ))}
                                        </Grid>
                                        <Grid item xs={4} md={2}>
                                            <Typography variant='subtitle2'>
                                                Score
                                        </Typography>
                                            <Box style={{ display: 'flex', alignItems: 'center' }}>
                                                <MoodIcon style={{ color: 'green', fontSize: '40px' }} />
                                                <Typography variant='h6' style={{ marginLeft: '.5em' }}>
                                                    7.5
                                            </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={4} md={2}>
                                            <Typography variant='h6'>
                                                TV
                                        </Typography>
                                            <Typography variant='subtitle2' color='textSecondary'>
                                                24 Episodes
                                        </Typography>
                                        </Grid>
                                        <Grid item xs={4} md={2}>
                                            <Typography variant='h6'>
                                                Spring 2020
                                        </Typography>
                                            <Typography variant='subtitle2' color='textSecondary'>
                                                Finished
                                        </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Container>

        </Box>
    )
}

export default IndexPage

var cubeAnime = () => {
    const timeline_plat = anime.timeline({
        loop: true
    });

    timeline_plat
        .add({
            targets: ["#platform-cont", ".title"],
            translateY: 40,
            easing: "easeInExpo",
            duration: 1980,
            delay: (el, i) => 10 + 10 * i
        })
        .add({
            duration: 1980,
            targets: ["#platform-cont", ".title"],
            translateY: 0,
            easing: "easeOutExpo",
            delay: (el, i) => 10 + 10 * i
        });

    // Wrap every letter in a span
    var textWrapper = document.querySelector(".title");
    textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span className='letter'>$&</span>"
    );

    const timeline = anime.timeline({
        loop: true
    });

    timeline
        .add({
            targets: ".title .letter",
            translateX: [0, -40],
            translateZ: 0,
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1320,
            delay: (el, i) => 360 + 20 * i,
            scale: [1, 0.2]
        })
        .add({
            targets: ".title .letter",
            translateX: [0, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1520,
            delay: (el, i) => 160 + 20 * i,
            scale: [0.2, 1]
        });

    const timeline_onPlat = anime.timeline({
        loop: true,
        easing: "easeInExpo"
    });

    const square = "307.13 56.82 517.99 184.77 307.06 305.94 96.2 178 307.13 56.82";
    const triangle =
        "307.13 56.82 517.99 184.77 195.2 238.07 195.2 238.07 307.13 56.82";
    const pause_right =
        "307.13 56.82 517.99 184.77 448.15 224.89 237.29 96.94 307.13 56.82";
    const pause_left =
        "165.77 138.03 376.63 265.98 307.06 305.94 96.2 178 165.77 138.03";
    const next_right =
        "307.13 56.82 517.99 184.77 227.65 216.51 227.65 216.51 307.13 56.82";
    const next_left =
        "131.12 157.93 341.98 285.88 307.06 305.94 96.2 178 131.12 157.93";

    timeline_onPlat
        .add({
            targets: "#Square",
            points: [
                { value: triangle },
                { value: pause_right },
                { value: next_right },
                { value: square }
            ],
            duration: 4000
        })
        .add(
            {
                targets: "#Line-left",
                points: [{ value: pause_left }, { value: next_left }, { value: square }],
                duration: 3000
            },
            "-=3000"
        );

}