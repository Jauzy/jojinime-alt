import React, { useState, useEffect } from "react"
import { createMuiTheme, makeStyles, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import yellow from '@material-ui/core/colors/yellow'
import { ParallaxProvider } from 'react-scroll-parallax';
import { RecoilRoot } from 'recoil'

import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [isLightMode, setMode] = useState(false)
  const [isOpenHamburger, toggleHamburger] = useState(false)
  const classes = useStyles()

  let theme = createMuiTheme({
    palette: {
      type: isLightMode ? 'light' : 'dark',
      warning: {
        main: yellow[500]
      }
    },
    status: {
      warning: yellow[500]
    }
  });
  theme = responsiveFontSizes(theme)

  useEffect(() => {
    setMode(isLightMode)
  },[])

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', isLightMode ? '#FAFAFA' : '#303030');
    document.documentElement.style.setProperty('--secondary-color', isLightMode ? '#FFF' : '#424242');
    document.documentElement.style.setProperty('--opposite-color', isLightMode ? '#000' : '#FFF');
  }, [isLightMode])

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <ParallaxProvider>
          <CssBaseline />
          <Navbar lightMode={setMode} isLightMode={isLightMode} toggleHamburger={toggleHamburger} />
          <div className={classes.root}>
            <Hamburger isOpen={isOpenHamburger} toggleHamburger={toggleHamburger} />
            <main>{children}</main>
            <Footer className={classes.footer} />
          </div>
        </ParallaxProvider>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default Layout

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  footer: {
    marginTop: 'auto'
  }
}));