import React from "react"
import { ParallaxProvider } from 'react-scroll-parallax';

const Wrapper = ({ children }) => {
    

    return (
        <ParallaxProvider>
            <main>{children}</main>
        </ParallaxProvider>
    )
}

export default Wrapper