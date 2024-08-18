import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import useAuthContext from "../../context/AuthContext";
import AdminLayout from "../../layouts/AdminLayout";

const PrivateAdmin = ({ children }) => {
    const { user, getUserQuery, isLoading } = useAuthContext();
    const navigate = useNavigate();

    // //works if Authentication is set up
    // return getUserQuery?.isLoading ? (
    //     <>
    //         <div
    //             style={{
    //                 display: "flex",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 height: "100vh", // Full viewport height
    //             }}
    //         >
    //             <i className="pi pi-spin pi-spinner" style={{ fontSize: "2rem" }}></i>
    //         </div>
    //     </>
    // ) : getUserQuery?.data?.data ? (
    //     <AdminLayout />
    // ) : (
    //     <Navigate to="/login" replace />
    // );

    //works when there is no auth
    return <AdminLayout />;
};

export default PrivateAdmin;
