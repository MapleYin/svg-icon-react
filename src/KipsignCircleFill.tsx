import React from 'react'

export default function KipsignCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM9.53574 7.29385L9.53574 12.0763L8.66865 12.0763C8.47422 12.0763 8.35722 12.2114 8.35722 12.3618C8.35722 12.5297 8.47422 12.6571 8.66865 12.6571L9.53574 12.6571L9.53574 17.4157C9.53574 17.5939 9.68477 17.6954 9.81475 17.6954C9.95313 17.6954 10.0833 17.5939 10.0833 17.4157L10.0833 12.6571L10.7816 12.6571L15.284 17.6352C15.3333 17.6795 15.4106 17.6954 15.4801 17.6954C15.6066 17.6954 15.7375 17.5932 15.7375 17.4394C15.7375 17.3649 15.7243 17.2792 15.633 17.1949L11.5111 12.6571L15.6995 12.6571C15.8953 12.6571 16.0109 12.5297 16.0109 12.3618C16.0109 12.2114 15.8953 12.0763 15.6995 12.0763L11.5286 12.0763L15.6693 7.49512C15.7418 7.42969 15.7557 7.34405 15.7557 7.28838C15.7557 7.13457 15.6443 7.02324 15.4982 7.02324C15.3742 7.02324 15.3151 7.08457 15.2463 7.16592L10.8166 12.0763L10.0833 12.0763L10.0833 7.29385C10.0833 7.11572 9.95381 7.00576 9.81475 7.00576C9.64707 7.00576 9.53574 7.11572 9.53574 7.29385Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
