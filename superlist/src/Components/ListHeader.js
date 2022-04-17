import React from 'react'
import { Button, Grid, IconButton, Typography, MenuItem, Menu } from '@mui/material';
import PlusIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import SortIcon from '@mui/icons-material/Sort';
export default function ListHeader({ data ,query}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        let arr = [];
        let dataset = event.currentTarget.dataset
        arr.push(dataset.name);arr.push(dataset.sort)
        query.sortFunction(arr)  
        setAnchorEl(null);

    };
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
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >{
                                data.sortMenu.map(menuItem => {
                                    return <MenuItem data-name={menuItem.name} data-sort={menuItem.sort} style={{ fontSize: "0.9rem" }} onClick={handleClose}>{menuItem.title}</MenuItem>
                                })
                            }
                        </Menu>
                        <Grid item ><IconButton
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <SortIcon />
                        </IconButton></Grid>
                        <Grid item ><IconButton >
                            <PrintIcon />
                        </IconButton></Grid>

                        <Grid item> <Button variant="contained" style={{ backgroundColor: `${data.primaryColor}` }} endIcon={<PlusIcon />}>
                            Invoice
                        </Button> </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </React.Fragment>
    )
}