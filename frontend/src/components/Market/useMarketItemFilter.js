import {
  marketItemSortBySortKeyItem,
  marketItemSortBySortKeyRental,
  marketItemSortBySortKeyVehicle,
} from "./marketQueries";
import { useEffect, useState } from "react";

import { fetchMarketItems } from "../../redux/slice/marketSlice";
import { useDispatch } from "react-redux";

export default function useMarketItemFilter(filterList) {
  const dispatch = useDispatch();
  const [isFiltering, setIsFiltering] = useState(false);
  const query =
    filterList.type === "item"
      ? marketItemSortBySortKeyItem
      : filterList.type === "vehicle"
      ? marketItemSortBySortKeyVehicle
      : filterList.type === "rental"
      ? marketItemSortBySortKeyRental
      : null;
  useEffect(() => {
    let filter = {};

    if (filterList.category !== "") {
      filter["marketItemCategory"] = { eq: filterList.category };
    }
    if (filterList.min !== "") {
      if (filterList.max !== "") {
        filter["price"] = { between: [filterList.min, filterList.max] };
      } else {
        filter["price"] = { ge: filterList.min };
      }
    } else {
      if (filterList.max !== "") {
        filter["price"] = { le: filterList.max };
      }
    }
    if (query !== null) {
      if (Object.keys(filter).length === 0) {
        setIsFiltering(false);
        dispatch(fetchMarketItems({ query: query }));
      } else {
        setIsFiltering(true);
        dispatch(fetchMarketItems({ query: query, filter }));
      }
    }
  }, [dispatch, filterList, query]);

  return isFiltering;
}
