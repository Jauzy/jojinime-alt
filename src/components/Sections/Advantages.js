import React from 'react'
import { navigateTo } from 'gatsby'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

import { Parallax } from 'react-scroll-parallax'

const Advantages = ({ firstRow, secondRow, svg, title1, title2 }) => {
    const SVGIMG = svg
    return (
        <section id='advantages' style={{ margin: '0 5vw', marginBottom: '1em' }}>
            <Grid container spacing={3} style={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h4' color='textSecondary'>
                        {title1}
                    </Typography>
                    <Typography variant='h2' style={{ fontWeight: 'bold', marginBottom: '1em' }}>
                        {title2}
                    </Typography>
                    <Grid container spacing={3}>
                        {firstRow?.map((item, idx) => (
                            <Grid item xs={12} sm={6} key={`${idx} - firstRow`}>
                                <item.icon color='primary' style={{ fontSize: '3em' }} />
                                <Typography gutterBottom variant='h4' style={{ fontWeight: 'bold', marginTop: '.2em' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant='body1' color='textSecondary'>
                                    {item.desc}
                                </Typography>
                            </Grid>
                        ))}
                        {secondRow?.map((item, idx) => (
                            <Grid item xs={12} sm={6} key={`${idx} - secondRow`}>
                                <item.icon color='primary' style={{ fontSize: '3em' }} />
                                <Typography gutterBottom variant='h4' style={{ fontWeight: 'bold', marginTop: '.2em' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant='body1' color='textSecondary'>
                                    {item.desc}
                                </Typography>
                                <Button color='primary' variant='contained' startIcon={<SubdirectoryArrowRightIcon />}
                                    onClick={() => navigateTo(item.url)} style={{ margin: '0.5em 0em', padding: '0.5em 3em' }}>{item.btnLabel}</Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Parallax y={[50, -50]} tagOuter="div">
                        <SVGIMG />
                    </Parallax>
                </Grid>
            </Grid>
        </section>
    )
}

export default Advantages