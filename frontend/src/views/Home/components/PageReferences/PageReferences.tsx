import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const data = [
  {
    title: 'Landing pages',
    subtitle:
      'From rich starting points to simple single pagers, anything is possible.',
    pages: [
      {
        title: 'Marketing',
        description: 'the main page',
        href: '/',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img48.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img48--dark.png',
      },
      {
        title: 'Overview',
        description: 'current page',
        href: '/home',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img49.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img49--dark.png',
      },
      {
        title: 'Coworking',
        href: '/coworking',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img1.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img1--dark.png',
      },
      {
        title: 'Rental',
        href: '/rental',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img2.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img2--dark.png',
      },
      {
        title: 'Job Listing',
        href: '/job-listing',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img3.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img3--dark.png',
      },
      {
        title: 'E-Learning',
        href: '/e-learning',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img4.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img4--dark.png',
      },
      {
        title: 'E-commerce',
        href: '/e-commerce',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img5.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img5--dark.png',
      },
      {
        title: 'Expo',
        href: '/expo',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img6.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img6--dark.png',
      },
      {
        title: 'Desktop App',
        href: '/desktop-app',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img7.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img7--dark.png',
      },
      {
        title: 'Mobile App',
        href: '/mobile-app',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img8.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img8--dark.png',
      },
      {
        title: 'Basic',
        href: '/web-basic',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img9.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img9--dark.png',
      },
      {
        title: 'Service',
        href: '/service',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img10.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img10--dark.png',
      },
      {
        title: 'Startup',
        href: '/startup',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img11.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img11--dark.png',
      },
      {
        title: 'Enterprise',
        href: '/enterprise',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img12.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img12--dark.png',
      },
      {
        title: 'Cloud Hosting',
        href: '/cloud-hosting',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img13.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img13--dark.png',
      },
      {
        title: 'Agency',
        href: '/agency',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img14.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img14--dark.png',
      },
      {
        title: 'Design Company',
        href: '/design-company',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img15.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img15--dark.png',
      },
      {
        title: 'Logistics',
        href: '/logistics',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img16.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img16--dark.png',
      },
    ],
  },
  {
    title: 'Secondary pages',
    subtitle: 'These are the supporting pages to supplement the main landings.',
    pages: [
      {
        title: 'Career Listing',
        href: '/career-listing',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img17.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img17--dark.png',
      },
      {
        title: 'Career Listing Minimal',
        href: '/career-listing-minimal',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img18.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img18--dark.png',
      },
      {
        title: 'Job Opening',
        href: '/career-opening',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img19.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img19--dark.png',
      },
      {
        title: 'Help Center Overview',
        href: '/help-center',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img20.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img20--dark.png',
      },
      {
        title: 'Help Center Article',
        href: '/help-center-article',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img21.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img21--dark.png',
      },
      {
        title: 'Company About',
        href: '/about',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img22.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img22--dark.png',
      },
      {
        title: 'Company About (Cover)',
        href: '/about-side-cover',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img23.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img23--dark.png',
      },
      {
        title: 'Company Pricing',
        href: '/pricing',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img24.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img24--dark.png',
      },
      {
        title: 'Company Terms',
        href: '/company-terms',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img25.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img25--dark.png',
      },
      {
        title: 'Contact Reach View',
        href: '/contact-page',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img26.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img26--dark.png',
      },
      {
        title: 'Contact Sidebar Map',
        href: '/contact-sidebar-map',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img27.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img27--dark.png',
      },
      {
        title: 'Contact Cover',
        href: '/contact-page-cover',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img28.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img28--dark.png',
      },
      {
        title: 'Blog Newsroom',
        href: '/blog-newsroom',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img29.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img29--dark.png',
      },
      {
        title: 'Blog Reach View',
        href: '/blog-reach-view',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img30.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img30--dark.png',
      },
      {
        title: 'Blog Search',
        href: '/blog-search',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img31.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img31--dark.png',
      },
      {
        title: 'Blog Article',
        href: '/blog-article',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img32.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img32--dark.png',
      },
      {
        title: 'Portfolio Basic',
        href: '/portfolio-page',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img33.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img33--dark.png',
      },
      {
        title: 'Portfolio Masonry',
        href: '/portfolio-masonry',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img35.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img35--dark.png',
      },
      {
        title: 'Portfolio Grid View',
        href: '/portfolio-grid',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img34.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img34--dark.png',
      },
      {
        title: 'Portfolio Parallax Effect',
        href: '/agency',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img14.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img14--dark.png',
      },
    ],
  },
  {
    title: 'Account pages',
    subtitle: 'These pages are used for basic authentication management.',
    pages: [
      {
        title: 'Account General',
        href: '/account-general',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img36.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img36--dark.png',
      },
      {
        title: 'Account Security',
        href: '/account-security',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img45.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img45--dark.png',
      },
      {
        title: 'Account Notifications',
        href: '/account-notifications',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img46.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img46--dark.png',
      },
      {
        title: 'Account Billing',
        href: '/account-billing',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img47.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img47--dark.png',
      },
      {
        title: 'Signup Simple',
        href: '/signup-simple',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img37.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img37--dark.png',
      },
      {
        title: 'Signup Cover',
        href: '/signup-cover',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img38.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img38--dark.png',
      },
      {
        title: 'Signin Simple',
        href: '/signin-simple',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img39.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img39--dark.png',
      },
      {
        title: 'Signin Cover',
        href: '/signin-cover',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img40.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img40--dark.png',
      },
      {
        title: 'Password Reset Simple',
        href: '/password-reset-simple',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img41.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img41--dark.png',
      },
      {
        title: 'Password Reset Cover',
        href: '/password-reset-cover',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img42.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img42--dark.png',
      },
      {
        title: 'Error Simple',
        href: '/not-found',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img43.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img43--dark.png',
      },
      {
        title: 'Error Cover',
        href: '/not-found-cover',
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img44.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img44--dark.png',
      },
    ],
  },
];

