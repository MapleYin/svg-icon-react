import React from 'react'

export default function ShieldLefthalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.6785 24.8701' className={className}>
      <path
        d='M0 15.4093C0 19.1701 2.09356 20.2422 8.846 24.5792C9.03975 24.7005 9.36202 24.8701 9.6586 24.8701C9.95586 24.8701 10.2781 24.7005 10.4803 24.5792C17.2983 20.3448 19.3172 19.1701 19.3172 15.4093L19.3172 5.97246C19.3172 4.571 19.0078 4.0959 17.6214 3.57266C15.1607 2.64453 13.0267 1.73525 10.5478 0.868457C10.2248 0.760351 9.96407 0.673144 9.6586 0.673144C9.36221 0.673144 9.09307 0.752637 8.77012 0.868457C6.30939 1.81357 4.15654 2.64522 1.6958 3.57266C0.318459 4.07637 0 4.571 0 5.97246ZM9.61846 24.3869L9.61846 1.18673C9.82442 1.17833 10.133 1.29005 10.4884 1.4213C11.6656 1.86036 16.6917 3.81495 17.8438 4.27716C18.5997 4.5878 18.807 4.97588 18.807 6.05928L18.807 15.456C18.807 19.1765 16.1498 20.1837 10.2925 24.1148C10.1523 24.2236 9.86622 24.3939 9.61846 24.3869Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
