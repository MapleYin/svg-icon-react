import React from 'react'

export default function MicAndSignalMeterFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.091 28.2307' className={className}>
      <path
        d='M7.90303 13.1843C7.90303 17.5272 10.8882 20.6811 15.5546 20.8056L15.5546 25.3472L10.1868 25.3472C10.0457 25.3472 9.92051 25.4724 9.92051 25.6128C9.92051 25.7532 10.0457 25.87 10.1868 25.87L21.4459 25.87C21.587 25.87 21.7031 25.7532 21.7031 25.6128C21.7031 25.4724 21.587 25.3472 21.4459 25.3472L16.0781 25.3472L16.0781 20.8056C20.7445 20.6811 23.7297 17.5272 23.7297 13.1843L23.7297 10.9113C23.7297 10.7709 23.6136 10.6457 23.4641 10.6457C23.323 10.6457 23.2068 10.7709 23.2068 10.9113L23.2068 13.1893C23.2068 17.2927 20.321 20.2644 15.8118 20.2644C11.3117 20.2644 8.42589 17.2927 8.42589 13.1893L8.42589 10.9113C8.42589 10.7709 8.30978 10.6457 8.15958 10.6457C8.01915 10.6457 7.90303 10.7709 7.90303 10.9113ZM15.8118 16.7205C18.147 16.7205 19.606 14.9014 19.606 12.5741L19.606 4.14639C19.606 1.81074 18.147 0 15.8118 0C13.4858 0 12.0268 1.81074 12.0268 4.14639L12.0268 12.5741C12.0268 14.9014 13.4858 16.7205 15.8118 16.7205Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.55694 6.09043C2.43409 6.09043 3.12296 5.40156 3.12296 4.52441C3.12296 3.65703 2.43409 2.96748 1.55694 2.96748C0.68047 2.96748 0 3.65703 0 4.52441C0 5.40156 0.68047 6.09043 1.55694 6.09043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.55694 12.4776C2.43409 12.4776 3.12296 11.7881 3.12296 10.9116C3.12296 10.0436 2.43409 9.35468 1.55694 9.35468C0.68047 9.35468 0 10.0436 0 10.9116C0 11.7881 0.68047 12.4776 1.55694 12.4776Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.55694 18.8571C2.43409 18.8571 3.12296 18.1767 3.12296 17.3002C3.12296 16.423 2.43409 15.7426 1.55694 15.7426C0.68047 15.7426 0 16.423 0 17.3002C0 18.1767 0.68047 18.8571 1.55694 18.8571Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.55694 25.2437C2.43409 25.2437 3.12296 24.5639 3.12296 23.6867C3.12296 22.8103 2.43409 22.1298 1.55694 22.1298C0.68047 22.1298 0 22.8103 0 23.6867C0 24.5639 0.68047 25.2437 1.55694 25.2437Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}