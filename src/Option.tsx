import React from 'react'

export default function Option({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.3424 23.2256' className={className}>
      <path
        d='M6.62032 0L0.242975 0C0.112503 0 0 0.111135 0 0.249322C0 0.377743 0.112503 0.489562 0.242975 0.489562L6.67334 0.489562C7.18682 0.489562 7.70322 0.842003 7.89853 1.28917L17.3224 22.1883C17.5976 22.8106 18.212 23.2256 19.0528 23.2256L25.7472 23.2256C25.8769 23.2256 25.9811 23.1138 25.9811 22.9763C25.9811 22.8485 25.8769 22.736 25.7472 22.736L19.0019 22.736C18.4479 22.736 18.0063 22.4765 17.8109 22.0384L8.39757 1.17696C8.08731 0.494434 7.3921 0 6.62032 0ZM25.7472 0L15.6869 0C15.5564 0 15.4446 0.119534 15.4446 0.248638C15.4446 0.37706 15.5564 0.488195 15.6869 0.488195L25.7472 0.488195C25.8686 0.488195 25.9804 0.37706 25.9804 0.248638C25.9804 0.119534 25.8686 0 25.7472 0Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}