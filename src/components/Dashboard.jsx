import React, { useState, useEffect } from 'react';


import Sidebar from '../components/mainComponents/Sidebar';
import Topbar from '../components/mainComponents/Topbar';
import Pageheadin from '../components/mainComponents/Pageheading';

// Box upper page
import Boxmonth from '../components/box/Boxmonth';
import Boxannual from '../components/box/Boxannual';
import Boxtasks from '../components/box/Boxtasks';
import Boxrequest from '../components/box/Boxrequest';

// Graphics main
import ChartArea from '../components/contentRow/Chart/ChartArea';
import ChartPie from '../components/contentRow/Chart/ChartPie';

//Cards
import Card from '../components/contentRow/Graphic-card/Card';
import CardContent from '../components/contentRow/Graphic-card/CardContent';
import Ilustration from '../components/contentRow/Graphic-card/Ilustration';
import Aproach from '../components/contentRow/Graphic-card/Aproach';

//ScrollTopButton
import ScrollTopButton from '../components/mainComponents/ScrollTopButton';

//Logout Modal
import LogoutModal from '../components/mainComponents/LogoutModal';
import react from "react";

const DashBoard = () => {
    return (
        <>
            <div id="wrapper">

                {/* Sidebar */}
                <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar'>
                    <Sidebar />
                </ul>

                <div id="content-wrapper" className='d-flex flex-column'>
                    <div id="content">
                        <Topbar />
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            <Pageheadin />

                            {/* first content row */}
                            <div className='row'>

                                <div className='col-xl-3 col-md-6 mb-4'>
                                    <Boxmonth />
                                </div>

                                {/* second content row */}
                                <div className='col-xl-3 col-md-6 mb-4'>
                                    <Boxannual />
                                </div>

                                {/* thirty content row */}
                                <div className='col-xl-3 col-md-6 mb-4'>
                                    <Boxtasks />
                                </div>

                                {/* forth content row */}
                                <div className='col-xl-3 col-md-6 mb-4'>
                                    <Boxrequest />
                                </div>
                            </div>

                            {/* Content Row Chart and other graphics */}
                            <div className="row">
                                <ChartArea />
                                <ChartPie />
                            </div>
                            {/* Content Row  for cards */}
                            <div className="row">
                                {/* Content Column */}
                                <div className="col-lg-6 mb-4">

                                    <Card />
                                    <CardContent />
                                </div>

                                <div className="col-lg-6 mb-4">
                                    {/* Illustrations */}
                                    <Ilustration />
                                    <Aproach />
                                </div>
                            </div>

                        </div>
                    </div>

                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright © Your Website 2021</span>
                            </div>
                        </div>
                    </footer>

                </div>
            </div >
            <ScrollTopButton />
            <LogoutModal />
        </>
    )

};

export default DashBoard;