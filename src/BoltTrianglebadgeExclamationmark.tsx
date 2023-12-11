import React from 'react'

export default function BoltTrianglebadgeExclamationmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.5495 27.1332' className={className}>
      <path
        d='M19.2338 1.03058L15.2897 11.461L22.612 11.461C22.8076 11.461 22.8197 11.5647 22.8197 11.6199C22.8197 11.7558 22.7668 11.8532 22.6442 11.9884L21.7545 13.1181C21.3402 13.324 20.9744 13.6488 20.7201 14.0669L19.9849 15.3653L11.4754 26.1716C11.1796 26.5272 10.7692 26.3674 10.9537 25.8976L14.8888 15.4671L7.57618 15.4671C7.37989 15.4671 7.3587 15.3635 7.3587 15.2985C7.3587 15.1717 7.42071 15.0658 7.53428 14.9398L18.7121 0.74747C18.9988 0.391215 19.4092 0.560066 19.2338 1.03058ZM8.20129 14.9365L15.5976 14.9365L11.9557 24.763L21.9856 11.9825L14.5802 11.9825L18.2201 2.17008Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M24.1222 14.5198L29.4527 23.9447C29.5907 24.1992 29.6598 24.4545 29.6598 24.7105C29.6598 25.5013 29.0327 26.2435 28.1443 26.2435L17.4931 26.2435C16.6053 26.2435 15.9601 25.5013 15.9601 24.7105C15.9601 24.4545 16.02 24.1992 16.1484 23.9628L21.4963 14.5198C21.7816 14.0268 22.3123 13.7527 22.8145 13.7527C23.3257 13.7527 23.8369 14.0268 24.1222 14.5198ZM21.9896 23.4577C21.9896 23.9152 22.3487 24.2924 22.8054 24.2924C23.2349 24.2924 23.6114 23.9152 23.6303 23.4577C23.6491 23.0387 23.2537 22.6419 22.8054 22.6419C22.3668 22.6419 21.9896 23.0198 21.9896 23.4577ZM22.2861 17.2064L22.3475 21.2338C22.3482 21.5252 22.5405 21.7448 22.8145 21.7448C23.0975 21.7448 23.2905 21.5252 23.2912 21.2338L23.3519 17.2064C23.3526 16.8829 23.1393 16.6508 22.8145 16.6508C22.4994 16.6508 22.2855 16.8829 22.2861 17.2064Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
