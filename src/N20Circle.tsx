import React from 'react'

export default function N20Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.73174 17.2683L11.0418 17.2683C11.2054 17.2683 11.3405 17.1317 11.3405 16.9682C11.3405 16.8032 11.2138 16.6681 11.0418 16.6681L7.28946 16.6681L7.28946 16.6256L9.84336 12.966C10.763 11.6424 11.0998 10.7237 11.0998 9.68448C11.0998 8.15987 10.3246 6.8833 8.76094 6.8833C7.33398 6.8833 6.42617 8.23028 6.42617 9.58496C6.42617 9.70381 6.50615 9.87872 6.72695 9.87872C6.8794 9.87872 6.99571 9.77628 7.00254 9.642C7.1545 8.37823 7.68838 7.48214 8.7791 7.48214C10.0102 7.48214 10.5223 8.69024 10.5223 9.70743C10.5223 10.6399 10.234 11.4258 9.40371 12.6071L6.50732 16.653C6.42031 16.7895 6.41572 16.8813 6.41572 16.9863C6.41572 17.1765 6.56064 17.2683 6.73174 17.2683ZM15.5896 17.4488C17.8507 17.4488 18.3261 14.2857 18.3261 12.1706C18.3261 10.0464 17.8507 6.8833 15.5896 6.8833C13.3277 6.8833 12.8523 10.0464 12.8523 12.1706C12.8523 14.2857 13.3277 17.4488 15.5896 17.4488ZM15.5896 16.857C13.7897 16.857 13.5101 13.8972 13.5101 12.1706C13.5101 10.4343 13.7897 7.47511 15.5896 7.47511C17.3979 7.47511 17.6781 10.4343 17.6781 12.1706C17.6781 13.8972 17.3979 16.857 15.5896 16.857Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}