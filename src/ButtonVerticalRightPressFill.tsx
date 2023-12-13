import React from 'react'

export function ButtonVerticalRightPressFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.4993 28.2432' className={className}>
      <path
        d='M5.92696 0.88469C4.32898 1.87715 3.32989 3.64628 3.32989 5.81427L3.32989 22.4171C3.32989 24.5788 4.32319 26.3442 5.91278 27.3389C5.90733 27.3396 5.90157 27.3396 5.89581 27.3396C2.75206 27.3396 0.519341 25.2773 0.519341 22.4171L0.519341 5.81427C0.519341 2.93526 2.7709 0.883404 5.89581 0.883404C5.90638 0.883404 5.91695 0.883428 5.92696 0.88469Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.0632 5.81427L14.0632 11.768L12.5697 12.9571C11.8338 13.5382 11.7598 14.6646 12.5516 15.2736L14.0632 16.4709L14.0632 22.4171C14.0632 25.3204 12.0212 27.3416 9.13723 27.3416C6.27209 27.3416 4.22033 25.3204 4.22033 22.4171L4.22033 5.81427C4.22033 2.91095 6.27209 0.889751 9.13723 0.889751C12.0212 0.889751 14.0632 2.91095 14.0632 5.81427Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.1138 14.5649L16.4991 17.2628C16.8174 17.5127 17.284 17.3526 17.284 16.9691L17.284 14.3801L23.3448 14.3801C23.5179 14.3801 23.6088 14.2703 23.6088 14.1167C23.6088 13.9436 23.5179 13.8429 23.3448 13.8429L17.284 13.8429L17.284 11.2623C17.284 10.8718 16.8195 10.718 16.4991 10.9686L13.1138 13.6568C12.826 13.8853 12.7981 14.3175 13.1138 14.5649Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
