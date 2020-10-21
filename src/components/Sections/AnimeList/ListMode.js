import React from 'react'
import { navigateTo } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'

import AppsIcon from '@material-ui/icons/Apps';

import SittingSvg from '../../SVG/Sitting'

import ListCard from '../../Cards/ListCard'

const ListMode = ({ setListMode, animes }) => {
    const sections = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'

    return (
        <Box style={{ margin: '0 5vw', }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7} md={8}>
                    <Grid container spacing={3}>
                        <Grid item xs={10} md={10}>
                            <Typography variant='h3' style={{ fontWeight: 'bold' }}>
                                Anime List Subtitle Indonesia
                            </Typography>
                            <Typography variant='h4'>
                                アニメ一覧
                            </Typography>
                        </Grid>
                        <Grid item xs={2} md style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center' }} >
                            <Box>
                                <Tooltip title='To Grid Mode'>
                                    <IconButton onClick={() => setListMode(false)}>
                                        <AppsIcon color='primary' style={{ fontSize: '2em' }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box style={{ width: '100%', height: '5px', margin: '.5em 0', borderRadius: '5px', backgroundColor: '#3F51B5' }} />

                    <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {sections.split(" ").map(item => (
                            <Box key={item + 'section-link'}>
                                <Button color='primary' variant='contained' style={{ margin: '.3em', height: '25px' }} onClick={() => navigateTo(`/anime-list/#${item}section`)}>
                                    {item}
                                </Button>
                            </Box>
                        ))}
                    </Box>

                    {sections.split(" ").map(item => (
                        <Box key={item + 'section'} id={item + 'section'}
                            elevation={3} style={{ margin: '1em 0', padding: '1em' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                                {item}
                            </Typography>
                            <Box style={{ width: '100%', height: '2px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                            <ul style={{ padding: '0', columns: 2, WebkitColumns: 2, MozColumns: 2 }}>
                                {animes?.filter(anime => anime.title.romaji.charAt(0) === item).map((anime, idx) => (
                                    <Box key={`${idx}-${anime.title.romaji}`}>
                                        <ListCard anime={anime} />
                                    </Box>
                                ))}
                            </ul>
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={12} sm md>
                    <Parallax y={[50, -50]} tagOuter="div">
                        <Box style={{ height: '100%' }}>
                            <Box>
                                <SittingSvg />
                            </Box>
                            <Paper style={{ height: 'auto', padding: '1em' }}>
                                <Typography variant='h2' style={{ fontWeight: 'bold' }} align='center'>
                                    News
                            </Typography>
                                <Divider />
                                <Box style={{ margin: '1em' }}>
                                    <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                                        Website is Still Under Development
                                </Typography>
                                    <Typography variant='subtitle2' color='textSecondary'>
                                        Tuesday 20/10/2020 , 3:17
                                </Typography>
                                    <Typography variant='body1' color='textSecondary' style={{ marginTop: '.5em' }}>
                                        This site is one-man project and takes a lot of effort to done it. But, slowly this website will up and running.
                                </Typography>
                                </Box>

                            </Paper>
                        </Box>
                    </Parallax>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ListMode