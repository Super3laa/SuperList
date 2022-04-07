import React from 'react'
import { Grid, InputBase, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
export default function Search() {
    return (
        <>
            <React.Fragment>{/*This was a paper component */}
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" style={{ padding: "1px 6p`x" }}>
                    <Grid item xs={11}>
                        <InputBase
                            placeholder="Search.."
                            fullWidth
                        />
                    </Grid>
                    <Grid xs={1}>
                        <IconButton type="submit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </React.Fragment>
        </>
    )
}