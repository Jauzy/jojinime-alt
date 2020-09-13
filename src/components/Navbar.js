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

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import DarkIcon from '@material-ui/icons/NightsStay'
import LightIcon from '@material-ui/icons/Brightness7'

import { useRecoilState } from 'recoil'
import { userData } from '../config/recoil/atoms/user'
import { firebaseAuth } from '../config/firebase'

const Navbar = props => {
    const { lightMode, isLightMode, toggleHamburger } = props
    const [user, setUser] = useRecoilState(userData)
    const classes = useStyles();

    const handleToggleTheme = () => {
        lightMode(!isLightMode)
    }
    const handleToggleHamburger = () => {
        toggleHamburger(true)
    }

    useEffect(() => {
        if (firebaseAuth) {
            firebaseAuth.onAuthStateChanged(user => {
                if (user) {
                    const { displayName, email, photoURL } = user
                    setUser({ displayName, email, photoURL })
                }
            })
        }
    }, [])

    return (
        <AppBar position="sticky" color='primary'>
            <Container>
                <Toolbar>
                    {!user && <IconButton edge="start" onClick={handleToggleHamburger} className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>}
                    <Link to='/' className={classes.title}>
                        <Typography variant="h6" >
                            Jojinime.
                        </Typography>
                    </Link>
                    <Tooltip title='Toggle Light/Dark Theme'>
                        <IconButton color="inherit" onClick={handleToggleTheme}>
                            {isLightMode ? <LightIcon /> : <DarkIcon />}
                        </IconButton>
                    </Tooltip>
                    {user && <Link to='#' className={classes.link}>
                        <Button className={classes.button} onClick={handleToggleHamburger} endIcon={
                            <Avatar alt={user?.displayName} src={user?.photoURL} />
                        } >{user?.displayName}</Button>
                    </Link>}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar

const useStyles = makeStyles((theme) => ({
    button: {
        color: '#fff'
    },
    link: {
        textDecoration: 'unset',
        margin: '0 5px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        color: 'white',
        flexGrow: 1,
        textDecoration: 'unset',
    },
}));