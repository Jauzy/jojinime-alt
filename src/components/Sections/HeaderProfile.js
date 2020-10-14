import React from 'react'
import { Link } from 'gatsby'

import Skeleton from '@material-ui/lab/Skeleton'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import GitHubIcon from '@material-ui/icons/GitHub';

const HeaderProfile = props => {
    const classes = useStyles()
    const [loaded, setLoaded] = React.useState(false)

    return (
        <Grid container spacing={0} style={{ display: 'flex', }}>
            <Grid item xs={12} md={8} style={{ display: 'flex' }}>
                <Typography variant='h1' style={{ position: 'absolute', fontWeight: 'bold', top: '25%', maxWidth: '600px' }}>
                    MUHAMMAD ABDURRAHMAN AL - JAUZY
                    <Avatar alt='Joji' src={require('../../images/Joji-Square.jpg')} style={{ width: '8em', height: '8em', border: '2px solid grey' }} />
                </Typography>
                <img src={require('../../images/Joji.png')} onLoad={() => setLoaded(true)} style={{ filter: 'brigthness(50%)', marginLeft: 'auto', zIndex: 3, maxWidth: '500px' }} />
                {!loaded && <Skeleton variant='rect' style={{ filter: 'brigthness(50%)', marginLeft: 'auto', zIndex: 3, maxWidth: '500px' }} width='100%' height='700px' />}
            </Grid>
            <Grid item xs={12} md={4} style={{ margin: 'auto 0' }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' color='primary'>
                        Developer
                    </Typography>
                    <Box style={{ width: '100%', height: '10px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                </Box>
                <Typography variant='h4' className={classes.bold} gutterBottom>
                    Based in Lampung, Indonesia. I'm a Fullstack and Android Developer.
                </Typography>
                <Typography color='textSecondary' variant='body1'>
                    Saya adalah seorang yang hobi dalam pemrograman. Sejak dari SMA saya sudah mulai mendalami dunia pemrogaraman.
                </Typography>
                <Link style={{ margin: "10px 5px", textDecoration: 'unset', display: 'flex', alignItems: 'center' }} to='https://github.com/jauzy'>
                    <Button variant='ghost' startIcon={<GitHubIcon />} style={{ alignItems: 'center' }}>
                        Github
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default HeaderProfile

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '50px 0'
    },
    bold: {
        fontWeight: 'bold'
    }
}))