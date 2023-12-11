import React from 'react'

export default function ForwardEnd({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.6842 19.0617' className={className}>
      <path
        d='M16.0777 19.0617C16.2124 19.0617 16.3229 18.9526 16.3229 18.8088L16.3229 0.263384C16.3229 0.127932 16.2124 0.00976562 16.0777 0.00976562C15.9331 0.00976562 15.8227 0.127932 15.8227 0.263384L15.8227 18.8088C15.8227 18.9526 15.9331 19.0617 16.0777 19.0617ZM1.1627 18.563C1.48614 18.563 1.86973 18.3879 2.11983 18.2423L15.3024 10.4902C15.6478 10.294 15.891 9.98184 15.891 9.51758C15.891 9.06172 15.6575 8.78662 15.3024 8.57217L2.11983 0.820118C1.85088 0.674512 1.48614 0.490332 1.1627 0.490332C0.590529 0.490332 0 0.919631 0 1.91172L0 17.1507C0 18.1428 0.590529 18.563 1.1627 18.563ZM1.14805 18.0896C0.879403 18.0896 0.474522 17.8802 0.474522 17.2394L0.474522 1.82306C0.474522 1.17316 0.879403 0.972863 1.14805 0.972863C1.31837 0.972863 1.48028 1.01124 1.79161 1.18155L14.9522 8.91739C15.2663 9.10723 15.4191 9.2587 15.4191 9.51758C15.4191 9.78487 15.2572 9.97403 14.9522 10.1359L1.79161 17.8809C1.49913 18.0512 1.31837 18.0896 1.14805 18.0896Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}