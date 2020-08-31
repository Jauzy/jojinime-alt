import React, { useState } from 'react'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const Footer = (props) => {
    const [state, setState] = useState({
        search: ''
    })

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    return (
        <Paper className="footer-bs">
            <Grid container spacing={1} className="row">
                <Grid xs={12} md={3} className="footer-brand animated fadeInLeft">
                    <Typography variant='h2' className='font-weight-bold'>JOJINIME<strong className='text-main'>.</strong></Typography>
                    <Typography variant='body2'>
                        Jojinime adalah web streaming dan download anime non profit yang dibuat berdasarkan motivasi terwujudnya Web Anime yang Canggih, Cepat, juga tanpa Iklan dan ClickBait yang mengganggu. Web ini menggunakan server Google Platform yang terpercaya untuk kecepatan Streaming nya.
                    </Typography>
                    <Typography variant='body2' style={{marginTop:'1em'}}>© {new Date().getFullYear()} Jojinime, All rights reserved. API <a href='https://anilist.gitbook.io/anilist-apiv2-docs/'>Anilist</a>.</Typography>
                </Grid>
                <Grid xs={12} md={4} className="footer-nav animated fadeInUp">
                    <Typography variant='h4'>Menu —</Typography>
                    <div className="col-md-6">
                        <ul className="pages">
                            <li><Link to={'#'}>Anime List</Link></li>
                            <li><Link to={'#'}>Movie List</Link></li>
                            <li><Link to={'#'}>Ongoing List</Link></li>
                            <li><Link to={'#'}>Genre List</Link></li>
                            <li><Link to={'#'}>Login</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list">
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>
                </Grid>
                <Grid xs={12} md={2} className="footer-social animated fadeInDown">
                    <Typography variant='h4'>Follow Us</Typography>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">RSS</a></li>
                    </ul>
                </Grid>
                <Grid xs={12} md={3} className="footer-ns animated fadeInRight">
                    <Typography variant='h4'>Search Anime</Typography>
                    <p>Temukan Anime Favoritmu Disini</p>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Footer