import { React, useState } from "react";

import "./Sidebar.css";



const Sidebar = ({ pop, setPop }) => {


    return (
        <div className="sidebar">
            <h1 >Dashboard</h1>
            <button className="btn" onClick={() => {
                setPop(true);
            }}>
                Add Interview
            </button>
        </div>
    );



};
export default Sidebar;
/*

*/