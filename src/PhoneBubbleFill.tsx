import React from 'react'

export default function PhoneBubbleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6125' className={className}>
      <path
        d='M26.4199 5.89513L26.4199 17.0912C26.4199 19.7322 24.6743 21.5078 22.002 21.5078L11.1655 21.5078L6.57775 25.3921C6.44298 25.4969 6.28419 25.6125 6.09972 25.6125C5.87432 25.6125 5.68555 25.4358 5.68555 25.1427L5.68555 21.5078L4.41798 21.5078C1.74492 21.5078 0 19.7699 0 17.0912L0 5.89513C0 3.21641 1.74492 1.47715 4.41798 1.47715L22.002 1.47715C24.6743 1.47715 26.4199 3.24434 26.4199 5.89513ZM7.31192 5.22159C7.23379 5.27041 7.18497 5.33809 7.13614 5.38692C4.77696 7.73702 6.82999 11.8249 9.66456 14.6581C12.4712 17.4654 16.5773 19.5555 18.9546 17.1788C18.9964 17.137 18.9907 17.1315 19.0228 17.0995C19.8846 16.2511 19.9493 15.5565 19.5012 15.0265C19.4111 14.9097 19.1905 14.8013 16.8836 13.2119C16.3887 12.878 15.7984 12.7927 15.1022 13.4617L14.5294 14.0065C14.3836 14.1523 14.1842 14.1698 13.9896 14.0624C13.5773 13.826 12.7144 13.2666 11.8807 12.4329C11.0574 11.609 10.4778 10.7635 10.2791 10.3513C10.1821 10.1496 10.1969 9.99903 10.3266 9.85049L10.8805 9.23936C11.5216 8.50401 11.4272 7.91583 11.0926 7.43975L9.38975 5.0086C8.77022 4.13585 7.87725 4.89063 7.31192 5.22159Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
