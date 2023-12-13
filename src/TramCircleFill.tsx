import React from 'react'

export function TramCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM9.17784 4.92627C8.36836 5.01621 7.73721 5.54043 7.51055 6.35626C7.23848 7.29083 6.87559 9.31905 6.87559 11.4862L6.87559 15.4008C6.87559 16.7275 7.59893 17.5042 8.92774 17.551L7.78965 19.3711C7.7249 19.5063 7.76104 19.6155 7.90733 19.6155L8.13809 19.6155C8.24122 19.6155 8.29278 19.5842 8.33458 19.511L8.68751 18.9342L15.6167 18.9342L15.9703 19.511C16.0121 19.5842 16.0728 19.6155 16.185 19.6155L16.3982 19.6155C16.5439 19.6155 16.5975 19.5063 16.5139 19.3711L15.3953 17.551C16.9112 17.5224 17.4552 16.5014 17.4552 15.4008L17.4552 11.4862C17.4552 9.31905 17.0832 7.29083 16.8111 6.35626C16.5845 5.54043 15.9533 5.01621 15.1439 4.92627C14.4033 4.82227 13.3577 4.76231 12.1608 4.76231C10.9647 4.76231 9.91905 4.82227 9.17784 4.92627ZM15.2892 18.4102L9.01573 18.4102L9.55831 17.551L14.7654 17.551ZM15.8493 15.3998C15.8493 15.8147 15.5411 16.1125 15.1457 16.1125C14.7496 16.1125 14.433 15.8147 14.433 15.3998C14.433 15.0121 14.7496 14.7137 15.1457 14.7137C15.5516 14.7137 15.8493 15.0121 15.8493 15.3998ZM9.90616 15.3998C9.90616 15.8154 9.59024 16.1118 9.20323 16.1118C8.78829 16.1118 8.49121 15.8154 8.49121 15.3998C8.49121 15.0121 8.78829 14.7144 9.20323 14.7144C9.59092 14.7144 9.90616 15.0121 9.90616 15.3998ZM14.9155 7.69659C15.3098 7.74473 15.5959 7.99453 15.6636 8.38877C15.8262 9.24307 15.9357 10.2042 15.9357 11.2258L15.9357 12.8464C15.9357 13.309 15.6502 13.6083 15.2149 13.6383C14.4108 13.6912 13.4319 13.74 12.1608 13.74C10.9076 13.7484 9.92871 13.6982 9.09776 13.6383C8.65332 13.6083 8.36787 13.309 8.36787 12.8464L8.36787 11.2258C8.36787 10.2042 8.47735 9.24307 8.64903 8.38877C8.70762 7.99453 8.95674 7.74473 9.30352 7.71475C10.0632 7.63663 10.9973 7.58711 12.1608 7.58711C13.3063 7.58643 14.2403 7.63663 14.9155 7.69659ZM14.0992 6.43653C14.0992 6.57803 14.0338 6.67071 13.8741 6.67071L10.4482 6.67071C10.297 6.67071 10.2231 6.57803 10.2231 6.43653C10.2231 6.30342 10.297 6.21211 10.4482 6.21211L13.8741 6.21211C14.0338 6.21211 14.0992 6.30342 14.0992 6.43653Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
