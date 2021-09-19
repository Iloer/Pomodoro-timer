import React from 'react';

export type IconComponentProps = {
  className?: string;
  size?: number;
  variant?: 'normal' | 'invert';
};

export type IconComponent = React.ComponentType<IconComponentProps>;
