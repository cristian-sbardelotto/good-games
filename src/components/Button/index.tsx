import React from 'react';

import './index.scss';

interface ButtonProps {
  text: string;
  image: string;
}

const Button = ({ text, image }: ButtonProps) => {
  return (
    <div className='secondary-button'>
      <img src={image} alt={text} />
      <span>{text}</span>
    </div>
  );
};

export default Button;
