import React from 'react'

export default function Yensign({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.33 21.9668' className={className}>
      <path
        d='M7.99864 21.9668C8.14864 21.9668 8.24024 21.8368 8.24024 21.6945L8.24024 12.3151L15.8712 0.638875C15.9185 0.558209 15.9687 0.490044 15.9687 0.391215C15.9687 0.255079 15.8568 0.164843 15.7264 0.164843C15.6089 0.164843 15.5793 0.193945 15.4637 0.347756L8.02862 11.7486L7.96797 11.7486L0.523839 0.347756C0.407529 0.193945 0.368856 0.164843 0.242291 0.164843C0.130666 0.164843 0 0.255079 0 0.391215C0 0.490044 0.0501955 0.558209 0.0974619 0.638875L7.76543 12.3151L7.76543 21.6945C7.76543 21.8368 7.85703 21.9668 7.99864 21.9668ZM2.55156 12.2582L13.9673 12.2582C14.1141 12.2582 14.2059 12.1455 14.2059 11.9994C14.2059 11.8533 14.1141 11.7406 13.9673 11.7406L2.55156 11.7406C2.40478 11.7406 2.31299 11.8715 2.31299 11.9994C2.31299 12.1274 2.40478 12.2582 2.55156 12.2582ZM2.55156 15.8378L13.9673 15.8378C14.1141 15.8378 14.2059 15.7349 14.2059 15.5881C14.2059 15.4329 14.1329 15.33 13.9673 15.33L2.55156 15.33C2.40478 15.33 2.31299 15.4329 2.31299 15.5881C2.31299 15.716 2.40478 15.8378 2.55156 15.8378Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}