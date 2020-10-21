import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'

import { Parallax } from 'react-scroll-parallax'

const Description = ({description}) => (
    <Box>
        <Typography variant='h2' style={{ marginBottom: '0.2em' }}>
            Synopsis
        </Typography>
        <Typography variant='body1' dangerouslySetInnerHTML={{ __html: description }} />
        {!description && <Skeleton variant='text' />}
        {!description && <Skeleton variant='text' />}
        {!description && <Skeleton variant='text' />}
        {!description && <Skeleton variant='text' width='200px' style={{marginBottom:'1em'}} />}
        {!description && <Skeleton variant='text' width='150px' />}
        <Parallax y={[10, 50]} tagOuter="div">
            <Typography variant='h1' className='text-secondary'>
                <strong>EPISODES</strong>
            </Typography>
        </Parallax>
    </Box>
)

export default Description