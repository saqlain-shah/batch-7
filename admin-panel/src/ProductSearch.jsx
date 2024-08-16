import React, { useState } from 'react';

// Sample product data
const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Smartphone', price: 499.99 },
  { id: 3, name: 'Headphones', price: 199.99 },
  { id: 4, name: 'Monitor', price: 299.99 },
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
      />
      <div>
        {filteredProducts.length > 0 ? (
          <ul>
            {filteredProducts.map(product => (
              <li key={product.id}>
                {product.name} - ${product.price.toFixed(2)}
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
