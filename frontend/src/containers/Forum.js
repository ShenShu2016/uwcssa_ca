import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import ForumAdSide from '../components/Forum/ForumAdSide';
import ForumMain from '../components/Forum/ForumMain';
import OpenIconSpeedDial from '../components/Forum/OpenIconSpeedDial';

const useStyles = makeStyles((theme) => ({

    root: {
        background:"#fff",
        display:"flex",
        flexDirection:"row",
        
    },
    speedDial:{

    }

    })
)


const Forum = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
                    <ForumMain/>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                    <OpenIconSpeedDial/>
                </Grid>
                <Hidden xsDown>
                <Grid item sm={1} md={2}>
                    <ForumAdSide/>
                </Grid>
                </Hidden>
            </Grid>
        </div>
    )
};

export default Forum;
