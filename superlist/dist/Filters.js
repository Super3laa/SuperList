import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
export default function Filter({
  data,
  query
}) {
  const [listState, setListState] = useState({});
  useEffect(() => {
    let temp = {};
    data.categories.forEach(category => {
      if (category.nested) temp[`${category.name}`] = false;
    });
    setListState(temp);
  }, [data.categories]);

  const handleClick = categoryName => {
    let temp = listState;
    temp[`${categoryName}`] = !temp[`${categoryName}`];
    setListState({ ...temp
    });
  };

  const handleFilter = (categoryName, subCategory) => {
    let Obj = {};
    Obj[categoryName] = subCategory;
    query.queryFunction(Obj);
  };

  return /*#__PURE__*/React.createElement(Paper, {
    elevation: 3,
    className: "CategoriesSection"
  }, /*#__PURE__*/React.createElement(List, {
    component: "nav",
    "aria-labelledby": "nested-list-subheader",
    subheader: /*#__PURE__*/React.createElement(ListSubheader, {
      component: "div",
      id: "nested-list-subheader",
      style: {
        background: `${data.primaryColor}`,
        fontSize: "1rem",
        color: "#fff"
      }
    }, data.categorySubHeader)
  }, data.categories.map((category, i) => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItemButton, {
      key: i,
      onClick: () => handleClick(category.name)
    }, category.categoryIcon && /*#__PURE__*/React.createElement(ListItemIcon, null, category.Icon), /*#__PURE__*/React.createElement(ListItemText, {
      primary: `${category.title}`
    }), category.nested ? listState[`${category.name}`] && listState ? /*#__PURE__*/React.createElement(ExpandLess, null) : /*#__PURE__*/React.createElement(ExpandMore, null) : null), category.nested && listState && /*#__PURE__*/React.createElement(Collapse, {
      in: listState[`${category.name}`],
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/React.createElement(List, {
      component: "div",
      disablePadding: true,
      key: i
    }, category.subCategories.map((subCategory, j) => {
      return /*#__PURE__*/React.createElement(ListItemButton, {
        key: j,
        sx: {
          pl: 4
        },
        onClick: () => handleFilter(category.name, subCategory.name)
      }, subCategory.subCategoryIcon && /*#__PURE__*/React.createElement(ListItemIcon, null, subCategory.Icon), /*#__PURE__*/React.createElement(ListItemText, {
        primary: `${subCategory.title}`
      }));
    }))));
  })));
}