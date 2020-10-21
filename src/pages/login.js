import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

import { Parallax } from 'react-parallax'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link } from 'gatsby'

import { useRecoilValue } from 'recoil'
import { userData } from '../config/recoil/atoms/user'
import SEO from '../components/Seo'
import Layout from '../components/Layout'
import { uiConfig, firebaseAuth } from '../config/firebase'

const Login = ({ navigate }) => {

    const classes = useStyles()
    const [state, setState] = useState({
        email: '', password: '', error: false
    })
    const user = useRecoilValue(userData)

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    useEffect(() => {
        if (user) navigate('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <Layout>
            <Parallax bgImage={'https://images7.alphacoders.com/881/thumb-1920-881074.jpg'} bgImageAlt='parallaxBgImg' strength={500}
                blur={3}>
                <SEO title='Login' />
                <div className={classes.root}>
                    <Paper className={classes.wrapper} elevation={10}>
                        <div style={{ marginBottom: '15px', textAlign: 'center' }}>
                            <Typography variant='h2'>
                                LOGIN
                        </Typography>
                            <Typography variant='body1'>
                                Fill in your credentials to continue.
                        </Typography>
                        </div>
                        <TextField id='email' value={state.email} onChange={onChange}
                            helperText='Fill in your email address.' label="Email Address"
                            variant="filled" className={classes.input} />
                        <TextField id='password' type='password' value={state.password} onChange={onChange}
                            helperText='Fill in your password.' label="Password"
                            variant="filled" className={classes.input} />
                        <Typography variant='body1' style={{ textAlign: 'right' }}>
                            <Link to='#'>
                                Forgot your password?
                        </Link>
                        </Typography>
                        <Grid container spacing={0} className={classes.center}>
                            <Grid item xs={12} sm={5} className={classes.button}>
                                <Button style={{ height: '40px' }} className={classes.input} variant='contained' color='primary'>Login</Button>
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </Parallax>
        </Layout>
    )
}

export default Login

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