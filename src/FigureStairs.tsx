import React from 'react'

export function FigureStairs({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3221 29.5217' className={className}>
      <path
        d='M8.69249 5.02871C10.0679 5.02871 11.1978 3.88975 11.1978 2.52412C11.1978 1.12988 10.0679 0 8.69249 0C7.30801 0 6.16905 1.12988 6.16905 2.52412C6.16905 3.88975 7.30801 5.02871 8.69249 5.02871ZM10.1767 23.8979C10.6189 24.0067 11.3749 23.849 11.5911 23.1132L13.2699 17.5823C13.4471 16.9839 13.173 16.3646 12.5529 16.1581L8.025 14.5958L8.58506 10.736C8.61436 10.5101 8.91846 10.4515 9.00772 10.6677L9.98907 12.5529C10.1955 12.9658 10.57 13.173 11.0018 13.173L15.628 13.173C16.2662 13.173 16.797 12.6813 16.797 12.0235C16.797 11.4042 16.2662 10.8741 15.628 10.8741L11.7194 10.8741L10.2255 7.89737C9.74356 6.93487 8.86963 6.24786 7.79903 6.04141L7.14131 5.91377C5.9626 5.69688 5.00987 5.95215 4.27334 6.41387L0.540528 8.72315C0.225293 8.94844 0 9.31251 0 9.73379L0 14.3412C0 14.9794 0.530078 15.5004 1.16826 15.5004C1.80645 15.5004 2.32813 14.9794 2.32813 14.3412L2.32813 10.3531L3.93858 9.35088C4.08574 9.27208 4.24336 9.36133 4.22383 9.5378L3.68399 13.8007C3.47754 15.4411 4.01739 16.5599 5.90332 16.9839L10.7061 18.1033L9.39063 22.4743C9.22325 23.0637 9.44014 23.683 10.1767 23.8979ZM1.68994 28.054C2.10283 28.3288 2.8582 28.3288 3.2711 27.7004L6.67959 22.6508C6.84561 22.4144 6.92442 22.2184 6.97325 21.9338L7.4461 18.5358L5.64737 18.1033C5.37256 18.035 5.11797 17.9562 4.90108 17.8774L4.65557 21.5125L1.37471 26.4429C1.02041 26.973 1.12988 27.6906 1.68994 28.054ZM5.28126 29.5106L9.56515 29.5106C9.71622 29.5106 9.84503 29.3818 9.84503 29.2216L9.84503 26.6328L13.812 26.6328C13.9624 26.6328 14.0996 26.5047 14.0996 26.3536L14.0996 23.7649L18.105 23.7649C18.2651 23.7649 18.3933 23.6367 18.3933 23.4759L18.3933 20.8962L21.6809 20.8962C21.8319 20.8962 21.9608 20.7681 21.9608 20.6079C21.9608 20.4478 21.8319 20.319 21.6809 20.319L18.105 20.319C17.9532 20.319 17.8167 20.4478 17.8167 20.6079L17.8167 23.1967L13.812 23.1967C13.6505 23.1967 13.5231 23.3255 13.5231 23.4759L13.5231 26.0653L9.56515 26.0653C9.40499 26.0653 9.27686 26.1935 9.27686 26.3536L9.27686 28.934L5.28126 28.934C5.1295 28.934 4.99298 29.0621 4.99298 29.2216C4.99298 29.3818 5.1295 29.5106 5.28126 29.5106Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
