import React from 'react'

export default function TimerCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1608 19.1444C16.0035 19.1444 19.1444 16.0035 19.1444 12.1706C19.1444 8.32793 16.0035 5.18701 12.1615 5.18701C11.7913 5.18701 11.6925 5.34444 11.6925 5.5834L11.6925 7.80538C11.6925 7.99551 11.8018 8.11729 11.9751 8.11729C12.1387 8.11729 12.2486 7.99551 12.2486 7.80538L12.2486 5.72618C15.8113 5.81935 18.5982 8.62901 18.5982 12.1706C18.5982 15.7266 15.7259 18.5989 12.1608 18.5989C8.59581 18.5989 5.73185 15.7266 5.73185 12.1706C5.73185 10.3781 6.46036 8.79981 7.61241 7.61163C7.74757 7.49962 7.74054 7.31651 7.62921 7.22403C7.51856 7.10225 7.3586 7.09522 7.25567 7.21973C5.96143 8.48721 5.17793 10.2564 5.17793 12.1706C5.17793 16.0035 8.32725 19.1444 12.1608 19.1444ZM13.0484 12.8768C13.5254 12.3894 13.4082 11.7507 12.8602 11.3357L9.32052 8.71387C8.99776 8.46563 8.63663 8.79747 8.88624 9.13839L11.5172 12.6878C11.9133 13.2177 12.5617 13.3628 13.0484 12.8768Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
