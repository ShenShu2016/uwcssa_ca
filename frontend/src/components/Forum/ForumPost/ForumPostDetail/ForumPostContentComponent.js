import { 
  Box, 
  // Button, 
  CardActionArea, 
  // Chip, 
  Typography 
} from "@mui/material";
import S3Image from "../../../S3/S3Image";
import React from "react";

export default function ForumPostContentComponent({
  tags,
  content,
  imgS3Keys,
}) {
  return (
    <Box
      sx={{
        minHeight: 220,
        mx: 2,
      }}
    >
      {/* <Box>
        {tags.map((data) => {
          return <Chip key={data} label={data} />;
        })}
      </Box> */}
      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body2"
          component="span"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            color: "#030303",
          }}
        >
          {content}
        </Typography>
      </Box>
      {imgS3Keys[0] && (
        <CardActionArea>
          <S3Image S3Key={imgS3Keys[0]} style={{ width: "100%" }} />
        </CardActionArea>
      )}
    </Box>
  );
}
