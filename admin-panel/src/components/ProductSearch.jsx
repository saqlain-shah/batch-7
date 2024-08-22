import React, { useState } from 'react';

// Sample category data with images
const categories = [
  { id: 1, name: 'Men', image: 'https://example.com/men.jpg' },
  { id: 2, name: 'Women', image: 'https://example.com/women.jpg' },
  { id: 3, name: 'Kids', image: 'https://example.com/kids.jpg' },
];

const CategorySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);

  // Handle input change
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterCategories(query);
  };

  // Filter categories based on search query
  const filterCategories = (query) => {
    if (query.trim() === '') {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter(category =>
        category.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search categories..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
      />
      <div>
        {filteredCategories.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {filteredCategories.map(category => (
              <li key={category.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  style={{ width: '50px', height: '50px', marginRight: '10px', objectFit: 'cover' }} 
                />
                <div>
                  <p style={{ margin: 0 }}>{category.name}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No categories found</p>
        )}
      </div>
    </div>
  );
};

export default CategorySearch;
