import { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Skeleton
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const { id } = useParams(); // Get the product id from the URL

  useEffect(() => {
    // Fetch the product data from the API using the id
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        // Set the product state with the response data
        setProduct(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        // Handle the error
        console.error("There was an error fetching the data:", error);
        setLoading(false); // Set loading to false on error
      });
  }, [id]); // Add id as a dependency to re-run the effect when it changes

  // Return a card component with the product details or skeleton loading
  return (
    <Grid container justifyContent={"center"} spacing={10} marginTop={15}>
      {loading ? ( // Check loading state
        <Grid item xs={12} sm={8} md={6} lg={4} sx={{ mr: 4, ml: 4 }}>
          <Card>
            <Skeleton animation="wave" variant="rectangular" width="100%" height={375} />
            <CardContent>
              <Skeleton animation="wave" height={40} width="80%" style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={20} width="40%" style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={20} width="30%" />
            </CardContent>
          </Card>
        </Grid>
      ) : (
        product && ( // Check if product data is available
          <Card sx={{ maxWidth: 500 }}>
            <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <CardMedia
                component="img"
                width="500"
                height="375"
                image={product.thumbnail}
                alt={product.title}
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
                ${product.price}
              </Typography>
              <Chip
                label={`${product.discountPercentage}% off`}
                color="success"
                sx={{ marginTop: 1, marginRight: 1 }}
              />
              <Chip
                label={`${product.rating} stars`}
                color="primary"
                sx={{ marginTop: 1, marginRight: 1 }}
              />
              <Chip
                label={`${product.stock} in stock`}
                color="info"
                sx={{ marginTop: 1, marginRight: 1 }}
              />
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ marginTop: 1 }}
              >
                Brand: {product.brand}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ marginTop: 1 }}
              >
                Category: {product.category}
              </Typography>
            </CardContent>
          </Card>
        )
      )}
    </Grid>
  );
};

export default SingleProduct;
