import React from "react";
import { Link } from "react-router-dom";
import UserList from "./UserList";
import BreadcrumbNav from "../../components/general_components/BreadcrumbNav";
import { TabView, TabPanel } from "primereact/tabview";
import { BreadCrumb } from "primereact/breadcrumb";
import { Panel } from "primereact/panel";

import RolesPage from "./roles/RolesPage";
import PermissionsPage from "./permissions/PermissionsPage";

function UserPage({ loggedInUserData }) {
    console.log("loggedInUserData user page : ", loggedInUserData);
    return (
        <div>
            <BreadcrumbNav />
            <Panel header="User Management">
                <TabView className="m-3">
                    {/* {loggedInUserData?.permissions?.includes("view users") && ( */}
                    <TabPanel header="Users">
                        <UserList loggedInUserData={loggedInUserData} />
                    </TabPanel>
                    {/* )} */}
                    {/* {loggedInUserData?.permissions?.includes("view roles") && ( */}
                    <TabPanel header="Roles">
                        <div style={{ width: "100%", minHeight: "100vh", padding: "1rem" }}>
                            <RolesPage loggedInUserData={loggedInUserData} />
                        </div>
                    </TabPanel>
                    {/* )} */}
                    {/* {loggedInUserData?.permissions?.includes("view permissions") && ( */}
                    <TabPanel header="Permissions">
                        <div style={{ width: "100%", minHeight: "100vh", padding: "1rem" }}>
                            <PermissionsPage />
                        </div>
                    </TabPanel>
                    {/* )} */}
                </TabView>
            </Panel>
        </div>
    );
}

export default UserPage;
