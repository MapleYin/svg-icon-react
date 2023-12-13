import React from 'react'

export function CarCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM8.86211 6.546C8.19893 6.64365 7.55577 6.94346 7.21534 7.6543C7.00049 8.12168 6.56446 9.33692 6.33985 10.4956L5.77618 11.2421C5.3208 11.8258 5.01446 12.3565 5.01446 13.5098L5.01446 16.8655C5.01446 17.2959 5.35694 17.6293 5.78731 17.6293L6.4918 17.6293C6.93125 17.6293 7.26465 17.2959 7.26465 16.8655L7.26465 15.8694C8.6668 15.9476 10.6549 16.0152 12.1615 16.0152C13.687 16.0152 15.6744 15.9476 17.0584 15.8694L17.0584 16.8655C17.0584 17.2959 17.41 17.6293 17.8501 17.6293L18.5351 17.6293C18.9843 17.6293 19.3177 17.2959 19.3177 16.8655L19.3177 13.5098C19.3177 12.3565 19.0211 11.8258 18.565 11.2421L18.0021 10.4956C17.7579 9.33692 17.3316 8.12168 17.1259 7.6543C16.7855 6.94346 16.1423 6.64434 15.4791 6.546C15.0417 6.49717 13.5487 6.46787 12.1615 6.46787C10.7925 6.46787 9.29952 6.49717 8.86211 6.546ZM8.32237 13.4553C8.32237 13.919 7.99395 14.2286 7.55811 14.2286C7.11251 14.2286 6.78409 13.919 6.78409 13.4553C6.78409 13.0188 7.11251 12.6819 7.55811 12.6819C7.99395 12.6819 8.32237 13.0188 8.32237 13.4553ZM17.5571 13.4553C17.5571 13.919 17.2287 14.2286 16.7831 14.2286C16.3473 14.2286 16.0188 13.919 16.0188 13.4553C16.0188 13.0188 16.3473 12.6819 16.7831 12.6819C17.2287 12.6819 17.5571 13.0188 17.5571 13.4553ZM14.2532 13.6508C14.2532 13.9597 14.0343 14.1786 13.6975 14.1786L10.6249 14.1786C10.3069 14.1786 10.088 13.9597 10.088 13.6508C10.088 13.314 10.3069 13.095 10.6249 13.095L13.6975 13.095C14.0343 13.095 14.2532 13.314 14.2532 13.6508ZM15.3578 7.2919C15.9099 7.35821 16.2135 7.62207 16.4256 7.98838C16.63 8.32744 16.9118 9.10098 17.1219 10.0584C17.1525 10.1979 17.1107 10.35 16.8861 10.3312C15.7195 10.253 14.542 10.2042 12.1615 10.2042C9.79923 10.2042 8.62237 10.253 7.45509 10.3312C7.23048 10.35 7.18936 10.1979 7.21934 10.0584C7.4294 9.10098 7.70284 8.32813 7.91563 7.98838C8.11866 7.62207 8.43135 7.35821 8.9834 7.2919C9.50459 7.22354 10.683 7.21241 12.1615 7.21241C13.6582 7.21241 14.8366 7.22286 15.3578 7.2919Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
