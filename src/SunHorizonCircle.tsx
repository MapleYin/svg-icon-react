import React from 'react'

export default function SunHorizonCircle({
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
        d='M4.20704 13.69L6.93369 13.69C7.12452 13.69 7.217 13.5989 7.217 13.4011C7.217 13.25 7.10567 13.1219 6.93369 13.1219L4.20704 13.1219C4.05391 13.1219 3.9251 13.2507 3.9251 13.4011C3.9251 13.5794 4.05391 13.69 4.20704 13.69ZM8.29561 10.1176C8.34903 10.208 8.5587 10.2094 8.65753 10.0924C8.80313 9.95655 8.73682 9.77412 8.65547 9.69278L6.72862 7.76592C6.62774 7.63711 6.446 7.70411 6.34786 7.81973C6.24971 7.91925 6.24971 8.09054 6.35967 8.18165ZM15.6726 10.0924C15.7714 10.2087 15.9713 10.2087 16.0352 10.1176L17.9697 8.18165C18.0797 8.09054 18.0804 7.91925 17.9822 7.81973C17.8834 7.70274 17.6926 7.6378 17.6015 7.76592L15.6648 9.69278C15.5919 9.77481 15.5276 9.95655 15.6726 10.0924ZM17.3866 13.69L20.1224 13.69C20.2943 13.69 20.405 13.5982 20.405 13.4011C20.405 13.2325 20.2943 13.1219 20.1224 13.1219L17.3866 13.1219C17.2237 13.1219 17.1124 13.25 17.1124 13.4011C17.1124 13.5801 17.2523 13.69 17.3866 13.69ZM15.8738 13.5859C15.8738 11.5254 14.2207 9.87159 12.1602 9.87159C10.1003 9.87159 8.45625 11.5254 8.45625 13.5859C8.45625 14.2713 8.61748 14.9015 8.93789 15.466L15.3824 15.466C15.7028 14.9015 15.8738 14.2713 15.8738 13.5859ZM4.20636 16.6924L20.123 16.6924C20.3014 16.6924 20.405 16.5922 20.405 16.4223C20.405 16.2523 20.293 16.1535 20.123 16.1535L4.20636 16.1535C4.0462 16.1535 3.9251 16.2621 3.9251 16.4223C3.9251 16.5922 4.04688 16.6924 4.20636 16.6924ZM12.4484 7.81104L12.4484 5.08439C12.4484 4.89356 12.3385 4.80245 12.1602 4.80245C11.9909 4.80245 11.881 4.89356 11.881 5.08439L11.881 7.81104C11.881 7.96485 12.0091 8.09503 12.1602 8.09503C12.3392 8.09503 12.4484 7.93624 12.4484 7.81104Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}