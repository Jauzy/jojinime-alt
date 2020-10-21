import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Header from './AnimePage/Header'
import Details from './AnimePage/Details'

const DetailsSection = props => {
    const { anime } = props
    return (
        <section id='details'>
            <Header image={'https://images6.alphacoders.com/100/thumb-1920-1000479.jpg'} />
            <div className='skew-divider' />
            <Container style={{ marginTop: '-15em' }}>
                <Details details={anime} />
                <Parallax y={[10, 50]} tagOuter="div">
                    <Typography variant='h1' className='text-secondary' style={{ textAlign: 'right' }}>
                        <strong>DETAILS</strong>
                    </Typography>
                </Parallax>
            </Container>
        </section>
    )
}

export default DetailsSection