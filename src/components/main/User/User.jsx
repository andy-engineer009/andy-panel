import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import Table from "../../../shared/pages/table/table";
import { useState } from 'react';

const User = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const handleEdit = (user) => {
        console.log(user);
        formik.setValues(user); 
        setIsEditMode(true);
        // formik.setFieldValue("name", user.name);
        // formik.setFieldValue("email", user.email);
    }
    const handleDelete = (user) => {
       updateUserList(userList.filter((item) => item.name !== user.name));
    }

    const data = [
        { name: 'John', email: 'john@gmail.com' },
        { name: 'Jane', email: 'jane@gmail.com' },
        { name: 'Jim', email: 'jim@gmail.com' },
    ]
    const columns = ['name', 'email']

    const [userList, updateUserList] = useState(data);

    const formik = useFormik({
        initialValues: { name: '', email: '' },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
        }),
        onSubmit: (values) => {
            if(isEditMode) {
                console.log(values);
                updateUserList(userList.map((user) => user.name === values.name ? values : user));
                formik.resetForm();
            } else {
                console.log(values);
                updateUserList([...userList, values]);
                formik.resetForm();
            }
            setIsEditMode(false);
        },
    });

    return (
        <div>
            <h1>User</h1>
            <button onClick={() => console.log('Add User')}> Add User</button>
            <Table data={userList} columns={columns} handleEdit={handleEdit} handleDelete={handleDelete} />

            <h2>add user form</h2>

            {/* <Form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field id="name" type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter your name" className="form-input" />
                            <ErrorMessage name="name" component="span" className="error-message" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter your email" className="form-input" />
                            <ErrorMessage name="email" component="span" className="error-message" />
                        </div>
    
                        <button type="submit">Submit</button>
                    </Form>
      */}
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-input"
                    />
                    {formik.touched.name && formik.errors.name && (
                        <span className="error-message">{formik.errors.name}</span>
                    )}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-input"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <span className="error-message">{formik.errors.email}</span>
                    )}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default User;