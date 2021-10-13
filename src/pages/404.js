import React from 'react';
import { Link } from 'gatsby';
import MainLayout from 'src/components/templates/MainLayout/MainLayout';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div>
        <h2>404</h2>
        <p>Sorry, that page doesn't exist (yet)!</p>
        <Link to='/'>Go back Home</Link>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
