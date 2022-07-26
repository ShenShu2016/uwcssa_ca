/*
 * @Author: 李佳修
 * @Date: 2022-05-18 13:56:36
 * @LastEditTime: 2022-07-25 22:34:45
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/views/Dashboard/Dashboard.tsx
 */

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  LinearProgress,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAuthState, getOwnerUserName } from "redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { fetchArticleList } from "redux/article/articleSlice";
import { fetchEventList } from "redux/event/eventSlice";
import EventContainer from "components/EventContainer/EventContainer";
import ArticleContainer from "components/ArticleContainer/ArticleContainer";
import UserCardGrid from "components/UserCardGrid/UserCardGrid";
import JoinedEvent from "./components/JoinedEvent";
import Section from "./components/Section";

// import Entries from './components/Entries';

const StickyAccordion = styled(AccordionSummary)(() => ({
  position: "sticky",
  top: "58px",
  zIndex: 100,
  background: "#ffffff",
}));

function Dashboard(): React.ReactElement {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState); // 看一下Auth的选项他有可能会返回null 或者false 现在前面没有load 好user 就不让你进了，所以有可能不需要 ！==null的判断了
  const ownerUsername = useAppSelector(getOwnerUserName);
  const [loading, setLoading] = useState<boolean>(true);
  const { fetchArticleListStatus } = useAppSelector((state) => state.article);
  const { fetchEventListStatus } = useAppSelector((state) => state.event);

  useEffect(() => {
    if (fetchArticleListStatus === "idle") {
      dispatch(
        fetchArticleList({
          isAuth,
        }),
      );
    }
    if (
      ["succeed", "failed"].includes(fetchArticleListStatus) &&
      ["succeed", "failed"].includes(fetchEventListStatus)
    ) {
      setLoading(false);
    }
  }, [dispatch, fetchArticleListStatus, fetchEventListStatus, isAuth]);

  useEffect(() => {
    if (fetchEventListStatus === "idle") {
      dispatch(fetchEventList({ isAuth, ownerUsername }));
    }
    if (
      ["succeed", "failed"].includes(fetchArticleListStatus) &&
      ["succeed", "failed"].includes(fetchEventListStatus)
    ) {
      setLoading(false);
    }
  }, [
    dispatch,
    fetchArticleListStatus,
    fetchEventListStatus,
    isAuth,
    ownerUsername,
  ]);

  return (
    <>
      {/* PC端显示界面 */}
      <Box
        sx={{
          padding: "24px 10%",
          display: {
            md: "block",
            xs: "none",
          },
        }}
      >
        {loading ? (
          <Box
            minHeight="60vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box width="40%">
              <LinearProgress />
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#bdbdbd",
                  padding: 2,
                  textAlign: "center",
                }}
              >
                LOADING...
              </Typography>
            </Box>
          </Box>
        ) : (
          <>
            <Section
              title="活动"
              sx={{
                height: "auto",
              }}
            >
              <EventContainer />
            </Section>
            <Box display="flex">
              <Section
                title="新闻"
                hasPadding={false}
                component={Box}
                sx={{
                  flex: 2,
                }}
              >
                <ArticleContainer />
              </Section>

              <Box
                sx={{ flex: 1 }}
                position="sticky"
                top="80px"
                alignSelf="flex-start"
              >
                <Section title="个人信息" hasPadding={false}>
                  <UserCardGrid />
                </Section>

                <Card sx={{ margin: "12px 8px" }}>
                  <Button fullWidth>新生必读</Button>
                </Card>

                {/* <Section title="功能入口" hasPadding={false} component={Box}>
                  <Entries />
                </Section> */}

                <Section
                  title="已加入的活动"
                  hasPadding={false}
                  component={Box}
                >
                  <JoinedEvent />
                </Section>
              </Box>
            </Box>
          </>
        )}
      </Box>
      {/* 移动端显示界面 */}
      <Box
        sx={{
          display: {
            md: "none",
            xs: "block",
          },
          padding: "8px",
        }}
      >
        {loading ? (
          <Box
            minHeight="60vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box width="50%">
              <LinearProgress />
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#bdbdbd",
                  padding: 2,
                  textAlign: "center",
                }}
              >
                LOADING...
              </Typography>
            </Box>
          </Box>
        ) : (
          <>
            <Section
              title="活动"
              sx={{
                height: "auto",
              }}
            >
              <EventContainer />
            </Section>
            <Accordion defaultExpanded>
              <StickyAccordion
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>新闻</Typography>
              </StickyAccordion>
              <AccordionDetails sx={{ padding: 0 }}>
                <Section
                  title="新闻"
                  showTitle={false}
                  hasPadding={false}
                  component={Box}
                  sx={{
                    flex: 1,
                    minHeight: {
                      xs: "unset",
                      md: "100vh",
                    },
                  }}
                >
                  <ArticleContainer />
                </Section>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion>
                <StickyAccordion
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>活动</Typography>
                </StickyAccordion>
                <AccordionDetails sx={{ padding: 0 }}>
                  <Section
                    title="活动"
                    showTitle={false}
                    sx={{
                      flex: 2,
                      minHeight: {
                        xs: 'unset',
                        md: '100vh',
                      },
                    }}
                  >
                    {''}
                  </Section>
                </AccordionDetails>
              </Accordion> */}

            <Accordion>
              <StickyAccordion
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>个人信息 & 新生必读</Typography>
              </StickyAccordion>
              <AccordionDetails sx={{ padding: 0 }}>
                <Section title="个人信息" showTitle={false} hasPadding={false}>
                  <UserCardGrid />
                </Section>

                <Card sx={{ margin: "12px 8px" }}>
                  <Button fullWidth>新生必读</Button>
                </Card>

                {/* <Section
                  title="功能入口"
                  hasPadding={false}
                  showTitle={false}
                  component={Box}
                >
                  <Entries />
                </Section> */}
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <StickyAccordion
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>已加入的活动</Typography>
              </StickyAccordion>
              <AccordionDetails sx={{ padding: 0 }}>
                <Section
                  title="已加入的活动"
                  hasPadding={false}
                  showTitle={false}
                >
                  <JoinedEvent />
                </Section>
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </Box>
    </>
  );
}

export default Dashboard;
