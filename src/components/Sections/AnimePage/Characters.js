import React, { useRef, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Slider from 'react-slick'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden';
import Skeleton from '@material-ui/lab/Skeleton'

import ArrowForward from '@material-ui/icons/ArrowForward'
import CloseIcon from '@material-ui/icons/Close';

import CharacterCard from '../../Cards/CharacterCard'
import Stepper from './Stepper'

const Characters = props => {
    const { characters, charaImage } = props
    const [activeStep, setActiveStep] = useState(0);
    const [state, setState] = useState({
        isDrawerOpen: false
    })
    const [active, setActive] = useState(null)
    let ref = useRef(null)
    const classes = useStyles()

    useEffect(() => {
        if (ref && ref.current)
            ref.current.slickGoTo(activeStep)
        if (charaImage && charaImage?.length > 0) {
            setActive(characters?.edges.filter(item => item.node.id === parseInt(charaImage[activeStep].id))[0])
        }
    }, [activeStep, characters, charaImage])

    return (
        <Box>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>

                {(charaImage && charaImage?.length > 0) && <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        {charaImage ?
                            <Slider {...settings} ref={ref}>
                                {charaImage.map(item => (
                                    <img src={item.url} alt='character' key={item} width='100%' style={{ margin: 'auto' }} />
                                ))}
                            </Slider> :
                            <Skeleton variant='rect' width='100%' height='100%' style={{ minHeight: '300px' }} />
                        }
                    </Grid>
                    <Grid item xs={12} sm={8} className={classes.grid}>
                        <Box className={classes.gridChild}>
                            <Box>
                                <Typography variant='h4'>
                                    {active?.node.name.full}
                                </Typography>
                                {!characters && <Skeleton variant='text' width='200px' height='50px' style={{ margin: 'auto' }} />}
                                <Typography variant='h4'>
                                    {active?.node.name.native}
                                </Typography>
                                {!characters && <Skeleton variant='text' width='300px' height='50px' style={{ margin: 'auto' }} />}
                                {characters ?
                                    <Stepper activeStep={activeStep} setActiveStep={setActiveStep} steps={charaImage} characters={characters?.edges} />
                                    : <Skeleton variant='rect' style={{ margin: '1em 0' }} />
                                }
                                <Typography variant='body1' style={{ textAlign: 'justify' }}
                                    dangerouslySetInnerHTML={{ __html: active?.node.description }} >
                                </Typography>
                                {!characters && <Skeleton variant='text' width='100px' />}
                                {!characters && <Skeleton variant='text' width='200px' style={{ marginBottom: '1em' }} />}
                                {!characters && <Skeleton variant='text' width='100%' />}
                                {!characters && <Skeleton variant='text' width='100%' />}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>}

                {(charaImage && charaImage?.length > 0) ? <Grid container spacing={3} style={{ margin: '1em 0' }}>

                    {/* chara list */}
                    <Hidden xsDown>
                        <Grid item xs>
                            <CharacterCard character={characters?.edges[0]} />
                        </Grid>
                    </Hidden>
                    <Hidden smDown>
                        <Grid item xs>
                            <CharacterCard character={characters?.edges[1]} />
                        </Grid>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item xs>
                            <CharacterCard character={characters?.edges[2]} />
                        </Grid>
                    </Hidden>

                </Grid>
                    :
                    <Grid container spacing={3} style={{ marginTop: '2em' }}>
                        {characters?.edges.map((node, index) => (
                            <Grid item xs={12} sm={6} md={4} key={node.node.name.full}>
                                <CharacterCard character={node} />
                            </Grid>
                        ))}
                    </Grid>}

                {(charaImage && charaImage?.length > 0) && <Button style={{ marginLeft: 'auto' }} onClick={() => setState({ ...state, isDrawerOpen: true })}
                    endIcon={<ArrowForward />} variant='contained' color='primary'>See All Characters</Button>}
            </Box>

            {/* chara drawer */}
            <Drawer anchor={'bottom'} open={state.isDrawerOpen} onClose={() => setState({ ...state, isDrawerOpen: false })}>
                <Box style={{ width: '100vw', minHeight: '100vh', overflowX: 'hidden', paddingBottom: '2em' }}>
                    <CloseIcon onClick={() => setState({ ...state, isDrawerOpen: false })}
                        style={{ position: 'absolute', zIndex: '9', top: '5%', right: '5%', fontSize: '40px', cursor: 'pointer' }} />
                    <Container style={{ paddingTop: '2em', paddingBottom: '2em' }}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h2' color='primary'>
                                Characters
                            </Typography>
                            <Box style={{ width: '100%', height: '10px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                        </Box>
                        <Grid container spacing={3} style={{ marginTop: '2em' }}>
                            {characters?.edges.map((node, index) => (
                                <Grid item xs={12} sm={6} md={4} key={node.node.name.full}>
                                    <CharacterCard character={node} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Drawer>

        </Box>
    )
}

export default Characters

const settings = {
    draggable: false,
    fade: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

//tatenoyuusha
// const chara = [
//     {url: 'http://shieldhero-anime.jp/en/assets/img/chara/chara_0.png', id: 88817 },
//     {url: 'http://shieldhero-anime.jp/en/assets/img/chara/chara_1.png', id: 88889 },
//     {url: 'http://shieldhero-anime.jp/en/assets/img/chara/chara_6.png', id: 126828 },
//     {url: 'http://shieldhero-anime.jp/en/assets/img/chara/chara_7.png', id: 129813 },
// ]

//konosuba
// const chara = [
//     { url: 'http://konosuba.com/character/img/chara1.png', id: 89364 },
//     { url: 'http://konosuba.com/character/img/chara2.png', id: 89362 },
//     { url: 'http://konosuba.com/character/img/chara3.png', id: 89361 },
//     { url: 'http://konosuba.com/character/img/chara4.png', id: 89363 },
// ]

//tensei shitara slime
const chara = [
    { url: 'https://www.ten-sura.com/4GfGdAp7/wp-content/themes/tensura_portal/assets/images/character/rimuru/character-image.png', id: 123962 },
    { url: 'https://www.ten-sura.com/4GfGdAp7/wp-content/themes/tensura_portal/assets/images/character/benimaru/character-image.png', id: 128038 },
    { url: 'https://www.ten-sura.com/4GfGdAp7/wp-content/themes/tensura_portal/assets/images/character/shuna/character-image.png', id: 128040 },
    { url: 'https://www.ten-sura.com/4GfGdAp7/wp-content/themes/tensura_portal/assets/images/character/shion/character-image.png', id: 128033 }
]

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    grid: {
        display: 'flex', textAlign: 'center'
    },
    gridChild: {
        margin: 'auto', width: '100%'
    }
}));