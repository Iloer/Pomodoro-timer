import React from 'react';
import { IconComponent } from '../types';

export const StatisticIcon: IconComponent = ({ className, size = '18' }) => (
  <svg
    className={`${className} 'icon'`}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z"/>
  </svg>
);
