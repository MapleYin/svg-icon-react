import React from 'react'

export default function BoltTrianglebadgeExclamationmarkFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.5495 27.1332' className={className}>
      <path
        d='M19.2331 1.03058L15.289 11.5946L22.6113 11.5946C22.807 11.5946 22.8191 11.6989 22.8191 11.7633C22.8191 11.8901 22.748 11.9966 22.6442 12.1227L21.9092 13.0471C21.4318 13.2456 21.0057 13.5974 20.7201 14.0669L19.7841 15.7201L11.4747 26.1716C11.1866 26.5356 10.7692 26.3674 10.9537 25.8976L14.8881 15.3237L7.5755 15.3237C7.37989 15.3237 7.35801 15.2201 7.35801 15.1649C7.35801 15.029 7.43887 14.9316 7.5336 14.7964L18.7121 0.74747C19.0002 0.391899 19.4176 0.560066 19.2331 1.03058Z'
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
