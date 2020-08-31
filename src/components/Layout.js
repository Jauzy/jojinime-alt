import React, { useState, useEffect } from "react"
import { createMuiTheme, makeStyles, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import yellow from '@material-ui/core/colors/yellow'

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
    document.documentElement.style.setProperty('--bg-color', isLightMode ? '#FAFAFA' : '#303030');
    document.documentElement.style.setProperty('--secondary-color', isLightMode ? '#FFF' : '#424242');
    document.documentElement.style.setProperty('--opposite-color', isLightMode ? '#000' : '#FFF');
  }, [isLightMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar lightMode={setMode} isLightMode={isLightMode} toggleHamburger={toggleHamburger} />
      <Hamburger isOpen={isOpenHamburger} toggleHamburger={toggleHamburger} />
      <main className={classes.root}>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden'
  },
}));