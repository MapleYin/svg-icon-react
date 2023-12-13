import React from 'react'

export function FigureSoftball({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.9122 27.2229' className={className}>
      <path
        d='M8.15264 10.0483C9.53848 10.0483 10.6579 8.91006 10.6579 7.52491C10.6579 6.13907 9.53848 5.01963 8.15264 5.01963C6.7584 5.01963 5.6292 6.13907 5.6292 7.52491C5.6292 8.91006 6.7584 10.0483 8.15264 10.0483ZM2.04287 25.2937L8.94844 27.0324C9.92071 27.2689 10.57 26.5519 10.4515 25.648L9.8126 21.2379L15.2835 21.2379L19.5568 25.5789C19.999 26.0302 20.7544 26.0302 21.198 25.5789C21.6785 25.1367 21.659 24.3709 21.198 23.9092L16.6791 19.3715C16.3646 19.0569 16.2558 18.9593 15.7264 18.9098L10.766 18.4181L9.51827 14.6364C9.42969 14.3707 9.63614 14.0966 9.92071 14.1559L18.9773 15.9818C19.5666 16.09 20.225 15.7663 20.3338 15.0689C20.4503 14.4307 20.0681 13.8218 19.439 13.6941L6.92442 11.2084C5.82452 10.9831 5.23516 10.8255 4.73506 10.3442L2.32813 7.95684L2.32813 2.61289C2.32813 1.95586 1.79805 1.44463 1.17871 1.44463C0.510547 1.44463 0 1.95586 0 2.61289L0 8.24209C0 8.72334 0.0495118 9.00723 0.402442 9.342L3.09395 12.0237C3.65332 12.5838 3.71328 12.7896 3.90928 13.3496L7.54375 24.2726L2.60293 23.0248C1.97451 22.8679 1.35518 23.2508 1.20801 23.889C1.06992 24.4985 1.41514 25.1367 2.04287 25.2937ZM4.65645 2.86865C5.42295 2.86865 6.09043 2.23047 6.09043 1.43399C6.09043 0.638868 5.42295 0 4.65645 0C3.84043 0 3.22178 0.638868 3.22178 1.43399C3.22178 2.23047 3.84043 2.86865 4.65645 2.86865Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