const PageReferences = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      {data.map((item, i) => (
        <Box
          key={i}
          sx={{
            marginBottom: 4,
            paddingBottom: 4,
            borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }}
        >
          <Box marginBottom={4}>
            <Typography variant={'h4'} gutterBottom>
              {item.title}
            </Typography>
            <Typography color={'text.secondary'} component={'p'}>
              {item.subtitle}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {item.pages.map((p, j) => (
              <Grid
                key={j}
                item
                xs={12}
                sm={6}
                md={4}
                component={'a'}
                href={p.href}
                sx={{ textDecoration: 'none !important' }}
                data-aos={'fade-up'}
                data-aos-delay={(i + j) * 200}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box
                  padding={1}
                  bgcolor={'background.paper'}
                  borderRadius={2}
                  overflow={'hidden'}
                  boxShadow={3}
                  marginBottom={2}
                >
                  <Box
                    component={LazyLoadImage}
                    effect="blur"
                    src={theme.palette.mode === 'dark' ? p.coverDark : p.cover}
                    alt={p.title}
                    height={1}
                    width={1}
                    sx={{
                      transition: 'opacity, transform ease 0.3s !important',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </Box>
                <Box display={'flex'} justifyContent={'center'}>
                  <Typography
                    variant={'subtitle1'}
                    fontWeight={700}
                    color={'text.primary'}
                  >
                    {p.title}
                  </Typography>
                  {p.description ? (
                    <Typography
                      variant={'subtitle1'}
                      color={'text.primary'}
                      sx={{ marginLeft: 0.5 }}
                    >
                      ({p.description})
                    </Typography>
                  ) : null}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
      <Box marginTop={4}>
        <Typography
          variant={'h6'}
          component={'p'}
          gutterBottom
          align={'center'}
        >
          ...and more soon.
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          theFront is an ever-growing system of composable components. We’re
          consistently adding landing examples, improving components, and
          gathering feedback from customers to make their experience better.
        </Typography>
      </Box>
    </Box>
  );
};

export default PageReferences;
