import { Button, IconButton, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { API } from "aws-amplify";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { listMarketItems } from "../graphql/queries";
import { makeStyles } from "@material-ui/core";
import { setMarketItems } from "../redux/actions/marketItemActions";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    textAlign: "center",
    marginBottom: "2rem",
  },
}));

export default function MarketPostTest() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [marketItem, setMarketItems] = useState([]);
  useEffect(() => {
    dispatch(setMarketItems());
  }, []);
  const marketItem = useSelector((state) => state.allMarketItems.marketItems);
  console.log(marketItem, "marketItem");

  // const fetchMarketItems = async () => {
  //   try {
  //     const marketItemsData = await API.graphql({
  //       query: listMarketItems,
  //       authMode: "AWS_IAM",
  //     });
  //     const marketItemsList = marketItemsData.data.listMarketItems.items;
  //     console.log("articleData1111", marketItemsData);
  //     console.log("dididid", marketItem);

  //     setMarketItems(marketItemsList);
  //   } catch (error) {
  //     console.log("error on fetching MarketItems", error);
  //   }
  // };
  return (
    <div className={classes.root}>
      <Button variant="contained" component={Link} to="/market/postMarketItem">
        Go Create marketItem
      </Button>
      <Typography variant="h1">UWCSSA Market (TEST)</Typography>
      {marketItem.map((marketItem) => {
        return (
          <div key={marketItem.id}>
            <Typography variant="h3">title:{marketItem.title}</Typography>
            <Typography variant="h3">
              description:{marketItem.description}
            </Typography>

            <Typography variant="h5">
              marketItemType:{" "}
              {marketItem.marketType ? marketItem.marketType.name : ""}
            </Typography>
            <Typography variant="h5">
              marketItemCategory:{" "}
              {marketItem.marketItemCategory
                ? marketItem.marketItemCategory.name
                : ""}
            </Typography>
            <AmplifyS3Image path={marketItem.imagePath} />
          </div>
        );
      })}
    </div>
  );
}
