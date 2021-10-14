import React from 'react';
import Navbar from 'src/components/molecules/NavBar/Navbar';
import 'src/styles/_global.scss'
import 'src/styles/_varaibles.scss'
import { layout } from '/src/components/templates/MainLayout/mainLayout.module.scss'
import Footer from 'src/components/molecules/Footer/Footer';

const MainLayout = ({ children }) => (
  <div className={layout}>
    <Navbar />
    <div className='content'>{children}</div>
    <Footer />
  </div>
)

export default MainLayout;
