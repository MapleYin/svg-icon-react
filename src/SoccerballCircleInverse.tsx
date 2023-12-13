import React from 'react'

export function SoccerballCircleInverse({
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
        d='M12.1608 18.8349C15.7775 18.8349 18.816 15.7775 18.816 12.1888C18.816 8.57276 15.7587 5.51543 12.1602 5.51543C8.55323 5.51543 5.51475 8.57276 5.51475 12.1888C5.51475 15.7775 8.56299 18.8349 12.1608 18.8349ZM12.1608 6.10714C12.9562 6.10714 13.7222 6.25225 14.44 6.54317L12.4774 8.11788L12.4774 9.77442L14.4203 11.2876L15.9883 10.6696L16.7418 8.19835C17.6718 9.2587 18.225 10.6561 18.225 12.3277L16.2819 11.2268L14.5618 11.9208L13.8698 14.1189L14.7431 15.2552L17.3615 15.2936C16.5453 16.6212 15.247 17.637 13.6975 18.0367L14.257 15.6708L13.4619 14.6497L10.8689 14.6497L10.064 15.652L10.6235 18.0367C9.07471 17.637 7.77569 16.6212 6.96925 15.2936L9.59678 15.2552L10.4791 14.1378L9.76895 11.9208L8.04883 11.2268L6.10577 12.3277C6.10577 10.6561 6.65899 9.2587 7.57989 8.19835L8.33272 10.6508L9.90137 11.2876L11.8436 9.77442L11.8436 8.12696L9.89073 6.54317C10.5898 6.2711 11.3662 6.10714 12.1608 6.10714Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
