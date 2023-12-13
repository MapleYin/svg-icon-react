import React from 'react'

export function MusicNoteTv({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.2406 22.2033' className={className}>
      <path
        d='M2.30284 19.2977L26.5862 19.2977C28.0637 19.2977 28.8793 18.482 28.8793 17.0046L28.8793 2.29307C28.8793 0.815628 28.0637 0 26.5862 0L2.30284 0C0.816311 0 0 0.815628 0 2.29307L0 17.0046C0 18.482 0.816311 19.2977 2.30284 19.2977ZM2.3503 18.7952C1.17374 18.7952 0.511533 18.1519 0.511533 16.9753L0.511533 2.33213C0.511533 1.15489 1.17374 0.511533 2.3503 0.511533L26.5381 0.511533C27.7147 0.511533 28.3678 1.15489 28.3678 2.33213L28.3678 16.9753C28.3678 18.1519 27.7147 18.7952 26.5381 18.7952ZM8.54874 22.1845L20.3403 22.1845C20.4919 22.1845 20.6101 22.0936 20.6101 21.9329C20.6101 21.7807 20.4919 21.6807 20.3403 21.6807L8.54874 21.6807C8.38741 21.6807 8.26924 21.7807 8.26924 21.9329C8.26924 22.0936 8.38741 22.1845 8.54874 22.1845Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.5247 7.16046C18.0478 7.04122 18.1865 6.92403 18.1865 6.29288L18.1865 4.32783C18.1865 3.91426 18.0575 3.74483 17.4759 3.8836L14.4759 4.58994C13.934 4.71826 13.8434 4.82637 13.8434 5.47705L13.8434 11.1509C13.8434 11.6342 13.7945 11.7046 13.2422 11.8706L12.1541 12.174C11.168 12.4488 10.3674 13.0123 10.3674 14.0402C10.3674 14.9769 11.0487 15.6282 12.1248 15.6282C13.6549 15.6282 14.562 14.5333 14.562 12.983L14.562 8.31602C14.562 7.9213 14.6422 7.83135 14.8786 7.78184Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
