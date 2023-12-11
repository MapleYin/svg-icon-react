import React from 'react'

export default function TurkishlirasignCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM10.4417 7.19121L10.4417 10.1224L8.84355 10.8514C8.71543 10.9134 8.68066 10.9802 8.68066 11.116C8.68066 11.2755 8.79629 11.3911 8.95508 11.3911C9.01709 11.3911 9.04141 11.3709 9.1209 11.3409L10.4417 10.7353L10.4417 12.2514L8.84355 12.9881C8.71543 13.0424 8.68066 13.1169 8.68066 13.2443C8.68066 13.4038 8.79629 13.5201 8.95508 13.5201C9.01709 13.5201 9.04141 13.4999 9.1209 13.4699L10.4417 12.8643L10.4417 17.2061C10.4417 17.3967 10.5823 17.5135 10.8 17.5135C13.5269 17.5135 15.6403 15.3849 15.6403 12.9769C15.6403 12.7994 15.559 12.6783 15.3661 12.6783C15.1585 12.6783 15.0772 12.8121 15.0905 12.9846C15.1132 15.0362 13.2056 16.9673 10.9942 16.9673L10.9942 12.6053L14.0311 11.2231C14.1592 11.1611 14.203 11.0943 14.203 10.9585C14.203 10.7997 14.0881 10.6834 13.9286 10.6834C13.8673 10.6834 13.8423 10.7029 13.7628 10.7336L10.9942 12.0015L10.9942 10.4763L14.0311 9.08643C14.1592 9.03213 14.203 8.9667 14.203 8.83018C14.203 8.6707 14.0881 8.55439 13.9286 8.55439C13.8673 8.55439 13.8423 8.57461 13.7628 8.60527L10.9942 9.87314L10.9942 7.19121C10.9942 6.99561 10.8843 6.90244 10.7187 6.90244C10.5523 6.90244 10.4417 6.99561 10.4417 7.19121Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
