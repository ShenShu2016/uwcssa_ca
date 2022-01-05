import { Controller, useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import GroupIcon from "@mui/icons-material/Group";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import eventImg from "../../static/event.jpg";
import { makeStyles } from "@mui/styles";
import { postEventParticipant } from "../../redux/slice/eventSlice";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";
import { v4 as uuid } from "uuid";
import GoogleMapsPlace, { GetAddress } from "../GoogleMap/GoogleMapsPlace";
import { postAddress } from "../../redux/slice/addressSlice";
import { CircularProgress } from "@mui/material";
import { green } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  rightBox: {
    my: 8,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "3rem",
    marginBottom: "2rem",
    padding: "0 1rem",
    [theme.breakpoints.up("lg")]: {
      padding: "0 10rem",
    },
  },
}));

export default function Individual() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { userAuth } = useSelector((state) => state);
  const { eventID } = useParams();
  console.log(useParams, "useParams");
  useTitle(`近期活动-${eventID}-团体报名`);
  console.log("event.id", eventID);
  const [loading, setLoading] = useState(false);

  const timer = useRef();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      weChat: "",
      message: "",
      numberOfPeople: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const address = await GetAddress();
    const addressID = uuid();
    const itemID = `${eventID}-${userAuth.user.username}`;
    if (address) {
      const {
        description,
        place_id,
        reference,
        terms,
        types,
        apartmentNumber,
        geocodingResult,
        lat,
        lng,
      } = address;
      const createAddressInput = {
        description,
        place_id,
        reference,
        terms,
        types,
        apartmentNumber,
        geocodingResult,
        lat,
        lng,
        itemID: itemID,
        userID: userAuth.user.username,
        id: addressID,
      };
      console.log(createAddressInput);
      const addressResponse = await dispatch(
        postAddress({ createAddressInput })
      );
      console.log(addressResponse);
    }

    const createEventParticipantInput = {
      ...data,
      id: itemID,
      addressID: address && addressID,
      eventParticipantStatus: "ArriveOnTime",
      email: userAuth.user.attributes.email,
      active: true,
      eventID: eventID,
      userID: userAuth.user.username,
    };
    console.log("createEventParticipantInput", createEventParticipantInput);
    const response = await dispatch(
      postEventParticipant({ createEventParticipantInput })
    );

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      history.push(`/event/${eventID}/eventSignUp/success`);
    } else {
      timer.current = window.setTimeout(() => {
        console.log(response.error.message);
        setLoading(false);
      }, 1000);
      alert(response.error.message);
    }
  };

  return (
    <div>
      <Grid container component="main" sx={{ height: "100%" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${eventImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={6} elevation={6}>
          <Box
            className={classes.rightBox}
            noValidate
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <GroupIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              团体报名
            </Typography>
            <Box>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="name"
                    margin="normal"
                    required
                    fullWidth
                    label="姓名"
                    placeholder="张三"
                    autoComplete="name"
                    autoFocus
                    variant="outlined"
                    onChange={onChange}
                    value={value}
                    error={!!errors.name}
                    helperText={errors.name ? "姓名无效" : null}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: true,
                  pattern: /^[0-9\b]+$/,
                  minLength: 10,
                  maxLength: 10,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="phone"
                    margin="normal"
                    fullWidth
                    required
                    placeholder="e.g. 1234567890"
                    autoComplete="phone"
                    label="手机号码"
                    variant="outlined"
                    onChange={onChange}
                    value={value}
                    error={!!errors.phone}
                    helperText={errors.phone ? "手机号码无效, 10位数" : null}
                  />
                )}
              />
              <Controller
                name="weChat"
                control={control}
                rules={{
                  required: false,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="weChat"
                    margin="normal"
                    fullWidth
                    autoComplete="weChat"
                    label="微信号(可以不填)"
                    variant="outlined"
                    onChange={onChange}
                    value={value}
                    error={!!errors.weChat}
                    helperText={errors.weChat ? "微信号无效" : null}
                  />
                )}
              />
              <Controller
                name="numberOfPeople"
                control={control}
                rules={{
                  required: true,
                  pattern: /^[0-9\b]+$/,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="numberOfPeople"
                    margin="normal"
                    required
                    fullWidth
                    label="参加总人数（含申请人）"
                    name="numberOfPeople"
                    placeholder="e.g. 5"
                    autoComplete="numberOfPeople"
                    variant="outlined"
                    onChange={onChange}
                    value={value}
                    error={!!errors.numberOfPeople}
                    helperText={errors.numberOfPeople ? "参加总人数无效" : null}
                  />
                )}
              />
              <GoogleMapsPlace />

              <Controller
                name="message"
                control={control}
                rules={{
                  required: false,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="message"
                    margin="normal"
                    fullWidth
                    label="备注"
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                提交
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-0.75rem",
                      marginLeft: "-0.75rem",
                    }}
                  />
                )}
              </Button>

              <Grid item>
                <Button
                  component={Link}
                  to="/event/eventSignUp"
                  variant="body2"
                >
                  返回
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
