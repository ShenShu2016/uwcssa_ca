import { Skeleton, Stack } from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  stack: {
    width: "283px",
    margin: "2px",
    [theme.breakpoints.down("sm")]: {
      width: "173px",
    },
  },
}));
export default function MarketSkeleton() {
  const classes = useStyles();

  const temp = [...Array(20).keys()];
  const SkeletonFade = (key) => {
    return (
      <Stack spacing={1} key={key} className={classes.stack}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" height={118} />
      </Stack>
    );
  };
  return (
    <>
      {temp.map((t) => (
        <SkeletonFade key={t} />
      ))}
    </>
  );
}
