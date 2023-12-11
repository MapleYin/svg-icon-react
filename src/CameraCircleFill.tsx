import React from 'react'

export default function CameraCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM10.823 6.01045C10.2413 6.01045 9.9917 6.08565 9.63311 6.49307L9.04991 7.14326C8.692 7.52979 8.54551 7.55479 8.00069 7.55479L6.17569 7.55479C5.11231 7.55479 4.5293 8.14551 4.5293 9.22774L4.5293 16.13C4.5293 17.2199 5.11231 17.8023 6.17569 17.8023L18.1272 17.8023C19.1996 17.8023 19.7833 17.2199 19.7833 16.13L19.7833 9.22774C19.7833 8.14551 19.1996 7.55479 18.1272 7.55479L16.0885 7.55479C15.5534 7.55479 15.4237 7.54932 15.0483 7.14326L14.447 6.49307C14.0786 6.10381 13.8751 6.01045 13.2565 6.01045ZM15.9281 12.5871C15.9281 14.7026 14.2457 16.3732 12.1615 16.3732C10.0585 16.3732 8.37539 14.7097 8.37539 12.5871C8.37539 10.4848 10.0585 8.80166 12.1615 8.80166C14.2457 8.80166 15.9281 10.4848 15.9281 12.5871ZM8.8629 12.5871C8.8629 14.4339 10.3336 15.9039 12.1608 15.9039C13.9699 15.9039 15.4406 14.4339 15.4406 12.5871C15.4406 10.7599 13.9699 9.28009 12.1608 9.28009C10.3336 9.28009 8.8629 10.7592 8.8629 12.5871ZM17.7839 10.1559C17.8027 10.4975 17.5406 10.7589 17.1997 10.7589C16.8776 10.7589 16.5967 10.4975 16.5967 10.1559C16.5967 9.83311 16.8776 9.55352 17.1997 9.55352C17.5406 9.55352 17.7657 9.83311 17.7839 10.1559Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}