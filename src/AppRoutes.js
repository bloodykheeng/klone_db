import React, { lazy, Suspense, useState } from "react";

//==================== my car routes ====================
import NewUsersPage from "./views/users/UserPage";
import ProductCategoriesPage from "./views/product-categories/ProductCategoriesPage";
import ProductCategoryViewPage from "./views/product-categories/ProductCategoryViewPage";

// ============ Customm component routes ========================
const DashboardPage = lazy(() => import("./components/Dashboard"));

function AppRoutes() {
    const privateDefaultRoutes = [
        {
            path: "/dashboard",
            name: "dashboard",
            element: DashboardPage, // Replace with the actual component
            layout: "/private",
        },

        // =============================  Routes ==================================

        {
            path: "/users",
            name: "users",
            element: NewUsersPage,
            layout: "/admin",
        },
        {
            path: "/product-categories",
            name: "product-categories",
            element: ProductCategoriesPage,
            layout: "/admin",
        },
        {
            path: "/product-categories/category",
            name: "category",
            element: ProductCategoryViewPage,
            layout: "/admin",
        },
    ];

    const [privateRoutes, setPrivateRoutes] = useState(privateDefaultRoutes);

    return privateRoutes;
}

export default AppRoutes;
