import React from 'react';
import { Formik, Field } from 'formik';
import {
  Button,
  ErrorMessage,
  Form,
  FormField,
} from '../ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

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
