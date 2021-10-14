import React from 'react';
import MainLayout from 'src/components/templates/MainLayout/MainLayout';
import { portfolio } from 'src/styles/portfolio.module.scss';

const ProjectsPage = () => (
  <MainLayout>
    <div className={portfolio}>
      <h2>Portfolio</h2>
      <h3>Projects & Websites I've created</h3>
    </div>
  </MainLayout>
)

export default ProjectsPage;
