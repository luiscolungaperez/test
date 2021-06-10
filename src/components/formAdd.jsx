import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../styles/formAdd.css';

const validation = Yup.object().shape({
  sku: Yup.string()
    .required('Required'),
  name: Yup.string()
    .required('Required'),
  quantity: Yup.number()
    .min(0)
    .required('Required'),
  price: Yup.number()
    .min(0)
    .required('Required'),
});

const FormAdd = ({ add }) => {
  const formik = useFormik({
    initialValues: {
      sku: '',
      name: '',
      quantity: '',
      price: ''
    },
    validationSchema: validation,
    onSubmit: (data, actions) => {
      add(data);
      actions.resetForm();
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <TextField
          fullWidth
          id="sku"
          name="sku"
          label="Sku"
          value={formik.values.sku}
          onChange={formik.handleChange}
          error={formik.touched.sku && Boolean(formik.errors.sku)}
          helperText={formik.touched.sku && formik.errors.sku}
          className='input__padding'
        />
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          className='input__padding'
        />
        <TextField
          fullWidth
          id="quantity"
          name="quantity"
          label="Quantity"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          error={formik.touched.quantity && Boolean(formik.errors.quantity)}
          helperText={formik.touched.quantity && formik.errors.quantity}
          className='input__padding'
        />
        <TextField
          fullWidth
          id="price"
          name="price"
          label="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          className='input__padding'
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add to Cart
        </Button>
      </form>
    </div>
  );
}

export default FormAdd;