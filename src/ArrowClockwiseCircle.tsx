import React from 'react'

export function ArrowClockwiseCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.90391 12.7468C6.90391 15.7076 9.22022 18.0155 12.1602 18.0155C15.128 18.0155 17.4073 15.7076 17.4073 12.7398C17.4073 12.5937 17.2647 12.4517 17.1367 12.4517C16.9536 12.4517 16.8298 12.5937 16.8298 12.7398C16.8298 15.3771 14.7786 17.4471 12.1602 17.4471C9.53194 17.4471 7.48145 15.3861 7.48145 12.7398C7.48145 10.1304 9.53194 8.08897 12.1602 8.08897C12.8325 8.08897 13.4315 8.14483 13.9363 8.26632L11.4627 10.7386C11.3337 10.8669 11.3107 10.9519 11.3107 11.0752C11.3107 11.2199 11.4318 11.369 11.6233 11.369C11.6901 11.369 11.7758 11.3265 11.8112 11.2819L14.5753 8.39844C14.7034 8.25215 14.7391 8.0084 14.5753 7.8251L11.8775 5.04219C11.7862 4.93204 11.7006 4.87139 11.6045 4.87139C11.413 4.87139 11.2919 5.00225 11.2919 5.18399C11.2919 5.25216 11.2792 5.3378 11.3782 5.42911L13.5841 7.63565C13.1645 7.57979 12.6869 7.51416 12.1835 7.51416C9.21319 7.51416 6.90391 9.79844 6.90391 12.7468Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
