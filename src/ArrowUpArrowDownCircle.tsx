import React from 'react'

export function ArrowUpArrowDownCircle({
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
        d='M8.19248 5.87686L4.48848 9.55703C4.40625 9.62178 4.38194 9.69063 4.38194 9.79307C4.38194 9.93009 4.51211 10.0512 4.64005 10.0512C4.70753 10.0512 4.81134 10.0087 4.88448 9.93556L6.80977 8.0173L8.13477 6.6798L8.10615 7.90333L8.10615 18.2311C8.10615 18.3953 8.2461 18.5073 8.39219 18.5073C8.53897 18.5073 8.65098 18.3772 8.65098 18.2311L8.65098 7.91173L8.621 6.6798L9.94736 8.0173L11.8727 9.93624C11.9367 10.0094 12.0496 10.0512 12.108 10.0512C12.245 10.0512 12.3745 9.93077 12.3745 9.79307C12.3745 9.68018 12.3593 9.6295 12.2868 9.55703L8.56465 5.87686C8.45469 5.78575 8.2961 5.77325 8.19248 5.87686ZM16.1376 18.4378L19.8409 14.7583C19.9141 14.6845 19.9384 14.6163 19.9384 14.5125C19.9384 14.3846 19.818 14.2551 19.681 14.2551C19.6037 14.2551 19.5181 14.306 19.4358 14.3603L17.5203 16.2967L16.1856 17.6342L16.2233 16.4029L16.2233 6.0836C16.2233 5.91866 16.084 5.80733 15.9281 5.80733C15.782 5.80733 15.6791 5.93751 15.6791 6.0836L15.6791 16.4036L15.7084 17.6349L14.382 16.2967L12.4574 14.3603C12.3836 14.2871 12.2986 14.2551 12.2123 14.2551C12.0655 14.2551 11.9556 14.3657 11.9556 14.5125C11.9556 14.6436 11.9604 14.6838 12.0426 14.7583L15.7647 18.4378C15.8733 18.538 16.0263 18.5316 16.1376 18.4378Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
