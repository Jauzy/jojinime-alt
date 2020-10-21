import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import SearchIcon from '@material-ui/icons/Search';

const Friend = props => {
    return (
        <Paper style={{ padding: '1em' }}>
            <Box style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                <Typography variant='h6' style={{ marginRight: "auto" }}>
                    Teman
                </Typography>
                <FormControl>
                    {/* <InputLabel>Search</InputLabel> */}
                    <Input
                        type='text'
                        placeholder='Search'
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
            <Box style={{ margin: '1em 0', padding: '1em' }}>
                <Grid container spacing={3}>
                    {[1, 2, 3, 4, 5, 6].map((item, idx) => (
                        <Grid key={`idx-${idx}-teman`} item xs={12} md={6}>
                            <Grid container spacing={3} style={{ alignItems: 'center' }}>
                                <Grid item xs={9}>
                                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar alt='Weeb Developer' src='asd' style={{ marginRight: '.8em', width: '2.5em', height: '2.5em' }} />
                                        <Box style={{ marginLeft: '.5em', maxWidth: '100%' }}>
                                            <Typography variant='subtitle1' style={{ fontWeight: 'bold', textOverflow: 'ellipsis' }}>
                                                Muhammad Abdurrahman Al Jauzy
                                            </Typography>
                                            <Typography variant='subtitle2' color='textSecondary'>
                                                @al.zaujy
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={3} style={{display:'flex', justifyContent:'flex-end'}}>
                                    <Button color='primary'>
                                        Add Friend
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Paper>
    )
}

export default Friend