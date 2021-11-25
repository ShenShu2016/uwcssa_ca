import {
  Box,
  Button,
  CssBaseline,
  Paper,
  Typography,
  Stack,
} from "@mui/material";

import ApartmentIcon from "@mui/icons-material/Apartment";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Footer from "./Footer";
import React from "react";
import cssaLogo from "../static/cssalogo.png";

import {  styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: 220,
  // height: 100,
  [theme.breakpoints.down("sm")]: {
    width: 220,
  },
  lineHeight: "60px",
}));
export default function ContactUs() {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        <Box
          display={{ xs: "none", sm: "none", md: "block" }}
          sx={{
            mr: { xs: 0, sm: 0, md: 20 },
          }}
        >
          <img src={cssaLogo} alt=" UWCSSA LOGO" />
        </Box>

        <Box

          sx={{
            maxWidth: "100%",
            textAlign: "center",

          }}
        >
          <Box sx={{ mt: 3 }}>
            <Typography variant="h3">联系我们</Typography>
            <Typography variant="body1">
              为确保您的询问能到达正确的人手中，请选择以下最合适的方式进行联系。
            </Typography>
          </Box>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 2, md: 2 }}
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
            sx={{ mt: { xs: 5, sm: 10, md: 20 }, mb: 2 }}
          >
            <Item>
              <Stack direction="column">
                <Typography variant="h6">登录/访问网站有问题</Typography>
                <Typography variant="body2">
                  如果您在登录或访问本网站时遇到问题，请发送电子邮件至
                  <br />
                  <Button
                    variant="text"
                    target="_top"
                    color="primary"
                    href={`mailto:uwincssa.it@gmail.com`}
                  >
                    <EmailOutlinedIcon />
                    技术部门
                  </Button>
                </Typography>
              </Stack>
            </Item>

            <Item>
              <Typography variant="h6">网站反馈/错误报告</Typography>
              <Typography variant="body2">
                如果您对网站发展有任何反馈， 或者您发现了一个错误，请点击此处
                <br />
                <Button
                  variant="text"
                  target="_top"
                  color="primary"
                  href={`mailto:uwincssa.it@gmail.com`}
                >
                  <BugReportOutlinedIcon />
                  错误反馈
                </Button>
              </Typography>
            </Item>
            <Item>
              <Typography variant="h6">广告或其他市场查询</Typography>
              <Typography variant="body2">
                如果您有营销或商务合作相关问题，请发送电子邮件至
                <br />
                <Button
                  variant="text"
                  target="_top"
                  color="primary"
                  href={`mailto:uwincssa.it@gmail.com`}
                >
                  <BusinessCenterIcon />
                  商务合作
                </Button>
              </Typography>
            </Item>

            <Item>
              <Typography variant="h6">所有其他类型查询</Typography>
              <Typography variant="body2">
                如果您不确定，或者您认为您的询问不符合上述之一，请联系
                <br />
                <Button
                  variant="text"
                  target="_top"
                  color="primary"
                  href={`mailto:uwincssa.it@gmail.com`}
                >
                  <ApartmentIcon />
                  综合部门
                </Button>
              </Typography>
            </Item>
          </Stack>
        </Box>
      </Stack>
      <CssBaseline />
      <Footer />
    </Box>
  );
}
