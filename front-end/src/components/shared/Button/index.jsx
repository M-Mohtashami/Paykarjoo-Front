import React from 'react';

const Button = ({ icon, title, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {icon && icon}
      {title && <snan>{title}</snan>}
    </button>
  );
};

export default Button;
