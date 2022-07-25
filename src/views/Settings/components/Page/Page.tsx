/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 18:25:04
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-20 21:09:20
 * @FilePath: /uwcssa_ca/src/views/Settings/components/Page/Page.tsx
 * @Description:
 *
 */

import {
  Box,
  Card,
  Grid,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import Container from "components/Container";
import { Link } from "react-router-dom";

const pages = [
  {
    id: "general",
    href: "/settings/general",
    title: "General",
  },
  // {
  //   id: 'security',
  //   href: '/settings/security',
  //   title: 'Security',
  // },
  {
    id: "notifications",
    href: "/settings/notifications",
    title: "Notifications",
  },
  {
    id: "温莎大学邮箱验证",
    href: "/settings/uwindsorVerify",
    title: "温莎大学邮箱验证",
  },
  // {
  //   id: 'billing',
  //   href: '/settings/billing',
  //   title: 'Billing Information',
  // },
];

interface Props {
  children: React.ReactNode;
}

function Page({ children }: Props): JSX.Element {
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : "");
  }, []);

  const theme = useTheme();

  return (
    <Box>
      <Box bgcolor="primary.main" paddingY={4}>
        <Container>
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{ color: "common.white" }}
          >
            Account settings
          </Typography>
          <Typography variant="h6" sx={{ color: "common.white" }}>
            Change account information and settings
          </Typography>
        </Container>
      </Box>
      <Container paddingTop="0 !important" marginTop={-8}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <List
                disablePadding
                sx={{
                  display: { xs: "inline-flex", md: "flex" },
                  flexDirection: { xs: "row", md: "column" },
                  overflow: "auto",
                  flexWrap: "nowrap",
                  width: "100%",
                  paddingY: { xs: 3, md: 4 },
                  paddingX: { xs: 4, md: 0 },
                }}
              >
                {pages.map((item) => (
                  <ListItem
                    key={item.id}
                    component={Link}
                    to={item.href}
                    disableGutters
                    sx={{
                      marginRight: { xs: 2, md: 0 },
                      flex: 0,
                      paddingX: { xs: 0, md: 3 },
                      borderLeft: {
                        xs: "none",
                        md: "2px solid transparent",
                      },
                      borderLeftColor: {
                        md:
                          activeLink === item.href
                            ? theme.palette.primary.main
                            : "transparent",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      noWrap
                      color={
                        activeLink === item.href
                          ? "text.primary"
                          : "text.secondary"
                      }
                    >
                      {item.title}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            <Card sx={{ boxShadow: 3, padding: 4 }}>{children}</Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Page;
