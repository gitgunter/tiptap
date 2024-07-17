import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ArrowUp01Icon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    {...props}
  >
    <path
      d='M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15'
      stroke='currentColor'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

export default ArrowUp01Icon;
