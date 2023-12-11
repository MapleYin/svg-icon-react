import React from 'react'

export default function SinkFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.8101 19.7233' className={className}>
      <path
        d='M10.6471 10.8475L11.1404 10.8475L11.1404 2.63643C11.1404 1.32452 11.9464 0.518564 13.2395 0.518564C14.5423 0.518564 15.3483 1.32452 15.3483 2.63643L15.3483 3.8253C15.3483 3.9671 15.4671 4.07619 15.6089 4.07619C15.7507 4.07619 15.8605 3.9671 15.8605 3.8253L15.8605 2.63643C15.8605 1.01592 14.8509 0.0063473 13.2395 0.0063473C11.6378 0.0063473 10.6471 1.01592 10.6471 2.63643ZM7.78106 10.8475L8.32589 10.8475L8.32589 8.83663C8.32589 8.08312 7.90802 7.68341 7.1545 7.68341L4.90606 7.68341C4.75156 7.68341 4.6291 7.80587 4.6291 7.95197C4.6291 8.10646 4.75156 8.22892 4.90606 8.22892L7.24219 8.22892C7.5919 8.22892 7.78106 8.41808 7.78106 8.74894ZM13.4519 10.8475L13.9974 10.8475L13.9974 8.74894C13.9974 8.41808 14.1865 8.22892 14.5446 8.22892L16.8724 8.22892C17.0269 8.22892 17.1493 8.10646 17.1493 7.95197C17.1493 7.80587 17.0269 7.68341 16.8724 7.68341L14.6239 7.68341C13.8704 7.68341 13.4519 8.08312 13.4519 8.83663ZM0.251567 11.1309L1.01524 11.1309L1.01524 15.3015C1.01524 18.2738 2.63008 19.7233 5.94845 19.7233L16.5003 19.7233C19.8278 19.7233 21.4524 18.2738 21.4524 15.3015L21.4524 11.1309L22.1979 11.1309C22.3397 11.1309 22.4488 11.0218 22.4488 10.88C22.4488 10.7375 22.3397 10.6194 22.1979 10.6194L0.251567 10.6194C0.118166 10.6194 0 10.7375 0 10.88C0 11.0218 0.118166 11.1309 0.251567 11.1309Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
