import React from 'react';

const Button = ({ icon, title, className }) => {
  return (
    <button className={className}>
      {icon && icon}
      {title && <snan>{title}</snan>}
    </button>
  );
};

export default Button;
