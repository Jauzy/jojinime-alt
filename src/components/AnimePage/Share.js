import React from 'react'
import {
    FacebookShareButton,
    LineShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    FacebookIcon,
    LineIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const ShareSection = (props) => {
    const style = {
        borderRadius: '10px',
        padding: '.5em 1em',
        display: 'flex',
    }
    const { pathname } = props.location
    const url = "https://www.jojinime.xyz"
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '2em', justifyContent: 'center' }}>

            <ShareButton Wrapper={FacebookShareButton} Icon={FacebookIcon} label={'Facebook'} style={style} url={url} pathname={pathname} />
            <ShareButton Wrapper={LineShareButton} Icon={LineIcon} label={'Line'} style={style} url={url} pathname={pathname} />
            <ShareButton Wrapper={RedditShareButton} Icon={RedditIcon} label={'Reddit'} style={style} url={url} pathname={pathname} />
            <ShareButton Wrapper={TelegramShareButton} Icon={TelegramIcon} label={'Telegram'} style={style} url={url} pathname={pathname} />
            <ShareButton Wrapper={TwitterShareButton} Icon={TwitterIcon} label={'Twitter'} style={style} url={url} pathname={pathname} />
            <ShareButton Wrapper={WhatsappShareButton} Icon={WhatsappIcon} label={'Whatsapp'} style={style} url={url} pathname={pathname} />

        </div>
    )
}

export default ShareSection

const ShareButton = props => (
    <props.Wrapper url={props.url + props.pathname} style={{ margin: '.5em 1em' }}>
        <Paper style={props.style}>
            <props.Icon size={32} round={true} />
            <Typography variant='h5' style={{ marginLeft: '.5em' }}>
                {props.label}
            </Typography>
        </Paper>
    </props.Wrapper>
)