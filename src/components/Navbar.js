import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import DarkIcon from '@material-ui/icons/NightsStay'
import LightIcon from '@material-ui/icons/Brightness7'

import { useRecoilState } from 'recoil'
import { userData } from '../config/recoil/atoms/user'
import { firebaseAuth } from '../config/firebase'

import { isDarkMode as atomDarkMode } from '../config/recoil/atoms/utils'

const Navbar = props => {
    const { toggleHamburger } = props
    const [isDarkMode, setDarkMode] = useRecoilState(atomDarkMode)
    const [user, setUser] = useRecoilState(userData)
    const classes = useStyles();

    const handleToggleTheme = () => {
        setDarkMode(!isDarkMode)
    }
    const handleToggleHamburger = () => {
        toggleHamburger(true)
    }

    const trigger = useScrollTrigger();

    useEffect(() => {
        if (firebaseAuth) {
            firebaseAuth.onAuthStateChanged(user => {
                if (user) {
                    const { displayName, email, photoURL } = user
                    setUser({ displayName, email, photoURL })
                }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Slide appear={true} direction="down" in={!trigger}>
            <AppBar color='inherit' >
                <Container>
                    <Toolbar style={{ padding: '0.5em 0' }}>
                        {!user && <IconButton edge="start" onClick={handleToggleHamburger} className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>}
                        <Box style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                            <Link to='/' className={classes.title}>
                                <Typography variant="h6" style={{ fontWeight: 'bold' }} >
                                    じょじにめ.
                                </Typography>
                            </Link>
                            <Tooltip style={{ marginLeft: 'auto' }} title='Toggle Light/Dark Theme'>
                                <IconButton color="inherit" onClick={handleToggleTheme}>
                                    {!isDarkMode ? <LightIcon /> : <DarkIcon />}
                                </IconButton>
                            </Tooltip>
                            {user && <Link to='#' className={classes.link}>
                                <Button className={classes.button} onClick={handleToggleHamburger} endIcon={
                                    <Avatar alt={user?.displayName} src={user?.photoURL} />
                                } >{window.innerWidth > 700 ? `${user?.displayName}` : ""}</Button>
                            </Link>}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    )
}

export default Navbar

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'unset',
        margin: '0 5px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textDecoration: 'unset',
    },
}));