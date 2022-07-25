/*
 * @Author: Shikai Jin
 * @Date: 2022-06-11 20:04:21
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-23 23:33:10
 * @FilePath: /uwcssa_ca/src/views/Home/components/Team/Team.tsx
 * @Description:
 *
 */

import {
  Avatar,
  Box,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import React from "react";

function Team(): JSX.Element {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Box>
            <Box marginBottom={2}>
              <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Our leaders will help you
              </Typography>
              <Typography color="text.secondary">
                We develop intelligent solutions for companies to reduce their
                operational costs, increase their profitability and improve
                service quality.
              </Typography>
            </Box>
            <Grid container spacing={1}>
              {[
                "Our sign up is dead simple. We only require your basic company information",
                "We support bulk uploading via SQL, integrations with most data storage products",
                "Simply select where you'd like to transfer your data",
              ].map((item) => (
                <Grid item xs={12} key={item}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width="auto"
                    padding={0}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth="auto !important"
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.secondary.main}
                        width={20}
                        height={20}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <ListItemText primary={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height={1} width={1} display="flex" flexDirection="column">
            <Box
              component="img"
              src="https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/shenshu.jpg"
              alt="..."
              width={160}
              height={160}
              marginLeft="calc(60% - 160px)"
              zIndex={3}
              borderRadius="100%"
              boxShadow={4}
              data-aos="fade-up"
              sx={{
                objectFit: "cover",
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.5)" : "none",
              }}
            />
            <Box
              component="img"
              width={200}
              height={200}
              src="https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/fawubu.jpg"
              alt="..."
              marginTop="-8%"
              zIndex={2}
              borderRadius="100%"
              boxShadow={4}
              data-aos="fade-up"
              sx={{
                objectFit: "cover",
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.5)" : "none",
              }}
            />
            <Box
              component="img"
              width={300}
              height={300}
              src="https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/chenzhenhao.jpg"
              alt="..."
              marginTop="-20%"
              marginLeft="calc(100% - 300px)"
              zIndex={1}
              borderRadius="100%"
              boxShadow={4}
              data-aos="fade-up"
              sx={{
                objectFit: "cover",
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.5)" : "none",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Team;
