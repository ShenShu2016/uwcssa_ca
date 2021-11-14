import { Box, CardActionArea, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import { marketRentalOptions } from "./marketRentalOptions";
import moment from "moment";

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
    imgS3Keys,
    // marketItemCategory,
    // marketItemCondition,
    location,
    year,
    make,
    model,
    address,
    marketRentalSaleRent,
    bedroomCounts,
    propertyType,
    createdAt,
    // tags,
    // active,
    // ByCreatedAt,
  } = item;

  const { marketRentalSaleRent: RentOrSale, propertyType: PType } =
    marketRentalOptions;

  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Storage.get(imgS3Keys[0], {
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
    if (imgS3Keys) {
      getImage();
    }
  }, [imgS3Keys]);

  const displayInfo = () => {
    if (type === "item") {
      return (
        <React.Fragment>
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
            <Box my={"4px"}>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#65676B",
                  fontWeight: "400",
                  lineHeight: "1.2308",
                }}
              >
                {moment(createdAt).fromNow()}
              </Typography>
            </Box>
          </Box>
        </React.Fragment>
      );
    } else if (type === "vehicle") {
      return (
        <React.Fragment>
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
                fontWeight: "400",
                lineHeight: "1.3333",
              }}
            >
              {year} {make} {model}
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
          <Box my={"4px"}>
            <Typography
              sx={{
                fontSize: "13px",
                color: "#65676B",
                fontWeight: "400",
                lineHeight: "1.2308",
              }}
            >
              {moment(createdAt).fromNow()}
            </Typography>
          </Box>
        </React.Fragment>
      );
    } else if (type === "rental") {
      return (
        <React.Fragment>
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
                fontWeight: "400",
                lineHeight: "1.33333",
              }}
            >
              {PType.filter((item) => item.value === propertyType)[0].label},
              {bedroomCounts} bedrooms,
              {
                RentOrSale.filter(
                  (item) => item.value === marketRentalSaleRent
                )[0].label
              }
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
              {address}
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
              {moment(createdAt).fromNow()}
            </Typography>
          </Box>
        </React.Fragment>
      );
    }
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <CardActionArea component={Link} to={`/market/${type}/${id}`}>
        <img src={imageURL} alt="" className={classes.s3image} />
        <Box my={"8px"}>{displayInfo()}</Box>
      </CardActionArea>
    </Paper>
  );
}
