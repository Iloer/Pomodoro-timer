import React from 'react';
import { IconComponent } from '../types';

export const PlusIcon: IconComponent = ({ className, size = '50' }) => (
  <svg 
  viewBox="0 0 50 50" 
  xmlns="http://www.w3.org/2000/svg"
  className={`icon ${className}`}
  fill="currentColor"
  width={size}
  height={size}
  >
    <circle cx="25" cy="25" r="25"/>
    <path d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z" fill="white"/>
  </svg>
);
