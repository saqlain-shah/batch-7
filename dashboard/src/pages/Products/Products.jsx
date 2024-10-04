import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { set } from 'lodash';

export default function AddProductForm() {
  // Validation schema for form fields
  const validationSchema = Yup.object({
    name: Yup.string().required('Product name is required').trim(),
    category: Yup.string().oneOf(['Men', 'Women', 'Child'], 'Invalid category').required('Category is required'),
    subCategory: Yup.string()
      .oneOf(['Shirt', 'Pants', 'Dress', 'Jacket', 'Skirt', 'Shorts', 'Other'], 'Invalid subcategory')
      .required('Subcategory is required'),
    size: Yup.string().oneOf(['small', 'medium', 'large'], 'Invalid size').required('Size is required'),
    color: Yup.string().required('Color is required'),
    price: Yup.number().min(0, 'Price cannot be negative').required('Price is required'),
    brand: Yup.string().required('Brand is required'),
    description: Yup.string(),
    stock: Yup.number().min(0, 'Stock cannot be negative').required('Stock is required')
  });

  // Initial form values
  const initialValues = {
    name: '',
    category: '',
    subCategory: '',
    size: '',
    color: '',
    price: 0,
    brand: '',
    description: '',
    stock: 0,
    image: null
  };

  // Form submission handler
  const onSubmit = async (values, { resetForm }) => {
    console.log('values', values);
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    try {
      const response = await axios.post('http://localhost:5000/api/product/', formData); // Adjust the URL according to your backend API route
      console.log('Product added:', response.data);
      resetForm(); // Reset the form after successful submission
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            {/* Product Name */}
            <div>
              <label htmlFor="name">Product Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category">Category</label>
              <Field name="category" as="select">
                <option value="">Select category</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Child">Child</option>
              </Field>
              <ErrorMessage name="category" component="div" style={{ color: 'red' }} />
            </div>

            {/* Subcategory */}
            <div>
              <label htmlFor="subCategory">Subcategory</label>
              <Field name="subCategory" as="select">
                <option value="">Select subcategory</option>
                <option value="Shirt">Shirt</option>
                <option value="Pants">Pants</option>
                <option value="Dress">Dress</option>
                <option value="Jacket">Jacket</option>
                <option value="Skirt">Skirt</option>
                <option value="Shorts">Shorts</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage name="subCategory" component="div" style={{ color: 'red' }} />
            </div>

            {/* Size */}
            <div>
              <label htmlFor="size">Size</label>
              <Field name="size" as="select">
                <option value="">Select size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </Field>
              <ErrorMessage name="size" component="div" style={{ color: 'red' }} />
            </div>

            {/* Color */}
            <div>
              <label htmlFor="color">Color</label>
              <Field name="color" type="text" />
              <ErrorMessage name="color" component="div" style={{ color: 'red' }} />
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price">Price</label>
              <Field name="price" type="number" />
              <ErrorMessage name="price" component="div" style={{ color: 'red' }} />
            </div>

            {/* Brand */}
            <div>
              <label htmlFor="brand">Brand</label>
              <Field name="brand" type="text" />
              <ErrorMessage name="brand" component="div" style={{ color: 'red' }} />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description">Description</label>
              <Field name="description" as="textarea" />
              <ErrorMessage name="description" component="div" style={{ color: 'red' }} />
            </div>

            {/* Stock */}
            <div>
              <label htmlFor="stock">Stock</label>
              <Field name="stock" type="number" />
              <ErrorMessage name="stock" component="div" style={{ color: 'red' }} />
            </div>

            {/* Image */}
            <div>
              <label htmlFor="image">Image</label>
              <input
                name="image"
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFieldValue('image', file); // Store the file in Formik state
                }}
              />
              <ErrorMessage name="image" component="div" style={{ color: 'red' }} />
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" disabled={isSubmitting}>
                Add Product
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
