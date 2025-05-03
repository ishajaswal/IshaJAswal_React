import React from 'react';
import Header from "./Header";
import SideBar from "./SideBar";
import "../assets/NewCss/LayOut.css"


const LayOut = ({childern}) => (
    <div className="layout">
        <Header/>
        <div className="main">
         <SideBar/>
        <div className="content">{childern}</div>
        </div>
    </div>
);

export default LayOut;