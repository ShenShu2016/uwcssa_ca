import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    display: "flex",
    maxwidth: "100%",
    flexDirection: "column",
    justifyContent: "center",
    borderLeft: "1px solid rgba(0, 0, 0, 0.05)",
  },
  title: {
    fontWeight: 400,
    marginTop: "3rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  adPicture: {
    marginTop: "8rem",
    marginBottom: "1rem",
    textAlign: "center",
    overflow: "hidden",
    maxWidth: "xs",
  },
  pollSection: {
    marginTop: "6rem",
    marginBottom: "4rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    textAlign: "center",
    height: "400px",
    backgroundColor: "#C4C4C4",
  },
}));
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];
const ForumRightSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h5">Right Side Bar</Typography>
      </Box>

      <Box className={classes.adPicture}>
        <Typography variant="h4">ADS</Typography>
        <ImageList sx={{ width: 128, height: 320 }} cols={1} rowHeight={86}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />

              <ImageListItemBar
                title={item.title}
                //subtitle={<span>by: {item.author}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box className={classes.pollSection}>
        <Typography variant="h4">Polls Section</Typography>
      </Box>
    </div>
  );
};

export default ForumRightSide;
