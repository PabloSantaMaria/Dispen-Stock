import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleButton, ...props}) => (
  <button className={`${isGoogleButton ? 'isGoogleButton' : ''} CustomButton`} {...props}>
    {children}
  </button>
)

export default CustomButton;
