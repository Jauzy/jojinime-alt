import React from 'react'
import { Parallax } from 'react-parallax'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RssFeedIcon from '@material-ui/icons/RssFeed';

const Header = props => {
    const { image, title, desc, social, blur, height } = props
    return (
        image ? <Parallax bgImage={image} strength={500} blur={blur ? blur : 0} >
            {!title && <div style={{ height: height ? height : '60vh' }} />}
            {title && <div style={{ height: height ? height : '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box style={{ padding: '2em', color: 'white' }}>
                    <Typography variant='h2' style={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                        {desc}
                    </Typography>
                    {social && <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <InstagramIcon style={{ marginRight: '0.5em' }} />
                        {[FacebookIcon, TwitterIcon, RssFeedIcon].map((Icon, index) => (
                            <Icon key={index + 'IconSocial'} style={{ margin: '0.5em' }} />
                        ))}
                    </Box>}
                </Box>
            </div>}
        </Parallax> :
            <Skeleton variant='rect' height='60vh' width='100%' />
    )
}

export default Header