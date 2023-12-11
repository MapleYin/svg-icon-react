import React from 'react'

export default function N44Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.54746 17.3693C9.71241 17.3693 9.8544 17.1867 9.8544 17.0415L9.8544 14.76L10.745 14.76C10.9295 14.76 11.0438 14.65 11.0438 14.4599C11.0438 14.2893 10.8939 14.1793 10.745 14.1793L9.8544 14.1793L9.8544 7.42696C9.8544 6.99991 9.57295 6.90762 9.36934 6.90762C9.05195 6.90762 8.89882 7.10821 8.73163 7.42013L5.46309 13.8317C5.37744 14.0071 5.32725 14.1541 5.32725 14.3149C5.32725 14.5705 5.49854 14.76 5.80996 14.76L9.22168 14.76L9.22168 17.0415C9.22168 17.2181 9.34053 17.3693 9.54746 17.3693ZM9.22373 14.1723L5.95879 14.1723L5.95879 14.1493L9.1749 7.76261L9.22373 7.76261ZM16.6956 17.3693C16.8696 17.3693 17.0026 17.1867 17.0026 17.0415L17.0026 14.76L17.8939 14.76C18.0776 14.76 18.2017 14.65 18.2017 14.4599C18.2017 14.2893 18.042 14.1793 17.8939 14.1793L17.0026 14.1793L17.0026 7.42696C17.0026 6.99991 16.7211 6.90762 16.5175 6.90762C16.2001 6.90762 16.0477 7.10821 15.8889 7.42013L12.6112 13.8317C12.5256 14.0071 12.4845 14.1541 12.4845 14.3149C12.4845 14.5705 12.6558 14.76 12.9672 14.76L16.3789 14.76L16.3789 17.0415C16.3789 17.2181 16.4887 17.3693 16.6956 17.3693ZM16.3719 14.1723L13.1069 14.1723L13.1069 14.1493L16.3231 7.76261L16.3719 7.76261Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}