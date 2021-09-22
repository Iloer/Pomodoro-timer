import React from 'react';
import { IconComponent } from '../types';

export const CircleIcon: IconComponent = ({ className, size = '50' }) => (
  <svg 
  viewBox="0 0 30 6" 
  xmlns="http://www.w3.org/2000/svg"
  className={`icon ${className}`}
  fill="currentColor"
  width={size}
  height={size}
  >
    <circle cx="3" cy="3" r="3" fill="#C4C4C4"/>
    <circle cx="13" cy="3" r="3" fill="#C4C4C4"/>
    <circle cx="23" cy="3" r="3" fill="#C4C4C4"/>
  </svg>
);
