import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ArrowDown01Icon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    {...props}
  >
    <path
      d='M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ArrowDown01Icon;
