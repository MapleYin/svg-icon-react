import React from 'react'

export default function N37SquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM5.60879 7.6041C5.53135 7.87617 5.51045 8.10078 5.51045 8.22481C5.51045 8.41426 5.60996 8.53536 5.7874 8.53536C6.01524 8.53536 6.03936 8.39659 6.08321 8.17852C6.23311 7.2045 6.81787 6.33839 7.90928 6.33839C9.04521 6.33839 9.66699 7.26016 9.66699 8.3961C9.66699 9.57315 8.90918 10.5151 7.73916 10.5151L7.13262 10.5151C6.92363 10.5151 6.86113 10.6594 6.86113 10.7943C6.86113 10.9475 6.97949 11.0819 7.13262 11.0819L7.74961 11.0819C9.11084 11.0819 9.92793 11.8348 9.92793 13.335C9.92793 14.5372 9.31181 15.6397 7.97695 15.6397C6.74405 15.6397 6.03916 14.683 5.91016 13.766C5.89356 13.548 5.83242 13.4253 5.60527 13.4253C5.44736 13.4253 5.33535 13.5534 5.33535 13.7295C5.33535 13.8905 5.38349 14.1801 5.45185 14.3761C5.78593 15.4578 6.66357 16.2329 7.95811 16.2329C9.46504 16.2329 10.5682 15.0799 10.5682 13.293C10.5682 11.9855 9.93311 10.8997 8.60889 10.7825L8.60889 10.7525C9.75352 10.4673 10.2745 9.4042 10.2745 8.32862C10.2745 6.84463 9.36895 5.75567 7.90928 5.75567C6.68174 5.75567 5.94355 6.49854 5.60879 7.6041ZM12.0765 5.91465C11.9038 5.91465 11.7757 6.04346 11.7757 6.21612C11.7757 6.38038 11.9038 6.50919 12.0765 6.50919L16.0882 6.50919L16.0882 6.5712L12.701 15.5693C12.6578 15.6786 12.6278 15.7888 12.6278 15.898C12.6278 16.0861 12.7609 16.2113 12.9341 16.2113C13.1179 16.2113 13.2042 16.0998 13.269 15.916L16.6525 6.7711C16.6978 6.64727 16.7402 6.49122 16.7402 6.34923C16.7402 6.09366 16.5669 5.91465 16.275 5.91465Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}