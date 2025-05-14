import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";
import { postData } from '../../core/services/api';

const initialValues = { email: "", password: "" };
 
const Login = () => {
  const { login } = useAuth();
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Please sign in to continue</p>
        
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={(values) => {
            let payload ={
              username: 'emilys',
              password: 'emilyspass'
            }
            postData('auth/login', payload).then((res) => {
              console.log(res);
              login(values);
            }).catch((err) => {
              console.log(err);
            });
          
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email"
                  className="form-input"
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <button type="submit" className="login-button">
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
