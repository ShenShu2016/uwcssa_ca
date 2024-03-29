/*
 * @Author: Shen Shu
 * @Date: 2022-05-23 19:00:55
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 00:46:10
 * @FilePath: /uwcssa_ca/src/views/Home/components/News/News.tsx
 * @Description:
 *
 */

import "./index.css";

import React, { useEffect } from "react";
import {
  fetchArticleList,
  selectAllArticles,
} from "redux/article/articleSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import {
  Box,
  Button,
  Card,
  CardActions,
  useMediaQuery,
  useTheme,
  Typography,
  Grid,
  CardContent,
  CardMedia,
} from "@mui/material";

import { Link } from "react-router-dom";

import { getAuthState } from "redux/auth/authSlice";

function News(): JSX.Element {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState); // 看一下Auth的选项他有可能会返回null 或者false 现在前面没有load 好user 就不让你进了，所以有可能不需要 ！==null的判断了
  const articles = useAppSelector(selectAllArticles); // redux 有这种用法
  const { fetchArticleListStatus } = useAppSelector((state) => state.article);

  useEffect(() => {
    const getArticles = async () => {
      if (isAuth !== null && fetchArticleListStatus === "idle") {
        await dispatch(
          fetchArticleList({
            isAuth,
          }),
        );
      }
    };
    getArticles();
  }, [isAuth, fetchArticleListStatus, dispatch]);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: 700 }}
        >
          最新资讯
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align="center"
        >
          随点随看 信息快充
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            {articles.slice(0, 3).map((item, index) => (
              <Grid
                item
                xs={12}
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box
                  component={Card}
                  display="flex"
                  flexDirection={{ xs: "column", sm: "row" }}
                >
                  <CardMedia
                    title={item.title}
                    image={
                      item.coverPageImgURL ||
                      "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/user/BackGround/6d328ddc-08d7-4f7d-8527-2173349796a7.jpg"
                    }
                    sx={{
                      height: { xs: 240, sm: "auto" },
                      width: { xs: 1, sm: 300 },
                    }}
                  />
                  <CardContent sx={{ width: { xs: "100%", sm: "60%" } }}>
                    <Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        color="text.primary"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        className="article-list-text"
                      >
                        {item.coverPageDescription}
                      </Typography>
                    </Box>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                      <Button component={Link} to={`/article/${item.id}`}>
                        Read More
                      </Button>
                    </CardActions>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            {/* <Grid item xs={12} data-aos="fade-up">
              <Box component={Card} bgcolor={'primary.main'}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="text.primary"
                    sx={{ color: 'common.white' }}
                  >
                    You like what you’re reading?
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ color: 'common.white' }}
                  >
                    Get free online programing tips and resources delivered
                    directly to your inbox.
                  </Typography>
                </CardContent>
              </Box>
            </Grid> */}
            <Grid item xs={12} data-aos="fade-up">
              <Box component={Card}>
                <CardContent>
                  {/* <Typography variant="h6" gutterBottom color="text.primary">
                    Interactive decision support system
                  </Typography> */}
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => window.open("/news")}
                    endIcon={
                      <Box
                        component="svg"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    更多
                  </Button>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default News;
