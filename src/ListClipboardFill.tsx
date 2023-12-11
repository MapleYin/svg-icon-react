import React from 'react'

export default function ListClipboardFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 31.8922' className={className}>
      <path
        d='M20.0314 6.74328L20.0314 26.8771C20.0314 28.9432 18.926 30.0583 16.8528 30.0583L3.1876 30.0583C1.10537 30.0583 0 28.9432 0 26.8771L0 6.74328C0 4.66808 1.10537 3.56134 3.1876 3.56134L4.58404 3.56134C4.57947 3.60325 4.57793 3.64641 4.57793 3.69015L4.57793 4.88068C4.57793 5.82785 5.28545 6.49064 6.2669 6.49064L13.7735 6.49064C14.7459 6.49064 15.4534 5.82785 15.4534 4.88068L15.4534 3.69015C15.4534 3.64641 15.4519 3.60325 15.4473 3.56134L16.8528 3.56134C18.926 3.56134 20.0314 4.66808 20.0314 6.74328ZM3.97911 21.6717C3.82393 21.6717 3.70215 21.7935 3.70215 21.948C3.70215 22.1018 3.82461 22.2249 3.97911 22.2249L10.9665 22.2249C11.1203 22.2249 11.2428 22.1018 11.2428 21.948C11.2428 21.7935 11.1119 21.6717 10.9665 21.6717ZM3.97911 16.689C3.82393 16.689 3.70215 16.8198 3.70215 16.9653C3.70215 17.1197 3.82393 17.2415 3.97911 17.2415L16.0613 17.2415C16.2074 17.2415 16.3383 17.1197 16.3383 16.9653C16.3383 16.8198 16.2074 16.689 16.0613 16.689ZM3.97911 12.0049C3.82461 12.0049 3.70215 12.1274 3.70215 12.2825C3.70215 12.4273 3.82461 12.5497 3.97911 12.5497L16.0613 12.5497C16.2158 12.5497 16.3383 12.4273 16.3383 12.2825C16.3383 12.1274 16.2158 12.0049 16.0613 12.0049Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.0688 3.00235L13.7735 3.00235C14.2482 3.00235 14.541 3.2588 14.541 3.69015L14.541 4.88068C14.541 5.32111 14.2482 5.57755 13.7735 5.57755L6.2669 5.57755C5.79219 5.57755 5.49941 5.32111 5.49941 4.88068L5.49941 3.69015C5.49941 3.2588 5.79219 3.00235 6.2669 3.00235L7.97168 3.00235C7.9583 1.85313 8.89199 0.921488 10.016 0.921488C11.1484 0.921488 12.0731 1.85313 12.0688 3.00235ZM8.83848 2.97149C8.83848 3.62169 9.35469 4.15743 10.016 4.15743C10.6857 4.15743 11.202 3.62169 11.202 2.97149C11.202 2.31016 10.6857 1.79395 10.016 1.79395C9.35469 1.79395 8.83848 2.31016 8.83848 2.97149Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
