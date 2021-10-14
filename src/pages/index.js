import React from 'react';
import MainLayout from 'src/components/templates/MainLayout/MainLayout';
import { Link } from 'gatsby';
import { btn } from 'src/components/templates/MainLayout/mainLayout.module.scss';

const Main = () => {

  return(
    <MainLayout>
      <h2>Designs</h2>
      <h3>Develop and Deploy</h3>
      <p>UX designer & web developer based in Poland</p>
      <Link className={btn} to={'/projects'}>My Portfolio Projects</Link>
    </MainLayout>
  );
}

export default Main;
