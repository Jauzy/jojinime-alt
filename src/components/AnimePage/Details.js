import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import yellow from '@material-ui/core/colors/yellow'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'

import StarIcon from '@material-ui/icons/Star'
import PlaylistIcon from '@material-ui/icons/PlaylistAdd'
import FavouriteIcon from '@material-ui/icons/Favorite'
import ArrowForward from '@material-ui/icons/ArrowForward'

import SteamGame from '../Cards/SteamGame'
import DetailsDrawer from './DetailsDrawer'

const Details = props => {
    const { details } = props
    const [state, setState] = useState({
        isDetailsOpen: false
    })
    const classes = useStyles()

    const toggleDetailsDrawer = () => setState({ ...state, isDetailsOpen: false })

    return (
        <Box>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={5} md={3} className={classes.flexColumn}>
                    <Grid container spacing={0}>
                        <Grid item xs={6} sm={12}>
                            <SteamGame anime={details} noLink={true} noLabel={true} />
                        </Grid>
                        <Grid item xs={6} sm={12} style={{ display: 'flex', flexDirection: 'column' }}>
                            <Grid container spacing={1} className={classes.marginTop}>
                                <Grid item xs={12} sm={9}>
                                    <Button color='primary' className={classes.fullWidth} variant='contained' startIcon={<PlaylistIcon />}>Watch List</Button>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Button color='secondary' className={classes.fullWidth} variant='contained'><FavouriteIcon /></Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={7} md={9} style={{ display: 'flex', flexDirection: 'column', zIndex: 1 }}>
                    <Box style={{ margin: 'auto 0', width: '100%' }}>

                        {/* header title */}
                        <Box>
                            <Typography variant='h3'><strong>{details?.title?.romaji}</strong></Typography>
                            {!details && <Skeleton variant='text' height='50px' />}
                            <Typography variant='h5' style={{ color: details?.coverImage.color }}>{details?.title?.native}</Typography>
                            {!details && <Skeleton variant='text' height='40px' width='300px' />}
                            {!details && <Box style={{ display: 'flex' }}>
                                {[1, 2, 3].map(item => (
                                    <Skeleton variant='rect' width='100px' height='30px' style={{ margin: '0.5em 0.5em 0 0' }} key={item + 'skeleton'} />
                                ))}
                            </Box>
                            }
                            <Box>
                                {details?.genres?.map(genre => (
                                    <Chip label={genre} key={genre} style={{ margin: '0.5em 0.5em 0 0' }} />
                                ))}
                            </Box>
                        </Box>

                        {!details && <Box style={{ display: 'flex', maxWidth: '600px', marginTop: '1em' }}>
                            {[1, 2].map(item => (
                                <Skeleton variant='rect' width='50%' height='30px' style={{ margin: '0.5em 0.5em 0 0' }} key={item + 'skeleton'} />
                            ))}
                        </Box>
                        }
                        {/* buttons */}
                        <Box>
                            <Grid container spacing={1} className={classes.marginTop} style={{ maxWidth: '600px' }}>
                                <Grid item sm={12} md={6} className={classes.fullWidth}>
                                    {details?.rankings?.filter(item => item.allTime === true && item.type === 'POPULAR').map(item => (
                                        <Button color='secondary' key={item.context} className={classes.fullWidth} variant='contained' startIcon={<FavouriteIcon />}>
                                            #{item.rank} {item.context}
                                        </Button>
                                    ))}
                                </Grid>
                                <Grid item sm={12} md={6} className={classes.fullWidth}>
                                    {details?.rankings?.filter(item => item.allTime === true && item.type === 'RATED').map(item => (
                                        <Button className={classes.fullWidth} key={item.context} style={{ backgroundColor: yellow[500] }} variant='contained' startIcon={<StarIcon />}>
                                            #{item.rank} {item.context}
                                        </Button>
                                    ))}
                                </Grid>
                            </Grid>
                            <Button color='primary' endIcon={<ArrowForward />}
                                style={{ marginTop: '0.5em' }} variant='contained'
                                onClick={() => setState({ ...state, isDetailsOpen: true })}>
                                Show Full Details
                            </Button>
                        </Box>

                    </Box>
                </Grid>
            </Grid>

            {/* detail drawer */}
            <DetailsDrawer details={details} isDetailsOpen={state.isDetailsOpen} toggleDetailsDrawer={toggleDetailsDrawer} />
        </Box>
    )
}

export default Details

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    bold: { fontWeight: 'bold' },
    rounded: { borderRadius: '10px' },
    marginTop: { marginTop: '1em' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    fullWidth: { width: '100%' },
}));