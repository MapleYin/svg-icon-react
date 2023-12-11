import React from 'react'

export default function PurchasedCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM9.80586 10.0641L9.80586 14.9881L9.81904 17.664L8.35977 16.1979L7.60489 15.4325C7.55694 15.3573 7.46289 15.3344 7.40313 15.3344C7.26885 15.3344 7.13936 15.4555 7.13936 15.5898C7.13936 15.6831 7.18184 15.752 7.2375 15.7985L9.80244 18.3621C9.85655 18.4246 9.95606 18.4698 10.0647 18.4698C10.1739 18.4698 10.256 18.4253 10.3185 18.3621L12.9113 15.7979C12.9852 15.7317 12.99 15.6831 12.99 15.5898C12.99 15.4555 12.8884 15.3344 12.7262 15.3344C12.665 15.3344 12.5996 15.3573 12.5433 15.4312L11.7975 16.1972L10.3103 17.664L10.3416 14.9874L10.3416 10.0723C10.3416 7.76856 11.5564 6.34376 13.5153 6.34376C15.4298 6.34376 16.6975 7.6959 16.7059 9.71367C16.7052 11.6009 15.4856 12.8692 13.6325 12.8692C13.0498 12.8692 12.874 12.671 12.6306 12.671C12.4963 12.671 12.4045 12.7621 12.4045 12.9041C12.4045 12.9639 12.4274 13.0761 12.5013 13.1311C12.6909 13.283 13.1408 13.3925 13.6389 13.3925C15.7715 13.3925 17.2207 11.9133 17.2207 9.71367C17.2207 7.38281 15.7311 5.84502 13.5153 5.84502C11.2558 5.84502 9.80586 7.49385 9.80586 10.0641Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}