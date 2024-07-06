import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './ContactForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'min 3 - to short!')
    .max(50, 'max 50 - to long!')
    .required('required'),
  number: Yup.string()
    .min(3, 'min 3 - to short!')
    .max(50, 'max 50 - to long!')
    .required('required'),
});

const ContactForm = () => {
  const fieldNameId = useId();
  const fieldNumberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(), ...values }))
      .unwrap()
      .then(() => {
        toast.success('Successfully added!');
        <Toaster position="top-center" reverseOrder={true} />;
      })
      .catch(() => {
        toast.error('Addition error!');
        <Toaster position="top-center" reverseOrder={true} />;
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.wrapper} autoComplete="off">
        <label className={css.name} htmlFor={fieldNameId}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          id={fieldNameId}
          name="name"
          placeholder="Enter name & surname"
        />
        <ErrorMessage name="name" component="span" />
        <label className={css.number} htmlFor={fieldNumberId}>
          Number
        </label>
        <Field
          className={css.input}
          type="phone"
          id={fieldNumberId}
          name="number"
          placeholder="Enter tel. +38 000 000 00 00"
        />
        <ErrorMessage name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
