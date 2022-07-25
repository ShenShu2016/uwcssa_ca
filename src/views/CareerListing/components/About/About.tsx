/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 16:27:30
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-17 16:31:46
 * @FilePath: \uwcssa_ca\frontend\src\views\CareerListing\components\About\About.tsx
 * @Description:
 *
 */

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function About(): JSX.Element {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align="center"
          color="text.secondary"
          sx={{ textTransform: "uppercase" }}
          variant="subtitle2"
          fontWeight={600}
        >
          About
        </Typography>
        <Typography fontWeight={700} variant="h4" align="center">
          About our company
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid
          item
          container
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
          xs={12}
          md={6}
        >
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        </Grid>
        <Grid item container xs={12} md={6}>
          <Typography color="text.secondary">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
            <br />
            <br />
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sx={{
            "& .lazy-load-image-background.lazy-load-image-loaded": {
              width: "100%",
              height: "100%",
            },
          }}
        >
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            maxHeight={{ xs: 300, sm: 400, md: 520 }}
            borderRadius={2}
            src="https://assets.maccarianagency.com/backgrounds/img1.jpg"
            alt="..."
            effect="blur"
            sx={{
              objectFit: "cover",
              filter:
                theme.palette.mode === "dark" ? "brightness(0.6)" : "none",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
