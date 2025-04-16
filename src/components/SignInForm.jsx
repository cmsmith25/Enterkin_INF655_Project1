import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormHeader from "../components/shared/FormHeader";
import FormButton from '../components/shared/FormButton';
import FormInput from '../components/shared/FormInput';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserAuth } from './context/AuthContext';

const loginValidation = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Passsword is required'),
});
const registerValidation = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

export default function SignInForm() {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const { user, createUser, signIn } = UserAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const onFormSwitch = () =>
        setShowRegisterForm((prevState) => !prevState);


    const onSubmit = async (values, { resetForm }) => {
        const { name, email, password } = values;
        
        try {
            if (showRegisterForm) {
            await createUser(email, password);
            } else {
                await signIn(email,password);
            }
            navigate("/home");
        } catch (err) {
            console.log("Auth error:", err);
        }

        resetForm();
    };

    useEffect(() => {
        if (user && location.pathname === '/signin') {
            navigate("/home");
        }
    }, [user, navigate, location.pathname]);

    return(
        <div className="loginForm">
            <Formik
                initialValues={
                    showRegisterForm
                        ? { name: '', email: '', password: '', confirmPassword: ''}
                        : { email: '', password: '' }
                }
                    validationSchema={showRegisterForm ? registerValidation: loginValidation}
                    onSubmit={onSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                    <>

                    <FormHeader title={showRegisterForm ? "Register" : "Login"} />
                    <Form>
                        {showRegisterForm && (
                            <>
                            <label htmlFor="name">name</label>
                                <FormInput
                                    type="text"
                                    placeholder="Enter Your Full Name"
                                    id="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.name && errors.name && <div className="error">{errors.name}</div>}
                            </>
                        )}
                        <label htmlFor="email">email</label>
                        <FormInput
                            type="email"
                            placeholder="Enter Your Email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.email && errors.email && <div className="error">{errors.email}</div>}
                
                        <label htmlFor="password">password</label>
                        <FormInput
                            type="password"
                            placeholder="Enter Your Password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.password && errors.password && <div className="error">{errors.password}</div>}
                        
                        {showRegisterForm && (
                            <>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <FormInput
                                    type="password"
                                    placeholder="Confirm Your Password"
                                    id="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.confirmPassword && errors.confirmPassword && 
                                    <div className="error">{errors.confirmPassword}</div>}
                            </>
                            )}
            


                        <FormButton title={showRegisterForm ? "Register" : "Log In"} />
                        {!showRegisterForm && (
                            <div className="alternateLogin">
                                <label>Or Sign In With:</label>
                                <div className="iconGroup">
                                    <FaFacebook id="facebookIcon" />
                                    <FaGithub id="gitIcon" />
                                    <FaGoogle id="googleIcon" />
                                </div>
                            </div>
                        )}
                
                         <div className="registerLink">
                            {!showRegisterForm ? (
                                <>
                                    <Link to="/forgot-password" className="forgotPasswordLink">
                                        Forgot Password?
                                    </Link>
                                    <p>Don't have an account?</p>
                                    <Link to="#" onClick={onFormSwitch}>Register Here!</Link>
                                </>
                            ) : (
                                <>
                                    <p>Already have an account?</p>
                                    <Link to="#" onClick={onFormSwitch}>Login here!</Link>
                                </>
                             )}
                        </div>
                    </Form>
                </>
            )}
        </Formik>
    </div>
)}


          
    
