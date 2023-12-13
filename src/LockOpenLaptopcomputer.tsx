import React from 'react'

export function LockOpenLaptopcomputer({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.3657 18.4182' className={className}>
      <path
        d='M0 17.6733C0 18.1145 0.293947 18.4182 0.725297 18.4182L32.27 18.4182C32.7105 18.4182 33.0044 18.1145 33.0044 17.6733C33.0044 17.2413 32.7105 16.9376 32.27 16.9376L29.5245 16.9376L29.5245 2.38174C29.5245 0.826465 28.7344 0.0286132 27.17 0.0286132L5.8253 0.0286132C4.25733 0.0286132 3.47989 0.826465 3.47989 2.38174L3.47989 16.9376L0.725297 16.9376C0.293947 16.9376 0 17.2413 0 17.6733ZM3.99142 16.9376L3.99142 2.35938C3.99142 1.13399 4.60411 0.540146 5.82882 0.540146L27.1756 0.540146C28.4003 0.540146 29.013 1.13399 29.013 2.35938L29.013 16.9376Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.2157 11.8385C12.2157 12.5241 12.5114 12.8394 13.1678 12.8394L17.4081 12.8394C18.0638 12.8394 18.3595 12.5241 18.3595 11.8385L18.3595 8.54815C18.3595 7.86251 18.0638 7.54727 17.4081 7.54727L13.1678 7.54727C12.5114 7.54727 12.2157 7.86251 12.2157 8.54815ZM16.7263 7.69093L17.3868 7.69093L17.3868 6.50167C17.3868 5.35255 18.0322 4.63673 19.0571 4.63673C20.082 4.63673 20.7274 5.35255 20.7274 6.50167L20.7274 7.05929C20.7274 7.23556 20.8815 7.38048 21.0584 7.38048C21.2431 7.38048 21.388 7.23556 21.388 7.05929L21.388 6.50167C21.388 4.98389 20.4366 3.95098 19.0571 3.95098C17.6776 3.95098 16.7263 4.98389 16.7263 6.48966Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
