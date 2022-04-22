import { Grid } from '@mui/material';
import React, { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
export default function ListFooter({
  content
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    content.queryUpdate({
      limit: rowsPerPage,
      offset: rowsPerPage * newPage
    });
  };

  const handleChangeRowsPerPage = event => {
    const limit = parseInt(event.target.value, 10);
    setRowsPerPage(limit);
    setPage(0);
    content.queryUpdate({
      limit,
      offset: 0
    });
  };

  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justifyContent: "space-around"
  }, /*#__PURE__*/React.createElement(TablePagination, {
    component: "div",
    count: content.count,
    page: page,
    onPageChange: handleChangePage,
    rowsPerPage: rowsPerPage,
    onRowsPerPageChange: handleChangeRowsPerPage
  }));
}