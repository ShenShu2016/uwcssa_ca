import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

export const ArrowBack = () => {
  let history = useHistory();
  return (
    <>
      <IconButton onClick={() => history.goBack()}>
        <ArrowBackIcon />
      </IconButton>
    </>
  );
};
