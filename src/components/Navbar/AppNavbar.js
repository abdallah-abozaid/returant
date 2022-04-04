import React from "react";
import { NavLink } from "react-router-dom";
import "./AppNavbar.css";
const AppNavbar = () => {
  return (
    <div className="appNavbar py-3 px-4">
      <NavLink to="/" activeclassname="active">
        الرئيسية
      </NavLink>
      <NavLink to="/orders" activeclassname="active">
        القائمة
      </NavLink>
      <NavLink to="/Bills" activeclassname="active">
        الطلبات
      </NavLink>
      <NavLink to="/capsolute" activeclassname="active">
        الفواتير
      </NavLink>
    </div>
  );
};

export default AppNavbar;
