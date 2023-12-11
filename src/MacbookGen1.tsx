import React from 'react'

export default function MacbookGen1({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.3657 18.4182' className={className}>
      <path
        d='M3.99142 16.9376L3.99142 2.35938C3.99142 1.13399 4.60411 0.540146 5.82882 0.540146L27.1756 0.540146C28.4003 0.540146 29.013 1.13399 29.013 2.35938L29.013 16.9376Z'
        fill={color}
        fillOpacity='0.2125'
      />
      <path
        d='M0 17.6733C0 18.1145 0.293947 18.4182 0.725297 18.4182L32.27 18.4182C32.7105 18.4182 33.0044 18.1145 33.0044 17.6733C33.0044 17.2413 32.7105 16.9376 32.27 16.9376L29.5245 16.9376L29.5245 2.38174C29.5245 0.826465 28.7344 0.0286132 27.17 0.0286132L5.8253 0.0286132C4.25733 0.0286132 3.47989 0.826465 3.47989 2.38174L3.47989 16.9376L0.725297 16.9376C0.293947 16.9376 0 17.2413 0 17.6733ZM3.99142 16.9376L3.99142 2.35938C3.99142 1.13399 4.60411 0.540146 5.82882 0.540146L27.1756 0.540146C28.4003 0.540146 29.013 1.13399 29.013 2.35938L29.013 16.9376Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
