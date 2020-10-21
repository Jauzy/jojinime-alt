import React from 'react'
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Chip from '@material-ui/core/Chip'
import Box from '@material-ui/core/Chip'

const RelationCard = props => {
    const { data } = props
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const Card = () => (
        <Box className={'steam-game-container'} >
            <Box className="b-game-card">
                <Box className="b-game-card__cover"
                    style={{ backgroundImage: `url(${data?.node.coverImage?.large})`, borderRadius: '10px' }} />
            </Box>
        </Box>
    )

    return (
        <Box onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} style={props.style}>
            <Card />
            <Popper open={open} anchorEl={anchorEl} placement={'right-start'} style={{ zIndex: 9999 }} transition
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
                        <Box style={{ display: 'flex' }}>
                            <ArrowLeftIcon style={{ fontSize: '4em', marginRight: '-0.45em', color: data?.node.coverImage.color }} />
                            <Paper style={{ padding: '2em' }} elevation={6}>
                                <Typography variant='h6' style={{ fontWeight: 'bold', color: data?.node.coverImage.color }}>
                                    {data?.relationType.replace('_', ' ')}
                                </Typography>
                                <Typography variant='body2' style={{ marginRight: '1em', maxWidth:'300px' }}>
                                    {data?.node.title.romaji}
                                </Typography>
                                <Typography variant='body2' style={{ margin: '0.5em 0' }}>
                                    <strong style={{ color: data?.node.coverImage.color }}>
                                        {data?.node.type}
                                    </strong>  •  {data?.node.format}
                                </Typography>
                                <Box>
                                    {data?.node.genres?.map(genre => (
                                        <Chip label={genre} key={genre} style={{
                                            margin: '0.5em 0.5em 0 0', backgroundColor: data?.node.coverImage.color, color:'white'
                                        }} />
                                    ))}
                                </Box>
                            </Paper>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </Box>
    )
}

export default RelationCard 