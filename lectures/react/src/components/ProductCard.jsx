import { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Chip,
  Skeleton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProductCard() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) =>
        console.error("There was an error fetching the data:", error)
      );
  }, []);

  return (
    <Grid container spacing={10} marginTop={2}>
      {products ? (
        products.map((product) => (
          <Grid item xs={12} sm={6} md={4} padding={1} key={product.id}>
            <Card sx={{ width: 400, height: 500 }}>
              <CardMedia
                component="img"
                height="190"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" component="div" marginTop={2}>
                  ${product.price}
                </Typography>
                <Chip
                  label={`${product.discountPercentage}% off`}
                  color="primary"
                  sx={{ marginTop: 1 }}
                />
                <Typography variant="body1" component="p" marginTop={1}>
                  Stock: {product.stock}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating}
                </Typography>
                <Button
                  component={Link}
                  to={`/products/${product.id}`}
                  rel="noreferrer"
                  sx={{
                    marginTop: 1,
                    "&:hover": {
                      textDecoration: "underline",
                      color: "#1769aa",
                    },
                  }}
                >
                  More details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        Array.from(new Array(9)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <Skeleton variant="rectangular" width="100%" height={140} />
              <CardContent>
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="rectangular" width="80%" height={20} />
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default ProductCard;
