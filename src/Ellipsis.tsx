import React from 'react'

export function Ellipsis({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.2851 3.72637' className={className}>
      <path
        d='M18.0654 3.70684C19.0891 3.70684 19.9238 2.87286 19.9238 1.8583C19.9238 0.833986 19.0891 0 18.0654 0C17.0509 0 16.2162 0.833986 16.2162 1.8583C16.2162 2.87286 17.0509 3.70684 18.0654 3.70684Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.96153 3.70684C10.9768 3.70684 11.8108 2.87286 11.8108 1.8583C11.8108 0.833986 10.9768 0 9.96153 0C8.9379 0 8.113 0.833986 8.113 1.8583C8.113 2.87286 8.9379 3.70684 9.96153 3.70684Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.84922 3.70684C2.87286 3.70684 3.69844 2.87286 3.69844 1.8583C3.69844 0.833986 2.87286 0 1.84922 0C0.833986 0 0 0.833986 0 1.8583C0 2.87286 0.833986 3.70684 1.84922 3.70684Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
