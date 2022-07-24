/*
 * @Author: Shikai Jin
 * @Date: 2022-05-26 22:59:47
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 00:14:18
 * @FilePath: /uwcssa_ca/src/views/FQA/FQA.tsx
 * @Description:
 *
 */

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";

const mock = [
  {
    question: "General settings",
    answer: "Motivation is the first step to success",
    id: 1,
  },
  {
    question: "General settings",
    answer: "Motivation is the first step to success",
    id: 2,
  },
  {
    question: "General settings",
    answer: "Motivation is the first step to success",
    id: 3,
  },
];

function Question(): JSX.Element {
  const theme = useTheme();

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
              key={item.id}
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
