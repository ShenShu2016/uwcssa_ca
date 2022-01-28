import { Box, Button, CircularProgress, Divider } from "@mui/material";
import {
  addressFilteredMarketItem,
  fetchMarketItems,
} from "../redux/slice/marketSlice";
import {
  marketItemSortBySortKey,
  marketItemSortBySortKeyItem,
  marketItemSortBySortKeyRental,
  marketItemSortBySortKeyVehicle,
} from "./Market/marketQueries";
import { useDispatch, useSelector } from "react-redux";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

export default function LoadMore() {
  const dispatch = useDispatch();
  const { nextToken, currentFetchType, filter } = useSelector(
    (state) => state.market
  );
  const [clicked, setClicked] = React.useState(false);
  const filterList =
    Object.keys(filter).length !== 0 ? filter : { active: { eq: true } };
  const query =
    currentFetchType === "Item"
      ? marketItemSortBySortKeyItem
      : currentFetchType === "Vehicle"
      ? marketItemSortBySortKeyVehicle
      : currentFetchType === "Rental"
      ? marketItemSortBySortKeyRental
      : currentFetchType === "all"
      ? marketItemSortBySortKey
      : null;
  const handleClicked = () => {
    setClicked(true);
    console.log(clicked);
    currentFetchType !== "address"
      ? dispatch(
          fetchMarketItems({
            query,
            nextToken,
            marketType: currentFetchType,
            filter: filterList,
          })
        )
      : dispatch(
          addressFilteredMarketItem({
            filter: { itemID: {attributeExists : true } },
            nextToken,
          })
        );
    setTimeout(() => setClicked(false), 2000);
  };
  return (
    <Box width="100%">
      <Divider>
        {!clicked ? (
          <Button
            endIcon={clicked === false ? <KeyboardArrowDownIcon /> : null}
            onClick={() => handleClicked()}
            color="inherit"
            component="span"
          >
            更多
          </Button>
        ) : (
          <CircularProgress color="inherit" />
        )}
      </Divider>
    </Box>
  );
}
