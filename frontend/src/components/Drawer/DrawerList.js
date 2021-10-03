import { Box, Divider, List, ListItem, ListItemText } from "@material-ui/core";

import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import React from "react";
import { useSelector } from "react-redux";

const DrawerList = ({ toggleDrawer }) => {
  const userAuth = useSelector((state) => state.userAuth);

  return (
    <div>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {
            <div>
              <ListItemButton component={Link} to="/account/dashboard">
                <ListItemText primary="个人中心" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to={
                  userAuth.isAuthenticated
                    ? `/account/profile/${userAuth.user.username}`
                    : `/signIn`
                }
              >
                <ListItemText primary="我的资料" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to={userAuth.isAuthenticated ? "/account/myAccount" : `/signIn`}
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
                <ListItemButton component={Link} to="/staff">
                  <ListItemText primary="学生会" />
                </ListItemButton>
                <ExpandMore />
              </ListItem>
              <Collapse in={true}>
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
