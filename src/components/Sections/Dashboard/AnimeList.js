import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

import InfoIcon from '@material-ui/icons/Info';

const AnimeList = ({ animes }) => {
    return (
        <Grid container spacing={1}>
            {animes?.map(anime => (
                <Grid item xs={12} md={6} key={anime.title.romaji}>
                    <Paper style={{ padding: '1em' }}>
                        <Grid container spacing={2} alignItems='center'>
                            <Grid item xs={10} sm={10} style={{marginRight:'auto'}}>
                                <Typography variant='h5' style={{ fontWeight: 'bold', textOverflow: 'ellipsis' }} noWrap>
                                    {anime.title.romaji}
                                </Typography>
                                <Typography variant='subtitle1' color='textSecondary' style={{ fontWeight: 'bold', textOverflow: 'ellipsis' }} noWrap>
                                    {anime.title.native}
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <IconButton color='primary'>
                                    <InfoIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    )
}

export default AnimeList