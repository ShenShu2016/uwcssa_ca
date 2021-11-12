export const sortOptions = [
  { value: "original", label: "Recommended" },
  { value: "PriceDesc", label: "Price: highest first" },
  { value: "PriceAsc", label: "Price: lowest first" },
];

export default function marketItemFilter(marketItems, filterList, type) {
  const firstStageFilterFunction = (
    { min, max, minYear, maxYear },
    marketItems
  ) => {
    if (type === "item" || "rental") {
      if (min !== "" && max !== "") {
        return marketItems.filter(
          (item) => item.price >= min && item.price <= max
        );
      } else if (min === "" && max !== "") {
        return marketItems.filter((item) => item.price <= max);
      } else if (min !== "" && max === "") {
        return marketItems.filter((item) => item.price >= min);
      } else if (min === "" && max === "") {
        return marketItems;
      }
    } else if (type === "vehicle") {
      const getPrice = (items) => {
        if (min !== "" && max !== "") {
          return items.filter((item) => item.price >= min && item.price <= max);
        } else if (min === "" && max !== "") {
          return items.filter((item) => item.price <= max);
        } else if (min !== "" && max === "") {
          return items.filter((item) => item.price >= min);
        } else if (min === "" && max === "") {
          return items;
        }
      };
      const temp = getPrice(marketItems);
      if (minYear !== "" && maxYear !== "") {
        return temp.filter(
          (item) => item.price >= minYear && item.price <= maxYear
        );
      } else if (minYear === "" && maxYear !== "") {
        return temp.filter((item) => item.price <= maxYear);
      } else if (minYear !== "" && maxYear === "") {
        return temp.filter((item) => item.price >= minYear);
      } else if (minYear === "" && maxYear === "") {
        return temp;
      }
    }
  };
  const secondStageFilterFunction = (props, firstStageFilteredMarketItems) => {
    if (Object.entries(props).length === 0) {
      return firstStageFilteredMarketItems;
    } else {
      const result = firstStageFilteredMarketItems.filter((item) =>
        Object.keys(props)
          .map((key) => props[key] === item[key])
          .every(Boolean) === true
          ? item
          : null
      );
      return result;
    }
  };
  const thirdStageFilterFunction = (
    { clickedTag },
    secondStageFilteredMarketItems
  ) => {
    if (clickedTag !== "") {
      const temp1 = secondStageFilteredMarketItems.filter(
        (item) => item.tags !== null
      );
      const temp2 = temp1.filter(
        (subItem) => subItem.tags.includes(clickedTag) === true
      );
      return temp2;
    } else {
      return secondStageFilteredMarketItems;
    }
  };
  // const forthStageFilterFunction = (
  //   searchList,
  //   thirdStageFilteredMarketItems
  // ) => {
  //   console.log("searchList", searchList);
  //   console.log("Test!!!!!!!!!", thirdStageFilteredMarketItems);
  //   if (searchList === "") {
  //     return thirdStageFilteredMarketItems;
  //   } else {
  //     return thirdStageFilteredMarketItems.filter((item) =>
  //       // item.title.includes(searchList) ||
  //       item.description.includes(searchList)
  //     );
  //   }
  // };
  const sortedFunction = (sortKey, filteredMarketItems) => {
    if (sortKey === "original") {
      return filteredMarketItems;
    }
    if (sortKey === "PriceDesc") {
      const copyMarketItems = [...filteredMarketItems];
      const sortedItems = copyMarketItems.sort((a, b) => b.price - a.price);
      return sortedItems;
    }
    if (sortKey === "PriceAsc") {
      const copyMarketItems = [...filteredMarketItems];
      const sortedItems = copyMarketItems.sort((a, b) => a.price - b.price);
      return sortedItems;
    }
  };

  const {
    category: marketItemCategory,
    condition: marketItemCondition,
    vehicleType,
    make,
    model,
    marketRentalSaleRent,
    propertyType,
    airConditioningType,
    heatingType,
  } = filterList;

  let categoryFilterList = {
    marketItemCategory,
    marketItemCondition,
    vehicleType,
    make,
    model,
    marketRentalSaleRent,
    propertyType,
    airConditioningType,
    heatingType,
  };

  for (let key in categoryFilterList) {
    if (categoryFilterList[key] === "" || categoryFilterList[key] === undefined)
      delete categoryFilterList[key];
  }

  const firstStageFilteredMarketItems = firstStageFilterFunction(
    filterList,
    marketItems
  );
  const secondStageFilteredMarketItems = secondStageFilterFunction(
    categoryFilterList,
    firstStageFilteredMarketItems
  );

  const thirdStageFilteredMarketItems = thirdStageFilterFunction(
    filterList,
    secondStageFilteredMarketItems
  );

  // const forthStageFilteredMarketItems = forthStageFilterFunction(
  //   filterList.searchList,
  //   thirdStageFilteredMarketItems
  // );

  const sortedFilteredMarketItems = sortedFunction(
    filterList.sortKey,
    thirdStageFilteredMarketItems
    // forthStageFilteredMarketItems
  );

  return sortedFilteredMarketItems;
}
