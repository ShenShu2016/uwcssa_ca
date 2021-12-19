import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

import { Controller } from "react-hook-form";
import React from "react";
import { selectMarketUserById } from "../../redux/slice/marketUserSlice";
import { useSelector } from "react-redux";

export default function PostUserInfo({
  control,
  setValue,
  errors,
  defaultInfo,
  setDefaultInfo,
}) {
  const { username } = useSelector((state) => state.userAuth.user);
  const marketUserInfo = useSelector((state) =>
    selectMarketUserById(state, username)
  );
  const switcher = defaultInfo === false ? true : false;
  // console.log("what happened here", defaultInfo);

  return (
    <Box
      sx={{
        color: "rgb(0,0,0)",
      }}
    >
      {marketUserInfo === undefined ? (
        <Typography variant="subtitle1" fontWeight="600">
          补充联系方式
        </Typography>
      ) : (
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => {
                  setDefaultInfo((prev) => !prev);

                  defaultInfo === true
                    ? setValue("contactEmail", marketUserInfo.email)
                    : setValue("contactEmail", "");
                  defaultInfo === true
                    ? setValue("contactPhone", marketUserInfo.phone)
                    : setValue("contactPhone", "");
                  defaultInfo === true
                    ? setValue("contactWeChat", marketUserInfo.weChat)
                    : setValue("contactWeChat", "");
                }}
                checked={switcher}
              />
            }
            label="默认联系方式"
          />
        </FormGroup>
      )}
      <Box sx={{ marginY: "1rem" }}>
        <Controller
          name="contactPhone"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              label={`手机${!!errors.contactPhone ? " is required!" : ""}`}
              value={value}
              variant="outlined"
              disabled={defaultInfo === false ? true : false}
              error={!!errors.contactPhone}
              required
              placeholder="eg: (123) 456 789"
              fullWidth
              onChange={(e) => {
                onChange(e);
              }}
            />
          )}
        />
      </Box>
      <Box sx={{ marginY: "1rem" }}>
        <Controller
          name="contactEmail"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              label={`邮箱${!!errors.contactEmail ? " is required!" : ""}`}
              value={value}
              variant="outlined"
              error={!!errors.contactEmail}
              required
              disabled={defaultInfo === false ? true : false}
              placeholder="wang123456@email.com "
              fullWidth
              onChange={(e) => {
                onChange(e);
              }}
            />
          )}
        />
      </Box>
      <Box sx={{ marginY: "1rem" }}>
        <Controller
          name="contactWeChat"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="微信"
              value={value}
              variant="outlined"
              placeholder="eg: Wang123"
              fullWidth
              disabled={defaultInfo === false ? true : false}
              onChange={(e) => {
                onChange(e);
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
}
