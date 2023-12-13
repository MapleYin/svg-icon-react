import React from 'react'

export function N47Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.016 17.3693C10.181 17.3693 10.323 17.1867 10.323 17.0415L10.323 14.76L11.2143 14.76C11.3987 14.76 11.513 14.65 11.513 14.4599C11.513 14.2893 11.3533 14.1793 11.2143 14.1793L10.323 14.1793L10.323 7.42696C10.323 6.99991 10.0422 6.90762 9.83858 6.90762C9.52051 6.90762 9.35898 7.10821 9.20087 7.42013L5.93164 13.8317C5.846 14.0071 5.79648 14.1541 5.79648 14.3149C5.79648 14.5705 5.96709 14.76 6.27852 14.76L9.69023 14.76L9.69023 17.0415C9.69023 17.2181 9.80908 17.3693 10.016 17.3693ZM9.69229 14.1723L6.42803 14.1723L6.42803 14.1493L9.64346 7.76261L9.69229 7.76261ZM13.8918 17.3882C14.0749 17.3882 14.1606 17.2851 14.2344 17.1033L17.6216 7.93439C17.6577 7.81124 17.7086 7.64679 17.7086 7.50548C17.7086 7.24288 17.5359 7.06456 17.237 7.06456L13.0272 7.06456C12.8552 7.06456 12.7277 7.19268 12.7277 7.36466C12.7277 7.53663 12.8552 7.66476 13.0272 7.66476L17.0516 7.66476L17.0516 7.72608L13.651 16.7398C13.6078 16.8568 13.5778 16.9677 13.5778 17.0763C13.5778 17.2728 13.72 17.3882 13.8918 17.3882Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
