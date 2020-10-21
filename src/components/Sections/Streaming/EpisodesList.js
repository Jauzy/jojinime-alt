import React from 'react'
import Box from '@material-ui/core/Box'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'

import Skeleton from '@material-ui/lab/Skeleton'

const EpisodesList = ({ streamingEpisodes, title, episode, changeEpisode, maxHeight }) => {
    return (
        <Box>
            <Paper elevation={6} style={{ padding: '.5em' }}>
                <GridList cols={1} cellHeight={100} style={{ maxHeight: maxHeight ? maxHeight: '100vh' }}>
                    {streamingEpisodes?.map((eps, idx) => (
                        <GridListTile key={eps.title} style={{ margin: '.2em 0' }}>
                            <img src={eps.thumbnail} alt={eps.title} />
                            <GridListTileBar
                                title={eps.title}
                                subtitle={<span>{title.native}</span>}
                                actionIcon={
                                    <IconButton color={episode === eps.title.split(" ")[1] ? 'primary' : 'default'}
                                        onClick={() => changeEpisode(eps.title.split(" ")[1], idx)}>
                                        <PlayCircleFilledIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                    {!streamingEpisodes && [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => (
                        <GridListTile key={item} style={{ margin: '.2em 0' }}>
                            <Skeleton variant='rect' width='100%' height='200px' />
                        </GridListTile>
                    ))}
                </GridList>
            </Paper>
        </Box>
    )
}

export default EpisodesList