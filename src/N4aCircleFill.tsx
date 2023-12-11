import React from 'react'

export default function N4aCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM14.8016 7.38897L12.1727 16.954C12.1608 16.9901 12.149 17.052 12.149 17.0888C12.149 17.2669 12.2883 17.3789 12.4671 17.3789C12.6704 17.3789 12.7447 17.2724 12.7788 17.1188L13.5759 14.1534L16.9742 14.1534L17.7629 17.1194C17.8074 17.2681 17.8942 17.3789 18.0767 17.3789C18.2527 17.3789 18.3836 17.2746 18.3836 17.0888C18.3836 17.029 18.3641 16.937 18.3516 16.8981L15.7408 7.38897C15.6559 7.10293 15.5154 6.95391 15.288 6.95391C15.0417 6.95391 14.8956 7.09659 14.8016 7.38897ZM8.57304 7.43145L5.31015 13.824C5.22451 14.0092 5.17431 14.1478 5.17431 14.3093C5.17431 14.5662 5.34629 14.7473 5.65 14.7473L9.05605 14.7473L9.05605 17.0211C9.05605 17.2081 9.16787 17.3607 9.37549 17.3607C9.54112 17.3607 9.68379 17.1774 9.68379 17.0211L9.68379 14.7473L10.5667 14.7473C10.7512 14.7473 10.8661 14.6457 10.8661 14.4549C10.8661 14.2836 10.7162 14.173 10.5667 14.173L9.68379 14.173L9.68379 7.43897C9.68379 7.01827 9.40166 6.92598 9.20508 6.92598C8.88632 6.92598 8.73183 7.12725 8.57304 7.43145ZM9.05879 14.1659L5.79951 14.1659L5.79951 14.143L9.00996 7.77462L9.05879 7.77462ZM16.8168 13.5839L13.7333 13.5839L15.2573 7.89689L15.2998 7.89689Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}