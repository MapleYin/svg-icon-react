import React from 'react'

export default function N44CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM8.75068 7.43145L5.47871 13.824C5.40146 14.0092 5.35127 14.1478 5.35127 14.3093C5.35127 14.5662 5.52324 14.7473 5.82695 14.7473L9.23369 14.7473L9.23369 17.0211C9.23369 17.2081 9.34483 17.3607 9.55244 17.3607C9.71875 17.3607 9.85235 17.1774 9.85235 17.0211L9.85235 14.7473L10.7437 14.7473C10.9288 14.7473 11.0438 14.6457 11.0438 14.4549C11.0438 14.2836 10.8932 14.173 10.7437 14.173L9.85235 14.173L9.85235 7.43897C9.85235 7.01827 9.57862 6.92598 9.37363 6.92598C9.06328 6.92598 8.90947 7.12725 8.75068 7.43145ZM15.8762 7.43145L12.6133 13.824C12.5276 14.0092 12.4768 14.1478 12.4768 14.3093C12.4768 14.5662 12.6494 14.7473 12.9615 14.7473L16.3599 14.7473L16.3599 17.0211C16.3599 17.2081 16.4794 17.3607 16.6786 17.3607C16.8442 17.3607 16.9869 17.1774 16.9869 17.0211L16.9869 14.7473L17.8698 14.7473C18.055 14.7473 18.1699 14.6457 18.1699 14.4549C18.1699 14.2836 18.0187 14.173 17.8698 14.173L16.9869 14.173L16.9869 7.43897C16.9869 7.01827 16.7041 6.92598 16.5082 6.92598C16.1888 6.92598 16.0356 7.12725 15.8762 7.43145ZM9.23574 14.1659L5.96807 14.1659L5.96807 14.143L9.1876 7.77462L9.23574 7.77462ZM16.3619 14.1659L13.1026 14.1659L13.1026 14.143L16.3131 7.77462L16.3619 7.77462Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}