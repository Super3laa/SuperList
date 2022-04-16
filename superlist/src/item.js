import { Grid, Paper,Typography } from '@mui/material';
import React from 'react';
import './item.css'
export default function Item (props){

    return(
        <Paper elevation={3}  style={{margin:"10px 5px"}}>
            <Grid container direction="row" style={{textAlign:"left",padding:"10px 30px"}}>
                <Grid item xs={3}><Typography variant="body" style={{fontWeight:"600"}}>{props.content.client}</Typography></Grid>
                <Grid item xs={3}><Typography variant="body">{props.content.date}</Typography></Grid>
                <Grid item xs={3}><Typography variant="body">{props.content.amount}$</Typography></Grid>
                <Grid item xs={3}><Typography variant="body" className={`InvoiceStatus ${props.content.status}`}>{props.content.status}</Typography></Grid>
            </Grid>
        </Paper>
    )

}