import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from '@material-ui/core/TextField';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';

import { Parallax } from 'react-parallax'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { useRecoilValue } from 'recoil'
import { userData } from '../config/recoil/atoms/user'
import SEO from '../components/Seo'
import Layout from '../components/Layout'
import { uiConfig, firebaseAuth } from '../config/firebase'

const Register = props => {
    const [state, setState] = useState({
        name: '', password: '', error: false
    })
    const classes = useStyles()
    const user = useRecoilValue(userData)
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    useEffect(() => {
        if (user) {
            setState({ ...state, name: user.displayName })
            if (activeStep === 0)
                handleNext()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <Layout>
            <Parallax bgImage={'https://images2.alphacoders.com/966/thumb-1920-966053.jpg'} bgImageAlt='parallaxBgImg' strength={500}
                blur={3}>
                <SEO title='Register' />
                <div className={classes.root}>
                    <Paper className={classes.wrapper} elevation={10}>
                        <div style={{ marginBottom: '15px', textAlign: 'center' }}>
                            <Typography variant='h2'>
                                Register
                        </Typography>
                            <Typography variant='body1'>
                                Quick register with google account.
                        </Typography>
                            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                                <Step>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                                        Sign in with Google
                                </StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                                        Fill in Info
                                </StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                                        Review
                                </StepLabel>
                                </Step>
                            </Stepper>
                            {activeStep === 0 && <div>
                                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
                                <Typography variant='body2'>
                                    Please sign in with your google account to continue.
                            </Typography>
                            </div>}
                            {activeStep === 1 && <div>
                                <TextField id='name' value={state.name} onChange={onChange} label="Your Name"
                                    helperText='Fill in your name.' variant="filled" className={classes.input} />
                                <TextField id='password' type='password' value={state.password} onChange={onChange}
                                    helperText='Create your password.' label="Password"
                                    variant="filled" className={classes.input} />
                                <Button style={{ height: '40px' }} className={classes.input} onClick={() => handleNext()}
                                    variant='contained' color='primary'>Next</Button>
                            </div>}
                            {activeStep === 2 && <div>
                                <TextField disabled value={state.name} label="Your Name" variant="filled" className={classes.input} />
                                <TextField disabled type='password' value={state.password} label="Password" variant="filled" className={classes.input} />
                                <Typography variant='body2'>
                                    Go Back to Edit, Finish to Register.
                            </Typography>
                                <Grid container spacing={3}>
                                    <Grid xs={6} item>
                                        <Button style={{ height: '40px' }} className={classes.input} onClick={() => handleBack()}
                                            variant='contained' color='primary'>Back</Button>
                                    </Grid>
                                    <Grid xs={6} item>
                                        <Button style={{ height: '40px' }} className={classes.input}
                                            variant='contained' color='primary'>Finish</Button>
                                    </Grid>
                                </Grid>
                            </div>}
                        </div>
                    </Paper>
                </div>
            </Parallax>
        </Layout>
    )
}

export default Register

const useStyles = makeStyles((theme) => ({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        textAlign: 'center'
    },
    root: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        padding: '20px 30px',
        minWidth: '25%'
    },
    button: {
        padding: '0 24px',
    },
    input: {
        width: '100%',
        marginTop: '10px',
        marginBottom: '10px'
    }
}));

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
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

    const icons = {
        1: <AccountCircleIcon />,
        2: <InfoIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}