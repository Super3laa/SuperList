import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import PlusIcon from '@mui/icons-material/Add';
export default function ListHeader({data}){
    return(
        <React.Fragment>
             <Grid  spacing={2} 
                container
                direction="row"
                justifyContent="space-between"
            >
                    <Grid item  className="TitleItem">
                        <Typography variant="h5" style={{fontWeight:"800"}}>
                            {data.pageName}
                        </Typography>
                        <Typography className="TitleDescription">
                            {data.pageSummary}
                        </Typography>
                    </Grid>
                    <Grid item  >
                    <Button variant="contained"endIcon={<PlusIcon />}>
                       Invoice
                        </Button>
                    </Grid>
                </Grid>
        </React.Fragment>
    )
} 