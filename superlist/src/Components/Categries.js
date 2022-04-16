import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
export default function Filter({ data }) {
    const [listState, setListState] = useState({});
    useEffect(() => {
        let temp = {};
        data.categories.forEach((category) => {
            if (category.nested) temp[`${category.name}`] = false
        })
        setListState(temp)
    }, [data.categories])

    const handleClick = (categoryName) => {
        let temp = listState
        temp[`${categoryName}`] = !temp[`${categoryName}`]
        setListState({ ...temp })
    };

    return (
        <Paper elevation={3} className="CategoriesSection">
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" style={{background:`${data.primaryColor}`,fontSize:"1rem",color:"#fff"}}>
                        {data.categorySubHeader}
                    </ListSubheader>
                }
            >
                {
                    data.categories.map((category, i) => {
                        return <>
                            <ListItemButton key={i} onClick={() => handleClick(category.name)}>
                                {
                                    category.categoryIcon && <ListItemIcon>
                                        {category.Icon}

                                    </ListItemIcon>
                                }
                                <ListItemText primary={`${category.name}`} />
                                {category.nested ? (listState[`${category.name}`] && listState) ? <ExpandLess /> : <ExpandMore /> : null}
                            </ListItemButton>
                            {
                                (category.nested && listState) && <Collapse in={listState[`${category.name}`]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding key={i}>
                                        {
                                            category.subCategories.map((subCategory, j) => {
                                                return (
                                                    <ListItemButton key={j} sx={{ pl: 4 }}>
                                                        {subCategory.subCategoryIcon && <ListItemIcon>
                                                            {subCategory.Icon}
                                                        </ListItemIcon>}
                                                        <ListItemText primary={`${subCategory.name}`} />
                                                    </ListItemButton>
                                                )
                                            })
                                        }
                                    </List>
                                </Collapse>
                            }

                        </>
                    })
                }
            </List>
        </Paper>
    )
}