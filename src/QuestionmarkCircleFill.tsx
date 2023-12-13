import React from 'react'

export function QuestionmarkCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM11.1984 17.1096C11.1984 17.5019 11.521 17.8678 11.9419 17.8678C12.3621 17.8678 12.6854 17.5025 12.6854 17.1096C12.6854 16.7068 12.3628 16.3598 11.9419 16.3598C11.5203 16.3598 11.1984 16.7075 11.1984 17.1096ZM8.97256 9.06464C8.95937 9.20547 8.96572 9.30996 8.96572 9.47939C8.96572 9.66865 9.06572 9.7793 9.2377 9.7793C9.40127 9.7793 9.53712 9.67481 9.51378 9.4915L9.49044 9.36338C9.44308 8.24199 10.559 7.04893 12.1552 7.04893C13.788 7.04893 14.8081 7.91553 14.8081 9.11348C14.8081 9.97422 14.3995 10.5694 13.1368 11.4436C12.0436 12.2082 11.6812 12.8548 11.6812 13.803C11.6812 13.9901 11.6812 14.1591 11.6812 14.3553C11.6812 14.5144 11.8037 14.6445 11.9523 14.6445C12.101 14.6445 12.206 14.52 12.206 14.3426C12.206 14.1743 12.206 14.0145 12.206 13.8462C12.206 13.0216 12.5344 12.5354 13.5802 11.8105C14.9231 10.8882 15.3431 10.1544 15.3431 9.071C15.3431 7.64892 14.0639 6.53291 12.1781 6.53291C10.3008 6.53291 9.09434 7.71679 8.97256 9.06464Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
