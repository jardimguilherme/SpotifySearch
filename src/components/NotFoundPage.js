import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      Page not found. Head Back To <Link to="/dashboard">Home Page</Link>
    </React.Fragment>
  );
};
export default NotFoundPage;