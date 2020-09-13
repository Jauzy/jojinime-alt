import React, { useRef, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Slider from 'react-slick'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ArrowForward from '@material-ui/icons/ArrowForward'

import Stepper from './Stepper'

const Characters = props => {
    const { characters } = props
    const [activeStep, setActiveStep] = useState(0);
    const [active, setActive] = useState(null)
    let ref = useRef(null)
    const classes = useStyles()

    useEffect(() => {
        if (ref)
            ref.current.slickGoTo(activeStep)
        setActive(characters?.edges.filter(item => item.node.id === chara[activeStep].id)[0])
    }, [activeStep, characters])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Slider {...settings} ref={ref}>
                        {chara.map(item => (
                            <img src={item.url} alt='character' key={item} width='100%' style={{ margin: 'auto' }} />
                        ))}
                    </Slider>
                </Grid>
                <Grid item xs={12} sm={8} className={classes.grid}>
                    <div className={classes.gridChild}>
                        <div>
                            <Typography variant='h4'>
                                {active?.node.name.full}
                            </Typography>
                            <Typography variant='h4'>
                                {active?.node.name.native}
                            </Typography>
                            <Stepper activeStep={activeStep} setActiveStep={setActiveStep} steps={chara} characters={characters?.edges} />
                            <Typography variant='body1' style={{ textAlign: 'justify' }}
                                dangerouslySetInnerHTML={{ __html: active?.node.description }} >
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Button style={{ marginLeft: 'auto' }} endIcon={<ArrowForward/>} variant='contained' color='primary'>See All Characters</Button>
        </div>
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
const chara = [
    { url: 'http://shieldhero-anime.jp/en/assets/img/chara/chara_0.png', id: 88817 },
    { url: 'http://shieldhero-anime.jp/en/assets/img/chara/chara_1.png', id: 88889 },
    { url: 'http://shieldhero-anime.jp/en/assets/img/chara/chara_6.png', id: 126828 },
    { url: 'http://shieldhero-anime.jp/en/assets/img/chara/chara_7.png', id: 129813 },
]

//konosuba
// const chara = [
//     { url: 'http://konosuba.com/character/img/chara1.png', id: 89364 },
//     { url: 'http://konosuba.com/character/img/chara2.png', id: 89362 },
//     { url: 'http://konosuba.com/character/img/chara3.png', id: 89361 },
//     { url: 'http://konosuba.com/character/img/chara4.png', id: 89363 },
// ]

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    grid: {
        display: 'flex', textAlign: 'center'
    },
    gridChild: {
        margin: 'auto'
    }
}));