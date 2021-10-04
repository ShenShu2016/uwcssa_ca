import { Box, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import React, { useState } from "react";

import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import { useSelector } from "react-redux";

const DrawerList = ({ toggleDrawer }) => {
  const userAuth = useSelector((state) => state.userAuth);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        // onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {
            <div>
              <ListItemButton
                component={Link}
                to="/account/dashboard"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="个人中心" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to={
                  userAuth.isAuthenticated
                    ? `/account/profile/${userAuth.user.username}`
                    : `/signIn`
                }
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="我的资料" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to={userAuth.isAuthenticated ? "/account/myAccount" : `/signIn`}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="我的账号" />
              </ListItemButton>
            </div>
          }
        </List>
        <Divider />
        <List>
          {
            <div>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="学生会" component={Link} to="/staff" />
                  {open ? (
                    <ExpandLess onClick={handleClick} />
                  ) : (
                    <ExpandMore onClick={handleClick} />
                  )}
                </ListItemButton>
              </ListItem>
              <Collapse in={open} timeout="auto">
                <ListItem>
                  <ListItemButton sx={{ pl: 4 }} disabled>
                    <ListItemText primary="成员" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{ pl: 4 }} disabled>
                    <ListItemText primary="财务" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{ pl: 4 }} disabled>
                    <ListItemText primary="活动策划" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{ pl: 4 }} disabled>
                    <ListItemText primary="职位招聘" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={toggleDrawer(false)}
                    component={Link}
                    to="/staff/article/postArticle"
                  >
                    <ListItemText primary="新闻发布" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{ pl: 4 }} disabled>
                    <ListItemText primary="举报审核" />
                  </ListItemButton>
                </ListItem>
              </Collapse>
            </div>
          }
        </List>
      </Box>
    </div>
  );
};
export default DrawerList;
