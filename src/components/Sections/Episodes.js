import React from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

const Episodes = ({ anime }) => {
    const classes = useStyles();

    return (
        <section id='episodes'>
            <Paper elevation={0} style={{ display: 'flex', alignItems: 'center', paddingTop: '10px', paddingBottom: '100px' }}>
                <Box className={classes.root}>
                    <GridList className={classes.gridList} cols={4}>
                        {anime?.streamingEpisodes?.map((eps) => (
                            <GridListTile key={eps.title}>
                                <img src={eps.thumbnail} alt={eps.title} />
                                <GridListTileBar
                                    title={eps.title}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                    <Container>
                        <Typography variant='h4' gutterBottom style={{ marginTop: '1em', fontWeight: 'bold' }}>
                            Streaming is not available for this anime now.
                            </Typography>
                        <Button variant='contained' color='primary'>Streaming Episodes</Button>
                    </Container>
                </Box>
            </Paper>
        </section>
    )
}

export default Episodes

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));