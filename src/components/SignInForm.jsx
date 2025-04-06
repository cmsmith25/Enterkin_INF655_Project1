import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormHeader from "../components/shared/FormHeader";
import FormButton from '../components/shared/FormButton';
import FormInput from '../components/shared/FormInput';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from './context/AuthContext';

const registerValidation = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters in length')
        .required('Passsword is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .when('showRegisterForm', {
            is: true,
            then: Yup.string().required('Password must be confirmed'),
        }),
    name: Yup.string().when('showRegisterForm', {
        is: true,
        then: Yup.string().required('Name is required'),
    }),
});

export default function SignInForm() {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const { createUser } = UserAuth();

    const onFormSwitch = () => {
        setShowRegisterForm((prevState) => !prevState);
        setEmail("");
        setPassword("");
    };

    const onSubmit = async (values) => {
        const data = { name, email, password, confirmPassword };
        console.log(data);
        
        try {
            await createUser(email, password);
            navigate("/");
        } catch (err) {
            console.log(err);
        }

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const renderForm = () => {
        if (showRegisterForm) {
            return(
                <Formik
                    initialValues={{
                        name,
                        email,
                        password, 
                        confirmPassword,
                    }}
                    validationSchema={registerValidation}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                    >
                        {({ errors, touched, handleBlur }) => (
                    <>

                    <FormHeader title="Register" />
                    <Form>
                    <FormInput
                        description="Name"
                        type="text"
                        className="nameInput"
                        placeholder="Enter Your Full Name"
                        id="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        onBlur={handleBlur}
                />
                {touched.name && errors.name && <div className="error">{errors.name}</div>
                }
                <FormInput
                description="Email"
                type="email"
                className="emailInput"
                placeholder="Enter Your Email"
                id="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                onBlur={handleBlur}
                />
                {touched.email && errors.email && <div className="error">{errors.email}</div>
                }
                <FormInput
                description="Password"
                type="password"
                className="password"
                placeholder="Enter Your Password"
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                onBlur={handleBlur}
                />
                {touched.password && errors.password && <div className="error">{errors.password}</div>
                }
                <FormInput
                description="Confirm Password"
                type="password"
                className="password"
                placeholder="Confirm Your Password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                onBlur={handleBlur}
                />
                {touched.confirmPassword && errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>
                }
                <FormButton title="Register" />
                <div className="registerLink">
                    <p>Already have an account?</p>
                    <Link to="#" onClick={onFormSwitch}>Login here!</Link>
                </div>
                </Form>
                </>
            )}
            </Formik>
            );
        }
        return ( 
            <Formik
                initialValues={{
                    email,
                    password,
                }}
                registerValidation={registerValidation}
                onSubmit={onSubmit}
                enableReinitialize={true}
        >
            {({ errors, touched, handleBlur }) => (
                <>

            <FormHeader title ="Login" />
            <Form>
                <FormInput
                description="Email"
                type="email"
                className="emailInput"
                placeholder="Enter Your Email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                onBlur={handleBlur}
                />
                {touched.email && errors.email && <div className="error">{errors.email}</div>
                }
                <FormInput
                description="Password"
                type="password"
                className="password"
                placeholder="Enter Your Password"
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                onBlur={handleBlur}
                />
                {touched.password && errors.password && <div className="error">{errors.password}</div>
                }
                <FormButton title="Log In" />
                <div className="alternateLogin">
                    <label>Or Sign In With:</label>
                    <div className="iconGroup">
                        <FaFacebook id="facebookIcon" />
                        <FaGithub id="gitIcon" />
                        <FaGoogle id="googleIcon" />
                    </div>
                </div>
                <div className="registerLink">
                    <Link to="/forgot-password" className="forgotPasswordLink">Forgot Password</Link>
                    <p>Dont have an account?</p>
                    <Link to="#" id="registerLink" onClick={onFormSwitch}>Register Here!</Link>
                </div>
            </Form>
        </>
    )}
    </Formik>
);
}

return <div className="loginForm">{renderForm()}</div>
}
