import React from 'react';
import { Formik, Field } from 'formik';
import { Button, ErrorMessage, Form, FormField } from './ContactForm.styled';
import * as Yup from 'yup';
import { SlUserFollow } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';
import { Report } from 'notiflix';
import { addContact } from 'redux/operations';

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){3,14}(\s*)?$/;

const FornSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short Name!')
    .max(20, 'Too Long Name!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        if (
          contacts.some(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          )
        ) {
          return Report.warning(
            'Warning',
            'The contact to that name already exists!',
            'Okay'
          );
        }
        dispatch(
          addContact({
            ...values,
          })
        );
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
          Number
          <Field name="number" type="text" autoComplete="off" />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <Button type="submit">
          <SlUserFollow size="18px" />
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};
