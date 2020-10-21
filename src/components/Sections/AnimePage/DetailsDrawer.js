import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Container from '@material-ui/core/Container'
import Drawer from '@material-ui/core/Drawer'
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star'
import { makeStyles } from '@material-ui/core/styles'
import yellow from '@material-ui/core/colors/yellow'
import FavouriteIcon from '@material-ui/icons/Favorite'

import StarRatings from 'react-star-ratings';
import YouTube from 'react-youtube'

import RelationCard from '../../Cards/RelationCard'

const DetailsDrawer = ({ details, isDetailsOpen, toggleDetailsDrawer }) => {
    const classes = useStyles()
    const trailerOnReady = (e) => {
        e.target.pauseVideo()
    }

    return (
        <Drawer anchor={'bottom'} open={isDetailsOpen} onClose={toggleDetailsDrawer}>
            <Box style={{ width: '100vw', minHeight: '100vh', overflowX: 'hidden', paddingBottom: '2em' }}>
                <img src={details?.bannerImage} alt='drawer-banner' width='100%' style={{ maxHeight: '400px', objectFit: 'cover' }} />

                <CloseIcon onClick={toggleDetailsDrawer}
                    style={{ position: 'absolute', zIndex: '9', top: '5%', right: '5%', fontSize: '40px', cursor: 'pointer' }} />
                <Container style={{ paddingTop: '2em' }}>

                    {/* header */}
                    <Box>
                        <Typography variant='h2' style={{ fontWeight: 'bold' }}>
                            {details?.title.romaji}
                        </Typography>
                        <Typography variant='h4' style={{ color: details?.coverImage.color }}>{details?.title?.native}</Typography>
                        <Box>
                            {details?.genres?.map(genre => (
                                <Chip label={genre} key={genre} style={{ margin: '0.5em 0.5em 0 0' }} />
                            ))}
                        </Box>
                    </Box>

                    <Grid container spacing={4} style={{ marginTop: '2em' }}>
                        <Grid item xs={12} md={3} style={{ display: 'flex', flexDirection: 'column' }}>

                            {/* side */}
                            <Box>
                                {details?.rankings?.filter(item => item.allTime === true && item.type === 'POPULAR').map(item => (
                                    <Button color='secondary' key={item.context} className={classes.fullWidth} style={{ margin: '0.3em 0' }} variant='contained' startIcon={<FavouriteIcon />}>
                                        #{item.rank} {item.context}
                                    </Button>
                                ))}
                                {details?.rankings?.filter(item => item.allTime === true && item.type === 'RATED').map(item => (
                                    <Button className={classes.fullWidth} key={item.context} style={{ backgroundColor: yellow[500], margin: '0.3em 0' }} variant='contained' startIcon={<StarIcon />}>
                                        #{item.rank} {item.context}
                                    </Button>
                                ))}
                                <Button color='primary' className={classes.fullWidth} style={{ margin: '0.3em 0' }} variant='contained'>Total Episodes: {details?.episodes}</Button>
                                <Button color='default' className={classes.fullWidth} style={{ margin: '0.3em 0' }} variant='contained'>Status: {details?.status}</Button>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={9}>

                            {/* relations */}
                            <Box>
                                <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
                                    <Typography variant='h6' color='primary'>
                                        Relations
                                    </Typography>
                                    <Box style={{ height: '10px', width: '100px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                                </Box>
                                <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    {details?.relations.edges.map((item, index) => (
                                        <RelationCard data={item} style={{ margin: '0.3em', width: '150px' }} key={item.node.title.romaji + index} />
                                    ))}
                                </Box>
                            </Box>

                            {/* synopsis */}
                            <Box>
                                <Grid container style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
                                    <Grid item xs={12} sm={6}>
                                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant='h6' color='primary'>
                                                Synopsis
                                            </Typography>
                                            <Box style={{ height: '10px', width: '100px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                                        </Box>
                                        <Typography variant='h4' className={classes.bold} gutterBottom>
                                            Studio {details?.studios.edges.filter(node => node.node.isAnimationStudio)[0]?.node.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} style={{ display: 'flex' }}>
                                        <Box style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                            <Box>
                                                <StarRatings
                                                    rating={parseFloat(details?.meanScore || 0) / 20}
                                                    starDimension="30px"
                                                    starRatedColor={yellow[500]}
                                                />
                                            </Box>
                                            <Box style={{ margin: '0 1em' }}>
                                                <small>Score</small>
                                                {details?.meanScore && <Typography variant='h5' style={{ textAlign: 'center' }}>{details?.meanScore / 10}</Typography>}
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Typography variant='body1' dangerouslySetInnerHTML={{ __html: details?.description }} style={{ marginBottom: '2em' }} />
                            </Box>

                            {/* trailer */}
                            {details?.trailer && <Box>
                                <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
                                    <Typography variant='h6' color='primary'>
                                        Trailer
                                    </Typography>
                                    <Box style={{ height: '10px', width: '100px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                                </Box>
                                <YouTube videoId={details?.trailer?.id} opts={{ width: '100%' }} className={classes.rounded} onReady={trailerOnReady} />
                            </Box>}

                            {/* external links */}
                            <Box style={{ marginTop: '1em' }}>
                                <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
                                    <Typography variant='h6' color='primary'>
                                        External Links
                                        </Typography>
                                    <Box style={{ height: '10px', width: '100px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                                </Box>
                                <Grid container spacing={1}>
                                    {details?.externalLinks.map((item, index) => (
                                        <Grid key={item.site + index} item xs={12} sm={6} md={4}>
                                            <a href={item.url} style={{ textDecoration: 'unset' }}>
                                                {externalLinksBtn({site: item.site, classes})}
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Drawer>
    )
}

export default DetailsDrawer

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    bold: { fontWeight: 'bold' },
    rounded: { borderRadius: '10px' },
    marginTop: { marginTop: '1em' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    fullWidth: { width: '100%' },
    warningButton: {
        backgroundColor: yellow[500]
    }
}));

const externalLinksBtn = ({site, classes}) => {
    let primary = ['Official Site', 'Twitter']
    let secondary = ['Netflix', 'Youtube']
    let warning = ['Crunchyroll']
    if (primary.includes(site))
        return (
            <Button color='primary' className={classes.fullWidth} variant='contained'>{site}</Button>
        )
    else if (secondary.includes(site))
        return (
            <Button color='secondary' className={classes.fullWidth} variant='contained'>{site}</Button>
        )
    else if (warning.includes(site))
        return (
            <Button classes={{ root: classes.warningButton }} className={classes.fullWidth} variant='contained'>{site}</Button>
        )
    else
        return (
            <Button className={classes.fullWidth} variant='contained'>{site}</Button>
        )
}