import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";

import './App.css';
import SignInForm from './components/SignInForm';
import { AuthContextProvider } from './components/context/AuthContext';
import { TaskProvider } from './components/context/TaskContext';


export default function App() {
  return (
   <>
  <AuthContextProvider>
    <TaskProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TaskProvider>
  </AuthContextProvider>
  </>
  );
}