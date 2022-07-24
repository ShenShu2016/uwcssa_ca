/*
 * @Author: 李佳修
 * @Date: 2022-05-18 09:12:03
 * @LastEditTime: 2022-07-24 17:45:19
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/layouts/Main/components/Sidebar/components/SidebarNav/components/NavItem/NavItem.tsx
 */

import React, { useEffect, useState } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import { matchPath, useLocation, useNavigate, Link } from "react-router-dom";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  title: string;
  items: Array<PageItem> | PageItem;
}

function NavItem({ title, items }: Props): JSX.Element {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, []);

  const hasActiveLink = () => {
    if (items instanceof Array) {
      return items.find((i) => matchPath(i.href, activeLink));
    }
    return matchPath(items.href, activeLink);
  };

  return (
    <Box>
      {items instanceof Array && items?.length ? (
        <Accordion
          disableGutters
          elevation={0}
          sx={{ backgroundColor: "transparent" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ padding: 0 }}
          >
            <Typography
              fontWeight={hasActiveLink() ? 600 : 400}
              color={hasActiveLink() ? "primary" : "text.primary"}
            >
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <Grid container spacing={1}>
              {items.map((p) => (
                <Grid item key={p.title} xs={12}>
                  <Button
                    size="large"
                    component={Link}
                    to={p.href}
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      color:
                        activeLink === p.href
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      backgroundColor:
                        activeLink === p.href
                          ? alpha(theme.palette.primary.main, 0.1)
                          : "transparent",
                      fontWeight: activeLink === p.href ? 600 : 400,
                    }}
                  >
                    {p.title}
                    {p.isNew && (
                      <Box
                        padding={0.5}
                        display="inline-flex"
                        borderRadius={1}
                        bgcolor="primary.main"
                        marginLeft={2}
                      >
                        <Typography
                          variant="caption"
                          sx={{ color: "common.white", lineHeight: 1 }}
                        >
                          new
                        </Typography>
                      </Box>
                    )}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ) : (
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
          onClick={() => navigate((items as PageItem).href)}
        >
          <Typography
            fontWeight={hasActiveLink() ? 600 : 400}
            color={hasActiveLink() ? "primary" : "text.primary"}
          >
            {title}
          </Typography>
        </AccordionSummary>
      )}
    </Box>
  );
}

export default NavItem;
