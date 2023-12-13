import React from 'react'

export function BackwardEnd({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.6842 19.0617' className={className}>
      <path
        d='M0.245904 19.0617C0.389754 19.0617 0.500206 18.9526 0.500206 18.8088L0.500206 0.263384C0.500206 0.127932 0.389754 0.00976562 0.245904 0.00976562C0.110452 0.00976562 0 0.127932 0 0.263384L0 18.8088C0 18.9526 0.110452 19.0617 0.245904 19.0617ZM15.1609 18.563C15.733 18.563 16.3229 18.1428 16.3229 17.1507L16.3229 1.91172C16.3229 0.919631 15.733 0.490332 15.1609 0.490332C14.8367 0.490332 14.472 0.674512 14.203 0.820118L1.02042 8.57217C0.666027 8.78662 0.43253 9.06172 0.43253 9.51758C0.43253 9.98184 0.675109 10.294 1.02042 10.4902L14.203 18.2423C14.4531 18.3879 14.8367 18.563 15.1609 18.563ZM15.1755 18.0896C15.0045 18.0896 14.8237 18.0512 14.5319 17.8809L1.37063 10.1359C1.06633 9.97403 0.903734 9.78487 0.903734 9.51758C0.903734 9.2587 1.05657 9.10723 1.37063 8.91739L14.5319 1.18155C14.8426 1.01124 15.0045 0.972863 15.1755 0.972863C15.4435 0.972863 15.8483 1.17316 15.8483 1.82306L15.8483 17.2394C15.8483 17.8802 15.4435 18.0896 15.1755 18.0896Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
