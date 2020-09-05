import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { Parallax } from 'react-scroll-parallax'

const Description = props => (
    <Box>
        <Typography variant='h2' style={{ marginBottom: '0.2em' }}>
            Synopsis
        </Typography>
        <Typography variant='body1' dangerouslySetInnerHTML={{ __html: props.description }} />
        <Parallax y={[10, 50]} tagOuter="div">
            <Typography variant='h1' className='text-secondary'>
                <strong>SYNOPSIS</strong>
            </Typography>
        </Parallax>
    </Box>
)

export default Description