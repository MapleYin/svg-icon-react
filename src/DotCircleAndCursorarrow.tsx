import React from 'react'

export function DotCircleAndCursorarrow({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.8652 38.6886' className={className}>
      <path
        d='M29.7238 19.3394C29.7238 21.1414 29.3269 22.855 28.6053 24.391L28.249 23.9888C28.8774 22.5654 29.2236 20.9917 29.2236 19.3394C29.2236 12.904 23.9893 7.66902 17.5629 7.66902C11.1359 7.66902 5.89322 12.904 5.89322 19.3394C5.89322 25.7651 11.1366 31.0007 17.5629 31.0007C19.0831 31.0007 20.5367 30.7077 21.8658 30.1667L21.8742 30.6922C20.537 31.2184 19.0814 31.5003 17.5629 31.5003C10.8634 31.5003 5.40209 26.0292 5.40209 19.3394C5.40209 12.6399 10.8718 7.16881 17.5629 7.16881C24.2541 7.16881 29.7238 12.6399 29.7238 19.3394Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M21.2744 19.3569C21.2744 21.3671 19.5815 23.0502 17.5636 23.0502C15.5451 23.0502 13.8431 21.3671 13.8431 19.3569C13.8431 17.3209 15.5269 15.6378 17.5636 15.6378C19.5815 15.6378 21.2744 17.3209 21.2744 19.3569Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M22.8503 29.9156C22.8497 30.1923 23.1681 30.3115 23.3521 30.1191L25.4233 27.9921L27.8944 34.0239C27.955 34.1752 28.1258 34.2372 28.296 34.1765L28.9844 33.8992C29.1441 33.8385 29.2047 33.6761 29.1427 33.5242L26.6473 27.6633L29.8043 27.8136C30.0614 27.8311 30.1945 27.5195 30.0371 27.3328L23.1335 19.5438C22.9495 19.3507 22.5904 19.4895 22.5988 19.7648Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
