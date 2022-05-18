import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavItem from './components/NavItem';
import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Props {
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
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
          <NavItem title={'Landings'} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={'Company'} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={'Pages'} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={'Account'} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolioPages} />
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="/docs/introduction"
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
            component="a"
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
