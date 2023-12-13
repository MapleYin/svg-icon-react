import React from 'react'

export function Pencil({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.2347 19.8251' className={className}>
      <path
        d='M2.47886 18.5172L17.905 3.11053L16.7658 1.94343L1.33969 17.341L0.0281654 19.5913C-0.0708582 19.7376 0.113127 19.8775 0.241253 19.8057ZM18.6866 2.3492L19.514 1.53152C19.9832 1.08044 19.9762 0.672725 19.5753 0.271845L19.5598 0.256315C19.1959-0.107554 18.7512-0.0587255 18.3371 0.354655L17.5272 1.17233Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
