import React from 'react'

export function LocationNorthFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.1852 24.369' className={className}>
      <path
        d='M0.520709 24.268C0.675692 24.268 0.846299 24.1998 0.9922 24.0455L8.81016 16.268C8.85059 16.2185 8.88126 16.1885 8.91192 16.1885C8.94327 16.1885 8.97393 16.2185 9.02344 16.268L16.8316 24.0455C16.9873 24.1998 17.1579 24.268 17.3038 24.268C17.5919 24.268 17.8238 24.0278 17.8238 23.7027C17.8238 23.6118 17.8129 23.5238 17.7747 23.4113L9.58097 0.607721C9.43829 0.241017 9.24767 0 8.91192 0C8.57618 0 8.38623 0.241017 8.25264 0.607721L0.0498068 23.4113C0.0200206 23.5238 0 23.6118 0 23.7027C0 24.0278 0.232619 24.268 0.520709 24.268Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
