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
  const [products, setProducts] = useState(null); // Initialized to null to check loading state

  useEffect(() => {
    // Replace 'your-backend-endpoint' with the actual backend URL from where you're fetching data
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
    <Grid container spacing={{ xs: 2, sm: 4, md: 6 }} sx={{ p:2 }}>
      {products
        ? products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.thumbnail}
                  alt={product.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
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
        : // Skeleton placeholders
          Array.from(new Array(9)).map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Skeleton variant="rectangular" width="100%" height={140} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="rectangular" width="80%" height={20} />
                </CardContent>
              </Card> 
            </Grid>
          ))}
    </Grid>
  );
}

export default ProductCard;
