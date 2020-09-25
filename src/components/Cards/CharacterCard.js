import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'

const CharacterCard = ({ character }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Box onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            <Card style={{ display: 'flex', maxHeight: '80px', border: '2px solid grey' }} elevation={3}>
                {
                    character ? <img style={{ marginRight: 'auto', height: '80px', width: '60px', objectFit: 'cover' }}
                        src={character?.node.image.medium} alt={character?.node.name.full} /> : <Skeleton variant='rect' width='60px' height='80px' />
                }
                <Box style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '0.5em' }}>
                    <Box style={{ marginBottom: 'auto', display: 'flex' }}>
                        <Typography variant="body1">
                            {character?.node.name.full}
                        </Typography>
                        {!character && <Skeleton variant='text' width='100px' />}
                        <Typography variant="body1" style={{ marginLeft: 'auto', textAlign: 'end' }}>
                            {character?.voiceActors[0].name.full}
                        </Typography>
                        {!character && <Skeleton variant='text' width='100px' style={{ marginLeft: 'auto', textAlign: 'end'}} />}
                    </Box>
                    <Box style={{ marginTop: 'auto', display: 'flex' }}>
                        <Typography variant="body2" color="textSecondary">
                            {character?.role}
                        </Typography>
                        {!character && <Skeleton variant='text' width='60px' />}
                        <Typography variant="body2" color="textSecondary" style={{ marginLeft: 'auto', textAlign: 'end' }}>
                            {character?.voiceActors[0].language}
                        </Typography>
                        {!character && <Skeleton variant='text' width='60px' style={{ marginLeft: 'auto', textAlign: 'end'}} />}
                    </Box>
                </Box>
                {
                    character ? <img style={{ marginLeft: 'auto', height: '80px', width: '60px', objectFit: 'cover' }}
                        src={character?.voiceActors[0].image.medium} alt={character?.voiceActors[0].name.full} /> : <Skeleton variant='rect' width='60px' height='80px' />
                }
            </Card>
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
                        <div style={{ display: 'flex' }}>
                            <ArrowLeftIcon style={{ fontSize: '4em', marginRight: '-0.45em' }} color='primary' />
                            <Paper style={{ padding: '2em', maxWidth: '400px' }} elevation={6}>
                                <Grid container spacing={2}>
                                    {/* <Grid item xs={4}>
                                        <img width='100%' src={character?.node.image.medium} style={{ borderRadius: '10px' }} alt={character?.node.name.full} />
                                    </Grid> */}
                                    <Grid item xs>
                                        <Typography variant='h6'>
                                            {character?.node.name.full}
                                        </Typography>
                                        <Typography variant='body1' dangerouslySetInnerHTML={{ __html: character?.node.description }}
                                            style={{ marginBottom: '2em', marginTop: '1em' }} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                    </Fade>
                )}
            </Popper>
        </Box>
    )
}

export default CharacterCard