import React from 'react'

export function N03CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.4809' className={className}>
      <path
        d='M24.3315 12.1608C24.3315 18.8604 18.8604 24.3308 12.1608 24.3308C5.4711 24.3308 0 18.8604 0 12.1608C0 5.47041 5.47041 0 12.1602 0C18.8597 0 24.3315 5.47041 24.3315 12.1608ZM5.65537 12.1608C5.65537 14.2717 6.12305 17.4298 8.37988 17.4298C10.6367 17.4298 11.1044 14.2717 11.1044 12.1608C11.1044 10.05 10.6367 6.8919 8.37988 6.8919C6.12305 6.8919 5.65537 10.05 5.65537 12.1608ZM12.9894 8.77168C12.9022 9.04375 12.891 9.26905 12.891 9.3917C12.891 9.57276 12.9905 9.70294 13.1673 9.70294C13.386 9.70294 13.4192 9.55508 13.4547 9.33633C13.613 8.37139 14.1894 7.50597 15.2808 7.50597C16.416 7.50597 17.0476 8.42774 17.0476 9.56299C17.0476 10.74 16.2891 11.673 15.1107 11.673L14.5041 11.673C14.3035 11.673 14.2417 11.827 14.2417 11.9612C14.2417 12.115 14.3503 12.2495 14.5041 12.2495L15.1295 12.2495C16.4823 12.2495 17.3085 13.0017 17.3085 14.4941C17.3085 15.6957 16.6833 16.8073 15.3478 16.8073C14.1155 16.8073 13.4191 15.8415 13.2907 14.9329C13.2741 14.7064 13.2032 14.5831 12.9852 14.5831C12.8182 14.5831 12.7159 14.7203 12.7159 14.8971C12.7159 15.0483 12.7641 15.347 12.8227 15.5346C13.1574 16.6163 14.0344 17.4005 15.3296 17.4005C16.8449 17.4005 17.9397 16.2468 17.9397 14.4606C17.9397 13.1439 17.3137 12.0575 15.9895 11.9501L15.9895 11.9194C17.125 11.6258 17.6551 10.5711 17.6551 9.48711C17.6551 8.00313 16.7404 6.92256 15.2808 6.92256C14.0532 6.92256 13.3241 7.66543 12.9894 8.77168ZM10.4614 12.1608C10.4614 13.8831 10.1805 16.8443 8.37988 16.8443C6.57862 16.8443 6.29835 13.8831 6.29835 12.1608C6.29835 10.4393 6.57862 7.48643 8.37988 7.48643C10.1805 7.48643 10.4614 10.4393 10.4614 12.1608Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
