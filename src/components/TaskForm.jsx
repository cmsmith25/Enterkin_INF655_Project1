import React from "react";
import { Formik, Field, Form } from 'formik';


//Builds a task form 
const TaskForm = ({ addTask, initialValues = { name: '', description: ''}, editingTask }) => {
   return (
    <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
            addTask(values);
            resetForm();
        }}
    >
        {({ isSubmitting }) => (
            <Form>
                <div>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Enter Task Name"
                        required
                        />
                </div>
                <div>
                    <Field
                    type="text"
                    name="description"
                    placeholder="Enter Task Description"
                    required
                    />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {editingTask ? 'Update Task' : 'Add Task'}
                </button>
            </Form>
        )}
    </Formik>
   );
};
   
export default TaskForm;
   




