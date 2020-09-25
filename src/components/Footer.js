import React from 'react'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const Footer = (props) => {
    return (
        <Paper className={"footer-bs " + props.className}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={5} lg={3} className="footer-brand">
                    <Typography variant='h2'>JOJINIME<strong className='text-main'>.</strong></Typography>
                    <Typography variant='body2'>
                        Jojinime adalah web streaming dan download anime non profit yang dibuat berdasarkan motivasi terwujudnya Web Anime yang Canggih, Cepat, juga tanpa Iklan dan ClickBait yang mengganggu. Web ini menggunakan server Google Platform yang terpercaya untuk kecepatan Streaming nya.
                    </Typography>
                    <Typography variant='body2' style={{ marginTop: '1em' }}>© {new Date().getFullYear()} Jojinime, All rights reserved. API <a href='https://anilist.gitbook.io/anilist-apiv2-docs/'>Anilist</a>. Framework Material UI.</Typography>
                </Grid>
                <Grid item xs={12} md={2} lg={4} className="footer-nav">
                    <Typography variant='h4'>Menu —</Typography>
                    <ul className="pages">
                        <li><Link to={'#'}>Anime List</Link></li>
                        <li><Link to={'#'}>Movie List</Link></li>
                        <li><Link to={'#'}>Ongoing List</Link></li>
                        <li><Link to={'#'}>Genre List</Link></li>
                        <li><Link to={'#'}>Login</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={2} lg={2} className="footer-nav">
                    <Typography variant='h4'>Follow Us</Typography>
                    <ul className='pages'>
                        <li><Link to={'#'}>Facebook</Link></li>
                        <li><Link to={'#'}>Twitter</Link></li>
                        <li><Link to={'#'}>Instagram</Link></li>
                        <li><Link to={'#'}>RSS</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3} lg={3} className="footer-ns">
                    <Typography variant='h4'>Search Anime</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Footer