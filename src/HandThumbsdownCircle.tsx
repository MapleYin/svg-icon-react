import React from 'react'

export default function HandThumbsdownCircle({
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
        d='M19.1306 9.79376C19.1306 7.71641 17.8903 5.9627 16.1548 5.9627L14.4913 5.9627C15.9075 6.82413 16.5543 8.20811 16.5439 9.88096C16.5146 11.8106 15.8142 12.9106 15.3113 13.6898L16.4262 13.6898C17.9964 13.6898 19.1306 11.9758 19.1306 9.79376ZM16.0135 9.86143C16.0064 7.27901 13.9675 5.29366 10.6917 5.29161L9.71856 5.30001C8.80264 5.29932 8.13926 5.34044 7.75001 5.45626C7.20381 5.58389 6.65762 5.92364 6.65762 6.60518C6.65762 6.85909 6.73575 7.07393 6.83204 7.21973C6.88087 7.31671 6.8711 7.37598 6.78389 7.42413C6.34581 7.62647 5.99356 8.00938 5.99356 8.57305C5.99356 8.87715 6.07237 9.16876 6.23838 9.36338C6.31651 9.47921 6.30674 9.55938 6.17071 9.63682C5.84844 9.81329 5.64337 10.2207 5.64337 10.6888C5.64337 11.0104 5.74102 11.3619 5.93565 11.5279C6.04307 11.6158 6.01446 11.7023 5.89659 11.8C5.69219 11.9765 5.54639 12.2987 5.54639 12.7062C5.54639 13.38 6.07237 13.945 6.77344 13.945L9.25889 13.945C9.88389 13.945 10.3206 14.2666 10.3206 14.7835C10.3206 15.7287 9.12354 17.4727 9.12354 18.7192C9.12354 19.3631 9.54346 19.7523 10.0883 19.7523C10.587 19.7523 10.8486 19.4119 11.1298 18.8846C12.1552 16.8295 13.5769 15.1818 14.6393 13.7672C15.5636 12.5604 16.0121 11.5279 16.0135 9.86143Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
