import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";
import { marketItemOptions } from "./marketItemOptions";
import { marketRentalOptions } from "./marketRentalOptions";
import { marketVehicleOptions } from "./marketVehicleOptions";

const {
  airConditionType: ACType,
  heatingType: HType,
  catFriendly: CF,
  dogFriendly: DF,
} = marketRentalOptions;

const {
  marketItemConditionList: Conditions,
  marketItemCategoryList: Category,
} = marketItemOptions;

const { marketVehicleTypeList: VType } = marketVehicleOptions;

const DetailInfo = ({
  // general inputs
  type,
  tags,
  description,
  // specific inputs
  // item & vehicle
  location,
  // item
  marketItemCategory,
  marketItemCondition,
  // rental
  airConditionType,
  heatingType,
  catFriendly,
  dogFriendly,
  address,
  // vehicle
  year,
  make,
  model,
  vehicleType,
  exteriorColor,
  interiorColor,
  fuelType,
}) => {
  console.log("type", type);
  return (
    <React.Fragment>
      <Typography marginX="1rem" marginY="0.5rem" fontWeight="600">
        详情
      </Typography>
      {type === "item" ? (
        <Grid marginX="0rem" container spacing={2}>
          <Grid item xs={4}>
            类别
          </Grid>
          <Grid item xs={8}>
            {Category.map((item) => item.value).includes(marketItemCategory)
              ? Category.filter((item) => item.value === marketItemCategory)[0]
                  .label
              : ""}
          </Grid>
          <Grid item xs={4}>
            新旧程度
          </Grid>
          <Grid item xs={8}>
            {Conditions.map((item) => item.value).includes(marketItemCondition)
              ? Conditions.filter(
                  (item) => item.value === marketItemCondition
                )[0].label
              : ""}
          </Grid>
        </Grid>
      ) : null}
      {type === "rental" ? (
        <Grid marginX="0rem" container spacing={2}>
          <Grid item xs={4}>
            空调
          </Grid>
          <Grid item xs={8}>
            {ACType.map((item) => item.value).includes(airConditionType)
              ? ACType.filter((item) => item.value === airConditionType)[0]
                  .label
              : ""}
          </Grid>
          <Grid item xs={4}>
            供暖
          </Grid>
          <Grid item xs={8}>
            {HType.map((item) => item.value).includes(heatingType)
              ? HType.filter((item) => item.value === heatingType)[0].label
              : ""}
          </Grid>
          <Grid item xs={4}>
            宠物
          </Grid>
          <Grid item xs={8}>
            {CF.map((item) => item.value).includes(catFriendly) &&
            DF.map((item) => item.value).includes(dogFriendly)
              ? catFriendly && dogFriendly
                ? "可以养"
                : "不可以养"
              : ""}
          </Grid>
        </Grid>
      ) : null}
      {type === "vehicle" ? (
        <Grid marginX="0rem" container spacing={2}>
          <Grid item xs={4}>
            车型
          </Grid>
          <Grid item xs={8}>
            {VType.map((item) => item.value).includes(vehicleType)
              ? VType.filter((item) => item.value === vehicleType)[0].label
              : ""}
          </Grid>
          <Grid item xs={4}>
            品牌/型号
          </Grid>
          <Grid item xs={8}>
            {year.length === 0 && make.length === 0 && model.length === 0
              ? "Make & Model"
              : `${year} ${make} ${model}`}
          </Grid>
          <Grid item xs={4}>
            车漆颜色
          </Grid>
          <Grid item xs={8}>
            {exteriorColor.length === 0
              ? "Exterior Color Goes Here"
              : exteriorColor}
          </Grid>
          <Grid item xs={4}>
            内饰颜色
          </Grid>
          <Grid item xs={8}>
            {interiorColor.length === 0
              ? "Interior Color Goes Here"
              : interiorColor}
          </Grid>
          <Grid item xs={4}>
            汽油/柴油
          </Grid>
          <Grid item xs={8}>
            {fuelType.length === 0 ? "Fuel Type Color Goes Here" : fuelType}
          </Grid>
        </Grid>
      ) : null}
      {tags && (
        <Box>
          <Box>
            <Typography marginX="1rem" marginY="0.5rem" fontWeight="600">
              标签
            </Typography>
          </Box>
          <Stack
            direction="row"
            marginX="1rem"
            marginBottom="0.5rem"
            spacing={2}
          >
            {tags.length !== 0 ? (
              tags.map((tag, tagIdx) => {
                return <Chip key={tagIdx} label={tag} />;
              })
            ) : (
              <Chip label={"无"} />
            )}
          </Stack>
        </Box>
      )}
      <Divider variant="middle" />
      <Typography marginX="1rem" marginY="0.25rem" fontWeight="600">
        详情描述
      </Typography>
      <Typography
        marginX="1rem"
        marginY="0.25rem"
        fontWeight="350"
        component="div"
        style={{ wordBreak: "break-word" }}
      >
        {description.length === 0 ? "Description Goes Here" : description}
      </Typography>

      <Paper
        sx={{
          marginX: "1rem",
          marginY: "0.25rem",
          height: "250px",
          backgroundColor: "rgb(243, 246, 249)",
          color: "rgb(161 161 161 / 87%)",
        }}
      >
        Google Map Currently Unavailable
      </Paper>
      {type === "item" || type === "vehicle" ? (
        <Typography margin="1rem" marginY="0.25rem" fontWeight="250">
          {location.length === 0 ? "Location Goes Here" : location}
        </Typography>
      ) : null}
      {type === "rental" ? (
        <Typography margin="1rem" marginY="0.25rem" fontWeight="250">
          {address.length === 0 ? "Address Goes Here" : address}
        </Typography>
      ) : null}
    </React.Fragment>
  );
};

export default DetailInfo;
