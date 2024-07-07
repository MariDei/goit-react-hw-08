import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address!').required('required!'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(12, 'Too Long!')
    .required('required!'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.wrapper}>
          <label className={css.label}>
            Email
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
            <ErrorMessage name="email" component="span" />
          </label>
        </div>
        <div className={css.wrapper}>
          <label className={css.label}>
            Password
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="off"
            />
            <ErrorMessage name="password" component="span" />
          </label>
        </div>
        <div>
          <button className={css.btn} type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
