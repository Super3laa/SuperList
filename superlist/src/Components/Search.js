import React from 'react'
import { Grid, InputBase, Paper, TextField, Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Select from 'react-select'
import './Search.css'
export default function Search() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
            <Paper elevation={0} className="Searchbar">
                <Grid container
                    direction="row"
                  style={{ padding: "1px 6px" }}>

                    {/*repeated for filteration future dev */}
              

                    <Grid item>
                        <Grid container
                            alignItems="flex-start"
                            direction="column">
                            <Grid item >
                                <p className="SearchLabel">
                                    Flavour
                                </p>
                            </Grid>
                            <Grid item>
                                <Select options={options} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container
                            alignItems="flex-start"
                            direction="column">
                            <Grid item >
                                <p className="SearchLabel">
                                    Flavour
                                </p>
                            </Grid>
                            <Grid item>
                                <Select options={options} />
                            </Grid>
                        </Grid>
                    </Grid><Grid item>
                        <Grid container
                            alignItems="flex-start"
                            direction="column">
                            <Grid item >
                                <p className="SearchLabel">
                                    Flavour
                                </p>
                            </Grid>
                            <Grid item>
                                <Select options={options} />
                            </Grid>
                        </Grid>
                    </Grid> 

                    <Grid item>
                        <Grid container
                            alignItems="flex-start"
                            direction="column">
                            <Grid item >
                                <p  className="SearchLabel">
                                    Search
                                </p>
                            </Grid>
                            <Grid item>
                                <InputBase
                                    placeholder="Search.."
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item> 
                    <Grid container
                        direction="column"
                        justifyContent="center"
                    >   
                        <Grid item><p className="SearchLabel"/></Grid>
                        <Grid item >
                        <IconButton type="submit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        </Grid>
                       
                    </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}