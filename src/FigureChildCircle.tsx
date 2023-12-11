import React from 'react'

export default function FigureChildCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1615 7.9834C13.1276 7.9834 13.8984 7.20352 13.8984 6.25557C13.8984 5.27129 13.1276 4.49981 12.1615 4.49981C11.2143 4.49981 10.4239 5.27129 10.4239 6.25557C10.4239 7.20352 11.2143 7.9834 12.1615 7.9834ZM12.1608 13.8662C12.4043 13.8662 12.6164 14.012 12.6952 14.3218L13.9034 18.8698C14.1482 19.8387 15.4246 19.515 15.2963 18.7061C15.2286 18.2337 14.1948 14.3692 14.0581 13.5196C13.9598 12.9407 13.9898 11.5235 13.9898 10.3595C13.9898 10.1907 14.1292 10.0924 14.2882 10.1523L16.4927 11.0453C16.9558 11.2329 17.3087 11.0328 17.4343 10.7364C17.5703 10.4128 17.4413 9.99288 16.9251 9.78848L14.7676 8.88165C14.1955 8.67657 13.5905 8.52305 12.9451 8.46377C12.7039 8.54737 12.4334 8.58008 12.1608 8.58008C11.8792 8.58008 11.6178 8.54737 11.3682 8.46377C10.7318 8.52305 10.1262 8.67657 9.55411 8.88165L7.39727 9.78848C6.88038 9.99288 6.75206 10.4128 6.88741 10.7364C7.01299 11.0328 7.36592 11.2329 7.82901 11.0453L10.0335 10.1523C10.1932 10.0924 10.3319 10.1907 10.3319 10.3595C10.3319 11.5235 10.3626 12.9407 10.2643 13.5196C10.1178 14.3692 9.09375 18.2337 9.02539 18.7061C8.89776 19.515 10.1741 19.8387 10.4183 18.8698L11.6272 14.3218C11.7053 14.012 11.9181 13.8662 12.1608 13.8662Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}