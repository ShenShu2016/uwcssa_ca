import {
  Box,
  Button,
  CardActions,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import LikeButtonGroup from "../../../LikeButtonGroup";
import { Link } from "react-router-dom";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import moment from "moment";
import { styled } from "@mui/material/styles";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  //   backgroundColor:
  //     theme.palette.mode === "dark"
  //       ? "rgba(255, 255, 255, .05)"
  //       : "rgba(0, 0, 0, .03)",
  //   flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //   padding: theme.spacing(2),
  //   borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function EventSubComments({ comment }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  //   console.log("ArticleSubComments", comment);
  return (
    <div>
      {Object.keys(comment.eventSubComments.items).length !== 0 ? (
        <Accordion expanded={expanded} onChange={handleChange(!expanded)}>
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{ p: 0 }}
          >
            {expanded ? (
              <Button variant="text" endIcon={<ArrowDropUpRoundedIcon />}>
                隱藏 {comment.eventSubComments.items.length} 回覆
              </Button>
            ) : (
              <Button variant="text" endIcon={<ArrowDropDownRoundedIcon />}>
                查看 {comment.eventSubComments.items.length} 回覆
              </Button>
            )}
          </AccordionSummary>
          <AccordionDetails>
            {comment.eventSubComments.items.map((EventSubComment) => {
              const { id, content, createdAt, userID, user } = EventSubComment;
              return (
                <Grid
                  container
                  spacing={0}
                  justifyContent="space-between"
                  key={id}
                >
                  <Grid item xs={"auto"}>
                    <CardHeader
                      component={Link}
                      to={`/account/profile/${userID}`}
                      sx={{ p: 0, textDecoration: "none" }}
                      avatar={
                        <CustomAvatar
                          link={false}
                          user={user}
                          sx={{ width: 24, height: 24 }}
                        />
                      }
                    />
                  </Grid>
                  <Grid item xs>
                    <Box sx={{ display: "flex", mb: 0.5 }}>
                      <Typography
                        mr={1}
                        // variant="subtitle2"
                        sx={{ fontSize: "13px", color: "#030303" }}
                      >
                        {userID}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#606060" }}>
                        {moment(createdAt).fromNow()}
                      </Typography>
                    </Box>
                    <Box sx={{ my: 0 }}>
                      <Typography
                        variant="body2"
                        component="span"
                        style={{
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                          color: "#030303",
                          fontSize: 14,
                        }}
                      >
                        {content}
                      </Typography>
                    </Box>
                    <CardActions sx={{ p: 0 }}>
                      <LikeButtonGroup item={EventSubComment} />
                      {/* <Button size="small" color="primary">
                        回复
                      </Button> */}
                    </CardActions>
                  </Grid>
                </Grid>
              );
            })}
          </AccordionDetails>
        </Accordion>
      ) : (
        ""
      )}
    </div>
  );
}
