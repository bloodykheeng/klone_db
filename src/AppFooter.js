import React from "react";

export const AppFooter = (props) => {
    return (
        <div className="layout-footer">
            <img
                src={props.layoutColorMode === "light" ? "assets/klone_db_photos/klone-db-logo-removebg-preview.png" : "assets/klone_db_photos/klone-db-logo-removebg-preview.png"}
                alt="Logo"
                //  height="20"
                style={{ height: "50px" }}
                className="mr-2"
            />
            by
            <span className="font-medium ml-2" style={{ cursor: "auto", color: "var(--primary-color)", fontWeight: "700" }}>
                Klone DB
            </span>
        </div>
    );
};
