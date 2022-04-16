import { Grid } from '@mui/material'
import React, { useState } from 'react'
import TablePagination from '@mui/material/TablePagination';

export default function ListFooter() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        console.log(newPage)
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <Grid container justifyContent="space-around">
            <TablePagination
                component="div"
                count={127}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Grid>
    )
}