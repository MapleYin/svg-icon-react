import React from 'react'

export function HareCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.6359 17.5151C13.037 17.5151 13.5275 17.3107 14.2445 17.3107C14.9972 17.3107 15.249 17.5151 15.8804 17.5151C16.8138 17.5151 17.3189 17.1643 17.3189 16.6957C17.3189 15.6976 15.9472 14.977 14.2439 14.977C13.3649 14.977 12.9373 15.0551 12.4763 15.1639L11.8331 13.7549C11.1166 12.1273 9.99971 11.3308 8.58301 11.3308L7.88897 11.3308C7.66436 11.3308 7.5542 11.2331 7.5542 11.0448C7.5542 10.7484 8.06065 10.6508 8.5335 10.6508C10.3074 10.6508 11.5958 11.6357 12.368 13.5666L12.8054 14.664C13.2051 14.5307 13.6913 14.5189 14.1853 14.5189C14.555 14.5189 14.7201 14.5202 15.0892 14.5872C15.4596 14.3145 15.8788 13.9488 16.4096 13.3443C17.1016 14.0422 18.1385 14.4364 19.1048 14.4364C20.6889 14.4364 21.4129 14.0569 21.4129 12.6893C21.4129 10.53 19.6406 8.96797 18.0477 9.19913L16.511 6.89629C15.6971 5.67969 14.5314 5.10352 13.3572 5.10352C12.4518 5.10352 11.2744 5.60225 11.2744 6.27745C11.2744 6.77413 12.1665 7.30899 12.9918 7.75821L16.6752 9.81944C16.0428 10.4505 15.6792 10.6424 15.3953 10.6424C14.9915 10.6424 14.6694 10.5442 13.93 10.0971C12.0584 9.05215 10.5879 7.89053 8.60186 7.89053C6.52862 7.89053 4.99747 9.04082 4.16036 11.192C3.4795 11.2388 2.98214 11.6217 2.98214 12.2726C2.98214 13.0204 3.54786 13.4131 4.3543 13.4508C5.18575 14.6708 6.5836 15.2499 8.45538 15.2499C8.53487 15.2499 8.63184 15.2492 8.70997 15.2492L11.148 16.983C11.6528 17.3351 12.1679 17.5151 12.6359 17.5151ZM7.86202 17.708C8.96759 17.708 9.74405 17.5477 10.4299 17.1668L8.45704 15.6895C8.35938 15.6895 8.26173 15.6811 8.11661 15.6811C7.91583 15.6811 7.19981 15.6218 6.81143 15.6218C6.12921 15.6218 5.85733 15.9454 5.85733 16.3987C5.85733 17.1898 6.51915 17.708 7.86202 17.708ZM18.82 12.2594C18.5934 12.2594 18.4071 12.0341 18.4071 11.8172C18.4071 11.5717 18.6129 11.3834 18.8207 11.3834C19.076 11.3834 19.244 11.5612 19.244 11.797C19.244 12.0236 19.0383 12.2594 18.82 12.2594Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
