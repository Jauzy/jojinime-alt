import React from 'react';
import { navigateTo } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import RecommendIcon from '@material-ui/icons/RecordVoiceOver';
import VideoIcon from '@material-ui/icons/VideoLibrary';
import BookIcon from '@material-ui/icons/LibraryBooks';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 380,
        zIndex: 99,
        position: 'fixed',
        bottom: 0,
        right: 0,
        flexGrow: 1,
    },
    speedDial: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const actions = [
    { icon: <RecommendIcon />, name: 'Recommendations', value: 'recommendations' },
    { icon: <VideoIcon />, name: 'Episodes', value: 'episodes' },
    { icon: <BookIcon />, name: 'Synopsis', value: 'description' },
    { icon: <UserIcon />, name: 'Characters', value: 'characters' },
    { icon: <InfoIcon />, name: 'Details', value: 'details' },
];

export default function OpenIconSpeedDial(props) {
    const { location } = props
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                className={classes.speedDial}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => {
                            navigateTo(`${location?.pathname}#${action.value}`)
                        }}
                    />
                ))}
            </SpeedDial>
        </div>
    );
}
