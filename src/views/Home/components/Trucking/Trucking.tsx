import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LaptopSkeletonIllustration from "svg/illustrations/LaptopSkeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const mock = [
  {
    title: "Built for developers",
    subtitle:
      "theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: "Designed to be modern",
    subtitle:
      "Designed with the latest design trends in mind. theFront feels modern, minimal, and beautiful.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Documentation for everything",
    subtitle:
      // eslint-disable-next-line quotes
      "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

function Trucking(): JSX.Element {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  function LeftSide() {
    return (
      <List disablePadding>
        {mock.map((item, index) => (
          <ListItem
            key={index}
            disableGutters
            data-aos="fade-up"
            data-aos-delay={index * 300}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <ListItemAvatar>
              <Box
                component={Avatar}
                variant="rounded"
                color={theme.palette.primary.dark}
                bgcolor={`${theme.palette.primary.light}22`}
              >
                {item.icon}
              </Box>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.subtitle} />
          </ListItem>
        ))}
      </List>
    );
  }

  function RightSide() {
    return (
      <Box width={1}>
        <Box
          sx={{
            position: "relative",
            marginX: "auto",
          }}
        >
          <Box
            sx={{
              position: "relative",
              marginX: "auto",
            }}
          >
            <Box>
              <Box
                position="relative"
                zIndex={2}
                maxWidth={1}
                height="auto"
                sx={{ verticalAlign: "middle" }}
              >
                <LaptopSkeletonIllustration />
              </Box>
              <Box
                position="absolute"
                top="8.4%"
                left="12%"
                width="76%"
                height="83%"
                border={`1px solid ${theme.palette.alternate.dark}`}
                zIndex={3}
                sx={{
                  "& .lazy-load-image-loaded": {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  effect="blur"
                  src="https://assets.maccarianagency.com/screenshots/dashboard.png"
                  alt="Image Description"
                  width={1}
                  height={1}
                  sx={{
                    objectFit: "cover",
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
    );
  }

  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
            Trucking
          </Typography>
        </Box>
        <Typography variant="h6" component="p" align="center">
          Decision problems faced by less than truckload (LTL) companies are
          highly complex.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Box data-aos={isMd ? "fade-right" : "fade-up"}>
            <LeftSide />
          </Box>
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <RightSide />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Trucking;
