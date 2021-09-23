import React, { useState } from "react";
import { createType } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { IconButton } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function AddType() {
  const [typeData, setTypeData] = useState({});
  const classes = useStyles();

  const uploadType = async () => {
    //Upload the type
    console.log("typeData", typeData);
    const { name } = typeData;
    const createTypeInput = {
      name,
      like: 0,
      unlike: 0,
    };
    await API.graphql(graphqlOperation(createType, { input: createTypeInput }));
  };

  return (
    <div className="newType">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={typeData.name}
          onChange={(e) => setTypeData({ ...typeData, name: e.target.value })}
          label="Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          console.log(typeData);
          {typeData.map((type) => {
            // console.log( getImgURL(article.imagePath))
            // console.log(article)
            // <AmplifyS3Image imgKey={article.imagePath} />
            return <MenuItem value={10}>{type.data}</MenuItem>;
          })}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      {/* <TextField
        label="Name"
        value={typeData.name}
        onChange={(e) => setTypeData({ ...typeData, name: e.target.value })}
      /> */}
      <IconButton onClick={uploadType}>
        <PublishIcon />
      </IconButton>
    </div>
  );
}
