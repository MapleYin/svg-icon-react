import React from 'react'

export default function Trash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.7893 28.8668' className={className}>
      <path
        d='M7.89551 23.6086C8.06114 23.6086 8.15294 23.4805 8.15225 23.3448L7.66104 8.34854C7.66944 8.2129 7.54063 8.12247 7.4043 8.12247C7.25684 8.12247 7.14688 8.21358 7.14756 8.38624L7.63877 23.363C7.63037 23.4902 7.73125 23.6086 7.89551 23.6086ZM11.7279 23.6086C11.8838 23.6086 11.986 23.4896 11.986 23.3448L11.986 8.38624C11.986 8.23175 11.8838 8.12247 11.7279 8.12247C11.5812 8.12247 11.4789 8.23175 11.4789 8.38624L11.4789 23.3448C11.4789 23.4896 11.5812 23.6086 11.7279 23.6086ZM15.5506 23.6177C15.7148 23.6177 15.8157 23.5091 15.8073 23.3728L16.3076 8.39532C16.2992 8.23175 16.1893 8.13223 16.0425 8.13223C15.9152 8.13223 15.7864 8.23106 15.7857 8.36739L15.2945 23.363C15.2938 23.4896 15.385 23.6177 15.5506 23.6177ZM6.66084 4.84122L7.17101 4.84122L7.17101 2.21924C7.17101 1.14737 7.86251 0.521493 9.03838 0.521493L14.3882 0.521493C15.5913 0.521493 16.2828 1.14737 16.2828 2.21924L16.2828 4.84122L16.793 4.84122L16.793 2.23057C16.793 0.828322 15.8879 0 14.3405 0L9.08604 0C7.5666 0 6.66084 0.828322 6.66084 2.23057ZM0.283793 5.09142L23.1714 5.09142C23.33 5.09142 23.4279 4.97462 23.4279 4.83487C23.4279 4.66719 23.3118 4.56856 23.1714 4.56856L0.283793 4.56856C0.135646 4.56856 0 4.68604 0 4.83487C0 4.99347 0.135646 5.09142 0.283793 5.09142ZM6.1499 27.1641L17.2976 27.1641C18.5141 27.1641 19.5958 26.1486 19.6565 24.9685L20.7386 4.9213L20.1712 4.9213L19.1106 24.9289C19.0625 25.8652 18.2488 26.6412 17.295 26.6412L6.13223 26.6412C5.17979 26.6412 4.37452 25.8645 4.31729 24.9289L3.26241 4.94015L2.72637 4.94015L3.80849 24.9601C3.86914 26.1493 4.93135 27.1641 6.1499 27.1641Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
