import { Box, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";

let temp = null;

//extract all the tags
//better call this function when submitting the form via a button
export function GetTags() {
  return temp;
}

//create a custom tag input
//able to add/delete tag
//when a tag was duplicated, an error message ("this tag has been already been created!") would pop up
export default function CustomTags({
  placeholder,
  initial = ["Tags Here"],
  onKeyDown = null,
  onDelete = null,
}) {
  const [tags, setTags] = useState(initial);
  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    temp = tags;
  });

  const deleteHandler = (something) => () => {
    const newTags = [...tags].filter((tag) => tag !== something);
    setTags(newTags);
    onDelete(something);
  };

  function inputKeyDown(e) {
    console.log("Key Down");
    const val = e.target.value;
    // console.log("tagSuccess", marketRentalData.tags);
    if (e.key === "Enter" && val) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        setTagInput("");
        setError("The tag has been already created!");
      } else {
        e.preventDefault();
        const newTags = Array.from(tags).concat(val);
        onKeyDown(val);
        setTags(newTags);
        setTagInput("");
        setError("");
      }
    }
  }
  return (
    <Box>
      <TextField
        label="Tags"
        value={tagInput}
        variant="outlined"
        fullWidth
        placeholder={placeholder}
        onKeyDown={inputKeyDown}
        error={Boolean(error)}
        helperText={error}
        onChange={(e) => setTagInput(e.target.value)}
      />
      <Stack
        spacing={1}
        direction="row"
        sx={{ color: "action.active", marginTop: "0.5rem" }}
      >
        {tags.map((tag, tagIdx) => {
          return (
            <Chip key={tagIdx} label={tag} onDelete={deleteHandler(tag)} />
          );
        })}
      </Stack>
    </Box>
  );
}
