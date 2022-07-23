/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 17:21:07
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-30 00:16:17
 * @FilePath: /uwcssa_ca/src/layouts/Main/components/Topbar/components/NavItem/NavItem.tsx
 * @Description:
 *
 */

import React, { useEffect, useState } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import { matchPath, useNavigate } from "react-router";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import { Link, useLocation } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  id: string;
  items?: Array<PageItem> | PageItem;
  colorInvert?: boolean;
}

function NavItem({
  title,
  id,
  items,
  colorInvert = false,
}: Props): JSX.Element {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    handleClose(); // 不知道为什么改了这个后，点击才会关闭之前是没有的
    setActiveLink(location.pathname);
  }, [location.pathname]); // 这个变了就会触发

  const hasActiveLink = () => {
    if (items instanceof Array) {
      return items.find((i) => matchPath(i.href, activeLink));
    }
    return matchPath(items.href, activeLink);
  };
  const linkColor = colorInvert ? "common.white" : "text.primary";

  return (
    <Box>
      {items instanceof Array && items?.length ? (
        <>
          <Box
            display="flex"
            alignItems="center"
            aria-describedby={id}
            sx={{ cursor: "pointer" }}
            onClick={(e) => handleClick(e, id)}
          >
            <Typography
              fontWeight={openedPopoverId === id || hasActiveLink() ? 700 : 400}
              color={linkColor}
            >
              {title}
            </Typography>
            <ExpandMoreIcon
              sx={{
                marginLeft: theme.spacing(1 / 4),
                width: 16,
                height: 16,
                transform: openedPopoverId === id ? "rotate(180deg)" : "none",
                color: linkColor,
              }}
            />
          </Box>
          <Popover
            elevation={3}
            id={id}
            open={openedPopoverId === id}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            sx={{
              ".MuiPaper-root": {
                maxWidth: items.length > 12 ? 350 : 250,
                padding: 2,
                marginTop: 2,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                borderTop: `3px solid ${theme.palette.primary.main}`,
              },
            }}
          >
            <Grid container spacing={0.5}>
              {items.map((p, i) => (
                <Grid item key={i} xs={items.length > 12 ? 6 : 12}>
                  <Button
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
          </Popover>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          aria-describedby={id}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate((items as PageItem).href)}
        >
          <Typography
            fontWeight={hasActiveLink() ? 700 : 400}
            color={linkColor}
          >
            {title}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default NavItem;
