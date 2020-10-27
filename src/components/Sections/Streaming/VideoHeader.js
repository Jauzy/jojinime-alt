import React from 'react'
import Countdown from 'react-countdown';

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import Skeleton from '@material-ui/lab/Skeleton'

const VideoHeader = ({ anime }) => {

    const isMobile = () => {
        if (typeof window !== 'undefined')
            return window?.innerWidth <= 700 ? true : false
    }

    return (
        <Box>
            <Box style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                {!anime && <Skeleton variant='text' style={{ maxWidth: '800px', height: '2em', marginRight: 'auto' }} />}
                {!anime && <Skeleton variant='text' style={{ maxWidth: '500px' }} />}
                <Typography variant='h3' style={{ fontWeight: 'bold', marginRight: 'auto' }}>
                    {anime?.title.romaji}
                </Typography>
                <Typography variant='h4' color='textSecondary'>
                    {anime?.title.native}
                </Typography>
            </Box>
            <Box style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                {anime && <Typography variant='subtitle1' color='textSecondary' style={{ marginRight: 'auto' }}>
                    {!anime?.nextAiringEpisode ? `${anime?.season} ${anime?.seasonYear}` :
                        <Countdown
                            date={Date.now() + anime?.nextAiringEpisode.timeUntilAiring * 1000}
                            renderer={(props) => {
                                if (props.days >= 1) {
                                    return (
                                        `Episode ${anime?.nextAiringEpisode.episode} airing in ${props.days} days`
                                    )
                                } else if (props.hours >= 1)
                                    return (
                                        `Episode ${anime?.nextAiringEpisode.episode} airing in ${props.hours} hours`
                                    )
                                else {
                                    return (
                                        `Episode ${anime?.nextAiringEpisode.episode} airing in ${props.minutes} minutes`
                                    )
                                }
                            }}
                        />
                    }
                    {` • ${anime?.episodes} Episodes`}
                </Typography>}
                {!anime && <Skeleton variant='text' style={{ maxWidth: '300px', width: '100%', marginRight: 'auto' }} />}
                {isMobile() && <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width:'100%' }}>
                    <Box style={{ margin: '0 .5em' }}>
                        <IconButton color='primary'>
                            <ThumbUpAltIcon />
                        </IconButton>
                        0
                    </Box>
                    <Box style={{ margin: '0 .5em' }}>
                        <IconButton color='secondary'>
                            <ThumbDownIcon />
                        </IconButton>
                        0
                    </Box>
                    <Box style={{ margin: '0 .5em' }}>
                        <IconButton color='default'>
                            <ShareIcon />
                        </IconButton>
                    </Box>
                    <Box style={{ margin: '0 .5em' }}>
                        <IconButton color='default'>
                            <PlaylistAddIcon />
                        </IconButton>
                    </Box>
                </Box>}
                {!isMobile() && <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Box style={{ margin: '0 .5em' }}>
                        <IconButton color='primary'>
                            <ThumbUpAltIcon />
                        </IconButton>
                        0 Likes
                    </Box>
                    <Box style={{ margin: '0 .5em' }}>
                        <IconButton color='secondary'>
                            <ThumbDownIcon />
                        </IconButton>
                        0 Dislikes
                    </Box>
                    <Button startIcon={<ShareIcon />} style={{ margin: '0 .5em' }}>
                        Bagikan
                    </Button>
                    <Button startIcon={<PlaylistAddIcon />} style={{ margin: '0 .5em' }}>
                        Simpan
                    </Button>
                </Box>}
            </Box>
        </Box>
    )
}

export default VideoHeader