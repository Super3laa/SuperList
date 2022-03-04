import React, { useState } from 'react';
import { Button, Grid, InputBase, TextField, Typography } from '@mui/material';
import PlusIcon from '@mui/icons-material/Add';
import './SuperList.css';
import ListHeader from './ListHeader';
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
import { visuallyHidden } from '@mui/utils';
const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
    },
];
let data = Array([
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
]);
function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}

export default function SuperList() {
    let rows = data[0];
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    function createSortHandler(cellId) {
        setOrder((orderBy === cellId && order === 'asc') ? 'desc' : 'asc');
        setOrderBy(cellId);
    }
    return (
        <React.Fragment>
            <div className="layout">
                <Paper className="TablePaper">
                    <Grid container>
                        <Grid item xs={12}>
                            <ListHeader />
                        </Grid>
                        <Grid container>
                            <Grid item xs={8}>
                                <Paper>
                                    <Grid container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center" style={{padding:"1px 8px"}}>
                                        <Grid item xs={11}>
                                            <InputBase
                                                placeholder="Search.."
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid xs={1}>
                                            <IconButton type="submit" aria-label="search">
                                                <SearchIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>


                                </Paper>

                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {headCells.map((headCell) => (
                                            <TableCell
                                                key={headCell.id}
                                                align={'left'}
                                                sortDirection={orderBy === headCell.id ? order : false}
                                            >
                                                <TableSortLabel
                                                    active={orderBy === headCell.id}
                                                    direction={orderBy === headCell.id ? order : 'asc'}
                                                    onClick={() => createSortHandler(headCell.id)}
                                                >
                                                    {headCell.label}

                                                </TableSortLabel>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {
                                        rows.map(row => {
                                            return (
                                                <TableRow
                                                    tabIndex={-1}
                                                    key={row.name}
                                                    hover>
                                                    {
                                                        Object.keys(row).map(cell => {
                                                            return (
                                                                <TableCell>
                                                                    {row[cell]}
                                                                </TableCell>
                                                            )
                                                        })
                                                    }
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

        </React.Fragment>
    )
}