import { useEffect, useState } from "react";

import { useHistory } from "react-router";

function useStarter(marketItem) {
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
      if (marketItem.imgS3Keys === undefined) {
        setStarter(false);
      } else if (marketItem.description === undefined) {
        setStarter(false);
      } else {
        setStarter(true);
      }
      if (marketItem.description === "not-found") {
        history.push("/not-found");
      }
    }
  }, [marketItem, history]);
  return starter;
}

export default useStarter;
