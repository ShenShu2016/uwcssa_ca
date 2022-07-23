/*
 * @Author: Shikai Jin
 * @Date: 2022-05-26 22:59:47
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-05-27 18:09:31
 * @FilePath: /uwcssa_ca/src/views/FQA/FQA.tsx
 * @Description:
 *
 */

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const mock = [
  {
    question: "General settings",
    answer: "Motivation is the first step to success",
  },
  {
    question: "General settings",
    answer: "Motivation is the first step to success",
  },
  {
    question: "General settings",
    answer: "Motivation is the first step to success",
  },
];

function Question(): JSX.Element {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: 700 }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align="center"
        >
          We are here to help
        </Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          {mock.map((item, i) => (
            <Accordion
              key={i}
              expanded={expanded === `${i}`}
              onChange={handleChange(`${i}`)}
              disableGutters
              elevation={0}
              square
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, .05)"
                      : "rgba(0, 0, 0, .03)",
                  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                    transform: "rotate(90deg)",
                  },
                  "& .MuiAccordionSummary-content": {
                    marginLeft: theme.spacing(1),
                  },
                }}
              >
                <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Question;
