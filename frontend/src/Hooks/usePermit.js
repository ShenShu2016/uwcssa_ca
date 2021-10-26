import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

export function usePermit(ownerID, allowGroup) {
  const { userAuth } = useSelector((state) => state);

  const [isPermit, setPermit] = useState(null);
  useEffect(() => {
    setPermit(
      userAuth.user.username === ownerID ||
        userAuth.cognitoGroup.includes(allowGroup)
    );
  }, [userAuth.user.username, ownerID, userAuth.cognitoGroup, allowGroup]);

  return isPermit;
}
