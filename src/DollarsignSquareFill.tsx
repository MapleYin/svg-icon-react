import React from 'react'

export function DollarsignSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM10.7105 4.89189L10.7105 5.77217C8.94102 5.87666 7.50684 7.01494 7.50684 8.49756C7.50684 9.80713 8.47344 10.6824 10.4661 11.1448L10.7105 11.1923L10.7105 15.9137C9.10625 15.8126 7.90723 14.8824 7.78458 13.553C7.77637 13.3713 7.69639 13.2486 7.5083 13.2486C7.35449 13.2486 7.24453 13.3593 7.24453 13.5599C7.24453 13.6596 7.26406 13.7502 7.2752 13.8408C7.53594 15.2986 8.84297 16.3744 10.7105 16.4671L10.7105 17.561C10.7105 17.7289 10.8268 17.8355 10.9849 17.8355C11.143 17.8355 11.2781 17.7198 11.2781 17.561L11.2781 16.4775C13.3723 16.3744 14.742 15.1474 14.742 13.6077C14.742 12.1907 13.7922 11.347 11.7305 10.8537L11.2781 10.7511L11.2781 6.33672C12.7401 6.42872 13.8177 7.25215 13.9703 8.35176C13.996 8.56709 14.0746 8.66456 14.2459 8.66456C14.4186 8.66456 14.5292 8.55391 14.5292 8.36309C14.5292 8.27246 14.509 8.18184 14.4979 8.09121C14.2482 6.85049 12.9662 5.86553 11.2781 5.77217L11.2781 4.89189C11.2781 4.7331 11.143 4.61748 10.9849 4.61748C10.8079 4.61748 10.7105 4.71426 10.7105 4.89189ZM11.5516 11.3804C13.3638 11.7955 14.2083 12.4437 14.2083 13.6041C14.2083 14.8901 13.0022 15.8412 11.2781 15.9137L11.2781 11.3204ZM10.7105 10.6223L10.6407 10.6111C8.95411 10.2142 8.05938 9.61416 8.05938 8.51094C8.05938 7.29668 9.23887 6.43008 10.7105 6.33672Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
