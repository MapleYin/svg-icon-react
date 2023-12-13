import React from 'react'

export function StaroflifeShield({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.6785 24.8701' className={className}>
      <path
        d='M9.6586 24.8701C9.95586 24.8701 10.2781 24.7005 10.4803 24.5792C17.2983 20.3448 19.3172 19.1701 19.3172 15.4093L19.3172 5.97246C19.3172 4.571 19.0078 4.0959 17.6214 3.57266C15.1607 2.64453 13.0267 1.73525 10.5478 0.868457C10.2248 0.760351 9.96407 0.673144 9.6586 0.673144C9.36221 0.673144 9.09307 0.752637 8.77012 0.868457C6.30939 1.81357 4.15654 2.64522 1.6958 3.57266C0.318459 4.07637 0 4.571 0 5.97246L0 15.4093C0 19.1701 2.09356 20.2422 8.846 24.5792C9.03975 24.7005 9.36202 24.8701 9.6586 24.8701ZM9.6586 24.3812C9.43536 24.3812 9.15626 24.2109 9.03379 24.1148C3.13946 20.2395 0.510166 19.1765 0.510166 15.456L0.510166 6.05928C0.510166 4.97588 0.717489 4.5794 1.47413 4.27716C2.63253 3.81924 7.65225 1.86036 8.82882 1.4213C9.16241 1.26983 9.47579 1.18468 9.6586 1.18468C9.84141 1.18468 10.1457 1.288 10.4884 1.4213C11.6656 1.86036 16.6917 3.81495 17.8438 4.27716C18.5997 4.5878 18.807 4.97588 18.807 6.05928L18.807 15.456C18.807 19.1765 16.1498 20.1837 10.2925 24.1148C10.17 24.2109 9.89092 24.3812 9.6586 24.3812Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.28809 9.04873C3.98965 9.64561 4.05029 9.87911 4.61651 10.1769L8.00195 12.0157L4.60606 13.9899C4.03985 14.2995 3.9792 14.5323 4.30762 15.1285L4.33692 15.1774C4.64649 15.8106 4.86182 15.8719 5.46504 15.4876L8.76123 13.6097L8.76123 17.3935C8.76123 18.0594 8.93409 18.2225 9.60206 18.2225L9.69903 18.2225C10.3747 18.2225 10.5385 18.0594 10.5385 17.3935L10.5385 13.6097L13.8438 15.4876C14.4393 15.8642 14.6546 15.8112 14.9628 15.1774L15.0012 15.1285C15.3087 14.5316 15.2481 14.3261 14.7021 13.9899L11.3068 12.0157L14.6832 10.1769C15.2487 9.86026 15.3101 9.62676 15.0116 9.04873L14.9628 8.97061C14.6644 8.36328 14.4581 8.30195 13.8424 8.66035L10.5385 10.5383L10.5385 6.75381C10.5385 6.10811 10.3747 5.94502 9.69903 5.94502L9.60206 5.94502C8.93409 5.94502 8.76123 6.10811 8.76123 6.75381L8.76123 10.5383L5.45733 8.66035C4.85977 8.28447 4.65352 8.32695 4.33692 8.97061Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
