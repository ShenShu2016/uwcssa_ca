import React, { useEffect, useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import { connect, useSelector } from "react-redux";
import {
  createMarketType,
  createMarketItemCategory,
} from "../../../graphql/mutations";
import {
  postMarketItem,
  postMarketItemImg,
  setMarketTypes,
  setMarketCategories,
} from "../../../redux/actions/marketItemActions";

import API from "@aws-amplify/api";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Box } from "@mui/system";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import PublishIcon from "@material-ui/icons/Publish";
import Select from "@material-ui/core/Select";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingTop: "5rem",
  },
  formControl: {
    margin: theme.spacing(2, 0),
    minWidth: 300,
  },
  imgPreview: {
    minHeight: "300px",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  },
  titleInput: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
  type: {
    marginBlock: "2rem",
  },
  topic: {
    marginBlock: "2rem",
  },
  newTopic: {
    textAlign: "center",
    width: "100%",
    margin: "auto",
  },
}));

const PostMarketItem = ({
  postMarketItem,
  postMarketItemImg,
  setMarketTypes,
  setMarketCategories,
}) => {
  const classes = useStyles();
  const [imgData, setImgData] = useState("");
  const [imgKey, setImgKey] = useState("");
  const history = useHistory();
  const [marketItemData, setMarketItemData] = useState({
    title: "",
    name: "",
    description: "",
    marketCategoryId: "",
    marketTypeId: "",
  });
  useEffect(() => {
    setMarketTypes();
    setMarketCategories();

    console.log("using effect"); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { marketTypes, marketCategories } = useSelector(
    (state) => state.allMarketItems
  );

  const uploadMarketItemImg = async () => {
    const response = await postMarketItemImg(imgData);
    console.log("response.key", response.key);
    setImgKey(response.key);
  };

  const uploadMarketItem = async () => {
    //Upload the marketItem
    const { title, description, marketTypeId, marketCategoryId, name } =
      marketItemData;

    const createMarketItemInput = {
      title: title,
      name: name,
      description: description,
      imagePath: [imgKey],
      marketItemMarketItemCategoryId: marketCategoryId,
      marketItemMarketTypeId: marketTypeId,
    };
    const response = await postMarketItem(createMarketItemInput);

    console.log("response.result", response);
    console.log("2222", marketItemData);

    if (response.result) {
      history.push(`/marketItem/${response.response.data.createMarketItem.id}`);
    }
  };
  const [marketCategoryData, setMarketCategoryData] = useState({ name: "" });

  const uploadMarketCategory = async () => {
    //Upload the topic
    console.log("marketCategoryData", marketCategoryData);
    const { name } = marketCategoryData;
    const createMarketCategoryInput = {
      name,
    };
    await API.graphql(
      graphqlOperation(createMarketItemCategory, {
        input: createMarketCategoryInput,
      })
    );
    setMarketCategories();
  };

  const [marketTypeData, setMarketTypeData] = useState({ name: "" });

  const uploadMarketType = async () => {
    console.log("typeData", marketTypeData);
    const { name } = marketTypeData;
    const createMarketTypeInput = {
      name,
    };
    await API.graphql(
      graphqlOperation(createMarketType, { input: createMarketTypeInput })
    );
    setMarketTypes();
  };

  return (
    <div className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h3">输入标题</Typography>
        <TextField
          label="标题"
          variant="outlined"
          fullWidth
          value={marketItemData.title}
          className={classes.titleInput}
          onChange={(e) =>
            setMarketItemData({ ...marketItemData, title: e.target.value })
          }
        />
      </Box>
      <Box className={classes.topic}>
        <div className="newTopic">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label2">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label2"
              id="demo-simple-select-outlined2"
              value={marketItemData.marketCategoryId}
              onChange={(e) =>
                setMarketItemData({
                  ...marketItemData,
                  marketCategoryId: e.target.value,
                })
              }
              label="Category"
            >
              {marketCategories.map((topic) => {
                return (
                  <MenuItem value={topic.name} key={topic.name}>
                    {topic.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="newTopic">
          <TextField
            label="Topic"
            value={marketCategoryData.name}
            onChange={(e) =>
              setMarketCategoryData({
                ...marketCategoryData,
                name: e.target.value,
              })
            }
          />
          <Button
            variant="contained"
            endIcon={<PublishIcon />}
            onClick={uploadMarketCategory}
            color="primary"
          >
            上传新的category
          </Button>
        </div>
      </Box>
      <Box className={classes.type}>
        <div className="newType">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={marketItemData.marketTypeId}
              onChange={(e) =>
                setMarketItemData({
                  ...marketItemData,
                  marketTypeId: e.target.value,
                })
              }
              label="Type"
            >
              {marketTypes.map((type) => {
                return (
                  <MenuItem value={type.name} key={type.name}>
                    {type.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="newType">
          <TextField
            label="Type"
            value={marketTypeData.name}
            onChange={(e) =>
              setMarketTypeData({ ...marketTypeData, name: e.target.value })
            }
          />
          <Button
            variant="contained"
            endIcon={<PublishIcon />}
            onClick={uploadMarketType}
            color="primary"
          >
            上传新的marketType
          </Button>
        </div>
      </Box>
      <Box className={classes.imgPreview}>
        {imgKey === "" ? (
          <Typography variant="h4">添加照片</Typography>
        ) : (
          <AmplifyS3Image path={imgKey} />
        )}
        <input
          type="file"
          accept="image/png"
          onChange={(e) => {
            setImgData(e.target.files[0]);
            console.log("imgData", imgData);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={uploadMarketItemImg}
        >
          上传图片
        </Button>
      </Box>
      <Box className={classes.content}>
        <TextField
          label="description"
          value={marketItemData.description}
          minRows={20}
          variant="outlined"
          multiline
          fullWidth
          onChange={(e) =>
            setMarketItemData({
              ...marketItemData,
              description: e.target.value,
            })
          }
        />
      </Box>

      <Button
        variant="contained"
        endIcon={<PublishIcon />}
        onClick={uploadMarketItem}
        color="primary"
      >
        上传MarketItem
      </Button>
    </div>
  );
};

export default connect(null, {
  setMarketTypes,
  setMarketCategories,
  postMarketItem,
  postMarketItemImg,
})(PostMarketItem);
