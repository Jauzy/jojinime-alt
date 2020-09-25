import React, { useState, useEffect } from "react"
import { createMuiTheme, makeStyles, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';
import { RecoilRoot } from 'recoil'

import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [isLightMode, setMode] = useState(true)
  const [isOpenHamburger, toggleHamburger] = useState(false)
  const classes = useStyles()

  let theme = createMuiTheme({
    palette: {
      type: isLightMode ? 'light' : 'dark',
      background: {
        default: isLightMode ? '#EDF1F5' : '#0B1622',
        paper: isLightMode ? '#FAFAFA' : '#151F2E'
      }
    },
  });
  theme = responsiveFontSizes(theme)

  useEffect(() => {
    //required for material ui to work on gatsby lol
    setMode(!isLightMode)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', isLightMode ? '#EDF1F5' : '#0B1622');
    document.documentElement.style.setProperty('--secondary-color', isLightMode ? '#FAFAFA' : '#151F2E');
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