import React from 'react'

export function CreditcardViewfinder({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.2337 22.9289' className={className}>
      <path
        d='M0.251567 7.07051C0.417684 7.07051 0.511533 6.96622 0.511533 6.8001L0.511533 3.26006C0.511533 1.48145 1.42628 0.558994 3.21124 0.558994L6.74629 0.558994C6.91241 0.558994 7.01671 0.473543 7.01671 0.30811C7.01671 0.141994 6.91241 0.0565428 6.74629 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.23506L0 6.8001C0 6.96622 0.085451 7.07051 0.251567 7.07051ZM22.6208 7.07051C22.7876 7.07051 22.8724 6.96622 22.8724 6.8001L22.8724 3.23506C22.8724 1.19961 21.7663 0.0565428 19.6911 0.0565428L16.1261 0.0565428C15.96 0.0565428 15.8557 0.141994 15.8557 0.30811C15.8557 0.473543 15.96 0.558994 16.1261 0.558994L19.6611 0.558994C21.3714 0.558994 22.3608 1.48145 22.3608 3.26006L22.3608 6.8001C22.3608 6.96622 22.4554 7.07051 22.6208 7.07051ZM3.18125 22.9289L6.74629 22.9289C6.91241 22.9289 7.01671 22.8344 7.01671 22.6683C7.01671 22.5028 6.91241 22.4174 6.74629 22.4174L3.21124 22.4174C1.42628 22.4174 0.511533 21.4949 0.511533 19.7163L0.511533 16.1763C0.511533 16.0102 0.426082 15.9059 0.251567 15.9059C0.0938493 15.9059 0 16.0102 0 16.1763L0 19.7413C0 21.8145 1.10674 22.9289 3.18125 22.9289ZM16.1261 22.9289L19.6911 22.9289C21.7663 22.9289 22.8724 21.7858 22.8724 19.7413L22.8724 16.1763C22.8724 16.0102 22.7869 15.9059 22.6208 15.9059C22.4547 15.9059 22.3608 16.0102 22.3608 16.1763L22.3608 19.7163C22.3608 21.4949 21.3714 22.4174 19.6611 22.4174L16.1261 22.4174C15.96 22.4174 15.8557 22.5028 15.8557 22.6683C15.8557 22.8344 15.96 22.9289 16.1261 22.9289Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.9752 16.4174L16.9167 16.4174C17.9194 16.4174 18.4802 15.8476 18.4802 14.8371L18.4802 9.90938L4.41104 9.90938L4.41104 14.8371C4.41104 15.8573 4.96338 16.4174 5.9752 16.4174ZM6.74551 14.6982C6.39395 14.6982 6.14981 14.4547 6.14981 14.1038L6.14981 12.9431C6.14981 12.5831 6.39395 12.339 6.74551 12.339L8.27598 12.339C8.64639 12.339 8.89053 12.5831 8.89053 12.9431L8.89053 14.1038C8.89053 14.4547 8.64639 14.6982 8.27598 14.6982ZM4.41104 8.55967L18.4802 8.55967L18.4802 8.14063C18.4802 7.13018 17.9194 6.55967 16.9167 6.55967L5.9752 6.55967C4.96338 6.55967 4.41104 7.11133 4.41104 8.14063Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
