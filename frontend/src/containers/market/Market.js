import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/material";
import MarketCreate from "./MarketCreate";
import MarketItemDetail from "./MarketItemDetail";
import MarketList from "./marketList";
import MarketRentalDetail from "./MarketRentalDetail";
import MarketVehicleDetail from "./MarketVehicleDetail ";
import PostMarketItem from "./PostMarketItem";
import PostMarketRental from "./PostMarketRental";
import PostMarketVehicle from "./PostMarketVehicle";
import React from "react";

export default function Market() {
  return (
    <Box>
      <Switch>
        <Route exact path="/market" component={MarketList} />
        <Route path="/market/create" component={MarketCreate} />
        <Route path="/market/create/item" component={PostMarketItem} />
        <Route path="/market/create/vehicle" component={PostMarketVehicle} />
        <Route path="/market/create/rental" component={PostMarketRental} />
        <Route path="/market/item/:id" component={MarketItemDetail} />
        <Route path="/market/vehicle/:id" component={MarketVehicleDetail} />
        <Route path="/market/rental/:id" component={MarketRentalDetail} />
      </Switch>
    </Box>
  );
}
