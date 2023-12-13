import React from 'react'

export function MillsignCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.31201 16.1871C8.48536 16.1871 8.596 16.0765 8.596 15.8934L8.596 11.9347C8.596 10.4356 9.16671 9.40557 10.3362 9.40557C11.1679 9.40557 11.8859 10.0907 11.8859 10.9285L11.8859 10.9384L9.40566 18.5308C9.37568 18.6291 9.35547 18.7093 9.35547 18.7629C9.35547 18.9287 9.47109 19.0437 9.63828 19.0437C9.76504 19.0437 9.88702 18.9517 9.93018 18.8242L11.8957 12.7813L11.8957 15.8934C11.8957 16.0765 12.0245 16.1871 12.179 16.1871C12.3251 16.1871 12.4539 16.0765 12.4539 15.8934L12.4539 11.6177C12.4539 10.2492 13.1811 9.41534 14.2019 9.41534C15.1389 9.41534 15.7627 10.1096 15.7627 11.3293L15.7627 15.9115C15.7627 16.0953 15.8915 16.2053 16.0376 16.2053C16.1921 16.2053 16.3209 16.0953 16.3209 15.9115L16.3209 11.2666C16.3209 9.73428 15.3827 8.86533 14.2042 8.86533C13.7498 8.86533 13.3806 8.96865 13.0393 9.15644L13.9879 6.20576C13.999 6.14443 14.0192 6.09219 14.0192 6.04834C14.0192 5.88184 13.9029 5.76689 13.7448 5.76689C13.609 5.76689 13.4877 5.85957 13.4445 6.00449L12.1418 10.0492C11.8077 9.32656 11.1275 8.84648 10.2904 8.84648C9.58663 8.84648 8.97276 9.22392 8.56397 9.84394L8.56397 9.22744C8.56397 9.04932 8.43584 8.93232 8.30088 8.93232C8.16524 8.93232 8.01826 9.04229 8.01826 9.22539L8.01826 15.9311C8.01826 16.1142 8.18477 16.1871 8.31201 16.1871Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
