import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from "@mui/icons-material/Event";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ForumIcon from "@mui/icons-material/Forum";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
import ShopIcon from "@mui/icons-material/Shop";
import WorkIcon from "@mui/icons-material/Work";
import uwcssa_logo from "../../static/uwcssa_logo.svg";

export const PDrawerList = () => {
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
    <Box>
      <List>
        <div>
          <ListItemButton component={Link} to="/article">
            <ListItemIcon>
              <ArticleIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="近期新闻"
              primaryTypographyProps={{
                fontSize: 18,
                fontWeight: "medium",
                color: "primary",
              }}
            />
          </ListItemButton>
          <ListItemButton component={Link} to="/event">
            <ListItemIcon>
              <EventIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="活动"
              primaryTypographyProps={{
                fontSize: 18,
                fontWeight: "medium",
                color: "primary",
              }}
            />
          </ListItemButton>
          <ListItemButton component={Link} to="/career">
            <ListItemIcon>
              <WorkIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="开放职位"
              primaryTypographyProps={{
                fontSize: 18,
                fontWeight: "medium",
                color: "primary",
              }}
            />
          </ListItemButton>
          <div>
            <ListItemButton onClick={handleClickForum}>
              <ListItemIcon>
                <ForumIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="论坛"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "medium",
                  color: "primary",
                }}
              />
              {openForum ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>

            <Collapse in={openForum} timeout="auto">
              <ListItem>
                <ListItemButton component={Link} to="/forum" sx={{ pl: 7 }}>
                  <ListItemText
                    primary="论坛首页"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  disabled
                  sx={{ pl: 7 }}
                  component={Link}
                  to="/forum/forumPostUpload"
                >
                  <ListItemText
                    primary="发布帖子"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                  <AddIcon color="primary" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ pl: 7 }}
                  component={Link}
                  to="/forumPostList"
                  disabled
                >
                  <ListItemText
                    primary="forumPostList"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ pl: 7 }} disabled>
                  <ListItemText
                    primary="举报审核"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Collapse>
          </div>

          <div>
            <ListItemButton onClick={handleClickMarket}>
              <ListItemIcon>
                <ShopIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="商城"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "medium",
                  color: "primary",
                }}
              />
              {openMarket ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>
            <Collapse in={openMarket} timeout="auto">
              <ListItem>
                <ListItemButton component={Link} to="/market" sx={{ pl: 7 }}>
                  <ListItemText
                    primary="商城首页"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ pl: 7 }}
                  component={Link}
                  to="/market/create"
                >
                  <ListItemText
                    primary="发布商品"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                  <AddIcon color="primary" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ pl: 7 }} component={Link} to="/market">
                  <ListItemText
                    primary="查看全部商品"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton sx={{ pl: 7 }} disabled>
                  <ListItemText
                    primary="举报审核"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Collapse>
          </div>
        </div>
      </List>

      <Divider />
      <List>
        <div>
          <ListItemButton component={Link} to="/uwcssaMember">
            <ListItemIcon>
              <img
                src={uwcssa_logo}
                alt="uwcssaLogo"
                style={{ height: "24px" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="学生会成员"
              primaryTypographyProps={{
                fontSize: 18,
                fontWeight: "medium",
                color: "primary",
              }}
            />
          </ListItemButton>
          <ListItemButton component={Link} to="/foundingMember">
            <ListItemIcon>
              <GroupIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="创始团队以及贡献者"
              primaryTypographyProps={{
                fontSize: 18,
                fontWeight: "medium",
                color: "primary",
              }}
            />
          </ListItemButton>
        </div>
      </List>
      <Divider />
      <List>
        <div>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <img
                src={uwcssa_logo}
                alt="uwcssaLogo"
                style={{ height: "24px" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="学生会管理系统"
              primaryTypographyProps={{
                fontSize: 18,
                fontWeight: "medium",
                color: "primary",
              }}
            />
            {openStaff ? <ExpandMore /> : <ExpandLess />}
          </ListItemButton>

          <Collapse in={openStaff} timeout="auto">
            <ListItem>
              <ListItemButton sx={{ pl: 7 }} component={Link} to="/staff">
                <ListItemText
                  primary="学生会管理系统首页"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ pl: 7 }} component={Link} to="/kanban">
                <ListItemText
                  primary="看板"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ pl: 4 }} disabled>
                <ListItemText
                  primary="财务"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={{ pl: 7 }}
                component={Link}
                to="/staff/event/postEvent"
              >
                <ListItemText
                  primary="活动策划"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={{ pl: 7 }}
                component={Link}
                to="/staff/uwcssaJob/postUwcssaJob"
              >
                <ListItemText
                  primary="职位招聘"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={{ pl: 7 }}
                component={Link}
                to="/staff/uwcssaJob/postDepartment"
              >
                <ListItemText
                  primary="部门管理"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={{ pl: 7 }}
                component={Link}
                to="/staff/article/postArticle"
              >
                <ListItemText
                  primary="新闻发布"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={{ pl: 7 }}
                component={Link}
                to="/forum/admin/forumTopicCURD"
              >
                <ListItemText
                  primary="论坛管理"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ pl: 4 }} disabled>
                <ListItemText
                  primary="举报审核"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Collapse>
        </div>
      </List>
    </Box>
  );
};
