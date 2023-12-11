import React from 'react'

export default function PoweroutletTypeKFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM10.4796 17.1556C10.2908 17.1556 10.2059 17.2594 10.2059 17.4384L10.2059 18.5603C10.2059 19.6608 11.0603 20.562 12.1427 20.562C13.2335 20.562 14.1256 19.6427 14.1256 18.5603L14.1256 17.4384C14.1256 17.2594 14.0036 17.1556 13.833 17.1556ZM4.21485 12.1749C4.21485 13.4031 5.22481 14.4047 6.44464 14.4047C7.67286 14.4047 8.68419 13.4031 8.68419 12.1749C8.68419 10.946 7.67286 9.94444 6.44464 9.94444C5.22481 9.94444 4.21485 10.946 4.21485 12.1749ZM15.6473 12.1749C15.6473 13.4031 16.6488 14.4047 17.8771 14.4047C19.106 14.4047 20.1075 13.4031 20.1075 12.1749C20.1075 10.946 19.106 9.94444 17.8771 9.94444C16.6488 9.94444 15.6473 10.946 15.6473 12.1749Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}