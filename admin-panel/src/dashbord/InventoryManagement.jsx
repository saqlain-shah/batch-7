// src/InventoryManagement.js
import React, { useState } from 'react';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({ name: '', id: '', quantity: '', price: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Update existing product
      setInventory((prevData) =>
        prevData.map((item, index) =>
          index === editIndex
            ? { ...formData, quantity: parseInt(formData.quantity), price: parseFloat(formData.price) }
            : item
        )
      );
      setEditIndex(null);
    } else {
      // Add new product
      setInventory((prevData) => [
        ...prevData,
        { ...formData, quantity: parseInt(formData.quantity), price: parseFloat(formData.price) }
      ]);
    }
    setFormData({ name: '', id: '', quantity: '', price: '' });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setFormData(inventory[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    setInventory((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleShowForm = () => {
    setFormData({ name: '', id: '', quantity: '', price: '' });
    setEditIndex(null);
    setShowForm(true);
  };

  return (
    <div style={{ padding: '20px' ,backgroundColor: '#78aaf0', }}>
      <h1>Inventory Management</h1>
      <button onClick={handleShowForm} style={{ marginBottom: '20px' }}>Add Product</button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={formData.id}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
          <button type="submit">{editIndex !== null ? 'Update Product' : 'Add Product'}</button>
          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      )}

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagement;
