import React from 'react'

export function N02Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.65469 17.4488C10.9158 17.4488 11.3912 14.2857 11.3912 12.1706C11.3912 10.0464 10.9158 6.8833 8.65469 6.8833C6.39287 6.8833 5.91748 10.0464 5.91748 12.1706C5.91748 14.2857 6.39287 17.4488 8.65469 17.4488ZM8.65469 16.857C6.84571 16.857 6.56612 13.8972 6.56612 12.1706C6.56612 10.4343 6.84571 7.47511 8.65469 7.47511C10.4539 7.47511 10.7342 10.4343 10.7342 12.1706C10.7342 13.8972 10.4539 16.857 8.65469 16.857ZM13.2393 17.2683L17.5402 17.2683C17.7129 17.2683 17.8481 17.1317 17.8481 16.9682C17.8481 16.8032 17.7122 16.6681 17.5402 16.6681L13.797 16.6681L13.797 16.6256L16.3516 12.966C17.2705 11.6424 17.5983 10.7237 17.5983 9.68448C17.5983 8.15987 16.8321 6.8833 15.2685 6.8833C13.8324 6.8833 12.9337 8.23028 12.9337 9.58496C12.9337 9.70381 13.0137 9.87872 13.2254 9.87872C13.3876 9.87872 13.5032 9.77628 13.5017 9.642C13.662 8.37823 14.1959 7.48214 15.2866 7.48214C16.5184 7.48214 17.0214 8.69024 17.0214 9.70743C17.0214 10.6399 16.7415 11.4258 15.9022 12.6071L13.0149 16.653C12.9278 16.7895 12.9148 16.8813 12.9148 16.9863C12.9148 17.1765 13.0682 17.2683 13.2393 17.2683Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
