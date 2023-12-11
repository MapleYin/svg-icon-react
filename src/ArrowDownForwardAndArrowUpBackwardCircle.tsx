import React from 'react'

export default function ArrowDownForwardAndArrowUpBackwardCircle({
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
        d='M7.24746 11.5443L11.3277 11.5443C11.4568 11.5443 11.58 11.4351 11.58 11.2914L11.58 7.23838C11.58 7.09023 11.4562 6.97548 11.3087 6.97548C11.1696 6.97548 11.0458 7.09023 11.0458 7.23838L11.0458 8.30478L11.0533 10.693L6.86973 6.45508C6.74727 6.33193 6.57481 6.33193 6.47119 6.45439C6.36689 6.55801 6.35849 6.73116 6.47187 6.83409L10.7084 11.0177L8.53525 11.0283L7.24746 11.0102C7.1 11.0102 6.98525 11.134 6.98525 11.2814C6.98525 11.4296 7.1 11.5443 7.24746 11.5443ZM13.0116 17.3092C13.1591 17.3092 13.2836 17.1944 13.2836 17.047L13.2836 15.9715L13.2761 13.5924L17.4597 17.8303C17.5821 17.9534 17.7546 17.9534 17.8582 17.831C17.9625 17.7267 17.9618 17.5535 17.8575 17.4415L13.621 13.2677L15.7942 13.2473L17.0722 13.2661C17.2203 13.2661 17.3442 13.1514 17.3442 13.0032C17.3442 12.8558 17.2203 12.7319 17.0722 12.7319L13.0017 12.7319C12.8726 12.7319 12.7494 12.8496 12.7494 12.9842L12.7494 17.047C12.7494 17.1944 12.8732 17.3092 13.0116 17.3092Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
