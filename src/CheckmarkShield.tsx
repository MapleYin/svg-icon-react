import React from 'react'

export default function CheckmarkShield({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.6248 24.8701' className={className}>
      <path
        d='M9.6586 24.8701C9.95586 24.8701 10.2781 24.7005 10.4803 24.5792C17.2983 20.3448 19.3172 19.1701 19.3172 15.4093L19.3172 5.97246C19.3172 4.571 19.0078 4.0959 17.6214 3.57266C15.1607 2.64453 13.0267 1.73525 10.5478 0.868457C10.2248 0.760351 9.96407 0.673144 9.6586 0.673144C9.36221 0.673144 9.09307 0.752637 8.77012 0.868457C6.30939 1.81357 4.15654 2.64522 1.6958 3.57266C0.318459 4.07637 0 4.571 0 5.97246L0 15.4093C0 19.1701 2.09356 20.2422 8.846 24.5792C9.03975 24.7005 9.36202 24.8701 9.6586 24.8701ZM9.6586 24.3812C9.43536 24.3812 9.15626 24.2109 9.03379 24.1148C3.13946 20.2395 0.510166 19.1765 0.510166 15.456L0.510166 6.05928C0.510166 4.97588 0.717489 4.5794 1.47413 4.27716C2.63253 3.81924 7.65225 1.86036 8.82882 1.4213C9.16241 1.26983 9.47579 1.18468 9.6586 1.18468C9.84141 1.18468 10.1457 1.288 10.4884 1.4213C11.6656 1.86036 16.6917 3.81495 17.8438 4.27716C18.5997 4.5878 18.807 4.97588 18.807 6.05928L18.807 15.456C18.807 19.1765 16.1498 20.1837 10.2925 24.1148C10.17 24.2109 9.89092 24.3812 9.6586 24.3812Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.32842 18.097C8.42569 18.097 8.50069 18.0483 8.57931 17.9804L15.5018 7.2878C15.5281 7.23712 15.5461 7.16554 15.5461 7.12257C15.5461 6.99825 15.4168 6.85762 15.2945 6.85762C15.202 6.85762 15.1012 6.92373 15.0421 6.99171L8.31592 17.3785L4.4631 12.9867C4.4006 12.9181 4.32901 12.8749 4.217 12.8749C4.09337 12.8749 3.95909 12.9735 3.95909 13.1342C3.95909 13.2142 4.00225 13.2851 4.04883 13.3721L8.07344 17.9804C8.15615 18.0686 8.21231 18.097 8.32842 18.097Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
