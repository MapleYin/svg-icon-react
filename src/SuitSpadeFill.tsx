import React from 'react'

export function SuitSpadeFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.7705 24.2524' className={className}>
      <path
        d='M0 13.9231C0 16.9483 1.9834 18.9233 5.00098 18.9233C6.90977 18.9233 8.45391 18.0908 9.22334 16.7727L9.35938 16.7727C9.00108 18.6081 7.59746 20.0228 6.29307 21.2733C5.56924 21.9538 5.95127 23.0145 7.0212 23.0145L15.388 23.0145C16.4579 23.0145 16.8399 21.9538 16.1161 21.2733C14.8117 20.0228 13.4081 18.6081 13.0491 16.7727L13.1768 16.7727C13.9553 18.0908 15.4994 18.9233 17.3991 18.9233C20.4258 18.9233 22.4092 16.9483 22.4092 13.9231C22.4092 8.48106 14.5956 6.55918 11.7163 0.4668C11.5818 0.179005 11.4587 0 11.1997 0C10.9498 0 10.8267 0.179005 10.6922 0.4668C7.81357 6.55918 0 8.48106 0 13.9231Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
