import React from 'react'

export default function SignpostRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.2373 24.1949' className={className}>
      <path
        d='M2.19354 13.0348L17.7177 13.0243C18.5285 13.0243 19 12.7845 19.4699 12.3718L22.5346 9.61007C23.4597 8.79034 23.4896 7.64024 22.5157 6.76192L19.4699 4.01905C19 3.60635 18.5285 3.3749 17.7184 3.3749L2.19354 3.3749C1.00838 3.3749 0.281818 4.07286 0.281818 5.23712L0.281818 11.1537C0.281818 12.318 1.00838 13.0348 2.19354 13.0348ZM2.19628 12.5135C1.31679 12.5135 0.787687 12.0019 0.787687 11.1594L0.787687 5.23145C0.787687 4.38898 1.31679 3.88644 2.19628 3.88644L17.7052 3.88644C18.3317 3.88644 18.6269 3.9757 19.0645 4.36583L22.347 7.2965C22.8808 7.75568 22.8808 8.56954 22.31 9.0839L19.0639 12.025C18.6451 12.4151 18.3317 12.5135 17.7045 12.5135ZM10.7783 3.55734L11.2898 3.55734L11.2898 0.251567C11.2898 0.118166 11.1717 0 11.0299 0C10.8874 0 10.7783 0.118166 10.7783 0.251567ZM10.7783 12.7361L10.7783 23.8305L11.2898 23.8305L11.2898 12.7361ZM6.47791 23.9245C6.47791 24.0663 6.59608 24.1754 6.73787 24.1754L15.34 24.1754C15.4825 24.1754 15.6007 24.0663 15.6007 23.9245C15.6007 23.782 15.4825 23.6639 15.34 23.6639L6.73787 23.6639C6.59608 23.6639 6.47791 23.782 6.47791 23.9245Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
