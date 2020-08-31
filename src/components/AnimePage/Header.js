import React from 'react'
import { Parallax } from 'react-parallax'

const Header = props => {
    const { image } = props
    return (
        <Parallax bgImage={image} strength={500}>
            <div style={{ height: '60vh' }} />
        </Parallax>
    )
}

export default Header