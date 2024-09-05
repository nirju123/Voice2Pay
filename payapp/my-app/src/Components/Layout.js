import React from 'react';
import Navbar1 from './Navbar1.js';
import Navbar2 from './Navbar2.js';

export const Layout1 = ({ children}) => {
  return (
    <>
      <Navbar1 title="TouchType"/>
      {children}
    </>
  );
};

export const Layout2 = ({ children}) => {
  return (
    <>
      <Navbar2 title="TouchType"/>
      {children}
    </>
  );
};