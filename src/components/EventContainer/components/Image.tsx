/*
 * @Author: 李佳修
 * @Date: 2022-06-10 17:48:47
 * @LastEditTime: 2022-06-10 17:56:19
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/components/EventContainer/components/Image.tsx
 */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

interface ImageProp {
  url: string;
}

const mock = [
  {
    title: '',
    src: 'https://assets.maccarianagency.com/backgrounds/img54.jpg',
  },
  {
    title: '',
    src: 'https://assets.maccarianagency.com/backgrounds/img53.jpg',
  },
  {
    title: '',
    src: 'https://assets.maccarianagency.com/backgrounds/img55.jpg',
  },
];

const Image: React.FC<ImageProp> = ({ url }) => {
  const [current, setCurrent] = useState(mock[0]);
  return (
    <Box>
      {current && (
        <Box
          sx={{
            width: 1,
            height: 'auto',
            '& img': {
              width: 1,
              height: 1,
              objectFit: 'cover',
              borderRadius: 2,
            },
          }}
        >
          <img src={url} alt={current.title} />
        </Box>
      )}
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
};

export default Image;
