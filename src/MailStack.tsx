import React from 'react'

export default function MailStack({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.4559 30.2658' className={className}>
      <path
        d='M23.4966 2.98614L7.5986 2.98614C7.70894 2.65711 8.01192 2.43427 8.38926 2.43427L22.7143 2.43427C23.0845 2.43427 23.3864 2.65711 23.4966 2.98614Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.8186 5.65934C25.7054 5.64757 25.587 5.64483 25.4672 5.64483L5.62735 5.64483C5.51063 5.64483 5.39533 5.64739 5.28516 5.65879C5.38226 5.31848 5.66892 5.10996 6.06192 5.10996L25.0326 5.10996C25.4331 5.10996 25.7213 5.31871 25.8186 5.65934Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.62735 27.8204L25.4672 27.8204C27.5417 27.8204 28.6484 26.6774 28.6484 24.6321L28.6484 11.2785C28.6484 9.23331 27.5417 8.09092 25.4672 8.09092L5.62735 8.09092C3.55215 8.09092 2.44609 9.20538 2.44609 11.2785L2.44609 24.6321C2.44609 26.7053 3.55215 27.8204 5.62735 27.8204ZM5.66572 27.3089C3.88145 27.3089 2.95762 26.3864 2.95762 24.6078L2.95762 11.3028C2.95762 9.52492 3.88145 8.60246 5.66572 8.60246L25.4379 8.60246C27.1481 8.60246 28.1369 9.52492 28.1369 11.3028L28.1369 24.6078C28.1369 26.3864 27.1481 27.3089 25.4379 27.3089ZM6.90938 13.8011L16.1597 13.8011C16.3071 13.8011 16.4303 13.6863 16.4303 13.5396C16.4303 13.383 16.3071 13.269 16.1597 13.269L6.90938 13.269C6.76963 13.269 6.63877 13.383 6.63877 13.5396C6.63877 13.6863 6.76963 13.8011 6.90938 13.8011ZM6.90938 16.6598L13.0273 16.6598C13.1741 16.6598 13.298 16.5373 13.298 16.3905C13.298 16.2424 13.1741 16.1192 13.0273 16.1192L6.90938 16.1192C6.76963 16.1192 6.63877 16.2424 6.63877 16.3905C6.63877 16.5373 6.76963 16.6598 6.90938 16.6598ZM21.4591 17.7936C23.1179 17.7936 24.4732 16.4382 24.4732 14.7606C24.4732 13.0822 23.1179 11.7359 21.4591 11.7359C19.7814 11.7359 18.4345 13.0822 18.4345 14.7606C18.4345 16.4382 19.7814 17.7936 21.4591 17.7936Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
