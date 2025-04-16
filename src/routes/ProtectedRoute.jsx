import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../components/context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { user, loading } = UserAuth();

    if(loading) return <div>Loading...</div>;
    if (!user) {
        return <Navigate to="/signin" />
    }
    return children;
};

