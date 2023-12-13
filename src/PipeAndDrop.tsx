import React from 'react'

export function PipeAndDrop({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.5636 23.5721' className={className}>
      <path
        d='M4.79601 2.31349L4.79601 3.30606L21.3979 3.30606L21.3979 2.31349C21.3979 1.37969 21.8794 0.908599 22.862 0.908599L24.7199 0.908599C25.7207 0.908599 26.2023 1.37969 26.2023 2.31349L26.2023 9.92404C26.2023 10.8572 25.7207 11.3282 24.7199 11.3282L22.862 11.3282C21.8794 11.3282 21.3979 10.8572 21.3979 9.92404L21.3979 8.58586L16.0191 8.58586L15.7353 8.05734L21.3979 8.05734L21.3979 3.83459L4.79601 3.83459L4.79601 8.05734L10.5532 8.05734L10.2705 8.58586L4.79601 8.58586L4.79601 9.92404C4.79601 10.8572 4.31446 11.3282 3.34092 11.3282L1.48233 11.3282C0.481545 11.3282 0 10.8572 0 9.92404L0 2.31349C0 1.37969 0.481545 0.908599 1.48233 0.908599L3.34092 0.908599C4.31446 0.908599 4.79601 1.37969 4.79601 2.31349ZM1.48233 1.43146C0.839657 1.43146 0.52286 1.73009 0.52286 2.30011L0.52286 9.93674C0.52286 10.5068 0.839657 10.8054 1.48233 10.8054L3.34092 10.8054C3.96475 10.8054 4.27315 10.5068 4.27315 9.93674L4.27315 2.30011C4.27315 1.73009 3.96475 1.43146 3.34092 1.43146ZM22.862 1.43146C22.2375 1.43146 21.9207 1.73009 21.9207 2.30011L21.9207 9.93674C21.9207 10.5068 22.2375 10.8054 22.862 10.8054L24.7199 10.8054C25.3626 10.8054 25.6794 10.5068 25.6794 9.93674L25.6794 2.30011C25.6794 1.73009 25.3626 1.43146 24.7199 1.43146Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.1525 22.6726C16.232 22.6726 18.6769 20.3045 18.6769 17.2849C18.6769 15.5773 17.8363 13.8626 17.0417 12.369L13.8403 6.42297C13.6835 6.11223 13.4695 5.99524 13.1525 5.99524C12.8354 5.99524 12.6214 6.11223 12.4647 6.40413L9.25548 12.369C8.46017 13.8626 7.62872 15.5773 7.62872 17.2849C7.62872 20.3045 10.0645 22.6726 13.1525 22.6726ZM13.1525 22.1468C10.3789 22.1468 8.16359 19.9907 8.16359 17.2849C8.16359 15.6927 8.92824 14.1214 9.72287 12.6382L12.934 6.64994C13.0303 6.46712 13.2676 6.46712 13.3632 6.64994L16.582 12.6382C17.3774 14.1214 18.142 15.6927 18.142 17.2849C18.142 19.9907 15.9267 22.1468 13.1525 22.1468Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
