import React from 'react'

export function N3Lane({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 18.8111' className={className}>
      <path
        d='M0 18.5596C0 18.702 0.118166 18.8111 0.251567 18.8111C0.393367 18.8111 0.511533 18.702 0.511533 18.5596L0.511533 0.299028C0.511533 0.165627 0.393367 0.0474608 0.251567 0.0474608C0.118166 0.0474608 0 0.165627 0 0.299028ZM21.4484 18.5596C21.4484 18.702 21.5666 18.8111 21.6993 18.8111C21.8418 18.8111 21.96 18.702 21.96 18.5596L21.96 0.299028C21.96 0.165627 21.8418 0.0474608 21.6993 0.0474608C21.5666 0.0474608 21.4484 0.165627 21.4484 0.299028Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.9996 14.9261C12.8974 14.9261 14.3103 13.6593 14.3103 11.8578C14.3103 10.3366 13.3275 9.32989 11.8339 9.21201L11.8339 9.24766C13.0022 9.00986 13.9203 8.11299 13.9203 6.71631C13.9203 5.15488 12.7279 4.00869 10.9333 4.00869C9.52451 4.00869 8.48838 4.77861 8.07461 5.94756C7.99785 6.14082 7.95108 6.39063 7.95108 6.60342C7.95108 6.8124 8.06533 6.95372 8.26504 6.95372C8.48585 6.95372 8.5463 6.77657 8.58311 6.57598C8.79229 5.46729 9.64366 4.64161 10.934 4.64161C12.25 4.64161 13.2333 5.44122 13.2333 6.75791C13.2333 8.10664 12.1971 8.94326 10.8106 8.94326L9.92071 8.94326C9.73623 8.94326 9.60039 9.07002 9.60039 9.26084C9.60039 9.44463 9.7376 9.57842 9.92071 9.57842L10.8302 9.57842C12.4623 9.57842 13.6164 10.3076 13.6164 11.881C13.6164 13.2744 12.5529 14.2904 11.001 14.2904C9.64454 14.2904 8.59835 13.5061 8.38077 12.3372C8.34327 12.14 8.26963 11.9518 8.04454 11.9518C7.83916 11.9518 7.72715 12.1085 7.72715 12.3041C7.72715 12.526 7.77461 12.7569 7.86953 12.96C8.35938 14.2768 9.59629 14.9261 10.9996 14.9261Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
