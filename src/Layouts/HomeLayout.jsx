import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/Layout-component/LeftNavbar';
import RightNav from '../Components/Layout-component/RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-display'>
            <Header></Header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
      
            <nav className='w-11/12 mx-auto py-2'>
                 <Navbar></Navbar>
            </nav>
            <h2>Home Layout</h2>

            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
            <aside className='left col-span-3'>
                <LeftNavbar></LeftNavbar>
            </aside>
            <section className='col-span-6'>
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3'>
                <RightNav></RightNav>
            </aside>

            </main>

            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;
