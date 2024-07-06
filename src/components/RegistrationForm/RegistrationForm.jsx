import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
// import css from './RegistrationForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Name must be longer').required('Required!'),
  email: Yup.string().email('Invalid email address!').required('Required!'),
  password: Yup.string().min(7, 'Too Short!').required('Required!'),
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
      <Form autoComplete="off">
        <label>
          Username
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="span" />
        </label>
        <div>
          <button type="submit">Register</button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
