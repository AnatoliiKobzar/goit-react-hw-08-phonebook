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
import { logIn } from 'redux/auth/operations';

const FornSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .required('Required'),
});

export const LoginForm = () => {
  const dispath = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispath(logIn(values));
        actions.resetForm();
      }}
      validationSchema={FornSchema}
    >
      <Form>
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
        <Button type="submit">Log in</Button>
      </Form>
    </Formik>
  );
};
