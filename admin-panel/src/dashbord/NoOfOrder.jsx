import React from 'react';

const OrderCount = ({ count }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Number of Orders</h2>
      <p style={styles.count}>{count}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '200px',
    margin: 'auto',
  },
  heading: {
    margin: '0',
    fontSize: '18px',
    color: '#333',
  },
  count: {
    fontSize: '36px',
    color: '#007bff',
    margin: '10px 0 0 0',
  },
};

export default OrderCount;
