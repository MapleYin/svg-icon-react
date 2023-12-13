import React from 'react'

export function Rotate_3dFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M8.03486 15.7426C7.93086 14.6087 7.8834 13.4183 7.8834 12.1706C7.8834 6.28155 9.07246 1.71466 10.777 0.0806653C4.71924 0.77686 0 5.95469 0 12.1706C0 13.7775 3.06348 15.215 8.03486 15.7426ZM8.54571 15.7851C9.6628 15.8884 10.8741 15.9449 12.1608 15.9449C19.528 15.9449 24.3315 14.1843 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C10.1465 0 8.38585 4.80342 8.38585 12.1706C8.38585 13.4573 8.44239 14.668 8.54571 15.7851ZM8.08779 16.243C4.20684 15.8292 1.32237 14.8404 0.0806653 13.5726C0.737992 19.1488 5.19102 23.5928 10.7582 24.2508C9.49033 23.0091 8.50156 20.1239 8.08779 16.243ZM8.58819 16.305C9.11573 21.2673 10.5525 24.3308 12.1602 24.3315C18.3768 24.3315 23.5546 19.6115 24.2508 13.5537C22.6168 15.2674 18.0499 16.4565 12.1608 16.4565C10.9125 16.4565 9.72208 16.3999 8.58819 16.305Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
