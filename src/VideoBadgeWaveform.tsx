import React from 'react'

export function VideoBadgeWaveform({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.4219 30.7801' className={className}>
      <path
        d='M28.7359 9.31583L28.7359 12.5516L34.2655 8.1628C34.7182 7.81621 35.0814 7.59727 35.5626 7.59727C36.2331 7.59727 36.689 8.06768 36.689 8.91758L36.689 21.8437C36.689 22.7026 36.2331 23.1724 35.5626 23.1724C35.0814 23.1724 34.7182 22.9534 34.2655 22.5984L28.7359 18.2097L28.7359 21.4447C28.7359 24.06 27.3238 25.479 24.6898 25.479L13.3189 25.479L13.3189 24.9841L24.5498 24.9841C27.0336 24.9841 28.2243 23.7534 28.2243 21.2991L28.2243 9.46212C28.2243 7.01622 27.0336 5.77648 24.5498 5.77648L10.5873 5.77648C8.10353 5.77648 6.91281 7.01622 6.91281 9.46212L6.91281 16.1881C6.82944 16.1725 6.74306 16.1654 6.6549 16.1654C6.56833 16.1654 6.48339 16.1725 6.40128 16.1879L6.40128 9.31583C6.40128 6.70059 7.80333 5.29063 10.4474 5.29063L24.6898 5.29063C27.3238 5.29063 28.7359 6.70059 28.7359 9.31583ZM34.6331 8.52736L28.7359 13.1319L28.7359 17.6286L34.6331 22.2332C34.9983 22.5139 35.2887 22.7205 35.5616 22.7205C35.9295 22.7205 36.1725 22.4469 36.1725 21.9023L36.1725 8.8673C36.1725 8.31437 35.9295 8.04913 35.5616 8.04913C35.2887 8.04913 34.9983 8.25509 34.6331 8.52736Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.762 26.2475C11.9508 26.2475 12.1062 26.1019 12.1062 25.9124L12.1062 21.0227C12.1062 20.8339 11.9508 20.6869 11.762 20.6869C11.5733 20.6869 11.427 20.8255 11.427 21.0227L11.427 25.9124C11.427 26.1012 11.5733 26.2475 11.762 26.2475Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.20744 28.17C9.40597 28.17 9.55295 28.0231 9.55295 27.8343L9.55295 19.1001C9.55295 18.9036 9.40597 18.7566 9.20744 18.7566C9.02003 18.7566 8.87306 18.9036 8.87306 19.1001L8.87306 27.8343C8.87306 28.0231 9.02003 28.17 9.20744 28.17Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.6549 29.5674C6.84298 29.5674 6.98996 29.4211 6.98996 29.2323L6.98996 17.7223C6.98996 17.5244 6.84298 17.3865 6.6549 17.3865C6.46612 17.3865 6.31983 17.5244 6.31983 17.7223L6.31983 29.2323C6.31983 29.4218 6.46544 29.5674 6.6549 29.5674Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.10099 27.4818C4.28976 27.4818 4.43673 27.3349 4.43673 27.1461L4.43673 19.7701C4.43673 19.5911 4.28976 19.426 4.10099 19.426C3.9129 19.426 3.76593 19.5911 3.76593 19.7701L3.76593 27.1461C3.76593 27.3349 3.9129 27.4818 4.10099 27.4818Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.54708 25.501C1.73585 25.501 1.88282 25.354 1.88282 25.1659L1.88282 21.7692C1.88282 21.5811 1.73585 21.4341 1.54708 21.4341C1.35899 21.4341 1.2127 21.5811 1.2127 21.7692L1.2127 25.1659C1.2127 25.354 1.35899 25.501 1.54708 25.501Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
