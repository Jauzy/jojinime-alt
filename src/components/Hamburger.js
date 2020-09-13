import React from 'react'
import { navigateTo } from 'gatsby'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useRecoilState } from 'recoil'
import { userData } from '../config/recoil/atoms/user'

import { firebaseAuth } from '../config/firebase'

const Hamburger = props => {
    const { isOpen, toggleHamburger } = props
    const [user, setUser] = useRecoilState(userData)
    const classes = useStyles();

    const logout = () => {
        firebaseAuth.signOut()
        setUser(null)
        navigateTo('/login')
        toggleHamburger(false)
    }

    return (
        <Drawer anchor='left' open={isOpen} onClose={() => toggleHamburger(false)}>
            <div className={classes.root}>
                <Avatar alt={user?.displayName} src={user?.photoURL} className={classes.avatar} />
                <Typography variant='h6' className={classes.header}>
                    {user?.displayName}
                </Typography>
                <List component="nav" className={classes.list}>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <Divider />
                    <Divider style={{ marginTop: 'auto' }} />
                    <ListItem button onClick={logout}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}

export default Hamburger

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '30px'
    },
    avatar: {
        width: 150,
        height: 150,
        margin: 'auto'
    },
    header: { textAlign: 'center', margin: '10px' },
    list: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
}));