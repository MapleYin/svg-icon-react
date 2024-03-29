import React from 'react'

export function FuelpumpCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.842 19.1033L15.842 6.35938C15.842 5.27813 15.2665 4.66563 14.1482 4.66563L8.3877 4.66563C7.2876 4.66563 6.69395 5.25928 6.69395 6.35938L6.69395 19.1033ZM8.74161 11.6117C8.50469 11.6117 8.35206 11.4409 8.35206 11.2158L8.35206 6.89561C8.35206 6.67051 8.50469 6.51924 8.74161 6.51924L13.8132 6.51924C14.0124 6.51924 14.1839 6.67051 14.1839 6.89561L14.1839 11.2158C14.1839 11.4409 14.0124 11.6117 13.8132 11.6117ZM5.74649 19.1182C5.74649 19.2819 5.86212 19.4164 6.02589 19.4164L16.3146 19.4164C16.6557 19.4164 16.7895 19.2819 16.7895 19.1182C16.7895 18.9726 16.6557 18.8304 16.3146 18.8304L6.02589 18.8304C5.86212 18.8304 5.74649 18.9726 5.74649 19.1182ZM15.4557 16.9858L17.9622 16.9858C18.7969 16.9858 19.2146 16.5772 19.2146 15.7803L19.2146 7.82589C19.2146 7.39551 19.1253 7.09073 18.8741 6.72169L17.9023 5.16602C17.6527 4.77559 17.1355 5.09835 17.3858 5.48106L18.3946 7.05489C18.5586 7.31651 18.6067 7.47911 18.6067 7.82589L18.6067 15.7251C18.6067 16.1443 18.3821 16.3683 17.944 16.3683L15.4557 16.3683ZM17.5534 9.2922L18.8057 10.8124L18.8057 6.80596L17.55 8.62256C17.3835 8.842 17.4037 9.09298 17.5534 9.2922Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
