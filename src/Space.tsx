import React from 'react'

export default function Space({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.6077 12.05' className={className}>
      <path
        d='M0 10.3862C0 11.3739 0.707033 12.05 1.68262 12.05L23.5729 12.05C24.5485 12.05 25.2464 11.3739 25.2464 10.3862L25.2464 6.27033C25.2464 6.13625 25.1367 6.02648 25.0019 6.02648C24.8587 6.02648 24.749 6.13625 24.749 6.27033L24.749 10.3926C24.749 11.0723 24.2689 11.5335 23.5892 11.5335L1.65723 11.5335C0.985947 11.5335 0.506553 11.073 0.506553 10.3926L0.506553 6.27033C0.506553 6.13625 0.387703 6.02648 0.253618 6.02648C0.109768 6.02648 0 6.13625 0 6.27033Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
