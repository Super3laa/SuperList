import { Grid, Typography } from '@mui/material';
import React from 'react';
import './item.css'
export default function HeaderItem (){

    return(
            <Grid container direction="row"  style={{textAlign:"left",color:"#607d8b",padding:"0px 30px"}}>
                <Grid item xs={3}><Typography variant="body">Client</Typography></Grid>
                <Grid item xs={3}><Typography variant="body">date</Typography></Grid>
                <Grid item xs={3}><Typography variant="body">amount</Typography></Grid>
                <Grid item xs={3}><Typography variant="body" >status</Typography></Grid>
            </Grid>
    )

}