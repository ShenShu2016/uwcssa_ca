/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@mui/material/styles";

import Container from "components/Container";

function Newsletter(): JSX.Element {
  const theme = useTheme();

  return (
    <Box bgcolor="primary.main" borderRadius={2}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box marginBottom={4}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: theme.palette.common.white,
              }}
            >
              Subscribe to our newsletter
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Don't lose a chance to be among the firsts to know about our
              upcoming news and updates.
            </Typography>
          </Box>
          <Box width={1} display="flex" justifyContent="center">
            <FormControl
              fullWidth
              variant="outlined"
              sx={{
                maxWidth: 400,
                width: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-root": {
                  color: "white",
                },
                "& .MuiInputAdornment-root svg": {
                  color: "white !important",
                },
              }}
            >
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </InputAdornment>
                }
                placeholder="Enter your email"
              />
            </FormControl>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Newsletter;
