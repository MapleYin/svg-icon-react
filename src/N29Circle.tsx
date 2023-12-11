import React from 'react'

export default function N29Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.5753 17.2683L10.877 17.2683C11.0496 17.2683 11.1848 17.1317 11.1848 16.9682C11.1848 16.8032 11.0489 16.6681 10.877 16.6681L7.13302 16.6681L7.13302 16.6256L9.6876 12.966C10.6065 11.6424 10.9343 10.7237 10.9343 9.68448C10.9343 8.15987 10.1682 6.8833 8.60518 6.8833C7.17754 6.8833 6.26973 8.23028 6.26973 9.58496C6.26973 9.70381 6.34971 9.87872 6.57051 9.87872C6.72364 9.87872 6.83926 9.77628 6.84678 9.642C6.99805 8.37823 7.53194 7.48214 8.62266 7.48214C9.85439 7.48214 10.3574 8.69024 10.3574 9.70743C10.3574 10.6399 10.0775 11.4258 9.23886 12.6071L6.35088 16.653C6.26387 16.7895 6.25088 16.8813 6.25088 16.9863C6.25088 17.1765 6.4042 17.2683 6.5753 17.2683ZM15.0835 13.7429C16.3484 13.7429 17.1199 12.7834 17.3389 11.5891L17.3877 11.5891C17.3877 11.6651 17.3877 11.7328 17.3877 11.818C17.3877 13.6377 17.1016 16.82 15.1422 16.82C14.2447 16.82 13.6977 16.1535 13.4179 15.1834C13.3343 14.8836 13.2277 14.8 13.0864 14.8C12.8908 14.8 12.7947 14.9218 12.7947 15.1112C12.7947 15.2207 12.824 15.3958 12.891 15.5793C13.2196 16.7289 14.0648 17.4384 15.159 17.4384C17.4703 17.4384 18.0107 14.2181 18.0107 11.9347C18.0107 9.60704 17.3593 6.87559 15.1967 6.87559C13.5222 6.87559 12.6114 8.54209 12.6114 10.396C12.6114 12.1036 13.4317 13.7429 15.0835 13.7429ZM15.189 13.1572C13.8834 13.1572 13.2358 11.724 13.2358 10.4003C13.2358 9.02911 13.8861 7.47511 15.189 7.47511C16.5231 7.47511 17.2176 9.06612 17.2176 10.4003C17.2176 11.754 16.4568 13.1572 15.189 13.1572Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}