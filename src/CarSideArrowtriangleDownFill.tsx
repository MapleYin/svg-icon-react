import React from 'react'

export function CarSideArrowtriangleDownFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.6881 27.2527' className={className}>
      <path
        d='M2.71973 19.9215L4.43467 19.9215C4.38379 19.6608 4.35313 19.3986 4.35313 19.117C4.35313 16.5963 6.35352 14.5959 8.88331 14.5959C11.404 14.5959 13.4044 16.5963 13.4044 19.117C13.4044 19.3986 13.3737 19.6608 13.3319 19.9215L28.779 19.9215C28.7372 19.6608 28.7066 19.3986 28.7066 19.117C28.7066 16.5963 30.7069 14.5959 33.2277 14.5959C35.7581 14.5959 37.7585 16.5963 37.7585 19.117C37.7585 19.3986 37.7272 19.6608 37.6854 19.9215L39.1067 19.9215C40.5362 19.9215 41.3268 19.0918 41.3268 17.6226L41.3268 12.6373C41.3268 11.0814 40.5871 10.1676 39.2107 9.83047L36.5676 9.18682C35.1568 7.41807 32.5902 4.52451 27.5234 4.52451L24.7026 4.52451C19.8111 4.52451 18.0356 4.9583 15.1703 6.74453L10.1753 9.87295L4.26602 10.6033C1.52627 10.9311 0 12.4825 0 14.8995L0 17.1236C0 19.1792 0.731155 19.9215 2.71973 19.9215ZM8.88331 22.7257C10.9064 22.7257 12.492 21.1401 12.492 19.117C12.492 17.0946 10.9057 15.5083 8.88331 15.5083C6.86095 15.5083 5.27462 17.0946 5.27462 19.117C5.27462 21.1394 6.86095 22.7257 8.88331 22.7257ZM33.2277 22.7257C35.2591 22.7257 36.8363 21.1394 36.8363 19.117C36.8363 17.0946 35.2591 15.5083 33.2277 15.5083C31.2067 15.5083 29.628 17.0953 29.628 19.117C29.628 21.1394 31.206 22.7257 33.2277 22.7257Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.0668 21.8551C17.6779 21.8551 17.5791 22.2176 17.7379 22.4816L20.4904 27.0282C20.6849 27.3369 21.101 27.3181 21.2773 27.0282L24.0675 22.4634C24.2263 22.2085 24.1254 21.8551 23.7372 21.8551Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
