import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios'
import './SuperList.css';
import ListHeader from './ListHeader';
import Search from './Search';
import Filter from './Filters';
import ListFooter from './ListFooter';

export default function SuperList({ data }) {
    const [dataDB, setDataDB] = useState([]);
    const [listQuery, setlistQuery] = useState({});
    const [listSort,setlistSort] = useState([])
    const [paginationQuery,setPaginationQuery]=useState({limit:10,offset:0});
    useEffect(() => {
        fetch()
        async function fetch() {
            let query = '';
            query += `limit=${paginationQuery.limit}&offset=${paginationQuery.offset}`
            query += `&filter=${JSON.stringify(listQuery)}`
            if(listSort.length>0){
                query += `&sort=${JSON.stringify(listSort)}`
            }
            let res = await axios.get(data.API + `?${query}`);
            setDataDB(res.data);
        }
    }, [data.API, listQuery,paginationQuery,listSort])

    function handlePaginationQueryUpdate({limit,offset}){
        setPaginationQuery({limit,offset})
    }
    function handleListQuery(Obj){
        setlistQuery(Obj)
    }
    function handleListSort(Obj){
        setlistSort(Obj)
    }

    return (
        <React.Fragment>
            <div className="layout">
                <Grid container direction="column">
                    <Grid justifyContent={"center"} alignItems={"center"} container>
                        <Grid item xs={"auto"}>
                            <Search data={data} query={{queryFunction:handleListQuery}} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" spacing={3}>
                            <Grid item xs={3}>
                                <Filter data={data} query={{queryFunction:handleListQuery}} />
                            </Grid>
                            <Grid item xs={9}>
                                <ListHeader data={data}  query={{sortFunction:handleListSort}}/>
                                <div id="Table">
                                {data.headerItem && <data.headerItemComponent />}
                                {
                                    dataDB.rows && dataDB.rows.map(invoice => {
                                        return <data.listItemComponent content={invoice} />
                                    })
                                }
                                </div>
                                
                                <ListFooter content={{queryUpdate:handlePaginationQueryUpdate,count:dataDB.count}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    )
}