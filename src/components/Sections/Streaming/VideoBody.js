import React from 'react'
import { navigateTo } from 'gatsby'

import Chip from '@material-ui/core/Chip'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import Skeleton from '@material-ui/lab/Skeleton'

const DetailBody = ({ anime }) => {
    return (
        <Box>
            <Typography variant='body1' dangerouslySetInnerHTML={{ __html: anime?.description }} />
            {!anime && <Skeleton variant='text' />}
            {!anime && <Skeleton variant='text' />}
            {!anime && <Skeleton variant='text' />}
            {!anime && <Skeleton variant='text' style={{ maxWidth: '300px' }} />}
            <Divider style={{ margin: '1em 0' }} />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Studio
                        </Typography>
                        </td>
                        <td>
                            <Typography variant='subtitle1'>
                                {anime?.studios.edges.filter(node => node.node.isAnimationStudio)[0].node.name}
                            </Typography>
                            {!anime && <Skeleton variant='text' width='200px' height='2em' />}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Typography variant='subtitle1' color='textSecondary' style={{ marginTop: '.5em' }}>
                                Genre
                        </Typography>
                        </td>
                        <td>
                            {anime?.genres?.map(genre => (
                                <Chip label={genre} key={genre} style={{ margin: '0.5em 0.5em 0 0' }} />
                            ))}
                            {!anime && <Skeleton variant='text' width='200px' height='2em' style={{ margin: '0.5em 0.5em 0 0' }} />}
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button color='primary' variant='contained' style={{ margin: '1em 0' }}
                onClick={() => navigateTo(`/anime-page?id=${anime?.id}`)}>
                Go to Anime Page
            </Button>
        </Box>
    )
}

export default DetailBody