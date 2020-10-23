import React from 'react';
import { useSelector } from 'react-redux';
import LayoutTemplate from '../../components/Layout/LayoutTemplate';
import './Home.scss';
function HomePage(props) {
    const loginInfo = useSelector((state) => state.login);
    console.log('Home Page : ', loginInfo);
    return <LayoutTemplate props={<div>Welcome</div>}></LayoutTemplate>;
}

export default HomePage;
