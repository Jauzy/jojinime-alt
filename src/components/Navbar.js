import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DarkIcon from '@material-ui/icons/NightsStay'
import LightIcon from '@material-ui/icons/Brightness7'

const Navbar = props => {
    const { lightMode, isLightMode, toggleHamburger } = props
    const classes = useStyles();

    const handleToggleTheme = () => {
        lightMode(!isLightMode)
    }
    const handleToggleHamburger = () => {
        toggleHamburger(true)
    }

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleToggleHamburger}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Jojinime.
                    </Typography>
                <Tooltip title='Toggle Light/Dark Theme'>
                    <IconButton color="inherit" onClick={handleToggleTheme}>
                        {isLightMode ? <LightIcon /> : <DarkIcon />}
                    </IconButton>
                </Tooltip>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));