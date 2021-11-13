import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Checkbox,
  Collapse,
  Grid,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

const Topics = [
  {
    label: "game",
    name: "游戏",
  },
  {
    label: "festival",
    name: "节日",
  },
  {
    label: "movie",
    name: "电影",
  },
  {
    label: "dance",
    name: "跳舞",
  },
  {
    label: "food",
    name: "美食",
  },
  {
    label: "music",
    name: "音乐",
  },
  {
    label: "networking",
    name: "社交",
  },
  {
    label: "party",
    name: "派对",
  },
  {
    label: "sports",
    name: "运动",
  },
];

export default function Checkboxes(props) {
  const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState([]);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckboxLists = () =>
    Topics.map((value, index) => (
      <React.Fragment>
        <Grid xs={2} sm={4} md={4} key={index}>
          <Checkbox
            onChange={() => handleToggle(value.label)}
            type="checkbox"
            checked={checked.indexOf(value.label) === -1 ? false : true}
          />
          <span>{value.name}</span>
        </Grid>
      </React.Fragment>
    ));

  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="类别" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container columns={{ xs: 2, sm: 8, md: 22 }}>
          {renderCheckboxLists()}
        </Grid>
      </Collapse>
    </div>
  );
}
