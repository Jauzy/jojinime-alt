import React from 'react'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

import Skeleton from '@material-ui/lab/Skeleton'

const CommentCard = ({ data }) => {
    return (
        <Box style={{ margin: '.5em 0', display: 'flex' }}>
            <Avatar alt={data?.user?.name} src={data?.user?.profile_pict} style={{ marginRight: '1em' }} />
            <Box style={{ width: '100%' }}>
                <Box style={{ display: 'flex', alignItems: 'center', flexWrap:'wrap', marginBottom:'.5em' }}>
                    {!data && <Skeleton variant='text' style={{ width: '150px', marginRight: '1em', }} />}
                    {!data && <Skeleton variant='text' style={{ width: '100px' }} />}
                    <Typography variant='subtitle1' style={{ marginRight: '1em', fontWeight: 'bold' }}>
                        {data?.user?.name}
                    </Typography>
                    <Typography variant='subtitle2' color='textSecondary'>
                        {data?.date}
                    </Typography>
                </Box>
                {!data && <Skeleton variant='text' />}
                {!data && <Skeleton variant='text' />}
                {!data && <Skeleton variant='text' style={{ maxWidth: '300px' }} />}
                <Typography variant='body1'>
                    {data?.text}
                </Typography>
                <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Box style={{ marginRight: '.5em' }}>
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
                </Box>
            </Box>
        </Box>
    )
}

export default CommentCard