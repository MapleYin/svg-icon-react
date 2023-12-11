import React from 'react'

export default function FigureJumprope({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.8136 30.9334' className={className}>
      <path
        d='M7.72159 7.85118C9.09561 7.85118 10.2241 6.71427 10.2241 5.32911C10.2241 3.95509 9.09561 2.81817 7.72159 2.81817C6.32735 2.81817 5.19952 3.95509 5.19952 5.32911C5.19952 6.71427 6.32735 7.85118 7.72159 7.85118ZM6.06094 30.9153C6.65098 30.9153 7.18106 30.3852 7.18106 29.7951L7.18106 23.7837L7.72159 19.3046L8.26211 23.7837L8.26211 29.7951C8.26211 30.3852 8.79151 30.9153 9.38155 30.9153C9.98135 30.9153 10.4919 30.3852 10.4919 29.7951L10.4919 13.7458C10.4919 13.6182 10.669 13.5889 10.7367 13.7158C12.1414 16.3181 12.9665 18.628 13.3013 19.6387C13.507 20.2092 14.1355 20.5328 14.706 20.3361C15.1677 20.1792 15.4523 19.7475 15.4523 19.2858C15.4523 19.1588 15.4425 19.0493 15.4118 18.9321C15.3246 18.6957 13.3996 12.95 11.0024 10.2383C10.5107 9.66847 9.76446 9.31554 8.94981 9.31554L6.49336 9.31554C5.67871 9.31554 4.93174 9.66847 4.43096 10.2383C2.04356 12.95 0.109473 18.6957 0.0495118 18.9321C0.0195312 19.0493 0 19.1686 0 19.3046C0 19.7475 0.275488 20.1792 0.737208 20.3361C1.30703 20.5328 1.92637 20.2092 2.1419 19.6387C2.48574 18.628 3.30108 16.3181 4.70576 13.7158C4.77412 13.5889 4.94219 13.6182 4.94219 13.7458L4.94219 29.7951C4.94219 30.3852 5.45274 30.9153 6.06094 30.9153ZM7.72159 0.576568C12.2249 0.576568 14.8848 4.35118 14.8848 11.0135L14.8848 19.2864L15.4523 19.2864L15.4523 11.0135C15.4523 3.8753 12.6079 0 7.72159 0C2.84502 0 0.000683665 3.8753 0.000683665 11.0135L0.000683665 19.2962L0.568853 19.2962L0.568853 11.0135C0.568853 4.35118 3.21895 0.576568 7.72159 0.576568Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
