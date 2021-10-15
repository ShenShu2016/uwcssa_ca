import { 
  Box, 
  Button, 
  Grid, 
  Paper, 
  Typography 
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React from "react";
import cssaLogo from "../static/cssalogo.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root:{
    textAlign: "center",
    flexDirection:"row",
    alignItems:"center",
    display: "flex",
    marginTop: "2rem",
    color: "#0D1F48",
  },
  title: {
    marginTop: "5rem",
  },
  paper:{
    height:"100%",
    textAlign:"center",
    width:"300px",
  },
  img:{
    width:"50%",
    height:"820px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    marginRight:"200px",
  }
}));

export default function ContactUs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={cssaLogo} alt=" UWCSSA LOGO"  className={classes.img}/>
      
      <Box
          sx={{
            maxWidth: "100%",
            textAlign: "center",
          }}
          
        >
          <Typography variant="h3" className={classes.title}>
            联系我们
          </Typography>
          <Typography variant="body1">
            为确保您的询问能到达正确的人手中，请选择以下最合适的方式进行联系。
          </Typography>

          <Box sx={{ marginTop: "8rem", marginBottom: "10rem" }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              <Grid item xs={12} sm={6} md={6} lg={3} spacing={2} zeroMinWidth>
                <Paper className={classes.paper}>
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
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3} sapcing={2} zeroMinWidth>
                <Paper className={classes.paper}>
                  <Typography variant="h6">网站反馈/错误报告</Typography>
                  <Typography variant="body2">
                    如果您对网站发展有任何反馈，
                    或者您发现了一个错误，请点击此处
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
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3} spacing={2} zeroMinWidth>
                <Paper className={classes.paper}>
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
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3} spacing={2} zeroMinWidth>
                <Paper className={classes.paper}>
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
                </Paper>
              </Grid>
            </Grid>
          </Box>
      </Box>
    </div>
  );
}
