import React from 'react'
import { navigateTo } from 'gatsby'

import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Chip from '@material-ui/core/Chip'
import Skeleton from '@material-ui/lab/Skeleton'
import Box from '@material-ui/core/Box'

import Countdown from 'react-countdown';

import MoodIcon from '@material-ui/icons/Mood';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const ListCard = ({ anime }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return (
        <Box>
            <Button color='default' style={{ textAlign: 'start' }} startIcon={<ChevronRightIcon />} onClick={() => navigateTo(`/anime-page?id=${anime?.id}`)}
                onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                <Typography variant='inherit'>
                    {anime?.title.romaji}
                </Typography>
            </Button>
            <Popper open={open} anchorEl={anchorEl} placement={'right-start'} style={{ zIndex: 99 }} transition
                modifiers={{
                    flip: {
                        enabled: true,
                    },
                    preventOverflow: {
                        enabled: true,
                        boundariesElement: 'scrollParent',
                    },
                }}>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <div style={{ display: 'flex' }}>
                            <ArrowLeftIcon style={{ fontSize: '4em', marginRight: '-0.45em', color: anime?.coverImage.color }} />
                            <Paper style={{ padding: '2em', maxWidth: '300px' }} elevation={6}>
                                {anime ? <Typography variant='h6' style={{ color: anime?.coverImage.color, textOverflow: 'ellipsis' }} noWrap>
                                    {anime.title.romaji}
                                </Typography> : <Skeleton variant='text' width='200px' style={{ marginRight: '1em' }} />}
                                <div style={{ display: 'flex' }}>
                                    {anime ?
                                        <Typography variant='h6' style={{ marginRight: '1em' }}>
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
                                        </Typography>
                                        : <Skeleton variant='text' width='200px' style={{ marginRight: '1em' }} />
                                    }
                                    <div style={{ margin: '0 1em', display: 'flex', alignItems: 'center', marginLeft: "auto" }}>
                                        {anime?.meanScore / 10 >= 8 ? <MoodIcon style={{ color: 'green' }} /> :
                                            anime?.meanScore / 10 >= 7 ? <SentimentDissatisfiedIcon style={{ color: 'yellow' }} /> :
                                                <SentimentVeryDissatisfiedIcon style={{ color: 'red' }} />}
                                        {anime?.meanScore && <Typography variant='h6' style={{ textAlign: 'center', marginLeft: '0.2em' }}>
                                            {anime?.meanScore / 10}
                                        </Typography>}
                                    </div>
                                </div>
                                <Typography variant='body1' style={{ fontWeight: 'bold', marginTop: '0.5em', color: anime?.coverImage.color }}>
                                    {anime?.studios.edges.filter(node => node?.node.isAnimationStudio)[0]?.node.name}
                                </Typography>
                                {anime && <Typography variant='body2' style={{ marginBottom: '0.5em' }}>
                                    {anime?.format}  •  {anime?.episodes ? `${anime?.episodes} episodes` : ''}
                                </Typography>}
                                {!anime && <Box style={{ display: 'flex' }}>
                                    <Skeleton variant='text' style={{ marginRight: '1em' }} width='50px' /> •
                                    <Skeleton variant='text' style={{ marginLeft: '1em' }} width='50px' />
                                </Box>}
                                <div>
                                    {anime?.genres?.map(genre => (
                                        <Chip label={genre} key={genre} style={{ margin: '0.5em 0.5em 0 0', backgroundColor: anime?.coverImage.color, color: 'white' }} />
                                    ))}
                                </div>
                            </Paper>
                        </div>
                    </Fade>
                )}
            </Popper>
        </Box>
    )
}

export default ListCard