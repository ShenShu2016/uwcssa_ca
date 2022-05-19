/*
 * @Author: 李佳修
 * @Date: 2022-05-18 09:12:03
 * @LastEditTime: 2022-05-19 17:52:13
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/layouts/Main/components/Sidebar/components/SidebarNav/components/NavItem/NavItem.tsx
 */
import React, { useEffect, useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

interface Props {
  title: string;
  items: Array<PageItem> | PageItem;
}

const NavItem = ({ title, items }: Props): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () => {
    if (items instanceof Array) {
      return items.find((i) => i.href === activeLink || i.href === `${activeLink}/`);
    } else {
      return items.href === activeLink || items.href === `${activeLink}/`;
    }
  };

  return (
    <Box>
      {
        items instanceof Array && items?.length ?
          (
            <Accordion
              disableGutters
              elevation={0}
              sx={{ backgroundColor: 'transparent' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ padding: 0 }}
              >
                <Typography
                  fontWeight={hasActiveLink() ? 600 : 400}
                  color={hasActiveLink() ? 'primary' : 'text.primary'}
                >
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <Grid container spacing={1}>
                  {
                    items.map((p, i) => (
                      (  
                        <Grid item key={i} xs={12}>
                          <Button
                            size={'large'}
                            component={'a'}
                            href={p.href}
                            fullWidth
                            sx={{
                              justifyContent: 'flex-start',
                              color:
                              activeLink === p.href
                                ? theme.palette.primary.main
                                : theme.palette.text.primary,
                              backgroundColor:
                              activeLink === p.href
                                ? alpha(theme.palette.primary.main, 0.1)
                                : 'transparent',
                              fontWeight: activeLink === p.href ? 600 : 400,
                            }}
                          >
                            {p.title}
                            {p.isNew && (
                              <Box
                                padding={0.5}
                                display={'inline-flex'}
                                borderRadius={1}
                                bgcolor={'primary.main'}
                                marginLeft={2}
                              >
                                <Typography
                                  variant={'caption'}
                                  sx={{ color: 'common.white', lineHeight: 1 }}
                                >
                                new
                                </Typography>
                              </Box>
                            )}
                          </Button>
                        </Grid>)
                    ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ) : (
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ padding: 0 }}
              onClick={() => navigate((items as PageItem).href)}
            >
              <Typography
                fontWeight={hasActiveLink() ? 600 : 400}
                color={hasActiveLink() ? 'primary' : 'text.primary'}
              >
                {title}
              </Typography>
            </AccordionSummary>
          )
      }
    </Box>
  );
};

export default NavItem;
