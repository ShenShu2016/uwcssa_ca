import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

import ArticleIcon from "@mui/icons-material/Article";
import Collapse from "@mui/material/Collapse";
import EventIcon from "@mui/icons-material/Event";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ForumIcon from "@mui/icons-material/Forum";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ShopIcon from "@mui/icons-material/Shop";
import WorkIcon from "@mui/icons-material/Work";
import uwcssa_logo from "../../static/uwcssa_logo.svg";

const DrawerList = ({ toggleDrawer }) => {
  const [openStaff, setOpenStaff] = useState(false);

  const [openMarket, setOpenMarket] = useState(false);
  const [openForum, setOpenForum] = useState(false);
  const handleClick = () => {
    setOpenStaff(!openStaff);
  };

  const handleClickMarket = () => {
    setOpenMarket(!openMarket);
  };
  const handleClickForum = () => {
    setOpenForum(!openForum);
  };
  return (
    <div>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <div>
            <ListItemButton
              component={Link}
              to="/article"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="近期新闻" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/event"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="活动" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/career"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="开放职位" />
            </ListItemButton>
            <div>
              <ListItemButton onClick={handleClickForum}>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="论坛" />
                {openForum ? <ExpandMore /> : <ExpandLess />}
              </ListItemButton>

              <Collapse in={openForum} timeout="auto">
                <ListItem>
                  <ListItemButton
                    component={Link}
                    to="/forum"
                    onClick={toggleDrawer(false)}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary="论坛首页" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component={Link}
                    to="/forumPostUpload"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary="发布帖子" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component={Link}
                    to="/forumTopicCURD"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary="论坛主题" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component={Link}
                    to="/forumPostList"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary="forumPostList" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{ pl: 4 }} disabled>
                    <ListItemText primary="举报审核" />
                  </ListItemButton>
                </ListItem>
              </Collapse>
            </div>

            <div>
              <ListItemButton onClick={handleClickMarket}>
                <ListItemIcon>
                  <ShopIcon />
                </ListItemIcon>
                <ListItemText primary="商城" />
                {openMarket ? <ExpandMore /> : <ExpandLess />}
              </ListItemButton>

              <Collapse in={openMarket} timeout="auto">
                <ListItem>
                  <ListItemButton
                    component={Link}
                    to="/market"
                    onClick={toggleDrawer(false)}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary="商城首页" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={toggleDrawer(false)}
                    component={Link}
                    to="/market/PostMarketItem"
                  >
                    <ListItemText primary="发布商品" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={toggleDrawer(false)}
                    component={Link}
                    to="/market"
                  >
                    <ListItemText primary="查看全部商品" />
                  </ListItemButton>
                </ListItem>

                <ListItem>
                  <ListItemButton sx={{ pl: 4 }} disabled>
                    <ListItemText primary="举报审核" />
                  </ListItemButton>
                </ListItem>
              </Collapse>
            </div>
          </div>
        </List>

        <Divider />
        <List>
          <div>
            <ListItem>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <img
                    src={uwcssa_logo}
                    alt="uwcssaLogo"
                    style={{ height: "24px" }}
                  />
                </ListItemIcon>
                <ListItemText primary="学生会" />
                {openStaff ? <ExpandMore /> : <ExpandLess />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openStaff} timeout="auto">
              <ListItem>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/staff"
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary="学生会管理系统首页" />
                </ListItemButton>
              </ListItem>
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
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(false)}
                  component={Link}
                  to="/staff/uwcssaJob/postUwcssaJob"
                >
                  <ListItemText primary="职位招聘" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(false)}
                  component={Link}
                  to="/staff/uwcssaJob/postDepartment"
                >
                  <ListItemText primary="部门管理" />
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
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(false)}
                  component={Link}
                  to="/forumTopic"
                >
                  <ListItemText primary="论坛管理" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ pl: 4 }} disabled>
                  <ListItemText primary="举报审核" />
                </ListItemButton>
              </ListItem>
            </Collapse>
          </div>
        </List>
        <Divider />
        <List>
          <div>
            <ListItemButton
              component={Link}
              to="/foundingTeam"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="创始团队以及贡献者" />
            </ListItemButton>
          </div>
        </List>
      </Box>
    </div>
  );
};
export default DrawerList;
