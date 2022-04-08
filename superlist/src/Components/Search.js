import React from 'react'
import { Grid, InputBase, Paper } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import SearchIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Select from 'react-select'
import './Search.css'
export default function Search({ data }) {
    const onSubmit = data => console.log(data);
    const { handleSubmit, control } = useForm();

    return (
        <>
            <Paper elevation={0} className="Searchbar">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Grid container
                        direction="row"
                        style={{ padding: "1px 6px" }}>

                        {
                            data.searchAttributes && data.searchAttributesData.map(item => {
                                return <Grid item>
                                    <Grid container
                                        alignItems="flex-start"
                                        direction="column">
                                        <Grid item >
                                            <p className="SearchLabel">
                                                {item.label}
                                            </p>
                                        </Grid>
                                        <Grid item>
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

                        <Grid item>
                            <Grid container
                                alignItems="flex-start"
                                direction="column">
                                <Grid item >
                                    <p className="SearchLabel">
                                        Search
                                    </p>
                                </Grid>
                                <Grid item>
                                    <Controller 
                                        name="search"
                                        control={control}
                                        render={({field})=>{
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
                        <Grid item>
                            <Grid container
                                direction="column"
                                justifyContent="center"
                            >
                                <Grid item><p className="SearchLabel" /></Grid>
                                <Grid item >
                                    <IconButton type="submit" aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </>
    )
}