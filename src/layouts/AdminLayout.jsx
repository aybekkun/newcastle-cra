import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/AdminComponents/Sidebar";
import "../scss/adminStyles/admin.scss";
const AdminLayout = () => {
  return (
    <div className="admin">
      <Sidebar />
      <main className="admin__main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
