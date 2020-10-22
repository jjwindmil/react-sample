import React from 'react';
import LayoutTemplate from "../../components/Layout/LayoutTemplate";
import "./Home.scss"
function HomePage(props) {
    return (
        <LayoutTemplate props={<div>Welcome</div>}></LayoutTemplate>
    );
}

export default HomePage;