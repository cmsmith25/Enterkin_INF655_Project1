import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TaskContext from "./context/TaskContext";


//Builds a task form 
const TaskForm = () => {
    const { addTask } = useContext(TaskContext);

    const validationSchema = Yup.object({
        name: Yup.string().required('Task name is required'),
        description: Yup.string().required('Description is required'),
    });
    

   
    return (
    <Formik
        initialValues={{ name: '', description: ''}}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
            await addTask(values);
            resetForm();
            }}
        >
        {() => (
            <Form>
                <label htmlFor="name">Task Name:</label>
                <Field id="name" name="name" placeholder="Enter task name" />
                <ErrorMessage name="name" component="div" />

                <label htmlFor="description">Description:</label>
                <Field
                id="description"
                name="description"
                placeholder="Enter task description" />
                <ErrorMessage name="description" component="div" />

                <button type="submit">Add Task</button>
                </Form>
        )}
        </Formik>
    );
};   

export default TaskForm;




