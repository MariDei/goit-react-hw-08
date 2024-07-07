import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Name must be longer').required('required!'),
  email: Yup.string().email('Invalid email address!').required('required!'),
  password: Yup.string().min(7, 'Too Short!').required('required!'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter your username"
          />
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label}>
          Email
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="span" />
        </label>
        <label className={css.label}>
          Password
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="span" />
        </label>
        <div>
          <button className={css.btn} type="submit">
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
