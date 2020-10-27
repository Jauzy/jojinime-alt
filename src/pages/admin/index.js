import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { navigateTo } from 'gatsby'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Avatar from '@material-ui/core/Avatar'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import DashboardSVG from '../../components/SVG/Dashboard'
import Graph from '../../components/Sections/Chart'

const Admin = props => {

    const isMobile = () => {
        if (typeof window !== 'undefined')
            return window?.innerWidth <= 700 ? true : false
    }

    return (
        <Layout style={{ padding: '6em 0' }}>
            <SEO title='Admin Dashboard' />
            <Box style={{ margin: '0 5vw' }}>
                <Grid container spacing={3} style={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h3' color='primary' style={{ fontWeight: 'bold' }}>
                            お帰りなさい
                        </Typography>
                        <Typography variant='h2'>
                            Muhammad Abdurrahman Al Jauzy
                        </Typography>
                        <Typography variant='h4' style={{ fontWeight: 'bold' }} color='textSecondary'>
                            Keep Up the Good Work!
                        </Typography>
                        <Box style={{ margin: '1em 0', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Button startIcon={<AccountCircleIcon />} variant='contained' color='primary' style={{ margin: '.5em' }}>
                                Profile
                            </Button>
                            <Button variant='contained' onClick={() => navigateTo('/admin/animes')} style={{ margin: '.5em' }}>
                                Animes
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Parallax y={[50, -50]} tagOuter='div'>
                            <DashboardSVG />
                        </Parallax>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ margin: '2em 0', marginLeft: "5vw", }}>
                <Typography variant='h2' gutterBottom>
                    NEWS
                </Typography>
                <GridList cols={isMobile() ? 1.2 : 2.5} style={{ padding: '.5em 0', flexWrap: 'nowrap', transform: 'translateZ(0)' }}>
                    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                        <GridListTile key={item} style={{ height: '100%', padding: '0 .5em' }}>
                            <Paper style={{ padding: '1em' }}>
                                <Box style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar style={{ marginRight: '.5em' }} />
                                    <Box>
                                        <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                                            Website is Still Under Development
                                        </Typography>
                                        <Typography variant='subtitle2' color='textSecondary'>
                                            Tuesday 20/10/2020 , 3:17 by Weeb Developer
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant='body1' color='textSecondary' style={{ marginTop: '.5em' }}>
                                    This site is one-man project and takes a lot of effort to done it. But, slowly this website will up and running.
                                </Typography>
                            </Paper>
                        </GridListTile>
                    ))}
                </GridList>
            </Box>
            <Box style={{ margin: '1em 5vw', marginTop: '7em' }}>
                <Typography variant='h2' >
                    VISITORS STATISTICS
                </Typography>
                <Typography variant='h5' color='textSecondary' style={{ marginBottom: '1em' }}>
                    Statistics for the past 30 days.
                </Typography>
                <Graph />
            </Box>
        </Layout>
    )
}

export default Admin