import React from 'react'

export function ShieldSlash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.9376 25.4893' className={className}>
      <path
        d='M3.41806 5.06101C3.2111 5.34212 3.14422 5.73964 3.14422 6.36888L3.14422 15.7656C3.14422 19.4861 5.76443 20.5492 11.6588 24.4244C11.7812 24.5205 12.0603 24.6908 12.2927 24.6908C12.5159 24.6908 12.795 24.5205 12.9175 24.4244C15.486 22.7005 17.4392 21.5389 18.8222 20.4643L19.2233 20.8653C17.8606 21.9522 15.88 23.1678 13.1053 24.8888C12.9122 25.0101 12.5899 25.1797 12.2927 25.1797C11.9863 25.1797 11.6738 25.0101 11.471 24.8888C4.71853 20.5518 2.63406 19.4797 2.63406 15.7189L2.63406 6.28206C2.63406 5.52797 2.72363 5.03643 3.02294 4.66592ZM13.1721 1.17806C15.6607 2.04485 17.7856 2.95414 20.2555 3.88226C21.6328 4.4055 21.9513 4.8806 21.9513 6.28206L21.9513 15.7189C21.9513 17.1599 21.6549 18.2212 20.901 19.22L20.4976 18.8166C21.1301 17.9654 21.432 17.0196 21.432 15.7656L21.432 6.36888C21.432 5.28549 21.2338 4.8974 20.4687 4.58676C19.3167 4.12455 14.2997 2.16996 13.1224 1.7309C12.7707 1.5976 12.4664 1.49428 12.2927 1.49428C12.1098 1.49428 11.7874 1.57944 11.4538 1.7309C10.5833 2.05576 7.60887 3.21262 5.6574 3.97687L5.22287 3.54235C7.3256 2.74747 9.23968 2.00634 11.4042 1.17806C11.7271 1.06224 11.9872 0.982747 12.2927 0.982747C12.589 0.982747 12.8582 1.06995 13.1721 1.17806Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M23.2585 23.6206C23.3628 23.7255 23.5087 23.7067 23.6311 23.6206C23.7724 23.5351 23.7361 23.3431 23.6311 23.2388L1.37615 0.984502C1.29001 0.889286 1.13503 0.889286 0.99372 0.984502C0.871258 1.06927 0.889422 1.25355 0.99372 1.35717Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
