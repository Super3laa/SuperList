import React from 'react'
import { Grid, InputBase, Paper, Button } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import SearchIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Select from 'react-select'
import './Search.css'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Search({ data, query }) {
    const mobile = useMediaQuery('(max-width:600px)');

    const onSubmit = data => {
        Object.keys(data).forEach(key => {
            if (data[key] === undefined || data[key] === '') {
                delete data[key];
            }
        });
        query.queryFunction(data);
    }
    const { handleSubmit, control } = useForm();

    return (
        <>
            <Paper elevation={3} className="Searchbar" style={{ border: `2px ${data.primaryColor} solid` }}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Grid container
                        direction={mobile ? 'column' : 'row'}
                        style={{ padding: "1px 6px" }}>

                        {
                            data.searchAttributes && data.searchAttributesData.map((item, i) => {
                                return <Grid item key={i} xs={mobile ? 12 : "auto"}>
                                    <Grid container
                                        alignItems="flex-start"
                                        direction="column">
                                        <Grid item >
                                            <p className="SearchLabel">
                                                {item.label}
                                            </p>
                                        </Grid>
                                        <Grid item xs={mobile ? 12 : "auto"} style={{ width: "100%" }}>
                                            <Controller
                                                name={item.name}
                                                control={control}
                                                //handleChange={handleChange && handleChange}
                                                render={({ field }) => {
                                                    return <Select
                                                        options={item.options}
                                                        onChange={(data) => {
                                                            field.onChange(data.value);
                                                        }}
                                                    />
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            })
                        }

                        <Grid item xs={mobile ? 12 : "auto"}>
                            <Grid container
                                alignItems="flex-start"
                                direction="column">
                                <Grid item >
                                    <p className="SearchLabel">
                                        {data.searchTitle}
                                    </p>
                                </Grid>
                                <Grid item xs={mobile ? 12 : "auto"}>
                                    <Controller
                                        name={`${data.searchNameQuery}`}
                                        control={control}
                                        render={({ field }) => {
                                            return <InputBase
                                                placeholder="Search.."
                                                fullWidth
                                                onChange={(data) => {
                                                    field.onChange(data.target.value);
                                                }}
                                            />
                                        }}

                                    />

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={mobile ? 12 : "auto"}>
                            <Grid container
                                direction="column"
                                justifyContent="center"
                            >
                                <Grid item xs={mobile ? 12 : "auto"}><p className="SearchLabel" /></Grid>
                                <Grid item xs={mobile ? 12 : "auto"} >
                                    {mobile ?
                                        <Button variant="contained" type="submit" style={{ width: "100%", backgroundColor: `${data.primaryColor}` }} endIcon={<SearchIcon />}>
                                            Search
                                        </Button>
                                        : <IconButton type="submit" aria-label="search" style={{ display: "flex" }}>
                                            <SearchIcon style={{ color: `${data.primaryColor}`, display: "block", margin: "auto" }} />
                                        </IconButton>}
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </>
    )
}