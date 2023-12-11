import React from 'react'

export default function Mustache({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.6914 12.9139' className={className}>
      <path
        d='M9.06377 12.9139C12.6277 12.9139 15.5749 11.6448 17.1699 9.40402C18.7552 11.6448 21.7023 12.9139 25.2754 12.9139C30.3488 12.9139 34.3301 9.89669 34.3301 6.13545C34.3301 5.17666 33.8365 4.51728 32.9239 4.51728C32.6627 4.51728 32.3225 4.65947 32.022 4.80625C31.7251 4.96758 30.4082 5.79189 29.2598 5.79189C25.4238 5.79189 24.7738 1.30791 20.1875 1.30791C18.9611 1.30791 17.9721 1.67627 17.1699 2.4291C16.3671 1.67627 15.3689 1.30791 14.1426 1.30791C9.56533 1.30791 8.90625 5.79189 5.07032 5.79189C3.93096 5.79189 2.61407 4.96758 2.30811 4.80625C2.01671 4.65947 1.67647 4.51728 1.40616 4.51728C0.493556 4.51728 0 5.17666 0 6.13545C0 9.89669 3.98125 12.9139 9.06377 12.9139ZM9.06377 12.4023C4.34161 12.4023 0.511533 9.646 0.511533 6.05166C0.511533 5.03663 1.31221 4.74054 2.03272 5.20899C2.68409 5.60899 3.90411 6.29434 5.07032 6.29434C6.99102 6.29434 8.24493 5.23848 9.48516 4.17403C10.7735 3.08028 12.0789 1.81104 14.1426 1.81104C15.3347 1.81104 16.3539 2.23644 17.0266 3.02316C17.1011 3.08976 17.2192 3.09044 17.2854 3.02316C17.9846 2.23644 19.0045 1.81104 20.1875 1.81104C22.2603 1.81104 23.5656 3.08028 24.854 4.17403C26.0852 5.23848 27.3391 6.29434 29.2598 6.29434C30.426 6.29434 31.6558 5.61739 32.2994 5.20626C33.0206 4.7462 33.8276 5.05069 33.8276 6.05166C33.8276 9.646 29.9885 12.4023 25.2754 12.4023C21.6448 12.4023 18.7604 11.064 17.3453 8.78037C17.2604 8.64267 17.0697 8.65107 16.9848 8.78037C15.5704 11.064 12.6859 12.4023 9.06377 12.4023Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
