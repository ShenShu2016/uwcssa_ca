
import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Button, Grid, Paper } from "@material-ui/core";
import cssalog from "../static/cssalogo.png";
import Box from "@material-ui/core/Box";
import Hidden from '@material-ui/core/Hidden';
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ApartmentIcon from '@material-ui/icons/Apartment';
const useStyles = makeStyles((theme) => ({
    
    root: {
        background:"#fff",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:"Zrem", 
        flexwrap: "wrap",  
    },
    logoBox:{
        width: 600,
        minWidth: "40%",
        maxWidth: "100%",
        backgroundSize: "cover",
        minHeight: 800,
    },
    mainContent:{
        width: 800,
        minWidth: "40%",
        maxWidth: "100%",
        textAlign: "center",
    },
    title:{
        fontWeight:400,
        marginTop:"3rem",
        marginBottom:"1rem",
    },
    contactBox:{
        marginTop:"8rem",
        marginBottom:"10rem",
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        
    },

}));

export default function ContactUs() {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.root} width="100%">
                <Hidden xsDown>
                <Box className={classes.logoBox}>
                    <img src={cssalog}/>
                </Box>
                </Hidden>
                <Box className={classes.mainContent}>
                    
                    <Typography variant="h3" className={classes.title}>
                        联系我们
                    </Typography>
                    <Typography variant="body1" >
                        为确保您的询问能到达正确的人手中，请选择以下最合适的方式进行联系。
                    </Typography>

                    <Box className={classes.contactBox}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
                            <Grid item xs={12} sm={6} md={6} lg={3} sapcing={3} zeroMinWidth>
                                <Paper className={classes.paper}>
                                <Typography variant="h6" >
                                    登录/访问网站有问题
                                </Typography>
                                <Typography variant="body2">
                                    如果您在登录或访问本网站时遇到问题，请发送电子邮件至
                                    <br/>
                                    <Button
                                        variant="text"
                                        target="_top"
                                        color="primary"
                                        href={`mailto:uwincssa.it@gmail.com`}
                                    >
                                    <EmailOutlinedIcon/>
                                    技术部门
                                    </Button>
                                </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} sapcing={3} zeroMinWidth>
                            <Paper className={classes.paper}>
                                <Typography variant="h6" >
                                    网站反馈/错误报告
                                </Typography>
                                <Typography variant="body2">
                                    如果您对网站发展有任何反馈，
                                    或者您发现了一个错误，请点击此处
                                    <br/>
                                    <Button
                                        variant="text"
                                        target="_top"
                                        color="primary"
                                        href={`mailto:uwincssa.it@gmail.com`}
                                    >
                                    <BugReportOutlinedIcon/>
                                    错误反馈
                                    </Button>
                                </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} sapcing={3} zeroMinWidth>
                            <Paper className={classes.paper}>
                                <Typography variant="h6" >
                                    广告或其他市场查询
                                </Typography>
                                <Typography variant="body2">
                                    如果您有营销或商务合作相关问题，请发送电子邮件至
                                    <br/>
                                    <Button
                                        variant="text"
                                        target="_top"
                                        color="primary"
                                        href={`mailto:uwincssa.it@gmail.com`}
                                    >
                                    <BusinessCenterIcon/>
                                    商务合作
                                    </Button>
                                </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} sapcing={3} zeroMinWidth>
                            <Paper className={classes.paper}>
                                <Typography variant="h6" >
                                    所有其他类型查询
                                </Typography>
                                <Typography variant="body2">
                                    如果您不确定，或者您认为您的询问不符合上述之一，请联系
                                    <br/>
                                    <Button
                                        variant="text"
                                        target="_top"
                                        color="primary"
                                        href={`mailto:uwincssa.it@gmail.com`}
                                    >
                                    <ApartmentIcon/>
                                    综合部门
                                    </Button>
                                </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
