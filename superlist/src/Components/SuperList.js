import { Button, Grid, Typography } from '@mui/material';
import PlusIcon from '@mui/icons-material/Add';
import React from 'react';
import './SuperList.css'
export default function SuperList(){
    return(
        <React.Fragment>
            <div className="layout">
                <Grid  spacing={2} 
                container
                direction="row"
            >
                    <Grid item xs={8} className="TitleItem">
                        <Typography variant="h5">
                            PageName
                        </Typography>
                        <Typography className="TitleDescription">
                            Page desciption incase if ther's one
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Button variant="contained" endIcon={<PlusIcon />}>
                        New Item
                        </Button>
                    </Grid>
                </Grid>
            </div>
            
        </React.Fragment>
    )
}