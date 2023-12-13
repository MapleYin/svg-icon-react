import React from 'react'

export function N27Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.0209 17.2683L11.3226 17.2683C11.4952 17.2683 11.6213 17.1317 11.6213 16.9682C11.6213 16.8032 11.4945 16.6681 11.3226 16.6681L7.56954 16.6681L7.56954 16.6256L10.1241 12.966C11.0431 11.6424 11.3799 10.7237 11.3799 9.68448C11.3799 8.15987 10.6047 6.8833 9.05078 6.8833C7.61406 6.8833 6.70693 8.23028 6.70693 9.58496C6.70693 9.70381 6.78692 9.87872 7.00772 9.87872C7.16016 9.87872 7.27579 9.77628 7.28331 9.642C7.43526 8.37823 7.96846 7.48214 9.06826 7.48214C10.3 7.48214 10.803 8.69024 10.803 9.70743C10.803 10.6399 10.5147 11.4258 9.68447 12.6071L6.7874 16.653C6.70947 16.7895 6.69648 16.8813 6.69648 16.9863C6.69648 17.1765 6.84141 17.2683 7.0209 17.2683ZM14.0174 17.3882C14.2089 17.3882 14.2945 17.2851 14.3593 17.1033L17.7563 7.93439C17.7917 7.81124 17.8342 7.64679 17.8342 7.50548C17.8342 7.24288 17.6706 7.06456 17.371 7.06456L13.1611 7.06456C12.9892 7.06456 12.8617 7.19268 12.8617 7.36466C12.8617 7.53663 12.9892 7.66476 13.1611 7.66476L17.1855 7.66476L17.1855 7.72608L13.785 16.7398C13.7418 16.8568 13.7118 16.9677 13.7118 17.0763C13.7118 17.2728 13.854 17.3882 14.0174 17.3882Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
