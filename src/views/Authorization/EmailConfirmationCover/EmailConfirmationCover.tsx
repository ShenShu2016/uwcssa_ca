/*
 * @Author: Shen Shu
 * @Date: 2022-06-14 10:58:14
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 16:16:09
 * @FilePath: /uwcssa_ca/src/views/Authorization/EmailConfirmationCover/EmailConfirmationCover.tsx
 * @Description:
 *
 */

import Container from "components/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { useTheme, Box } from "@mui/material";
import Form from "./components/Form/Form";

function EmailConfirmationCover(): JSX.Element {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          position="relative"
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display="flex"
            alignItems="center"
          >
            <Container>
              <Form />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 50%" },
              position: "relative",
              maxWidth: { xs: "100%", md: "50%" },
              order: { xs: 1, md: 2 },
              minHeight: { xs: "auto", md: "calc(100vh - 58px)" },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: "50vw" },
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    left: "0%",
                    width: 1,
                    height: 1,
                    position: { xs: "relative", md: "absolute" },
                    clipPath: {
                      xs: "none",
                      md: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                    },
                    shapeOutside: {
                      xs: "none",
                      md: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: "auto", md: 1 },
                      "& img": {
                        objectFit: "cover",
                      },
                      "& .lazy-load-image-loaded": {
                        height: 1,
                        width: 1,
                      },
                    }}
                  >
                    <Box
                      component={LazyLoadImage}
                      effect="blur"
                      src="https://assets.maccarianagency.com/backgrounds/img18.jpg"
                      height={{ xs: "auto", md: 1 }}
                      maxHeight={{ xs: 300, md: 1 }}
                      width={1}
                      maxWidth={1}
                      sx={{
                        filter:
                          theme.palette.mode === "dark"
                            ? "brightness(0.7)"
                            : "none",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default EmailConfirmationCover;
