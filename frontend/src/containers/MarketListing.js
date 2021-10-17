import React, { useEffect } from "react";

import MarketComponent from "../components/Market/MarketComponent";
import { connect } from "react-redux";
import { setMarketItems } from "../redux/actions/marketItemActions";

import Box from "@mui/material/Box";

const MarketListing = ({ setMarketItems }) => {
  useEffect(() => {
    setMarketItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <MarketComponent />
    </Box>
  );
};

export default connect(null, { setMarketItems })(MarketListing);
