import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Character from '../AnimePage/Characters'

const CharactersSection = props => {
    const { characters } = props
    return (
        <section id='characters'>
            <div className='skew-divider-secondary' style={{ marginTop: '2em' }} />
            <Paper elevation={0} style={{ marginBottom: '.3em', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                <Grid container spacing={1}>
                    <Grid item xs={11}>
                        <Container style={{ overflow: 'hidden', paddingBottom: '7em' }}>
                            <Character characters={characters} />
                        </Container>
                    </Grid>
                    <Grid item xs={1} style={{ display: 'flex', alignItems: 'center' }}>
                        <Parallax y={[-20, 20]} tagOuter="div">
                            <Typography variant="h1">
                                {'CHARA'.split('').map((item, index) => (
                                    <div key={item + index}>{item}</div>
                                ))}
                            </Typography>
                        </Parallax>
                    </Grid>
                </Grid>
            </Paper>
        </section>
    )
}

export default CharactersSection