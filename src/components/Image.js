import React, { useState } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const Image = props => {
    const [loaded, setLoaded] = useState(false)
    return (
        loaded ?
            <img src={props.src} alt='image' width='100%' onLoad={() => setLoaded(true)} />
            : <Skeleton variant='rect' width='100%' height='100&' />
    )
}

export default Image