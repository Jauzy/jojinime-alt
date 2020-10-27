import React from 'react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';

import CommentCard from './CommentCard'

const PostCard = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isMobile = (msg) => {
        if(typeof window !== 'undefined') 
            return window?.innerWidth > 700 ? msg : ""
    }

    return (
        <Paper style={{ margin: '1em 0', padding: '1em' }}>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Box style={{ marginTop: '.5em', display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
                    <Avatar alt='Weeb Developer' src='asd' style={{ marginRight: '.8em', width: '2.5em', height: '2.5em' }} />
                    <Box style={{ width: '100%' }}>
                        <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
                            Weeb Developer
                        </Typography>
                        <Typography variant='subtitle2' color='textSecondary'>
                            @al.zaujy • Tuesday 20/10/2020 , 3:17
                    </Typography>
                    </Box>
                </Box>
                <IconButton onClick={handleClick}>
                    <MoreHorizIcon />
                </IconButton>
            </Box>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <ThumbUpAltIcon style={{ marginRight: '.5em' }} /> Like Post
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ChatBubbleOutlineIcon style={{ marginRight: '.5em' }} />Comment Post
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ShareIcon style={{ marginRight: '.5em' }} />Share Post
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <DeleteIcon style={{ marginRight: '.5em' }} />Delete Post
                </MenuItem>
            </Menu>
            <Divider style={{ margin: '1.5em 0' }} />
            <Box style={{ paddingLeft: '1em', borderLeft: '.2em solid #3F51B5' }}>
                <Typography variant='body1' style={{ margin: '.5em 0' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <img alt='post' width='100%' style={{ borderRadius: '10px' }} src={'https://storage.googleapis.com/jojinime-anime/profile_pict/Jojinime-jojinime@gmail.com-1596091752572'} />
            </Box>
            <Box style={{ margin: '1em 0' }}>
                <Divider />
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Button startIcon={<ThumbUpAltIcon />} fullWidth>
                            {isMobile('Like')}
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <Button startIcon={<ChatBubbleOutlineIcon />} fullWidth>
                            {isMobile('Comment')}
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <Button startIcon={<ShareIcon />} fullWidth>
                            {isMobile('Share')}
                        </Button>
                    </Grid>
                </Grid>
                <Divider />
            </Box>
            <CommentCard data={comment} />
        </Paper>
    )
}

export default PostCard

const comment =
{
    user: {
        name: 'Weeb Developer',
        profile_pict: '"/static/images/avatar/1.jpg"'
    },
    date: 'Tuesday 20/10/2020, 4:51',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged.`
}