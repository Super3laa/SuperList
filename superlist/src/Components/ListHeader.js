import React from 'react'
import { Button, Grid, IconButton, Typography } from '@mui/material';
import PlusIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
export default function ListHeader({ data }) {
    return (
        <React.Fragment>
            <Grid spacing={2}
                container
                direction="row"
                justifyContent="space-between"
            >
                <Grid item className="TitleItem">
                    <Typography variant="h5" style={{ fontWeight: "800" }}>
                        {data.pageName}
                    </Typography>
                    <Typography className="TitleDescription">
                        {data.pageSummary}
                    </Typography>
                </Grid>
                <Grid item  >
                    <Grid container spacing="6">
                        
                        <Grid item ><IconButton >
                            <PrintIcon />
                        </IconButton></Grid>
                        {/*<Grid item ><IconButton >
                            <FilterAltIcon />
                        </IconButton></Grid>   Future dev*/}
                        <Grid item> <Button variant="contained" style={{backgroundColor:`${data.primaryColor}`}} endIcon={<PlusIcon />}>
                            Invoice
                        </Button> </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </React.Fragment>
    )
}