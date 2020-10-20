import React, { useState, useEffect } from "react"
import { createMuiTheme, makeStyles, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useRecoilValue } from 'recoil'

import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Footer from './Footer'

import { isDarkMode as atomDarkMode } from '../config/recoil/atoms/utils'

const Layout = ({ children, style }) => {
  const isDarkMode = useRecoilValue(atomDarkMode)
  const [isOpenHamburger, toggleHamburger] = useState(false)
  const classes = useStyles()

  let theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light',
      background: {
        default: isDarkMode ? '#0B1622' : '#EDF1F5',
        paper: isDarkMode ? '#151F2E' : '#FAFAFA'
      }
    },
  });
  theme = responsiveFontSizes(theme)

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', isDarkMode ? '#0B1622' : '#EDF1F5');
    document.documentElement.style.setProperty('--secondary-color', isDarkMode ? '#151F2E' : '#FAFAFA');
    document.documentElement.style.setProperty('--opposite-color', isDarkMode ? '#FFF' : '#000');
  }, [isDarkMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleHamburger={toggleHamburger} />
      <div className={classes.root}>
        <Hamburger isOpen={isOpenHamburger} toggleHamburger={toggleHamburger} />
        <main style={style}>{children}</main>
        <Footer className={classes.footer} />
      </div>
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