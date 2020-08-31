import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Icon from '@material-ui/icons/SupervisedUserCircle'
import StepLabel from '@material-ui/core/StepLabel';
import clsx from 'clsx';

const CharaStepper = props => {
    const { activeStep, setActiveStep, steps } = props
    const classes = useStyles();
    const [completed, setCompleted] = React.useState(new Set());

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    function isStepComplete(step) {
        return completed.has(step);
    }

    return (
        <div className={classes.root}>
            <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                {steps?.map((label, index) => {
                    return (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon} onClick={handleStep(index)}
                                completed={isStepComplete(index)}>
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </div>
    );
}

export default CharaStepper

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 30,
        height: 30,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            <Icon />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }
}));