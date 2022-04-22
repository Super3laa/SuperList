import React, { useState, useEffect } from 'react';
import { Grid, Button, Modal, IconButton } from '@mui/material';
import axios from 'axios';
import './SuperList.css';
import ListHeader from './ListHeader';
import Search from './Search';
import Filter from './Filters';
import ListFooter from './ListFooter';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
export default function SuperList({
  data
}) {
  const mobile = useMediaQuery('(max-width:600px)');
  const [dataDB, setDataDB] = useState([]);
  const [listQuery, setlistQuery] = useState({});
  const [listSort, setlistSort] = useState([]);
  const [paginationQuery, setPaginationQuery] = useState({
    limit: 10,
    offset: 0
  });
  useEffect(() => {
    fetch();

    async function fetch() {
      let query = '';
      query += `limit=${paginationQuery.limit}&offset=${paginationQuery.offset}`;
      query += `&filter=${JSON.stringify(listQuery)}`;

      if (listSort.length > 0) {
        query += `&sort=${JSON.stringify(listSort)}`;
      }

      let res = await axios.get(data.API + `?${query}`);
      setDataDB(res.data);
    }
  }, [data.API, listQuery, paginationQuery, listSort]);

  function handlePaginationQueryUpdate({
    limit,
    offset
  }) {
    setPaginationQuery({
      limit,
      offset
    });
  }

  function handleListQuery(Obj) {
    setlistQuery(Obj);
  }

  function handleListSort(Obj) {
    setlistSort(Obj);
  }

  const [open, setOpen] = React.useState({
    state: false,
    component: null
  });

  const toggleModal = type => {
    let component = null;

    if (type === "search") {
      component = /*#__PURE__*/React.createElement(Search, {
        data: data,
        query: {
          queryFunction: handleListQuery
        }
      });
    } else if (type === "filter") {
      component = /*#__PURE__*/React.createElement(Filter, {
        data: data,
        query: {
          queryFunction: handleListQuery
        }
      });
    }

    setOpen({
      component,
      state: !open.state
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "layout"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/React.createElement(Grid, {
    justifyContent: "center",
    alignItems: "center",
    container: true
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: mobile ? 12 : "auto"
  }, /*#__PURE__*/React.createElement(Modal, {
    open: open.state,
    onClose: toggleModal,
    "aria-labelledby": "search-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, open.component)), mobile ? /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    spacing: 3
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: data.categorySection ? 10 : 12
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => toggleModal('search'),
    variant: "contained",
    style: {
      width: "100%",
      backgroundColor: `${data.primaryColor}`
    },
    endIcon: /*#__PURE__*/React.createElement(SearchIcon, null)
  }, "Search")), data.categorySection && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 2
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "filter",
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(FilterAltIcon, {
    onClick: () => toggleModal('filter'),
    style: {
      display: "block",
      margin: "auto"
    }
  })))) : /*#__PURE__*/React.createElement(Search, {
    data: data,
    query: {
      queryFunction: handleListQuery
    }
  }))), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    spacing: 3
  }, data.categorySection && !mobile && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: mobile ? 12 : 3
  }, /*#__PURE__*/React.createElement(Filter, {
    data: data,
    query: {
      queryFunction: handleListQuery
    }
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: data.categorySection && !mobile ? 9 : 12
  }, /*#__PURE__*/React.createElement(ListHeader, {
    data: data,
    query: {
      sortFunction: handleListSort
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "Table"
  }, data.headerItem && /*#__PURE__*/React.createElement(data.headerItemComponent, null), dataDB.rows && dataDB.rows.map(invoice => {
    return /*#__PURE__*/React.createElement(data.listItemComponent, {
      content: invoice
    });
  })), /*#__PURE__*/React.createElement(ListFooter, {
    content: {
      queryUpdate: handlePaginationQueryUpdate,
      count: dataDB.count
    }
  })))))));
}