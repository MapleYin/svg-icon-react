import React from 'react'

export function ExclamationmarkBrakesignal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.6321 23.2182' className={className}>
      <path
        d='M0 11.6042C0 15.3399 1.31699 18.782 3.48633 21.4574C3.59199 21.5797 3.72178 21.5922 3.85177 21.4865C3.96993 21.3997 3.98243 21.2545 3.87042 21.1245C1.76222 18.5353 0.500206 15.21 0.500206 11.6042C0.500206 7.98799 1.76222 4.66407 3.87042 2.06436C3.98243 1.95391 3.94337 1.79961 3.85177 1.71211C3.74063 1.62461 3.57315 1.63779 3.48633 1.75098C1.31699 4.44385 0 7.85869 0 11.6042ZM31.2707 11.6042C31.2707 7.85869 29.9537 4.44385 27.7837 1.75098C27.6969 1.63779 27.5301 1.62461 27.4183 1.71211C27.3274 1.79961 27.2974 1.95391 27.4003 2.06436C29.5085 4.66407 30.7789 7.98799 30.7789 11.6042C30.7789 15.21 29.5085 18.5353 27.4003 21.1245C27.2974 21.2545 27.3092 21.3997 27.4183 21.4865C27.5483 21.5922 27.6787 21.5797 27.7837 21.4574C29.9537 18.782 31.2707 15.3399 31.2707 11.6042Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.6396 23.1986C22.0084 23.1986 27.2347 17.9724 27.2347 11.6042C27.2347 5.22627 22.0084 0 15.6389 0C9.27003 0 4.03605 5.23467 4.03605 11.6042C4.03605 17.9724 9.26163 23.1986 15.6396 23.1986ZM15.6396 22.6991C9.5173 22.6991 4.53625 17.7271 4.53625 11.6042C4.53625 5.48126 9.51662 0.499522 15.6389 0.499522C21.7611 0.499522 26.7436 5.48126 26.7352 11.6042C26.7358 17.7265 21.7625 22.6991 15.6396 22.6991Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.6382 13.8335C15.8204 13.8335 15.9695 13.6572 15.9701 13.3989L16.0356 6.47198C16.0362 6.22344 15.8874 6.05781 15.6375 6.05781C15.3869 6.05781 15.2401 6.22275 15.2317 6.48037L15.3056 13.3989C15.3063 13.6565 15.4462 13.8335 15.6382 13.8335ZM15.6382 17.3177C16.0577 17.3177 16.388 16.9531 16.388 16.5615C16.388 16.1602 16.0584 15.8054 15.6382 15.8054C15.2096 15.8054 14.8891 16.1518 14.8891 16.5615C14.8891 16.9524 15.2103 17.3177 15.6382 17.3177Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
