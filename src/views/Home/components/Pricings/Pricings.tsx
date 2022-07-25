/*
 * @Author: Shen Shu
 * @Date: 2022-06-14 10:58:14
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 00:47:36
 * @FilePath: /uwcssa_ca/src/views/Home/components/Pricings/Pricings.tsx
 * @Description:
 *
 */
import {
  Avatar,
  Box,
  Typography,
  useTheme,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import React from "react";

const mock = [
  {
    title: "Starter",
    price: "$22",
    features: ["1 User", "1 App", "Integrations"],
    isHighlighted: false,
    id: 1,
  },
  {
    title: "Pro",
    price: "$44",
    features: [
      "All in Starter plan",
      "Google Ads",
      "SSO via Google",
      "API access",
    ],
    isHighlighted: true,
    id: 2,
  },
  {
    title: "Enterprise",
    price: "$77",
    features: [
      "All features",
      "Email support",
      "Google Ads",
      "SSO via Google",
      "API access",
      "Facebook Ads",
    ],
    isHighlighted: false,
    id: 3,
  },
];

function Pricing(): JSX.Element {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Flexible and transparent pricing
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align="center"
        >
          Whatever your status, our offers evolve according to your needs.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <Box
              component={Card}
              height={1}
              display="flex"
              flexDirection="column"
              boxShadow={item.isHighlighted ? 4 : 0}
            >
              <CardContent
                sx={{
                  padding: 4,
                }}
              >
                <Box
                  marginBottom={4}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography variant="h4">
                    <Box component="span" fontWeight={600}>
                      {item.title}
                    </Box>
                  </Typography>
                  <Box display="flex" alignItems="baseline">
                    <Typography variant="h4" color="primary">
                      <Box component="span" fontWeight={600}>
                        {item.price}
                      </Box>
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature) => (
                    <Grid item xs={12} key={feature}>
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
                            bgcolor={theme.palette.primary.main}
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
                        <ListItemText primary={feature} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              <Box flexGrow={1} />
              <CardActions sx={{ justifyContent: "flex-end", padding: 4 }}>
                <Button size="large" variant="contained">
                  Learn more
                </Button>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Pricing;
