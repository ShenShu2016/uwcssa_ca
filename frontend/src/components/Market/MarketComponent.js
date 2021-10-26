import { Box, CardActionArea, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "283px",
    margin: "2px",
    [theme.breakpoints.down("sm")]: {
      width: "173px",
    },
  },
  paper: {},
  content: {
    maxHeight: "200px",
  },
  s3image: {
    width: "283px",
    height: "283px",
    borderRadius: "8px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "173px",
      height: "173px",
      marginTop: "2.5rem",
    },
  },
}));

export default function MarketComponent({ item, type }) {
  const classes = useStyles();

  const [imageURL, setImageURL] = useState(null);

  const {
    id,
    title,
    // description,
    price,
    imagePath,
    // marketItemCategory,
    // marketItemCondition,
    location,
    model,
    // tags,
    // active,
    // ByCreatedAt,
  } = item;

  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Storage.get(imagePath[0], {
          level: "public",
          expires: 120,
          download: false,
        });
        //console.log("imageAccessURL", imageAccessURL);
        setImageURL(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImageURL(null);
      }
    };
    if (imagePath) {
      getImage();
    }
  }, [imagePath]);

  return (
    <Paper elevation={0} className={classes.root}>
      <CardActionArea component={Link} to={`/market/${type}/${id}`}>
        <img src={imageURL} alt="" className={classes.s3image} />
        <Box my={"8px"}>
          <Box my={"4px"}>
            <Typography
              sx={{
                fontSize: "17px",
                color: "#505050",
                fontWeight: "600",
                lineHeight: "1.3333",
              }}
            >
              ${price}
            </Typography>
          </Box>
          <Box my={"4px"}>
            <Typography
              sx={{
                fontSize: "17px",
                color: "#505050",
                fontWeight: "600",
                lineHeight: "1.3333",
              }}
            >
              {model}
            </Typography>
          </Box>
          <Box my={"4px"}>
            <Typography
              sx={{
                fontSize: "17px",
                color: "#505050",
                fontWeight: "400",
                lineHeight: "1.33333",
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box my={"4px"}>
            <Typography
              sx={{
                fontSize: "13px",
                color: "#65676B",
                fontWeight: "400",
                lineHeight: "1.2308",
              }}
            >
              {location}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Paper>
  );
}
