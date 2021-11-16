import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import HouseIcon from "@mui/icons-material/House";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginTop: "3rem",
    marginBottom: "10rem",
    height: "85%",
  },
  title: {
    minWidth: "40%",
    maxWidth: "100%",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "5rem",
    },
  },
  boxChoice: {
    alignItems: "center",
    justifyContent: "center",
  },
}));

function MarketCreate() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container size="lg">
        <Box>
          <Breadcrumbs aria-label="breadcrumb">
            <span style={{ cursor: "not-allowed" }}>
              <Button color="inherit" component={Link} to="/">
                主页
              </Button>
            </span>
            <span style={{ cursor: "not-allowed" }}>
              <Button color="inherit" component={Link} to="/market">
                商城
              </Button>
            </span>
            <span style={{ cursor: "not-allowed" }}>
              <Button color="inherit" component={Link} to="/market/create">
                发布商品
              </Button>
            </span>
          </Breadcrumbs>
        </Box>
        <Box className={classes.title}>
          <Typography variant="h4">选择你要发布的商品类型</Typography>
        </Box>
        <Grid container spacing={4} className={classes.boxChoice} height="100%">
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <IconButton
                style={{
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                  borderRadius: "0",
                }}
                size="large"
                component={Link}
                to="/market/create/item"
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <AddShoppingCartIcon />
                </Avatar>
                <Typography gutterBottom variant="h5">
                  二手用品
                </Typography>
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <IconButton
                style={{
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                  borderRadius: "0",
                }}
                size="large"
                component={Link}
                to="/market/create/vehicle"
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <DriveEtaIcon />
                </Avatar>
                <Typography gutterBottom variant="h5">
                  汽车
                </Typography>
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <IconButton
                style={{
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                  borderRadius: "0",
                }}
                size="large"
                component={Link}
                to="/market/create/rental"
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <HouseIcon />
                </Avatar>
                <Typography gutterBottom variant="h5">
                  房屋
                </Typography>
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MarketCreate;
