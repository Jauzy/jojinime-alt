import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { makeStyles } from '@material-ui/core/styles';

const Hamburger = props => {
    const { isOpen, toggleHamburger } = props
    const classes = useStyles();
    
    return (
        <Drawer anchor='left' open={isOpen} onClose={() => toggleHamburger(false)}>
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
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
                </List>
            </div>
        </Drawer>
    )
}

export default Hamburger

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        backgroundColor: theme.palette.background.paper,
    },
}));