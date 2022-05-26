import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: () => void;
  open: boolean;
}

const FeedbackForm = ({ onClose, open }: Props): JSX.Element => {
  const theme = useTheme();
  const [currentScore, setCurrentScore] = useState(3);

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={'sm'}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 2,
        },
      }}
    >
      <Box paddingY={2} paddingX={4}>
        <Box paddingY={2} display={'flex'} justifyContent={'space-between'}>
          <Typography variant={'h5'} fontWeight={700}>
            Write a review
          </Typography>
          <Box
            component={'svg'}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={24}
            height={24}
            onClick={onClose}
            sx={{ cursor: 'pointer' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </Box>
        </Box>
        <Box paddingY={2}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                  Enter your name
                </Typography>
                <TextField
                  label="Name *"
                  variant="outlined"
                  name={'name'}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                  Enter your email
                </Typography>
                <TextField
                  label="Email *"
                  variant="outlined"
                  name={'email'}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                  Rating
                </Typography>
                <Box display={'flex'} alignItems={'center'}>
                  {[1, 2, 3, 4, 5].map((r) => (
                    <Box
                      key={r}
                      component={'svg'}
                      color={
                        r <= currentScore
                          ? theme.palette.primary.main
                          : theme.palette.divider
                      }
                      width={28}
                      height={28}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      sx={{ cursor: 'pointer' }}
                      onClick={() => setCurrentScore(r)}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </Box>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                  Write your feedback
                </Typography>
                <TextField
                  label="Feedback *"
                  variant="outlined"
                  name={'feedback'}
                  fullWidth
                  multiline
                  rows={5}
                />
              </Grid>
              <Grid item container xs={12}>
                <Button size={'large'} variant={'contained'} type={'submit'}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Dialog>
  );
};

export default FeedbackForm;
