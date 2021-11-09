import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SignUpRequest from "../Auth/SignUpRequireDialog";
import { makeStyles } from "@mui/styles";
import { postEventParticipant } from "../../redux/reducers/eventSlice";
import { useHistory } from "react-router";
// import useForm from "./useForm";
// import { validator } from "./validator";
import { useTitle } from "../../Hooks/useTitle";

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

  const { event } = useSelector((state) => state.event.selected);
  useTitle(`近期活动 ${event.title} 个人报名`);

  const [eventParticipantData, setEventParticipantData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    weChat: "",
    message: "",
    numberOfPeople: "",
  });
  const uploadEventParticipant = async () => {
    console.log("????");
    const { name, email, address, phone, weChat, message } =
      eventParticipantData;

    const createEventParticipantInput = {
      name,
      email,
      address,
      phone,
      weChat,
      message,
      numberOfPeople: 1,
      active: true,
      eventID: event.id,
      userID: userAuth.user.username,
    };

    const response = await dispatch(
      postEventParticipant({ createEventParticipantInput })
    );
    console.log("postEventParticipant", response);
    if (response.meta.requestStatus === "fulfilled") {
      history.push(`/event`);
    }
  };

  return (
    <div>
      {userAuth.isAuthenticated ? "" : <SignUpRequest />}
      <div>
        <Grid container component="main" sx={{ height: "100%" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundImage:
                "url(https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2020/10/why-do-we-celebrate-halloween-920x613.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={8} md={6} elevation={6} noValidate>
            <Box className={classes.rightBox}>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <PersonIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                个人报名
              </Typography>
              <Box>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="姓名"
                  name="name"
                  value={eventParticipantData.name}
                  onChange={(e) =>
                    setEventParticipantData({
                      ...eventParticipantData,
                      name: e.target.value,
                    })
                  }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="邮箱"
                  name="email"
                  value={eventParticipantData.email}
                  onChange={(e) =>
                    setEventParticipantData({
                      ...eventParticipantData,
                      email: e.target.value,
                    })
                  }
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="phone"
                  label="手机号码"
                  value={eventParticipantData.phone}
                  onChange={(e) =>
                    setEventParticipantData({
                      ...eventParticipantData,
                      phone: e.target.value,
                    })
                  }
                />

                <TextField
                  margin="normal"
                  fullWidth
                  name="weChat"
                  label="微信号"
                  value={eventParticipantData.weChat}
                  onChange={(e) =>
                    setEventParticipantData({
                      ...eventParticipantData,
                      weChat: e.target.value,
                    })
                  }
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="address"
                  label="地址（如需接送）"
                  value={eventParticipantData.address}
                  onChange={(e) =>
                    setEventParticipantData({
                      ...eventParticipantData,
                      address: e.target.value,
                    })
                  }
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="备注"
                  name="message"
                  multiline
                  rows={4}
                  value={eventParticipantData.message}
                  onChange={(e) =>
                    setEventParticipantData({
                      ...eventParticipantData,
                      message: e.target.value,
                    })
                  }
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={uploadEventParticipant}
                >
                  提交
                </Button>
                <Grid item>
                  <Button component={Link} to="/event" variant="body2">
                    返回
                  </Button>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
