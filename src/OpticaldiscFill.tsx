import React from 'react'

export default function OpticaldiscFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M10.5126 24.2385C11.063 24.294 11.6063 24.3315 12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 11.6077 24.2856 11.065 24.2308 10.5167L18.0197 11.5058C18.0427 11.7113 18.0545 11.9448 18.0545 12.1706C18.0545 15.4023 15.4198 18.0636 12.1804 18.0643C11.9532 18.0643 11.7274 18.044 11.5205 18.0197ZM24.1369 9.90546C23.8964 8.69003 23.4744 7.53251 22.8989 6.4622L17.429 9.5377C17.6481 9.97393 17.8114 10.4297 17.9266 10.9134ZM22.6043 5.93388C20.8384 3.00283 17.8837 0.868853 14.4154 0.188188L13.4067 6.41807C14.9534 6.77735 16.2739 7.70909 17.1246 8.99961ZM13.8041 0.0943387C13.2621 0.0381845 12.7167 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 12.7188 0.0381845 13.2558 0.0859404 13.8075L6.32354 12.8178C6.29922 12.6088 6.28672 12.3907 6.28672 12.1706C6.28672 8.94161 8.94161 6.30694 12.1811 6.30694C12.3803 6.30694 12.5879 6.31944 12.7955 6.32491ZM0.17979 14.409C0.430083 15.6237 0.843658 16.7883 1.4003 17.8579L6.88839 14.7845C6.66925 14.3483 6.50665 13.8743 6.40899 13.4004ZM1.70538 18.3862C3.48038 21.3243 6.45322 23.4576 9.91044 24.1453L10.8995 17.9272C9.37305 17.5687 8.04346 16.6104 7.19415 15.3219ZM12.1804 17.4757C15.0938 17.4757 17.475 15.0848 17.475 12.1706C17.475 9.26759 15.0841 6.88712 12.1804 6.88712C9.2669 6.88712 6.8669 9.26827 6.8669 12.1706C6.8669 15.0952 9.24737 17.4757 12.1804 17.4757ZM12.1615 15.0819C10.5649 15.0819 9.25088 13.7686 9.25088 12.1629C9.25088 10.5845 10.5649 9.28994 12.1615 9.28994C13.7672 9.28994 15.0715 10.5845 15.0715 12.1622C15.0715 13.7686 13.7672 15.0819 12.1615 15.0819ZM12.1615 14.5047C13.4657 14.5054 14.5033 13.4671 14.5033 12.1622C14.5033 10.895 13.4469 9.85811 12.1622 9.85811C10.8748 9.85811 9.81974 10.8957 9.81974 12.1622C9.81974 13.4671 10.8566 14.5131 12.1615 14.5047Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}