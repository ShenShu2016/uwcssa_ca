import { useEffect, useState } from "react";

import { useHistory } from "react-router";

function useStarter(marketItem, mode = "all") {
  const history = useHistory();
  const [starter, setStarter] = useState(false);
  useEffect(() => {
    if (
      marketItem === undefined ||
      marketItem === null ||
      marketItem.length === 0
    ) {
      setStarter(false);
    } else {
      if (mode === "all") {
        if (marketItem.imgURLs === null) {
          setStarter(false);
        } else if (marketItem.name === null) {
          setStarter(false);
        } else {
          setStarter(true);
        }
      } else if (mode === "item") {
        if (marketItem.description === undefined) {
          console.log("des");
          setStarter(false);
        } else if (marketItem.marketItemCondition === undefined) {
          console.log("cond");

          setStarter(false);
        } else {
          setStarter(true);
        }
      } else if (mode === "vehicle") {
        if (marketItem.description === undefined) {
          setStarter(false);
        } else if (marketItem.make === undefined) {
          setStarter(false);
        } else if (marketItem.exteriorColor === undefined) {
          setStarter(false);
        } else {
          setStarter(true);
        }
      } else if (mode === "rental") {
        if (marketItem.description === undefined) {
          setStarter(false);
        } else if (marketItem.marketRentalSaleRent === undefined) {
          setStarter(false);
        } else if (marketItem.catFriendly === undefined) {
          setStarter(false);
        } else {
          setStarter(true);
        }
      }

      if (marketItem.description === "not-found") {
        history.push("/not-found");
      }
    }
  }, [marketItem, history, mode]);
  return starter;
}

export default useStarter;
