import React from 'react';
import Navbar from '@/components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="z-50">
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
