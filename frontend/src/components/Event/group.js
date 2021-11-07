import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GroupIcon from "@mui/icons-material/Group";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
// import { validator } from "./validator";
// import useForm from "./useForm";
import {
  postEventParticipant,
  removeSelectedEvent,
  selectedEvent,
} from "../../redux/actions/eventActions";
import { useTitle } from "../../Hooks/useTitle";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

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
  const history = useHistory();
  const dispatch = useDispatch();
  const { eventID } = useParams();

  const { event } = useSelector((state) => state.event.selected);
  useTitle(`近期活动 ${event.title} 团体报名`);

  useEffect(() => {
    if (eventID && eventID !== "") {
      dispatch(selectedEvent(eventID));
    }
    return () => dispatch(removeSelectedEvent());
  }, [eventID, dispatch]);
  const [eventParticipantData, setEventParticipantData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
    numberOfPeople: "",
  });

  const { username } = useSelector((state) => state.userAuth.user);

  const uploadEventParticipant = async () => {
    const { name, email, address, phone, message, numberOfPeople } =
      eventParticipantData;
    const createEventParticipantInput = {
      name,
      email,
      address,
      phone,
      message,
      numberOfPeople,

      active: true,

      userID: username,
    };

    const response = await dispatch(
      postEventParticipant(createEventParticipantInput)
    );

    if (response.result) {
      history.push(`/event`);
    }
  };

  //   {
  //     /*
  //     const submit = () => {
  //     console.log(" Submitted");
  //   };
  //       const { handleBlur, state, errors } = useForm({
  //        eventParticipantData,
  //        callback: submit,
  //        validator,
  //      });

  // const isValidForm =
  //     state.fullName.length > 0 &&
  //     !errors.fullName &&
  //     state.email.length > 0 &&
  //     !errors.email &&
  //     state.guest.length > 0 &&
  //     !errors.guest;*/
  //   }

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
            backgroundImage:
              "url(https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2020/10/why-do-we-celebrate-halloween-920x613.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={6} elevation={6} square noValidate>
          <Box className={classes.rightBox}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <GroupIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              团体报名
            </Typography>
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                label="申请人姓名"
                name="name"
                // defaultValue={state.fullName}
                value={eventParticipantData.name}
                onChange={(e) =>
                  setEventParticipantData({
                    ...eventParticipantData,
                    name: e.target.value,
                  })
                }
                //error={!!errors.fullName}
                //helperText={errors.fullName}
                // onBlur={handleBlur}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                label="申请人邮箱"
                name="email"
                //defaultValue={state.email}
                value={eventParticipantData.email}
                onChange={(e) =>
                  setEventParticipantData({
                    ...eventParticipantData,
                    email: e.target.value,
                  })
                }
                //error={!!errors.email}
                //helperText={errors.email}
                // onBlur={handleBlur}
              />
              <TextField
                margin="normal"
                fullWidth
                name="Phone"
                label="申请人手机号码"
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
                label="申请人微信号"
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
                label="地址（如需接送）"
                name="address"
                autoComplete="address"
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
                required
                fullWidth
                label="参加人数"
                name="numberOfPeople"
                // defaultValue={state.guest}
                value={eventParticipantData.numberOfPeople}
                onChange={(e) =>
                  setEventParticipantData({
                    ...eventParticipantData,
                    numberOfPeople: e.target.value,
                  })
                }
                // error={!!errors.guest}
                // helperText={errors.guest}
                // onBlur={handleBlur}
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
                // disabled={!isValidForm}
                onClick={uploadEventParticipant}
                // onClick={isValidForm ? handleSubmit : null}
              >
                提交
              </Button>

              <Grid item>
                <Button
                  component={Link}
                  to={`/event/${event.id}`}
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
