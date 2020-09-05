import React from 'react'
import StarRatings from 'react-star-ratings';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import yellow from '@material-ui/core/colors/yellow'
import { makeStyles } from '@material-ui/core/styles'

import StarIcon from '@material-ui/icons/Star'
import PlaylistIcon from '@material-ui/icons/PlaylistAdd'
import FavouriteIcon from '@material-ui/icons/Favorite'
import SteamGame from '../Cards/SteamGame'

const Details = props => {
    const { details } = props
    const classes = useStyles()

    return (
        <Grid container spacing={6}>
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
            <Grid item xs={12} sm={7} md={9} style={{ display: 'flex', zIndex: 999 }}>
                <div style={{ margin: 'auto 0', width: '100%' }}>
                    <Typography variant='h3'><strong>{details.title?.romaji}</strong></Typography>
                    <Typography variant='h5'>{details.title?.native}</Typography>
                    <div style={{ display: 'flex', margin: '.5em 0', alignItems: 'center' }}>
                        <div>
                            <StarRatings
                                rating={parseFloat(details.meanScore || 0) / 20}
                                starDimension="30px"
                                starRatedColor={yellow[500]}
                            />
                        </div>
                        <div style={{ margin: '0 1em' }}>
                            <small>Score</small>
                            <Typography variant='h5' style={{ textAlign: 'center' }}>{details.meanScore / 10}</Typography>
                        </div>
                    </div>
                    <div>
                        {details.genres?.map(genre => (
                            <Chip label={genre} key={genre} style={{ margin: '0.5em 0.5em 0 0' }} />
                        ))}
                    </div>
                    <Grid container spacing={1} className={classes.marginTop}>
                        <Grid item sm={12} md={6} className={classes.fullWidth}>
                            {details.rankings?.filter(item => item.allTime === true && item.type == 'POPULAR').map(item => (
                                <Button color='secondary' className={classes.fullWidth} variant='contained' startIcon={<FavouriteIcon />}>
                                    #{item.rank} {item.context}
                                </Button>
                            ))}
                        </Grid>
                        <Grid item sm={12} md={6} className={classes.fullWidth}>
                            {details.rankings?.filter(item => item.allTime === true && item.type == 'RATED').map(item => (
                                <Button className={classes.fullWidth} style={{ backgroundColor: yellow[500] }} variant='contained' startIcon={<StarIcon />}>
                                    #{item.rank} {item.context}
                                </Button>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
}

export default Details

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    marginTop: { marginTop: '1em' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    fullWidth: { width: '100%' },
}));