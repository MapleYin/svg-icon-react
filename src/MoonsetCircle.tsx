import React from 'react'

export default function MoonsetCircle({
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
        d='M15.2245 4.40518C15.0469 4.40518 14.911 4.53399 14.911 4.69347L14.911 8.09405L14.9494 8.94766L14.4208 8.40928L13.2583 7.2377C13.1956 7.17637 13.1218 7.11641 13.0116 7.11641C12.836 7.11641 12.7022 7.2502 12.7022 7.43419C12.7022 7.5171 12.7511 7.60841 12.871 7.73604L15.0155 9.8919C15.0517 9.93643 15.1514 9.9587 15.2245 9.9587C15.2977 9.9587 15.3883 9.93643 15.4244 9.8919L17.5696 7.73604C17.7161 7.59864 17.7468 7.5171 17.7468 7.43419C17.7468 7.2502 17.6039 7.11641 17.4283 7.11641C17.3559 7.11641 17.2709 7.13868 17.2096 7.20069L16.0239 8.41563L15.4996 8.94063L15.5289 8.09405L15.5289 4.69347C15.5289 4.53399 15.4022 4.40518 15.2245 4.40518ZM4.49073 17.7843L19.8296 17.7843C20.0065 17.7843 20.1172 17.6673 20.1172 17.5085C20.1172 17.3399 20.0072 17.2223 19.8296 17.2223L4.49073 17.2223C4.33194 17.2223 4.20313 17.349 4.20313 17.5085C4.20313 17.6673 4.33263 17.7843 4.49073 17.7843ZM8.25088 16.5354L16.4887 16.5354C17.0094 16.0672 17.452 15.4858 17.7563 14.8116C17.8462 14.6667 17.8351 14.5064 17.7619 14.4409C17.6811 14.3614 17.55 14.3321 17.3785 14.4109C16.7896 14.6153 16.1576 14.7682 15.2715 14.7682C11.8241 14.7682 9.77091 12.6897 9.77091 9.2004C9.77091 8.36739 9.91602 7.65108 10.2133 7.03839C10.2858 6.86759 10.2746 6.71632 10.1763 6.60548C10.0675 6.50372 9.88624 6.50167 9.70362 6.6293C7.78751 7.6878 6.48663 9.63663 6.48663 12.1466C6.48663 13.9315 7.12588 15.4792 8.25088 16.5354Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}