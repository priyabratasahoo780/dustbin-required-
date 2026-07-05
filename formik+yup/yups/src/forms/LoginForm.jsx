import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BasicButtons from './BasicButton';
import Volume from './Volume'
import Cards from './Cards'
export default function LoginForm() {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(8, "Max character must be of 8")
      .required('Password is required')
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("form sucessfully");
      localStorage.setItem('loginData', JSON.stringify(values));
      console.log('Saved to localStorage:', values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email" 
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="new-password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          
        />

        {formik.touched.password && formik.errors.password && (
          <p>{formik.errors.password}</p>
        )}
      </div>

      <button type="submit">Login</button>
      <BasicButtons/>
      <Volume/>
      <Cards/>
    </form>
  );
};


