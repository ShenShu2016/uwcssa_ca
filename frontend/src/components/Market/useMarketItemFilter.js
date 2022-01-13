import { fetchMarketItems, filterUpdated } from "../../redux/slice/marketSlice";
import {
  marketItemSortBySortKeyItem,
  marketItemSortBySortKeyRental,
  marketItemSortBySortKeyVehicle,
} from "./marketQueries";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

export function marketItemFilterUpdate(props, dispatch) {
  const {
    type,
    category = [],
    condition = [],
    min = "",
    max = "",
    minYear = "",
    maxYear = "",
    make = [],
    model = [],
    vehicleType = [],
    marketRentalSaleRent = [],
    propertyType = [],
    airConditioningType = [],
    heatingType = [],
  } = props;

  const filter = {
    price: { between: [min === "" ? 0 : min, max === "" ? 999999 : max] },
  };
  minYear !== "" ||
    (maxYear !== "" &&
      Object.assign(filter, {
        year: {
          between: [
            minYear === "" ? 0 : minYear,
            maxYear === "" ? 999999 : maxYear,
          ],
        },
      }));
  // {marketItemCategory:{eq:category[]}}
  let itemFilter = [];

  category.length !== 0 &&
    category.map((c) => itemFilter.push({ marketItemCategory: { eq: c } }));
  condition.length !== 0 &&
    condition.map((c) => itemFilter.push({ marketItemCondition: { eq: c } }));
  make.length !== 0 && make.map((c) => itemFilter.push({ make: { eq: c } }));
  model.length !== 0 && model.map((c) => itemFilter.push({ model: { eq: c } }));
  vehicleType.length !== 0 &&
    vehicleType.map((c) => itemFilter.push({ vehicleType: { eq: c } }));
  marketRentalSaleRent.length !== 0 &&
    marketRentalSaleRent.map((c) =>
      itemFilter.push({ marketRentalSaleRent: { eq: c } })
    );
  propertyType.length !== 0 &&
    propertyType.map((c) => itemFilter.push({ propertyType: { eq: c } }));
  airConditioningType.length !== 0 &&
    airConditioningType.map((c) =>
      itemFilter.push({ airConditioningType: { eq: c } })
    );
  heatingType.length !== 0 &&
    heatingType.map((c) => itemFilter.push({ heatingType: { eq: c } }));
  itemFilter.length !== 0 && Object.assign(filter, { or: itemFilter });
  console.log(filter);
  dispatch(filterUpdated({ marketType: type, filter: filter }));
}

export default function useMarketItemFilter(filterList, type) {
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
    const filter = { ...filterList };
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
  }, [dispatch, query, type, filterList]);

  return isFiltering;
}
