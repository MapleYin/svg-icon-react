import React from 'react'

export default function RecordingtapeCircle({
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
        d='M4.35283 12.1706C4.35283 14.0908 5.90127 15.6399 7.82149 15.6399L16.4995 15.6399C18.4204 15.6399 19.9961 14.0908 19.9961 12.1706C19.9961 10.2497 18.4204 8.68174 16.4995 8.68174C14.5786 8.68174 13.0483 10.2497 13.0483 12.1706C13.0483 13.3513 13.6179 14.4286 14.5691 15.0815L9.75187 15.0815C10.7129 14.4286 11.3006 13.3513 11.3006 12.1706C11.3006 10.2497 9.74239 8.68174 7.82149 8.68174C5.90127 8.68174 4.35283 10.2497 4.35283 12.1706ZM4.90216 12.1699C4.90216 10.5609 6.21319 9.24991 7.82217 9.24991C9.41299 9.24991 10.7233 10.5609 10.7233 12.1699C10.7233 13.7712 9.41367 15.0725 7.82217 15.0725C6.21251 15.0725 4.90216 13.7796 4.90216 12.1699ZM13.6165 12.1699C13.6165 10.5609 14.908 9.24991 16.4988 9.24991C18.1078 9.24991 19.4377 10.5609 19.4377 12.1699C19.4377 13.7796 18.1085 15.0725 16.4988 15.0725C14.9164 15.0725 13.6165 13.7712 13.6165 12.1699Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}