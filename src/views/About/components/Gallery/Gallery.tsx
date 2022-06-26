/*
 * @Author: Shikai Jin
 * @Date: 2022-06-02 22:38:34
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-25 22:25:49
 * @FilePath: /uwcssa_ca/src/views/About/components/Gallery/Gallery.tsx
 * @Description:
 *
 */

import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Gallery = (): JSX.Element => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index: number): void => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = (): void => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/shenshu.jpg',
      source:
        'https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/shenshu.jpg',
      rows: 2,
      cols: 1,
    },
    {
      src: 'https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/chenzhenhao.jpg',
      source:
        'https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/chenzhenhao.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/DeanMaIsSpeaking.jpg',
      source:
        'https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/DeanMaIsSpeaking.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/campaign.jpg',
      source:
        'https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/campaign.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/cssaMembers2022Sumber.jpg',
      source:
        'https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/cssaMembers2022Sumber.jpg',
      rows: 1,
      cols: 2,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
      <Box marginBottom={4}>
        {/* <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          Gallery
        </Typography> */}
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Small team. Big hearts.
        </Typography>
        {/* <Typography variant="h6" align={'center'} color={'text.secondary'}>
          Our focus is always on finding the best people to work with. Our bar
          is high, but you look ready to take on the challenge.
        </Typography> */}
      </Box>
      <Box display={'flex'} justifyContent={'flex-end'} marginBottom={2}>
        <Button
          color="primary"
          size="large"
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
          onClick={() => openLightbox(0)}
        >
          Open the gallery
        </Button>
      </Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photosToShow.map((item, i) => (
            <ImageListItem
              key={i}
              cols={isMd ? item.cols || 1 : 2}
              rows={isMd ? item.rows || 1 : 1}
            >
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                effect="blur"
                onClick={() => openLightbox(i)}
                style={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                  cursor: 'poiner',
                  borderRadius: 8,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={
            photos[(currentImage + photos.length - 1) % photos.length].src
          }
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </Box>
  );
};

export default Gallery;
