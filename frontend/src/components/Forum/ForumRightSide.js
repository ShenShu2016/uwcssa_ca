import { Box, Stack, Paper, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  width: 420,
  position: "sticky",
  top: "8rem",
  justifyContent: "center",

  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export default function ForumRightSide() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTOP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Root>
      <Stack direction="column" sx={{ mt: 4 }}>
        <Box>
          <Paper sx={{ padding: "1rem" }}>
            <Stack direction="column" divider={<Divider flexItem />}>
              <Typography
                variant="h5"
                component="span"
                style={{
                  whiteSpace: "pre-wrap",
                  fontWeight: 500,
                  wordBreak: "break-word",
                  // color: "grey",
                }}
              >
                论坛公告
              </Typography>
              <Typography
                variant="h6"
                component="span"
                style={{
                  whiteSpace: "pre-wrap",
                  fontWeight: 400,
                  wordBreak: "break-word",
                  // color: "grey",
                }}
              >
                文明和谐，共建新社区
              </Typography>
            </Stack>
          </Paper>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Paper sx={{ padding: "1rem" }}>
            <Stack direction="column" divider={<Divider flexItem />}>
              <Typography
                variant="h5"
                component="span"
                style={{
                  whiteSpace: "pre-wrap",
                  fontWeight: 500,
                  wordBreak: "break-word",
                  // color: "grey",
                }}
              >
                疫情快报
              </Typography>
              <Typography
                variant="h6"
                component="span"
                style={{
                  whiteSpace: "pre-wrap",
                  fontWeight: 400,
                  wordBreak: "break-word",
                  // color: "grey",
                }}
              >
                今日情况，火速统计中
              </Typography>
            </Stack>
          </Paper>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Paper sx={{ padding: "1rem" }}>
            <Stack direction="column" divider={<Divider flexItem />}>
              <Typography
                variant="h5"
                component="span"
                style={{
                  whiteSpace: "pre-wrap",
                  fontWeight: 500,
                  wordBreak: "break-word",
                  // color: "grey",
                }}
              >
                论坛广告
              </Typography>
              <Typography
                variant="h6"
                component="span"
                style={{
                  whiteSpace: "pre-wrap",
                  fontWeight: 400,
                  wordBreak: "break-word",
                  // color: "grey",
                }}
              >
                黄金地段，火热招租中
              </Typography>
            </Stack>
          </Paper>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Paper sx={{ padding: "1rem" }}>
            <Stack direction="column" divider={<Divider flexItem />}>
              <Typography
                variant="h5"
                component="span"
                style={{
                  whiteSpace: "pre-wrap",
                  fontWeight: 500,
                  wordBreak: "break-word",
                  // color: "grey",
                }}
              >
                论坛投票
              </Typography>
              <Typography
                variant="h6"
                component="span"
                style={{
                  whiteSpace: "pre-wrap",
                  fontWeight: 400,
                  wordBreak: "break-word",
                  // color: "grey",
                }}
              >
                快来参与，选出最爱贴
              </Typography>
            </Stack>
          </Paper>
        </Box>
        {isVisible && (
          <Box display="flex" sx={{mt:4}} justifyContent="center" alignItems="center">
          <Fab variant="circular" onClick={scrollToTOP} color="primary">
            <NavigationIcon />
          </Fab>
          </Box>
        )}
      </Stack>
    </Root>
  );
}
