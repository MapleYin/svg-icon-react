import React from 'react'

export function ShippingboxCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.4173 12.5808L12.4173 19.4061C12.485 19.4145 12.552 19.3579 12.5994 19.3286L18.4015 16.1812C18.8687 15.9302 18.9904 15.652 18.9904 15.2006L18.9904 9.3461C18.9904 9.18711 18.9898 9.11329 18.9598 9.0583ZM5.33194 9.3461L5.33194 15.2006C5.33194 15.652 5.45235 15.9302 5.92999 16.1812L11.7307 19.3286C11.7704 19.3579 11.8367 19.4145 11.9044 19.4061L11.9044 12.5808L5.36192 9.0583C5.33194 9.11329 5.33194 9.18711 5.33194 9.3461ZM5.77716 8.35283C5.62999 8.43096 5.57637 8.47276 5.55274 8.51524L12.1608 12.139L15.3189 10.4062L8.59004 6.78946ZM11.538 5.14004L9.16651 6.47373L15.8793 10.1268L18.778 8.51524C18.7544 8.47276 18.691 8.43096 18.5445 8.35283L12.7837 5.14004C12.5572 5.01602 12.3496 4.94424 12.1608 4.94424C11.9728 4.94424 11.7645 5.01602 11.538 5.14004Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
