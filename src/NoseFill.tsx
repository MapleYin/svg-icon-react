import React from 'react'

export function NoseFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.1932 22.7723' className={className}>
      <path
        d='M0 18.0219C0 20.8004 1.8669 22.6248 4.81143 22.6248C5.85499 22.6248 6.83838 22.283 7.72588 21.755C7.12383 21.3183 6.53565 20.7601 5.94629 20.0962C5.74483 20.3335 5.39122 20.5045 5.09346 20.5045C4.52695 20.5045 4.13603 20.1567 4.13603 19.6564C4.13603 19.1678 4.50264 18.7948 5.03301 18.7948C5.52022 18.7948 5.79053 19.0701 6.25704 19.5771C8.08946 21.5169 9.49385 22.42 11.9208 22.42C14.338 22.42 15.7424 21.5169 17.5748 19.5771C18.0504 19.0701 18.3116 18.7948 18.7988 18.7948C19.3292 18.7948 19.6958 19.1678 19.6958 19.6564C19.6958 20.1567 19.3056 20.5045 18.7391 20.5045C18.4406 20.5045 18.087 20.3335 17.8862 20.0962C17.2969 20.7601 16.7087 21.3183 16.1066 21.755C16.9935 22.283 17.9775 22.6248 19.0211 22.6248C21.9656 22.6248 23.8318 20.8004 23.8318 18.0219C23.8318 15.2795 21.8196 13.2807 18.6914 13.0849C17.5965 11.256 16.1449 5.96612 15.4223 3.11495C14.9013 1.07246 13.6842 0 11.9208 0C10.1477 0 8.93125 1.07246 8.40957 3.11495C7.68691 5.96612 6.23536 11.256 5.14112 13.0849C2.01289 13.2807 0 15.2795 0 18.0219Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
