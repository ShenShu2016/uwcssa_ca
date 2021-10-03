import { Divider, List, ListItem, ListItemText } from "@material-ui/core";

import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import React from "react";

export const DrawerListItems = (
  <div>
    <List>
      {
        <div>
          <ListItemButton component={Link} to="/account/dashboard">
            <ListItemText primary="个人中心" />
          </ListItemButton>
          <ListItemButton component={Link} to="/account/profile">
            <ListItemText primary="我的资料" />
          </ListItemButton>
          <ListItemButton component={Link} to="/account/myAccount">
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
  </div>
);
