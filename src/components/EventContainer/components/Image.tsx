/*
 * @Author: 李佳修
 * @Date: 2022-06-10 17:48:47
 * @LastEditTime: 2022-07-24 17:08:40
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/components/EventContainer/components/Image.tsx
 */
import React from "react";
import Box from "@mui/material/Box";

interface ImageProp {
  url: string;
}
function Image({ url }: ImageProp) {
  return (
    <Box>
      <Box
        sx={{
          width: {
            md: "90%",
            xs: "100%",
          },
          height: "230px",
          "& img": {
            width: 1,
            height: 1,
            objectFit: "cover",
            borderRadius: 2,
          },
        }}
      >
        <img src={url} alt="current.title" />
      </Box>
      {/* <Stack
        direction={'row'}
        spacing={2}
        alignItems={'center'}
        flexWrap={'wrap'}
      >
        {mock.map((item, i) => (
          <Box
            key={i}
            onClick={() => setCurrent(item)}
            sx={{
              width: 80,
              height: 'auto',
              cursor: 'pointer',
              '& img': {
                width: 1,
                height: 1,
                objectFit: 'cover',
                borderRadius: 2,
              },
            }}
          >
            <img src={item.src} alt={item.title} />
          </Box>
        ))}
      </Stack> */}
    </Box>
  );
}

export default Image;
