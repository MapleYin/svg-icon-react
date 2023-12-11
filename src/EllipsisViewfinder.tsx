import React from 'react'

export default function EllipsisViewfinder({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.2337 22.9289' className={className}>
      <path
        d='M0.251567 7.07051C0.417684 7.07051 0.511533 6.96622 0.511533 6.8001L0.511533 3.26006C0.511533 1.48145 1.42628 0.558994 3.21124 0.558994L6.74629 0.558994C6.91241 0.558994 7.01671 0.473543 7.01671 0.30811C7.01671 0.141994 6.91241 0.0565428 6.74629 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.23506L0 6.8001C0 6.96622 0.085451 7.07051 0.251567 7.07051ZM22.6208 7.07051C22.7876 7.07051 22.8724 6.96622 22.8724 6.8001L22.8724 3.23506C22.8724 1.19961 21.7663 0.0565428 19.6911 0.0565428L16.1261 0.0565428C15.96 0.0565428 15.8557 0.141994 15.8557 0.30811C15.8557 0.473543 15.96 0.558994 16.1261 0.558994L19.6611 0.558994C21.3714 0.558994 22.3608 1.48145 22.3608 3.26006L22.3608 6.8001C22.3608 6.96622 22.4554 7.07051 22.6208 7.07051ZM3.18125 22.9289L6.74629 22.9289C6.91241 22.9289 7.01671 22.8344 7.01671 22.6683C7.01671 22.5028 6.91241 22.4174 6.74629 22.4174L3.21124 22.4174C1.42628 22.4174 0.511533 21.4949 0.511533 19.7163L0.511533 16.1763C0.511533 16.0102 0.426082 15.9059 0.251567 15.9059C0.0938493 15.9059 0 16.0102 0 16.1763L0 19.7413C0 21.8145 1.10674 22.9289 3.18125 22.9289ZM16.1261 22.9289L19.6911 22.9289C21.7663 22.9289 22.8724 21.7858 22.8724 19.7413L22.8724 16.1763C22.8724 16.0102 22.7869 15.9059 22.6208 15.9059C22.4547 15.9059 22.3608 16.0102 22.3608 16.1763L22.3608 19.7163C22.3608 21.4949 21.3714 22.4174 19.6611 22.4174L16.1261 22.4174C15.96 22.4174 15.8557 22.5028 15.8557 22.6683C15.8557 22.8344 15.96 22.9289 16.1261 22.9289Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.0989 12.8625C17.8841 12.8625 18.5109 12.2357 18.5109 11.4512C18.5109 10.666 17.8841 10.0482 17.0989 10.0482C16.3145 10.0482 15.6876 10.666 15.6876 11.4512C15.6876 12.2357 16.3145 12.8625 17.0989 12.8625Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.4414 12.8625C12.2259 12.8625 12.8527 12.2357 12.8527 11.4512C12.8527 10.666 12.2259 10.0482 11.4414 10.0482C10.6563 10.0482 10.0294 10.666 10.0294 11.4512C10.0294 12.2357 10.6563 12.8625 11.4414 12.8625Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.78321 12.8625C6.56837 12.8625 7.19522 12.2357 7.19522 11.4512C7.19522 10.666 6.57676 10.0482 5.78321 10.0482C4.99873 10.0482 4.37188 10.666 4.37188 11.4512C4.37188 12.2357 4.99873 12.8625 5.78321 12.8625Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}