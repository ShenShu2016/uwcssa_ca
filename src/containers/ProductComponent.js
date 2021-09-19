import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    width: 220,
  },
});

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const classes = useStyles();
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Box p={1} m={1} key={id}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2"></Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: {price}
                <br />
                Category: {category}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>

            <Button
              size="small"
              color="primary"
              component={Link}
              to={`products/${id}`}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  });

  return (
    <div>
      <h1>ProductComponent</h1>
      <Container maxWidth="xl">
        <Box display="flex" flexWrap="wrap" bgcolor="background.paper">
          {renderList}
        </Box>
      </Container>
    </div>
  );
};
export default ProductComponent;
