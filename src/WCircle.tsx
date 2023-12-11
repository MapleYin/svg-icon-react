import React from 'react'

export default function WCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.01104 17.7925C9.29795 17.7925 9.43428 17.663 9.50743 17.3872L12.1288 7.59562L12.1895 7.59562L14.8108 17.3872C14.884 17.663 15.0203 17.7925 15.3072 17.7925C15.5935 17.7925 15.7284 17.6623 15.8029 17.3768L18.4042 6.94112C18.4153 6.87774 18.416 6.87091 18.416 6.83614C18.416 6.67549 18.3117 6.58936 18.1399 6.58936C18.0052 6.58936 17.9252 6.66934 17.8884 6.81163L15.3492 17.011L15.2893 17.011L12.5262 6.96895C12.4712 6.75313 12.3683 6.67315 12.1595 6.67315C11.9688 6.67315 11.8464 6.75313 11.7921 6.96895L9.02901 17.011L8.96905 17.011L6.43126 6.81163C6.39444 6.66934 6.31446 6.58936 6.17901 6.58936C6.00723 6.58936 5.90293 6.67549 5.90293 6.83614C5.90293 6.87091 5.90361 6.87774 5.91543 6.94112L8.51601 17.3768C8.58984 17.6623 8.72481 17.7925 9.01104 17.7925Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}