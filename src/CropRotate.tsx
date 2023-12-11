import React from 'react'

export default function CropRotate({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.6933 27.3639' className={className}>
      <path
        d='M22.1947 8.51076C22.336 8.51076 22.4837 8.38127 22.4837 8.22111L22.4837 6.89045C22.4837 3.93664 20.4295 2.09406 17.1537 2.09406L17.0031 2.09406L17.0031 0.388981C17.0031 0.0275526 16.58-0.111901 16.2581 0.0991359L13.4617 1.97804C13.0656 2.2465 13.074 2.56379 13.4617 2.82385L16.2581 4.71047C16.58 4.93059 17.0031 4.79045 17.0031 4.42267L17.0031 2.66721L17.153 2.66721C20.0856 2.66721 21.9142 4.29533 21.9142 6.92746L21.9142 8.22111C21.9142 8.38127 22.0437 8.51076 22.1947 8.51076ZM1.13291 18.8427C0.991603 18.8427 0.843262 18.9722 0.843262 19.1233L0.843262 20.4546C0.843262 23.4084 2.89746 25.2594 6.17324 25.2594L6.32451 25.2594L6.32451 26.9652C6.32451 27.3259 6.74766 27.4654 7.06885 27.2452L9.86592 25.367C10.2613 25.0986 10.2529 24.7813 9.86592 24.5212L7.06885 22.643C6.74766 22.4229 6.32451 22.563 6.32451 22.9224L6.32451 24.6772L6.17393 24.6772C3.24141 24.6772 1.41348 23.0491 1.41348 20.4267L1.41348 19.1233C1.41348 18.9722 1.28399 18.8427 1.13291 18.8427Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M23.3319 18.7499C23.3319 18.5886 23.199 18.5025 23.0733 18.5025L7.06886 18.5025C6.9337 18.5025 6.83605 18.4048 6.83605 18.2696L6.83605 2.30901C6.83605 2.19035 6.75763 2.03723 6.60333 2.03723C6.44903 2.03723 6.32451 2.19035 6.32451 2.30901L6.32451 18.5076C6.32451 18.8365 6.52237 19.0253 6.85127 19.0253L23.0733 19.0253C23.199 19.0253 23.3319 18.9022 23.3319 18.7499ZM0 8.60921C0 8.76145 0.133595 8.85667 0.259282 8.85667L16.2588 8.85667C16.3933 8.85667 16.4909 8.95364 16.4909 9.07972L16.4909 25.0445C16.4909 25.154 16.5693 25.3078 16.7236 25.3078C16.8779 25.3078 17.0031 25.154 17.0031 25.0445L17.0031 8.85149C17.0031 8.5219 16.8053 8.33313 16.4757 8.33313L0.259282 8.33313C0.133595 8.33313 0 8.45696 0 8.60921Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}