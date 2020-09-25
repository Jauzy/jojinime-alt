import React from 'react'
import { navigateTo, Link } from 'gatsby'
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
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import UserIcon from '@material-ui/icons/SupervisedUserCircle'

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
                {user && <div>
                    <Avatar alt={user?.displayName} src={user?.photoURL} className={classes.avatar} />
                    <Typography variant='h6' className={classes.header}>
                        {user?.displayName}
                    </Typography>
                </div>}
                <List component="nav" className={classes.list}>
                    <Divider />
                    <Link to='/anime-page?id=101280' className={classes.link} onClick={() => toggleHamburger(false)}>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Anime Page" />
                        </ListItem>
                    </Link>
                    <Link to='/anime-list' className={classes.link} onClick={() => toggleHamburger(false)}>
                        <ListItem button>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText primary="Anime List" />
                        </ListItem>
                    </Link>
                    <Link to='/about/jauzy' className={classes.link} onClick={() => toggleHamburger(false)}>
                        <ListItem button>
                            <ListItemIcon>
                                <UserIcon />
                            </ListItemIcon>
                            <ListItemText primary="About Jauzy" />
                        </ListItem>
                    </Link>
                    <Divider />
                    <Divider style={{ marginTop: 'auto' }} />
                    {!user && <Link to='/register' className={classes.link} onClick={() => toggleHamburger(false)}>
                        <ListItem button>
                            <ListItemIcon>
                                <PersonAddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Register" />
                        </ListItem>
                    </Link>}
                    {!user && <Link to='/login' className={classes.link} onClick={() => toggleHamburger(false)}>
                        <ListItem button>
                            <ListItemIcon>
                                <SubdirectoryArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </Link>}
                    {user && <ListItem button onClick={logout}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>}
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
    link: {
        textDecoration: 'unset',
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