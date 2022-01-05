import {
  marketItemSortBySortKeyItem,
  marketItemSortBySortKeyRental,
  marketItemSortBySortKeyVehicle,
} from "./marketQueries";
import { useEffect, useState } from "react";

import { fetchMarketItems } from "../../redux/slice/marketSlice";
import { useDispatch } from "react-redux";

export default function useMarketItemFilter(props) {
  const {
    type,
    category,
    condition,
    min,
    max,
    minYear,
    maxYear,
    make,
    model,
    vehicleType,
    marketRentalSaleRent,
    propertyType,
    airConditioningType,
    heatingType,
  } = props;

  const dispatch = useDispatch();
  const [isFiltering, setIsFiltering] = useState(false);
  const query =
    type === "Item"
      ? marketItemSortBySortKeyItem
      : type === "Vehicle"
      ? marketItemSortBySortKeyVehicle
      : type === "Rental"
      ? marketItemSortBySortKeyRental
      : null;

  useEffect(() => {
    let filter = {};
    // general filter;
    if (min !== "") {
      if (max !== "") {
        filter["price"] = { between: [min, max] };
      } else {
        filter["price"] = { ge: min };
      }
    } else {
      if (max !== "") {
        filter["price"] = { le: max };
      }
    }
    // Item filter;
    if (category !== undefined && category !== "") {
      filter["marketItemCategory"] = { eq: category };
    }
    if (condition !== undefined && condition !== "") {
      filter["marketItemCondition"] = { eq: condition };
    }
    // vehicle filter;
    if (vehicleType !== undefined && vehicleType !== "") {
      filter["vehicleType"] = { eq: vehicleType };
    }
    if (minYear !== undefined && minYear !== "") {
      if (maxYear !== "") {
        filter["year"] = { between: [minYear, maxYear] };
      } else {
        filter["year"] = { ge: minYear };
      }
    } else {
      if (maxYear !== undefined && maxYear !== "") {
        filter["year"] = { le: maxYear };
      }
    }
    if (make !== undefined && make !== "") {
      filter["make"] = { eq: make };
    }
    if (model !== undefined && model !== "") {
      filter["model"] = { eq: model };
    }
    // Rental filter;
    if (marketRentalSaleRent !== undefined && marketRentalSaleRent !== "") {
      filter["marketRentalSaleRent"] = { eq: marketRentalSaleRent };
    }
    if (propertyType !== undefined && propertyType !== "") {
      filter["propertyType"] = { eq: propertyType };
    }
    if (airConditioningType !== undefined && airConditioningType !== "") {
      filter["airConditioningType"] = { eq: airConditioningType };
    }
    if (heatingType !== undefined && heatingType !== "") {
      filter["heatingType"] = { eq: heatingType };
    }
    if (query !== null) {
      if (Object.keys(filter).length === 0) {
        setIsFiltering(false);
        dispatch(
          fetchMarketItems({
            query: query,
            filter: { marketType: { eq: type } },
          })
        );
      } else {
        setIsFiltering(true);
        filter["marketType"] = { eq: type };
        dispatch(fetchMarketItems({ query: query, filter }));
      }
    }
  }, [
    dispatch,
    query,
    type,
    category,
    condition,
    min,
    max,
    minYear,
    maxYear,
    make,
    model,
    vehicleType,
    marketRentalSaleRent,
    propertyType,
    airConditioningType,
    heatingType,
  ]);

  return isFiltering;
}
