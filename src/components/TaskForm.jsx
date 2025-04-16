import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


//Builds a task form 
const TaskForm = ({ initialValues, onSubmit, resetForm }) => {
    const validationSchema = Yup.object({
        name: Yup.string().required('Task name is required'),
        description: Yup.string().required('Description is required'),
    });

   
    return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, actions) => {
            onSubmit=(values);
            actions.resetForm();
            if (resetForm) resetForm();
            }}
        >
        {() => (
            <Form>
                <div>
                    <label htmlFor="name">Task Name:</label>
                    <Field name="name" />
                    <ErrorMessage name="name" component="div" />
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <Field name="description" />
                    <ErrorMessage name="description" comonent="div" />
                </div>

                <button type="submit">Submit</button>
                </Form>
        )}
        </Formik>
    );
};   
export default TaskForm;
   




