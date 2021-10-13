import React from 'react';
import Navbar from 'src/components/molecules/NavBar/Navbar';
import 'src/styles/_global.scss'
import '/src/styles/_varaibles.scss'

const MainLayout = ({ children }) => (
  <div className='layout'>
    <Navbar />
    <div className='content'>{children}</div>
    <footer>
      <p>Copyright 2021 Web Warrior</p>
    </footer>
  </div>
)

export default MainLayout;
