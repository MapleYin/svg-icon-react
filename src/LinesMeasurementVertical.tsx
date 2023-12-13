import React from 'react'

export function LinesMeasurementVertical({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.8044 22.3403' className={className}>
      <path
        d='M4.80723 0.616508C4.80723 1.02335 5.00782 1.23233 5.42374 1.23233L15.0193 1.23233C15.4353 1.23233 15.6359 1.02335 15.6359 0.616508C15.6359 0.199904 15.4353 0 15.0193 0L5.42374 0C5.00782 0 4.80723 0.199904 4.80723 0.616508ZM7.87139 5.9003C7.87139 6.30646 8.05313 6.49728 8.46905 6.49728L11.9831 6.49728C12.39 6.49728 12.5808 6.30646 12.5808 5.9003C12.5808 5.4837 12.39 5.27471 11.9831 5.27471L8.46905 5.27471C8.05313 5.27471 7.87139 5.4837 7.87139 5.9003ZM0 11.1652C0 11.5721 0.208986 11.7811 0.616508 11.7811L19.8266 11.7811C20.2432 11.7811 20.4431 11.5721 20.4431 11.1652C20.4431 10.7486 20.2432 10.5487 19.8266 10.5487L0.616508 10.5487C0.208986 10.5487 0 10.7486 0 11.1652ZM7.87139 16.4295C7.87139 16.837 8.05313 17.046 8.46905 17.046L11.9831 17.046C12.39 17.046 12.5808 16.837 12.5808 16.4295C12.5808 16.0143 12.39 15.8235 11.9831 15.8235L8.46905 15.8235C8.05313 15.8235 7.87139 16.0143 7.87139 16.4295ZM4.80723 21.714C4.80723 22.1208 5.00782 22.3305 5.42374 22.3305L15.0193 22.3305C15.4353 22.3305 15.6359 22.1208 15.6359 21.714C15.6359 21.2974 15.4353 21.0884 15.0193 21.0884L5.42374 21.0884C5.00782 21.0884 4.80723 21.2974 4.80723 21.714Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
