/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 16:50:46
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 15:59:43
 * @FilePath: /uwcssa_ca/src/components/Comment/CommentDialog/CommentDialog.tsx
 * @Description:
 *
 */
import React, { useState } from "react";
import { alpha, useTheme, Box, Button } from "@mui/material";

import Container from "components/Container";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

function CommentDialog(): JSX.Element {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Container display="flex" justifyContent="center" alignItems="center">
      <Box maxWidth={320} width={1}>
        <Box
          sx={{
            borderRadius: 2,
            width: 1,
            height: 380,
            bgcolor: "divider",
            marginBottom: 2,
          }}
        />
        <Box
          sx={{
            borderRadius: 2,
            width: "80%",
            height: 4,
            bgcolor: "divider",
            marginBottom: 1,
          }}
        />
        <Box
          sx={{
            borderRadius: 2,
            width: "60%",
            height: 4,
            bgcolor: "divider",
            marginBottom: 2,
          }}
        />
        <Button
          color="primary"
          size="large"
          fullWidth
          sx={{
            bgcolor: alpha(theme.palette.primary.light, 0.1),
            fontWeight: 700,
          }}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width={20}
              height={20}
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          }
          onClick={() => setOpen(true)}
        >
          Click to review
        </Button>
        <FeedbackForm open={open} onClose={() => setOpen(false)} />
      </Box>
    </Container>
  );
}

export default CommentDialog;
