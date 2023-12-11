import React from 'react'

export default function CalendarDayTimelineRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.2015 22.0158' className={className}>
      <path
        d='M25.7733 18.8282C25.7733 20.8734 24.6574 22.0158 22.5913 22.0158L4.33458 22.0158C2.26007 22.0158 1.15265 20.9014 1.15265 18.8282L1.15265 12.1745L1.66486 12.1745L1.66486 18.7792C1.66486 20.5678 2.59367 21.5043 4.38859 21.5043L22.5366 21.5043C24.2582 21.5043 25.2617 20.5678 25.2617 18.7792L25.2617 12.1745L25.7733 12.1745ZM25.7733 3.24414L25.7733 9.86015L25.2617 9.86015L25.2617 3.28409C25.2617 1.49552 24.2582 0.568076 22.5366 0.568076L4.38859 0.568076C2.59367 0.568076 1.66486 1.49552 1.66486 3.28409L1.66486 9.86015L1.15265 9.86015L1.15265 3.24414C1.15265 1.16192 2.26007 0.0565428 4.33458 0.0565428L22.5913 0.0565428C24.6574 0.0565428 25.7733 1.19893 25.7733 3.24414Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M29.5013 20.3382C29.5013 20.8379 29.0936 21.2449 28.5945 21.2449C28.0948 21.2449 27.6871 20.8379 27.6871 20.3382C27.6871 19.8385 28.0948 19.4224 28.5945 19.4224C29.0936 19.4224 29.5013 19.8385 29.5013 20.3382Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M29.5013 15.6699C29.5013 16.1696 29.0936 16.5767 28.5945 16.5767C28.0948 16.5767 27.6871 16.1696 27.6871 15.6699C27.6871 15.1702 28.0948 14.7632 28.5945 14.7632C29.0936 14.7632 29.5013 15.1702 29.5013 15.6699Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M29.5013 6.3334C29.5013 6.83311 29.0936 7.24083 28.5945 7.24083C28.0948 7.24083 27.6871 6.83311 27.6871 6.3334C27.6871 5.83437 28.0948 5.42666 28.5945 5.42666C29.0936 5.42666 29.5013 5.83437 29.5013 6.3334Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M29.5013 1.66514C29.5013 2.16485 29.0936 2.57256 28.5945 2.57256C28.0948 2.57256 27.6871 2.16485 27.6871 1.66514C27.6871 1.16611 28.0948 0.758394 28.5945 0.758394C29.0936 0.758394 29.5013 1.16611 29.5013 1.66514Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M28.6127 12.0681C29.2101 12.0681 29.6778 11.5997 29.6778 11.003C29.6778 10.4057 29.2101 9.92891 28.6127 9.92891C28.1085 9.92891 27.6804 10.27 27.5718 10.7506L1.15265 10.7506C1.01426 10.7506 0.890435 10.8653 0.890435 11.0128C0.890435 11.1609 1.01426 11.2848 1.15265 11.2848L27.5732 11.2848C27.7006 11.7458 28.1085 12.0681 28.6127 12.0681Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
