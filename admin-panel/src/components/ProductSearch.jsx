import React, { useState } from 'react';

// Sample product data with images
const products = [
  { id: 1, name: 'Men Pants', price: 49.99, image: 'https://example.com/men-pants.jpg' },
  { id: 2, name: 'Men Shirt', price: 29.99, image: 'https://example.com/men-shirt.jpg' },
  { id: 3, name: 'Men Suit', price: 199.99, image: 'https://example.com/men-suit.jpg' },
  { id: 4, name: 'Women Pants', price: 59.99, image: 'https://example.com/women-pants.jpg' },
  { id: 5, name: 'Women Shirt', price: 34.99, image: 'https://example.com/women-shirt.jpg' },
  { id: 6, name: 'Women Suit', price: 209.99, image: 'https://example.com/women-suit.jpg' },
  { id: 7, name: 'Children Pants', price: 39.99, image: 'https://example.com/children-pants.jpg' },
  { id: 8, name: 'Children Shirt', price: 24.99, image: 'https://example.com/children-shirt.jpg' },
  { id: 9, name: 'Children Suit', price: 149.99, image: 'https://example.com/children-suit.jpg' },
  { id: 10, name: 'Men Jacket', price: 89.99, image: 'https://example.com/men-jacket.jpg' },
  { id: 11, name: 'Women Jacket', price: 99.99, image: 'https://example.com/women-jacket.jpg' },
  { id: 12, name: 'Men Sweater', price: 59.99, image: 'https://example.com/men-sweater.jpg' },
  { id: 13, name: 'Women Sweater', price: 64.99, image: 'https://example.com/women-sweater.jpg' },
  { id: 14, name: 'Men Shorts', price: 29.99, image: 'https://example.com/men-shorts.jpg' },
  { id: 15, name: 'Women Shorts', price: 34.99, image: 'https://example.com/women-shorts.jpg' },
  { id: 16, name: 'Children Jacket', price: 49.99, image: 'https://example.com/children-jacket.jpg' },
  { id: 17, name: 'Men T-Shirt', price: 19.99, image: 'https://example.com/men-tshirt.jpg' },
  { id: 18, name: 'Women T-Shirt', price: 24.99, image: 'https://example.com/women-tshirt.jpg' },
  { id: 19, name: 'Children T-Shirt', price: 14.99, image: 'https://example.com/children-tshirt.jpg' },
  { id: 20, name: 'Men Shoes', price: 89.99, image: 'https://example.com/men-shoes.jpg' },
];

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle input change
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProducts(query);
  };

  // Filter products based on search query
  const filterProducts = (query) => {
    if (query.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
      />
      <div>
        {filteredProducts.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {filteredProducts.map(product => (
              <li key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '50px', height: '50px', marginRight: '10px', objectFit: 'cover' }} 
                />
                <div>
                  <p style={{ margin: 0 }}>{product.name}</p>
                  <p style={{ margin: 0 }}>${product.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
