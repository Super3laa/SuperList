import React, { useState } from 'react';
import {  Grid } from '@mui/material';

import './SuperList.css';
import ListHeader from './ListHeader';
import Search from './Search';
import Filter from './Categries';
import {invoices} from './dummyData'
import ListFooter from './ListFooter';

export default function SuperList({ data }) { 
    return (
        <React.Fragment>
            <div className="layout">
                    <Grid container direction="column">
                        <Grid justifyContent={"center"} alignItems={"center"} container>
                            <Grid item xs={"auto"}>
                                <Search data={data} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="row" spacing={3}>
                                <Grid item xs={3}>
                                    <Filter data={data}/>
                                </Grid>
                                <Grid item xs={9}>
                                      <ListHeader data={data}/>
                                        {data.headerItem && <data.headerItemComponent />}
                                       {
                                           invoices.map(invoice=>{
                                               return <data.listItemComponent content={invoice} />
                                           })
                                       }
                                     <ListFooter />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
            </div>

        </React.Fragment>
    )
}