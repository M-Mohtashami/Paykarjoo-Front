import React from 'react';
import Navbar from '@/components/Navbar';

const MainLayout = ({ children }) => {
  const { props } = children;
  console.log(props.test);
  return (
    <div className="bg-secondary">
      <div className="z-50">
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
