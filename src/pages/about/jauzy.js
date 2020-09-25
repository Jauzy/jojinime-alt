import React from 'react'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Skeleton from '@material-ui/lab/Skeleton'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import Rating from '@material-ui/lab/Rating';

import SEO from '../../components/Seo'

const About = props => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false);
    const [loaded, setLoaded] = React.useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const projects = [
        {
            image: require('../../images/Createit.png'),
            title: 'Create It!',
            role: 'Fullstack Developer',
            url: 'https://www.createit.id',
            desc: 'Sebuah startup crowdsourcing yang menghubungkan Designer dan Client dalam proses permintaan desain untuk sebuah kategori project atau kontes.'
        },
        {
            image: require('../../images/Jojinime.png'),
            title: 'Jojinime',
            role: 'Fullstack Developer',
            url: 'https://www.jojinime.xyz',
            desc: 'Web streaming dan download anime tidak resmi yang dibuat dengan motivasi web anime yang elegan dan cepat juga tanpa iklan.'
        },
        {
            image: require('../../images/RPLGDC.png'),
            title: 'RPLGDC - Inventory Management',
            role: 'Fullstack Developer',
            url: 'https://rplgdc-inventory.vercel.app/',
            desc: 'Web Inventory Management yang dibuat untuk keperluan Laboratorium RPLGDC Informatika Telkom University.'
        },
        {
            image: require('../../images/Dytona.png'),
            title: 'Dytona Deli Krisp',
            role: 'Frontend Developer',
            url: 'https://dytonadelikrisp.com/',
            desc: 'Website Company Profile untuk Dytona Deli Krisp.'
        },
    ]

    return (
        <Box className={classes.root}>
            <SEO title='About Jauzy' />
            <Container>
                <Grid container spacing={0} style={{ display: 'flex',}}>
                    <Grid item xs={12} md={8} style={{ display: 'flex' }}>
                        <Typography variant='h1' style={{ position: 'absolute', fontWeight: 'bold', top: '25%', maxWidth: '600px' }}>
                            MUHAMMAD ABDURRAHMAN AL - JAUZY
                            <Avatar alt='Joji' src={require('../../images/Joji-Square.jpg')} style={{ width: '8em', height: '8em', border: '2px solid grey' }} />
                        </Typography>
                        <img src={require('../../images/Joji.png')} onLoad={() => setLoaded(true)} style={{ filter: 'brigthness(50%)', marginLeft: 'auto', zIndex: 3, maxWidth: '500px' }} />
                        {!loaded && <Skeleton variant='rect' style={{ filter: 'brigthness(50%)', marginLeft: 'auto', zIndex: 3, maxWidth: '500px' }} width='100%' height='700px' />}
                    </Grid>
                    <Grid item xs={12} md={4} style={{ margin: 'auto 0' }}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h6' color='primary'>
                                Developer
                            </Typography>
                            <Box style={{ width: '100%', height: '10px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                        </Box>
                        <Typography variant='h4' className={classes.bold} gutterBottom>
                            Based in Lampung, Indonesia. I'm a Fullstack and Android Developer.
                        </Typography>
                        <Typography color='textSecondary' variant='body1'>
                            Saya adalah seorang yang hobi dalam pemrograman. Sejak dari SMA saya sudah mulai mendalami dunia pemrogaraman.
                        </Typography>
                        <Link style={{ margin: "10px 5px", textDecoration: 'unset', display: 'flex', alignItems: 'center' }} to='https://github.com/jauzy'>
                            <GitHubIcon />
                            <Typography variant='h6' style={{ margin: '0 10px' }}>
                                Github
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Container>

            <Divider style={{ marginBottom: '20px' }} />
            <Container>
                <Grid container style={{ margin: '50px 0' }} spacing={0}>
                    <Grid item xs={12} md={6}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h6' color='primary'>
                                About Me
                            </Typography>
                            <Box style={{ width: '100%', height: '10px', maxWidth: '100px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                        </Box>
                        <Typography variant='h4' className={classes.bold} gutterBottom>
                            "Developing an App isn't just a Job, it's a way to get fun."
                        </Typography>
                        <Typography color='textSecondary' variant='body1'>
                            Pemograman bukan hanya cara untuk mengembangkan suatu ide, bukan hanya sebagai tuntutan pekerjaan. Tapi, sesuatu yang bisa membuat kita
                            kadang merasa gembira dan emosi. Sesuatu yang selalu membuat kita berkembang tanpa kita sadari.
                        </Typography>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h1' style={{ fontWeight: "bold", marginRight: "10px" }}>
                                3
                            </Typography>
                            <Typography variant='h5' style={{ maxWidth: '200px' }}>
                                Years of Experience
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h6' color='primary'>
                                Skills
                            </Typography>
                            <Box style={{ width: '100%', height: '10px', maxWidth: '100px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                        </Box>
                        <Typography variant='h5' className={classes.bold} gutterBottom>
                            "I'm into javascript programming language, and im dedicated to it."
                        </Typography>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>Gatsby Js</Typography>
                                <Rating name="half-rating" value={4} precision={0.5} style={{ marginLeft: 'auto' }} readOnly />
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Saya sudah terbiasa dengan development environment gatsby js. Saya juga pernah menggunakan Netlify sebagai CMS untuk gatsby.
                                    Karena gatsby js merupakan framework react, tentunya skill react yang saya miliki sangat membantu dalam pengembangan dengan gatsby.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>React Js Web</Typography>
                                <Rating name="half-rating" value={4.5} precision={0.5} style={{ marginLeft: 'auto' }} readOnly />
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Saya sudah mendalami react sejak awal pertama kali saya mulai belajar pemrograman web. Sehingga react bisa dibilang sudah ada di luar
                                    kepala, sudah seperti teman sehari - hari. Saya banyak mempelajari framework - framework react seperti recoil, gatsbt, dll.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>React Native</Typography>
                                <Rating name="half-rating" value={3} precision={0.5} style={{ marginLeft: 'auto' }} readOnly />
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Sintaks React Native tidak jauh berbeda dari React Web, karna itu saya lebih mudah untuk memahaminya. Beberapa aplikasi latihan sudah
                                    pernah saya buat dengan berbagai teknologi yang dibutuhkan seperti notifikasi, state management, dll.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>Node Express</Typography>
                                <Rating name="half-rating" value={4} precision={0.5} style={{ marginLeft: 'auto' }} readOnly />
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Sejak awal belajar pemrograman web, saya sudah menggunakan node express sebagai web server saya yang kemudian saya hosting pada Google Cloud Platform.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container spacing={0} style={{ margin: '50px 0' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3' className={classes.bold}>
                            Any Type Of Query & Discussion.
                        </Typography>
                        <Typography color='textSecondary' variant='body1'>
                            Let's Talk With Me.
                        </Typography>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Link style={{ margin: "10px 5px" }} to='https://github.com/jauzy'>
                                <WhatsAppIcon />
                            </Link>
                            <Link style={{ margin: "10px 5px" }}>
                                <InstagramIcon />
                            </Link>
                            <Link style={{ margin: "10px 5px" }}>
                                <EmailIcon />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Divider style={{ marginBottom: '20px' }} />
            <Container>
                <Box style={{ marginBottom: '20px' }}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='h3' color='primary' style={{ fontWeight: 'bold' }}>
                            Projects
                        </Typography>
                        <Box style={{ width: '100%', height: '10px', margin: '0px 15px', borderRadius: '5px', backgroundColor: '#3F51B5' }} />
                    </Box>
                    <Typography variant='h6'>
                        Projects that i was involved in.
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {projects.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Link to={item.url} style={{ textDecoration: 'none' }}>
                                <Card>
                                    <CardActionArea>
                                        <img src={item.image} width='100%' />
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                {item.title}
                                            </Typography>
                                            <Typography variant='h6' color='textSecondary' gutterBottom>
                                                as {item.role}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.desc}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h2' style={{ textAlign: 'center' }}>
                                And More ...
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '50px 0'
    },
    bold: {
        fontWeight: 'bold'
    }
}))