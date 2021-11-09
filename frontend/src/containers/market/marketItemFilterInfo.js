import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CategoryIcons, SearchArea } from "./marketItemSearch";

import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import MarketFIlterLocation from "./marketFilterLocation";
import MarketForm from "../../components/Market/marketForm";
import React from "react";
import { marketItemOptions } from "./marketItemOptions";
import { marketItemStyle } from "./marketItemCss";
import { sortOptions } from "./marketItemFilter";

export default function FilterInfo({
  filterList,
  handleSortKey,
  handleMin,
  handleMax,
  handleCategory,
  handleCondition,
  handleReset,
}) {
  const useStyles = marketItemStyle;
  const classes = useStyles();
  const { marketItemConditionList, marketItemCategoryList } = marketItemOptions;

  return (
    <Box className={classes.info}>
      <Paper className={classes.paper} elevation={3}>
        <Box>
          <Breadcrumbs aria-label="breadcrumb">
            <span style={{ cursor: "not-allowed" }}>
              <Button
                startIcon={<HomeIcon />}
                color="inherit"
                component={Link}
                to="/market"
              >
                Market
              </Button>
            </span>
            <span style={{ cursor: "not-allowed" }}>
              <Button
                startIcon={<AddShoppingCartIcon />}
                color="inherit"
                component={Link}
                to="/market/item"
              >
                Item
              </Button>
            </span>
          </Breadcrumbs>
        </Box>
        <Typography variant="h5" marginBottom="1rem" fontWeight="bold">
          Item
        </Typography>
        <Box width="100%" marginBottom="1rem" overflow="hidden">
          <SearchArea />
          <Button
            variant="contained"
            sx={{ margin: "1rem" }}
            startIcon={<AddIcon />}
            component={Link}
            to="/market/create/item"
          >
            Add new listing
          </Button>
          <Divider />
        </Box>
        <Box width="100%" overflow="hidden">
          <Box flexDirection="row" display="flex" position="relative">
            <Typography variant="h6" fontWeight="bold">
              Location Filters
            </Typography>
            <Button
              variant="outlined"
              onClick={handleReset}
              sx={{ right: 0, position: "absolute" }}
            >
              Reset All
            </Button>
          </Box>
          <MarketFIlterLocation />
          <MarketForm
            title="Sort by"
            value={filterList.sortKey}
            options={sortOptions}
            required={false}
            onChange={(e) => handleSortKey(e)}
          />
          <Typography
            marginTop="1rem"
            variant="h6"
            marginBottom="1rem"
            fontWeight="bold"
          >
            Price Range
          </Typography>
          <Stack direction="row" spacing={2}>
            <TextField
              sx={{ maxWidth: "100%" }}
              label="Min Price"
              variant="outlined"
              type="number"
              helperText="eg. 1000 CAD $"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">CAD $</InputAdornment>
                ),
              }}
              value={filterList.min}
              className={classes.titleInput}
              onChange={(e) => handleMin(e)}
            />
            <TextField
              sx={{ maxWidth: "100%" }}
              label="Max Price"
              variant="outlined"
              type="number"
              helperText="eg. 25000 CAD $"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">CAD $</InputAdornment>
                ),
              }}
              value={filterList.max}
              className={classes.titleInput}
              onChange={(e) => handleMax(e)}
            />
          </Stack>

          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            Category
          </Typography>
          <MarketForm
            title="Category"
            value={filterList.category}
            options={marketItemCategoryList}
            onChange={(e) => handleCategory(e)}
          />
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            Condition
          </Typography>
          <MarketForm
            title="Condition"
            value={filterList.condition}
            options={marketItemConditionList}
            onChange={(e) => handleCondition(e)}
          />
          <Divider />
        </Box>
        <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
          Categories
        </Typography>
        <Box width="100%" maxHeight="400px" overflow="auto">
          <CategoryIcons />
        </Box>
      </Paper>
    </Box>
  );
}
