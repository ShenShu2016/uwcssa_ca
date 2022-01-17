import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/material";
import EditMarketItemDetail from "./EditMarketItemDetail";
import EditMarketRentalDetail from "./EditMarketRentalDetail";
import EditMarketVehicleDetail from "./EditMarketVehicleDetail";
import { Loading } from "../../components/Market/loading";
import MarketCarpool from "./marketCarpool";
import MarketCarpoolDetail from "./MarketCarpoolDetail";
import MarketCreate from "./MarketCreate";
import MarketItem from "./marketItem";
import MarketItemDetail from "./MarketItemDetail";
import MarketList from "./marketList";
import MarketNotifications from "./marketNotifications";
import MarketPet from "./marketPet";
import MarketPetDetail from "./MarketPetDetail";
import MarketRental from "./marketRental";
import MarketRentalDetail from "./MarketRentalDetail";
import MarketVehicle from "./marketVehicle";
import MarketVehicleDetail from "./MarketVehicleDetail ";
import PostMarketCarpool from "./PostMarketCarpool";
import PostMarketItem from "./PostMarketItem";
import PostMarketPet from "./PostMarketPet";
import PostMarketRental from "./PostMarketRental";
import PostMarketVehicle from "./PostMarketVehicle";
import PrivateRoute from "../../components/PrivateRoute";
import React from "react";

export default function MarketRouter() {
  return (
    <Box>
      <Switch>
        <Route exact path="/market" component={MarketList} />
        <Route path="/market/create/carpool" component={PostMarketCarpool} />
        <Route path="/market/create/pet" component={PostMarketPet} />

        <PrivateRoute
          allowRoles="anyone"
          path="/market/create/item"
          component={PostMarketItem}
        />
        <PrivateRoute
          allowRoles="anyone"
          path="/market/create/vehicle"
          component={PostMarketVehicle}
        />
        <PrivateRoute
          allowRoles="anyone"
          path="/market/create/rental"
          component={PostMarketRental}
        />
        <PrivateRoute
          allowRoles="anyone"
          path="/market/create/"
          component={MarketCreate}
        />
        <Route path="/market/edit/item/:id" component={EditMarketItemDetail} />
        <Route
          path="/market/edit/vehicle/:id"
          component={EditMarketVehicleDetail}
        />
        <Route
          path="/market/edit/rental/:id"
          component={EditMarketRentalDetail}
        />
        <Route path="/market/item/:id" component={MarketItemDetail} />
        <Route path="/market/vehicle/:id" component={MarketVehicleDetail} />
        <Route path="/market/rental/:id" component={MarketRentalDetail} />
        <Route path="/market/pet/:id" component={MarketPetDetail} />
        <Route path="/market/carpool/:id" component={MarketCarpoolDetail} />
        <Route path="/market/item/" component={MarketItem} />
        <Route path="/market/vehicle/" component={MarketVehicle} />
        <Route path="/market/rental/" component={MarketRental} />
        <Route path="/market/pet/" component={MarketPet} />
        <Route path="/market/carpool/" component={MarketCarpool} />
        <Route path="/market/loading/" component={Loading} />
        <Route path="/market/notification" component={MarketNotifications} />
      </Switch>
    </Box>
  );
}
