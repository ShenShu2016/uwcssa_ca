import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/material";
import { Loading } from "../../components/Market/loading";
import MarketCreate from "./MarketCreate";
import MarketItem from "./marketItem";
import MarketItemDetail from "./MarketItemDetail";
import MarketList from "./marketList";
import MarketRental from "./marketRental";
import MarketRentalDetail from "./MarketRentalDetail";
import MarketVehicle from "./marketVehicle";
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
        <Route path="/market/create/item" component={PostMarketItem} />
        <Route path="/market/create/vehicle" component={PostMarketVehicle} />
        <Route path="/market/create/rental" component={PostMarketRental} />
        <Route path="/market/create" component={MarketCreate} />
        <Route path="/market/item/:id" component={MarketItemDetail} />
        <Route path="/market/vehicle/:id" component={MarketVehicleDetail} />
        <Route path="/market/rental/:id" component={MarketRentalDetail} />
        <Route path="/market/item/" component={MarketItem} />
        <Route path="/market/vehicle/" component={MarketVehicle} />
        <Route path="/market/rental/" component={MarketRental} />
        <Route path="/market/loading/" component={Loading} />
      </Switch>
    </Box>
  );
}
