export const sortOptions = [
  { value: "original", label: "Recommended" },
  { value: "PriceDesc", label: "Price: highest first" },
  { value: "PriceAsc", label: "Price: lowest first" },
];

export default function marketItemFilter(marketItems, filterList) {
  console.log("marketItems", marketItems);
  console.log("filterList", filterList);
  const firstStageFilterFunction = ({ min, max }, marketItems) => {
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
  };
  const secondStageFilterFunction = (
    { category, condition },
    firstStageFilteredMarketItems
  ) => {
    if (category === "" && condition === "") {
      return firstStageFilteredMarketItems;
    } else if (category === "" && condition !== "") {
      return firstStageFilteredMarketItems.filter(
        (item) => item.marketItemCondition === condition
      );
    } else if (category !== "" && condition === "") {
      return firstStageFilteredMarketItems.filter(
        (item) => item.marketItemCategory === category
      );
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
      console.log("temp1", temp1);
      console.log("temp2", temp2);
      return temp2;
    } else {
      return secondStageFilteredMarketItems;
    }
  };
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

  const firstStageFilteredMarketItems = firstStageFilterFunction(
    filterList,
    marketItems
  );
  const secondStageFilteredMarketItems = secondStageFilterFunction(
    filterList,
    firstStageFilteredMarketItems
  );
  const thirdStageFilteredMarketItems = thirdStageFilterFunction(
    filterList,
    secondStageFilteredMarketItems
  );
  const sortedFilteredMarketItems = sortedFunction(
    filterList.sortKey,
    thirdStageFilteredMarketItems
  );
  console.log("result", sortedFilteredMarketItems);

  return sortedFilteredMarketItems;
}
