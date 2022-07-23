/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 16:01:18
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-29 23:50:10
 * @FilePath: /uwcssa_ca/src/views/CompanyTerms/CompanyTerms.tsx
 * @Description:
 *
 */

import Box from "@mui/material/Box";
import Container from "components/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { ContactCard, Content } from "./components";

function CompanyTerms(): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <Box boxShadow={4} borderRadius={2}>
        <Box bgcolor={theme.palette.primary.main} borderRadius={2}>
          <Container paddingX={{ xs: 2, sm: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: theme.palette.common.white,
              }}
            >
              Company terms & privacy policy
            </Typography>
            <Typography
              gutterBottom
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Last modified on <strong>23 Aug, 2021</strong>
            </Typography>
          </Container>
          <Box
            component="svg"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            width={1}
            marginBottom={-1}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            />
          </Box>
        </Box>
        <Container
          paddingTop="0 !important"
          paddingX={{ xs: 2, sm: 4 }}
          position="relative"
          top={0}
        >
          <Box
            component={Grid}
            container
            spacing={4}
            flexDirection={{ xs: "column-reverse", md: "row" }}
          >
            <Grid item xs={12} md={9}>
              <Content />
            </Grid>
            <Grid item xs={12} md={3}>
              <Box position="sticky" top={theme.spacing(10)} className="sticky">
                <ContactCard />
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

export default CompanyTerms;
