import React from 'react';
import { Formik, Field } from 'formik';
import {
  Button,
  ErrorMessage,
  Form,
  FormField,
} from '../ContactForm/ContactForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const FornSchema = Yup.object().shape({
  name: Yup.string().max(20).required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispath = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispath(register(values));
        actions.resetForm();
      }}
      validationSchema={FornSchema}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" type="text" autoComplete="off" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Email
          <Field name="email" type="text" autoComplete="off" />
          <ErrorMessage name="email" component="div" />
        </FormField>
        <FormField>
          Password
          <Field name="password" type="password" autoComplete="off" />
          <ErrorMessage name="password" component="div" />
        </FormField>
        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
};
