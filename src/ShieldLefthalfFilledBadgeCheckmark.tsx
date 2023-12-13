import React from 'react'

export function ShieldLefthalfFilledBadgeCheckmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.6741 28.094' className={className}>
      <path
        d='M17.0501 2.48038C19.529 3.34717 21.663 4.25645 24.1237 5.18458C25.5102 5.70782 25.8195 6.18291 25.8195 7.58438L25.8195 14.3945L25.3094 14.4208L25.3094 7.6712C25.3094 6.5878 25.1021 6.19972 24.3461 5.88907C23.1941 5.42687 18.168 3.47228 16.9907 3.03322C16.6354 2.90197 16.3268 2.79025 16.1208 2.79865L16.1208 25.9988C16.3686 26.0059 16.6547 25.8355 16.7948 25.7268C17.8005 25.0518 18.7119 24.463 19.5247 23.9364L19.7737 24.4477C18.9576 24.9664 18.0263 25.5429 16.9826 26.1911C16.7805 26.3124 16.4582 26.482 16.161 26.482C15.8644 26.482 15.5421 26.3124 15.3484 26.1911C8.59591 21.8541 6.50235 20.782 6.50235 17.0212L6.50235 7.58438C6.50235 6.18291 6.82081 5.68829 8.19815 5.18458C10.6589 4.25714 12.8117 3.42549 15.2725 2.48038C15.5954 2.36456 15.8646 2.28506 16.161 2.28506C16.4664 2.28506 16.7272 2.37227 17.0501 2.48038Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M31.7837 21.2491C31.7837 24.5238 29.0845 27.2035 25.8195 27.2035C22.5623 27.2035 19.8561 24.5161 19.8561 21.2491C19.8561 17.9821 22.5623 15.285 25.8195 15.285C29.0956 15.285 31.7837 17.964 31.7837 21.2491ZM28.0677 18.8215L24.9915 23.0248L23.3654 21.2899C23.2657 21.1986 23.1619 21.0808 22.9814 21.0808C22.7256 21.0808 22.5221 21.257 22.5221 21.5226C22.5221 21.6432 22.5716 21.7574 22.6629 21.8683L24.6445 24.0458C24.7553 24.1664 24.8898 24.2271 25.0306 24.2271C25.1937 24.2271 25.2904 24.1462 25.3811 24.0256L28.7673 19.3707C28.8286 19.2787 28.8781 19.186 28.8781 19.0584C28.8781 18.8208 28.6823 18.6271 28.4461 18.6271C28.2921 18.6271 28.159 18.6995 28.0677 18.8215Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
