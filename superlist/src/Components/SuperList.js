import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Collapse, Grid, InputBase, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import PlusIcon from '@mui/icons-material/Add';
import './SuperList.css';
import ListHeader from './ListHeader';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import Search from './Search';
import Filter from './Categries';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'non-sortable',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function SuperList({ data }) {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    
    return (
        <React.Fragment>
            <div className="layout">
                <Paper className="TablePaper">
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <ListHeader />
                        </Grid>
                        <Grid justifyContent={"center"} alignItems={"center"} container>
                            <Grid item xs={"auto"}>
                                <Search data={data} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="row" spacing={3}>
                                <Grid item xs={3}>
                                    <Filter data={data}/>
                                </Grid>
                                <Grid item xs={9}>
                                    <Paper elevation={3} className="TableGrid">
                                        <DataGrid
                                            rows={rows}
                                            columns={columns}
                                            checkboxSelection
                                            disableSelectionOnClick
                                        />
                                    </Paper>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Paper>
            </div>

        </React.Fragment>
    )
}