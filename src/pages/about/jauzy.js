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
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import Rating from '@material-ui/lab/Rating';

import HeaderProfile from '../../components/Sections/HeaderProfile'
import SEO from '../../components/Seo'
import Layout from '../../components/Layout'

const About = props => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    

    return (
        <Layout style={{ padding: '50px 0' }} >
            <SEO title='About Jauzy' />
            <Container>
                <HeaderProfile />
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
                                Years of JS Experience
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
                        {skills.map((item, idx) => (
                            <Accordion expanded={expanded === `panel${idx}`} onChange={handleChange(`panel${idx}`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography>{item.title}</Typography>
                                    <Rating name="half-rating" value={item.level} precision={0.5} style={{ marginLeft: 'auto' }} readOnly />
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {item.desc}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container spacing={0} style={{ margin: '50px 0' }}>
                    <Grid item xs={12} md={6}>

                    </Grid>
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
                                <Card style={{ height: '100%' }}>
                                    <CardActionArea style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <img src={item.image} width='100%' />
                                        <CardContent style={{ marginBottom: 'auto' }}>
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
        </Layout >
    )
}

export default About

const useStyles = makeStyles((theme) => ({
    bold: {
        fontWeight: 'bold'
    }
}))

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
const skills = [
    {
        title: 'Gatsby Js',
        desc: `Saya sudah terbiasa dengan development environment gatsby js. Saya juga pernah menggunakan Netlify sebagai CMS untuk gatsby. 
        Karena gatsby js merupakan framework react, tentunya skill react yang saya miliki sangat membantu dalam pengembangan dengan gatsby.`,
        level: 4,
    },
    {
        title: 'React Js',
        desc: `Saya sudah mendalami react sejak awal pertama kali saya mulai belajar pemrograman web. Sehingga react bisa dibilang sudah ada di luar kepala, sudah seperti teman sehari - hari. 
        Saya banyak mempelajari framework - framework react seperti recoil, gatsby, dll.`,
        level: 4.5,
    },
    {
        title: 'React Native',
        desc: `Sintaks React Native tidak jauh berbeda dari React Web, karna itu saya lebih mudah untuk memahaminya. 
        Beberapa aplikasi latihan sudah pernah saya buat dengan berbagai teknologi yang dibutuhkan seperti notifikasi, state management, dll.`,
        level: 3,
    },
    {
        title: 'Node Js Express',
        desc: `Sejak awal belajar pemrograman web, saya sudah menggunakan 
        node express sebagai web server saya yang kemudian saya hosting pada Google Cloud Platform. Sampai sekarang, saya
        bisa membuat realtime server.
        `,
        level: 4,
    },
]