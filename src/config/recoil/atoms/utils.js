import { atom } from 'recoil'
import {indigo } from '@material-ui/core/colors'

export const isDarkMode = atom({
    key: 'isDarkMode',
    default: true
})

export const primaryColor = atom({
    key: 'primaryColor',
    default: indigo[500]
})