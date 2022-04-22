import React from 'react';
import { Button, Grid, IconButton, Typography, MenuItem, Menu } from '@mui/material';
import PlusIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import SortIcon from '@mui/icons-material/Sort';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function ListHeader({
  data,
  query
}) {
  const mobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = event => {
    let arr = [];
    let dataset = event.currentTarget.dataset;
    arr.push(dataset.name);
    arr.push(dataset.sort);
    query.sortFunction(arr);
    setAnchorEl(null);
  };

  const handlePrintRows = () => {
    var printsection = document.getElementById('Table').innerHTML;
    document.body.innerHTML = printsection;
    window.print();
    window.location.reload();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    spacing: 2,
    container: true,
    direction: "row",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: mobile ? 12 : "auto",
    className: "TitleItem"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h5",
    style: {
      color: "#2b373e",
      fontWeight: "800"
    }
  }, data.pageName), /*#__PURE__*/React.createElement(Typography, {
    className: "TitleDescription"
  }, data.pageSummary)), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: mobile ? 12 : "auto"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: "6",
    justifyContent: "space-around"
  }, /*#__PURE__*/React.createElement(Menu, {
    id: "demo-positioned-menu",
    "aria-labelledby": "demo-positioned-button",
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    }
  }, data.sortMenu.map(menuItem => {
    return /*#__PURE__*/React.createElement(MenuItem, {
      "data-name": menuItem.name,
      "data-sort": menuItem.sort,
      style: {
        fontSize: "0.9rem"
      },
      onClick: handleClose
    }, menuItem.title);
  })), data.sort && /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(IconButton, {
    id: "demo-positioned-button",
    "aria-controls": open ? 'demo-positioned-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(SortIcon, null))), data.print && /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: handlePrintRows
  }, /*#__PURE__*/React.createElement(PrintIcon, null))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, " ", /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    onClick: data.addButtonOnClickFunction,
    style: {
      backgroundColor: `${data.primaryColor}`
    },
    endIcon: /*#__PURE__*/React.createElement(PlusIcon, null)
  }, data.addButtonTitle), " ")))));
}