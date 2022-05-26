import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import NavItem from './components/NavItem';
import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Props {
  pages: {
    dashboard: Array<PageItem> | PageItem;
    UWCSSA: Array<PageItem> | PageItem;
    freshman: Array<PageItem> | PageItem;
    house: Array<PageItem> | PageItem;
    jobs: Array<PageItem> | PageItem;
    about: Array<PageItem> | PageItem;
    activity: Array<PageItem> | PageItem;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    UWCSSA: UWCSSAPages,
    dashboard: dashboardPages,
    freshman: freshmanPages,
    house: housePages,
    activity: activityPages,
    jobs: jobsPages,
    about: aboutPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component={Link}
          to="/"
          title="UWCSSA"
          height={{ xs: 24, md: 29 }}
          sx={{ textDecoration: 'none' }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? '/assets/images/uwcssa_logo.svg'
                : '/assets/images/uwcssa_logo.svg'
            }
            height={1}
            //width={1}
          />
          <Typography variant="h5" sx={{ ml: '1rem' }}>
            UWCSSA
          </Typography>
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'UWCSSA'} items={UWCSSAPages} />
        </Box>
        <Box>
          <NavItem title={'首页'} items={dashboardPages} />
        </Box>
        <Box>
          <NavItem title={'新生手册'} items={freshmanPages} />
        </Box>
        <Box>
          <NavItem title={'租房'} items={housePages} />
        </Box>
        <Box>
          <NavItem title={'活动'} items={activityPages} />
        </Box>
        <Box>
          <NavItem title={'工作机会'} items={jobsPages} />
        </Box>
        <Box>
          <NavItem title={'关于'} items={aboutPages} />
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component={Link}
            to="/docs/introduction"
          >
            Documentation
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component={'a'}
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
          >
            Purchase now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
