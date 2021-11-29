import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CustomBreadcrumbs from "../../components/CustomMUI/CustomBreadcrumbs";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import HouseIcon from "@mui/icons-material/House";
import { Link } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
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
    justifyContent: "flex-start",
  },
}));

const ListCategory = ({ type, icon, location }) => {
  return (
    <React.Fragment>
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
            to={`/market/create/${location}`}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>{icon}</Avatar>
            <Typography gutterBottom variant="h5">
              {type}
            </Typography>
          </IconButton>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

function MarketCreate() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container size="lg">
        <Box>
          <CustomBreadcrumbs />
        </Box>
        <Box className={classes.title}>
          <Typography variant="h4">选择你要发布的商品类型</Typography>
        </Box>
        <Grid container spacing={4} className={classes.boxChoice} height="100%">
          <ListCategory
            type="二手用品"
            icon={<AddShoppingCartIcon />}
            location="item"
          />
          <ListCategory
            type="汽车"
            icon={<DriveEtaIcon />}
            location="vehicle"
          />
          <ListCategory type="房屋" icon={<HouseIcon />} location="rental" />
          <ListCategory type="宠物" icon={<PetsIcon />} location="pet" />
          <ListCategory
            type="拼车"
            icon={<EmojiTransportationIcon />}
            location="carpool"
          />
        </Grid>
      </Container>
    </Box>
  );
}

export default MarketCreate;
