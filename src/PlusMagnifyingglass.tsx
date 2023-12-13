import React from 'react'

export function PlusMagnifyingglass({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.8938 23.7486' className={className}>
      <path
        d='M0 9.16534C0 14.2052 4.13389 18.3391 9.17442 18.3391C11.4262 18.3391 13.4931 17.5256 15.0974 16.1596L22.4502 23.5494C22.549 23.6399 22.7092 23.7396 22.8791 23.7396C23.3055 23.7396 23.5324 23.4079 23.5324 23.0842C23.5324 22.9317 23.4781 22.7827 23.3437 22.6566L15.9838 15.2856C17.4482 13.6611 18.3398 11.5057 18.3398 9.16534C18.3398 4.13389 14.2059 0 9.17442 0C4.13389 0 0 4.13389 0 9.16534ZM0.500206 9.16534C0.500206 4.40411 4.40411 0.491124 9.17442 0.491124C13.9356 0.491124 17.8389 4.40411 17.8389 9.16534C17.8389 13.935 13.9356 17.8389 9.17442 17.8389C4.40411 17.8389 0.500206 13.935 0.500206 9.16534ZM5.47383 9.16534C5.47383 9.31417 5.58926 9.4296 5.72969 9.4296L8.90947 9.4296L8.90947 12.5912C8.90947 12.7589 9.03399 12.8743 9.17442 12.8555C9.32325 12.8743 9.43868 12.74 9.43868 12.5912L9.43868 9.4296L12.6003 9.4296C12.7491 9.4296 12.8646 9.31417 12.8646 9.16534C12.8646 9.02491 12.7491 8.90039 12.6003 8.90039L9.43868 8.90039L9.43868 5.72061C9.43868 5.58018 9.32325 5.45567 9.17442 5.45567C9.03399 5.45567 8.90947 5.58018 8.90947 5.72061L8.90947 8.90039L5.72969 8.90039C5.58926 8.90039 5.47383 9.02491 5.47383 9.16534Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
