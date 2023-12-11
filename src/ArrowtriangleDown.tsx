import React from 'react'

export default function ArrowtriangleDown({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9122 20.3178' className={className}>
      <path
        d='M19.5509 0.805473C19.5509 0.328908 19.2067 0.0104493 18.6103 0.0104493L0.941314 0.00976562C0.335061 0.00976562 0 0.328224 0 0.80479C0 1.03673 0.086329 1.18848 0.23965 1.50489L8.94746 19.6847C9.14375 20.0688 9.39248 20.3178 9.7709 20.3178C10.15 20.3178 10.3987 20.0688 10.6034 19.6847L19.3119 1.50489C19.4646 1.18917 19.5509 1.03741 19.5509 0.805473ZM19.037 0.80538C19.037 0.946395 18.9707 1.06016 18.9051 1.20118L10.2212 19.3931C10.1367 19.562 9.97754 19.768 9.7709 19.768C9.56494 19.768 9.41485 19.562 9.33037 19.3931L0.646496 1.2005C0.580187 1.06856 0.514563 0.945711 0.514563 0.813778C0.514563 0.64415 0.627648 0.521299 0.91876 0.521299L18.6321 0.522666C18.9051 0.522666 19.037 0.644833 19.037 0.80538Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}