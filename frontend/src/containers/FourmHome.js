import Grid from "@material-ui/core/Grid";
import { Hidden } from '@material-ui/core';
import React from 'react'
import { makeStyles } from "@material-ui/styles";
import Divider from '@material-ui/core/Divider';
import ForumRightSide from '../components/Forum/ForumRightSide';
import ForumLeftSide from '../components/Forum/ForumLeftSide';

const useStyles = makeStyles((theme) => ({

    root: {
        background:"#fff",
        display:"flex",
        flexDirection:"row",
        
    },

    })
)
const FourmHome = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={11} md={10} lg={10} xl={10}>
                    <ForumLeftSide/>
                </Grid>
                <Hidden xsDown>
                <Grid item sm={1} md={2}>
                    <ForumRightSide/>
                </Grid>
                </Hidden>
            </Grid>
        </div>
    )
};

export default FourmHome;
