export const sortOptions = [
  { value: "original", label: "Recommended" },
  { value: "PriceDesc", label: "Price: highest first" },
  { value: "PriceAsc", label: "Price: lowest first" },
];

export default function marketItemFilter(marketItems, filterList, type) {
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
  const secondStageFilterFunction = (props, firstStageFilteredMarketItems) => {
    if (type === "item") {
      const { condition, category } = props;
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
      } else {
        let temp = firstStageFilteredMarketItems.filter(
          (item) => item.marketItemCategory === category
        );
        return temp.filter((item) => item.marketItemCondition === condition);
      }
    } else if (type === "vehicle") {
      const { vehicleType, year, make, model } = props;
      if (vehicleType === "" && year === "" && make === "" && model === "") {
        return firstStageFilteredMarketItems;
      } else if (
        vehicleType !== "" &&
        year === "" &&
        make === "" &&
        model === ""
      ) {
        return firstStageFilteredMarketItems.filter(
          (item) => item.vehicleType === vehicleType
        );
      } else if (
        vehicleType === "" &&
        year !== "" &&
        make === "" &&
        model === ""
      ) {
        return firstStageFilteredMarketItems.filter(
          (item) => item.year === year
        );
      } else if (
        vehicleType === "" &&
        year === "" &&
        make !== "" &&
        model === ""
      ) {
        return firstStageFilteredMarketItems.filter(
          (item) => item.make === make
        );
      } else if (
        vehicleType === "" &&
        year === "" &&
        make === "" &&
        model !== ""
      ) {
        return firstStageFilteredMarketItems.filter(
          (item) => item.model === model
        );
      } else if (
        vehicleType !== "" &&
        year !== "" &&
        make === "" &&
        model === ""
      ) {
        let temp = firstStageFilteredMarketItems.filter(
          (item) => item.vehicleType === vehicleType
        );
        return temp.filter((item) => item.year === year);
      } else if (
        vehicleType === "" &&
        year !== "" &&
        make !== "" &&
        model === ""
      ) {
        let temp = firstStageFilteredMarketItems.filter(
          (item) => item.year === year
        );
        return temp.filter((item) => item.make === make);
      } else if (
        vehicleType === "" &&
        year === "" &&
        make !== "" &&
        model !== ""
      ) {
        let temp = firstStageFilteredMarketItems.filter(
          (item) => item.make === make
        );
        return temp.filter((item) => item.model === model);
      } else if (
        vehicleType !== "" &&
        year === "" &&
        make !== "" &&
        model === ""
      ) {
        let temp = firstStageFilteredMarketItems.filter(
          (item) => item.vehicleType === vehicleType
        );
        return temp.filter((item) => item.make === make);
      } else if (
        vehicleType === "" &&
        year !== "" &&
        make === "" &&
        model !== ""
      ) {
        let temp = firstStageFilteredMarketItems.filter(
          (item) => item.year === year
        );
        return temp.filter((item) => item.model === model);
      } else if (
        vehicleType !== "" &&
        year === "" &&
        make === "" &&
        model !== ""
      ) {
        let temp = firstStageFilteredMarketItems.filter(
          (item) => item.vehicleType === vehicleType
        );
        return temp.filter((item) => item.model === model);
      } else if (
        vehicleType !== "" &&
        year !== "" &&
        make !== "" &&
        model === ""
      ) {
        let temp = firstStageFilteredMarketItems.filter(
          (item) => item.vehicleType === vehicleType
        );
        let temp2 = temp.filter((item) => item.year === year);
        return temp2.filter((item) => item.make === make);
      } else if (
        vehicleType === "" &&
        year !== "" &&
        make !== "" &&
        model !== ""
      ) {
        let temp = firstStageFilteredMarketItems.filter(
          (item) => item.year === year
        );
        let temp2 = temp.filter((item) => item.make === make);
        return temp2.filter((item) => item.model === model);
      } else {
        let temp = firstStageFilteredMarketItems.filter(
          (item) => item.vehicleType === vehicleType
        );
        let temp2 = temp.filter((item) => item.year === year);
        let temp3 = temp2.filter((item) => item.make === make);
        return temp3.filter((item) => item.model === model);
      }
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

  return sortedFilteredMarketItems;
}
