import React from 'react';
import { Grid, InputBase, Paper, Button } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import SearchIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Select from 'react-select';
import './Search.css';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function Search({
  data,
  query
}) {
  const mobile = useMediaQuery('(max-width:600px)');

  const onSubmit = data => {
    Object.keys(data).forEach(key => {
      if (data[key] === undefined || data[key] === '') {
        delete data[key];
      }
    });
    query.queryFunction(data);
  };

  const {
    handleSubmit,
    control
  } = useForm();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Paper, {
    elevation: 3,
    className: "Searchbar",
    style: {
      border: `2px ${data.primaryColor} solid`
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: mobile ? 'column' : 'row',
    style: {
      padding: "1px 6px"
    }
  }, data.searchAttributes && data.searchAttributesData.map((item, i) => {
    return /*#__PURE__*/React.createElement(Grid, {
      item: true,
      key: i,
      xs: mobile ? 12 : "auto"
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      alignItems: "flex-start",
      direction: "column"
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true
    }, /*#__PURE__*/React.createElement("p", {
      className: "SearchLabel"
    }, item.label)), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: mobile ? 12 : "auto",
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Controller, {
      name: item.name,
      control: control //handleChange={handleChange && handleChange}
      ,
      render: ({
        field
      }) => {
        return /*#__PURE__*/React.createElement(Select, {
          options: item.options,
          onChange: data => {
            field.onChange(data.value);
          }
        });
      }
    }))));
  }), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: mobile ? 12 : "auto"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    alignItems: "flex-start",
    direction: "column"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement("p", {
    className: "SearchLabel"
  }, data.searchTitle)), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: mobile ? 12 : "auto"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: `${data.searchNameQuery}`,
    control: control,
    render: ({
      field
    }) => {
      return /*#__PURE__*/React.createElement(InputBase, {
        placeholder: "Search..",
        fullWidth: true,
        onChange: data => {
          field.onChange(data.target.value);
        }
      });
    }
  })))), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: mobile ? 12 : "auto"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: mobile ? 12 : "auto"
  }, /*#__PURE__*/React.createElement("p", {
    className: "SearchLabel"
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: mobile ? 12 : "auto"
  }, mobile ? /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    type: "submit",
    style: {
      width: "100%",
      backgroundColor: `${data.primaryColor}`
    },
    endIcon: /*#__PURE__*/React.createElement(SearchIcon, null)
  }, "Search") : /*#__PURE__*/React.createElement(IconButton, {
    type: "submit",
    "aria-label": "search",
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(SearchIcon, {
    style: {
      color: `${data.primaryColor}`,
      display: "block",
      margin: "auto"
    }
  })))))))));
}