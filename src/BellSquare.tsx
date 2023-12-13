import React from 'react'

export function BellSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.85831 15.5901L17.1128 15.5901C17.2691 15.5901 17.365 15.4606 17.365 15.2755C17.365 14.5542 16.7632 13.976 16.2122 13.351C15.3747 12.429 15.4894 10.5306 15.2289 8.74435C14.9678 7.10919 14.2451 5.77051 12.6208 5.40049C12.5122 4.40918 11.8356 3.76963 10.9856 3.76963C10.1264 3.76963 9.45889 4.40918 9.34121 5.40049C7.72598 5.77051 7.02217 7.10919 6.74287 8.74435C6.48174 10.5306 6.57686 12.4108 5.75889 13.351C5.21836 13.9767 4.59698 14.5542 4.59698 15.2755C4.59698 15.4606 4.70196 15.5901 4.85831 15.5901ZM10.9856 18.0771C12.0198 18.0771 12.6774 17.4488 12.8386 16.369L9.12344 16.369C9.29444 17.4488 9.95127 18.0771 10.9856 18.0771Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
