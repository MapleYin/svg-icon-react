import React from 'react'

export function FigureGymnastics({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.9819 21.2897' className={className}>
      <path
        d='M12.3832 5.02871C13.7495 5.02871 14.8878 3.89043 14.8878 2.50459C14.8878 1.13828 13.7495 0 12.3832 0C10.9973 0 9.85906 1.13828 9.85906 2.50459C9.85906 3.89043 10.9973 5.02871 12.3832 5.02871ZM1.67713 15.878L7.45281 16.3691C8.48436 16.4667 8.6908 16.5358 9.68328 16.8015L16.7165 18.7851L23.0516 21.0937C23.5921 21.2813 24.3384 21.0937 24.5643 20.3962C24.7415 19.7873 24.4667 19.1192 23.8669 18.8939L17.5507 16.595C17.4523 16.5657 17.2459 16.4869 17.1678 16.4485L12.2562 14.67C12.9049 13.4223 13.7983 11.4094 14.0243 9.22842C14.0536 8.97315 14.2112 8.84483 14.4372 8.84483L22.8751 8.84483C23.5321 8.84483 24.0434 8.31475 24.0434 7.67657C24.0434 7.02725 23.5321 6.49785 22.8751 6.49785L13.6219 6.49785C12.0791 6.49785 11.9319 6.49717 10.2427 6.03545L1.49021 3.60967C0.861793 3.44229 0.223609 3.80566 0.0366949 4.425C-0.120922 5.04434 0.24314 5.70205 0.861793 5.87852L9.03397 8.12784C9.22156 8.17735 9.36873 8.35313 9.34852 8.58955C9.0744 10.652 8.07215 12.646 7.55115 13.5311L2.93465 13.5311L2.93465 8.84483C2.93465 8.20596 2.39412 7.67657 1.75593 7.67657C1.11775 7.67657 0.59607 8.20596 0.59607 8.84483L0.59607 14.6993C0.59607 15.387 0.891774 15.8188 1.67713 15.878Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
