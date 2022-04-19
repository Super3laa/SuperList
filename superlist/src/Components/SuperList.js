import React, { useState, useEffect } from 'react';
import { Grid, Button, Modal, IconButton } from '@mui/material';
import axios from 'axios'
import './SuperList.css';
import ListHeader from './ListHeader';
import Search from './Search';
import Filter from './Filters';
import ListFooter from './ListFooter';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
export default function SuperList({ data }) {
    const mobile = useMediaQuery('(max-width:600px)');

    const [dataDB, setDataDB] = useState([]);
    const [listQuery, setlistQuery] = useState({});
    const [listSort, setlistSort] = useState([])
    const [paginationQuery, setPaginationQuery] = useState({ limit: 10, offset: 0 });
    useEffect(() => {
        fetch()
        async function fetch() {
            let query = '';
            query += `limit=${paginationQuery.limit}&offset=${paginationQuery.offset}`
            query += `&filter=${JSON.stringify(listQuery)}`
            if (listSort.length > 0) {
                query += `&sort=${JSON.stringify(listSort)}`
            }
            let res = await axios.get(data.API + `?${query}`);
            setDataDB(res.data);
        }
    }, [data.API, listQuery, paginationQuery, listSort])

    function handlePaginationQueryUpdate({ limit, offset }) {
        setPaginationQuery({ limit, offset })
    }
    function handleListQuery(Obj) {
        setlistQuery(Obj)
    }
    function handleListSort(Obj) {
        setlistSort(Obj)
    }


    const [open, setOpen] = React.useState({ state: false, component: null });
    const toggleModal = (type) => {
        let component = null
        if (type === "search") {
            component = <Search data={data} query={{ queryFunction: handleListQuery }} />
        } else if (type === "filter") {
            component = <Filter data={data} query={{ queryFunction: handleListQuery }} />

        }
        setOpen({ component, state: !open.state })
    };

    return (
        <React.Fragment>
            <div className="layout">
                <Grid container direction="column">
                    <Grid justifyContent={"center"} alignItems={"center"} container>
                        <Grid item xs={mobile ? 12 : "auto"}>
                            <Modal
                                open={open.state}
                                onClose={toggleModal}
                                aria-labelledby="search-modal"
                            >
                                <div className="modal">
                                    {open.component}
                                </div>
                            </Modal>
                            {
                                mobile ?
                                    <Grid container direction="row" spacing={3}>
                                        <Grid item xs={10}>
                                            <Button onClick={() => toggleModal('search')} variant="contained" style={{ width: "100%", backgroundColor: `${data.primaryColor}` }} endIcon={<SearchIcon />}>Search</Button>
                                        </Grid>
                                        <Grid item xs={2}>
                                        <IconButton aria-label="filter" style={{ display: "flex" }}>
                                            <FilterAltIcon onClick={() => toggleModal('filter')} style={{display: "block", margin: "auto" }} />
                                        </IconButton>
                                        </Grid>

                                    </Grid> : <Search data={data} query={{ queryFunction: handleListQuery }} />
                            }

                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" spacing={3}>
                            {
                                (data.categorySection && !mobile) && <Grid item xs={mobile ? 12 : 3}>
                                    <Filter data={data} query={{ queryFunction: handleListQuery }} />
                                </Grid>
                            }

                            <Grid item xs={data.categorySection && !mobile ? 9 : 12}>
                                <ListHeader data={data} query={{ sortFunction: handleListSort }} />
                                <div id="Table">
                                    {data.headerItem && <data.headerItemComponent />}
                                    {
                                        dataDB.rows && dataDB.rows.map(invoice => {
                                            return <data.listItemComponent content={invoice} />
                                        })
                                    }
                                </div>

                                <ListFooter content={{ queryUpdate: handlePaginationQueryUpdate, count: dataDB.count }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    )
}