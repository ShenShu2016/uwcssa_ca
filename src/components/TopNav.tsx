/*
 * @Author: 李佳修
 * @Date: 2022-05-18 09:12:03
 * @LastEditTime: 2022-08-17 19:35:37
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/components/TopNav.tsx
 */

import { IconButton, Box, useTheme, useMediaQuery } from "@mui/material";

import ChatIcon from "@mui/icons-material/Chat";
import GitHubButton from "react-github-btn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import ThemeModeToggler from "components/ThemeModeToggler";
import { blue } from "@mui/material/colors";

interface Props {
  colorInvert?: boolean;
}

function TopNav({ colorInvert = false }: Props): JSX.Element {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <Box
        marginRight={{ xs: 1, sm: 2 }}
        marginTop={{ xs: 1 }}
        sx={{ display: isMd ? "block" : "none" }}
      >
        <GitHubButton
          href="https://github.com/ShenShu2016/uwcssa_ca"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star ntkme/github-buttons on GitHub"
        >
          Star
        </GitHubButton>

        {/* <Link
          underline="none"
          component="a"
          href="/https://github.com/ShenShu2016/uwcssa_cademos"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box
            padding={0.5}
            display={'inline-flex'}
            borderRadius={1}
            bgcolor={'primary.main'}
            marginLeft={1}
          >
            <Typography
              variant={'caption'}
              sx={{ color: 'common.white', lineHeight: 1 }}
            >
              new
            </Typography>
          </Box>
        </Link> */}
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }} marginTop={{ xs: 1 }}>
        <GitHubButton
          href="https://github.com/ShenShu2016/uwcssa_ca/issues"
          data-icon="octicon-issue-opened"
          data-size="large"
          data-show-count="true"
          aria-label="Issue ShenShu2016/uwcssa_ca on GitHub"
        >
          Issue
        </GitHubButton>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <IconButton
          size="small"
          onClick={() => window.open("https://discord.gg/uWA4XFgbsB")}
          sx={{
            color: colorInvert ? blue[50] : blue[700],
            border: "1px solid #bdbdbd",
            borderRadius: "10px",
          }}
        >
          <img
            src="/assets/images/icons/Discord_Icon.svg"
            alt="discord"
            style={{
              height: "20px",
              width: "20px",
            }}
          />
        </IconButton>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <IconButton
          size="small"
          onClick={() =>
            window.open("https://github.com/ShenShu2016/uwcssa_ca/discussions")
          }
          sx={{
            color: colorInvert ? blue[50] : blue[700],
            border: "1px solid #bdbdbd",
            borderRadius: "10px",
          }}
        >
          <ChatIcon
            fontSize="small"
            sx={{
              height: "20px",
              width: "20px",
            }}
          />
        </IconButton>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <IconButton
          size="small"
          onClick={() =>
            window.open("https://github.com/ShenShu2016/uwcssa_ca")
          }
          sx={{
            color: colorInvert ? blue[50] : blue[700],
            border: "1px solid #bdbdbd",
            borderRadius: "10px",
          }}
        >
          <GitHubIcon
            fontSize="small"
            sx={{
              height: "20px",
              width: "20px",
            }}
          />
        </IconButton>
      </Box>
      <Box>
        <ThemeModeToggler />
      </Box>
    </Box>
  );
}

export default TopNav;
