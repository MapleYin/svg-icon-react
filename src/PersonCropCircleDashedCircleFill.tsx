import React from 'react'

export default function PersonCropCircleDashedCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM6.57276 17.2749C5.99073 16.6629 5.57833 15.9728 5.23224 15.2429L4.74102 15.4628C5.97764 18.2356 8.92979 20.2802 12.1608 20.2802C15.401 20.2802 18.3538 18.2356 19.5814 15.4628L19.0895 15.2429C18.744 15.9818 18.3316 16.6811 17.7308 17.2937C17.0914 16.1648 14.9907 14.7453 12.1608 14.7453C9.33165 14.7453 7.23097 16.1648 6.57276 17.2749ZM4.04151 12.1706C4.04151 13.1828 4.23682 14.1859 4.59541 15.1096L5.08526 14.8903C4.76007 14.0503 4.5961 13.116 4.5961 12.1706C4.5961 11.1875 4.74122 10.2818 5.08526 9.46905L4.59541 9.22188C4.23682 10.1267 4.04151 11.1486 4.04151 12.1706ZM19.2364 9.46905C19.5812 10.2818 19.7451 11.1875 19.7451 12.1706C19.7451 13.116 19.563 14.0503 19.2364 14.8903L19.7263 15.1096C20.0849 14.1859 20.299 13.1828 20.299 12.1706C20.299 11.1486 20.0849 10.1644 19.7263 9.24073ZM9.28135 10.3002C9.28135 12.0859 10.532 13.4895 12.1608 13.4901C13.7897 13.4817 15.0592 12.0859 15.0592 10.3002C15.0592 8.59327 13.7526 7.13321 12.1608 7.13321C10.569 7.13321 9.24366 8.59327 9.28135 10.3002ZM4.73125 8.86866L5.23155 9.08858C5.98575 7.40147 7.38194 6.00528 9.0879 5.24132L8.86797 4.7501C7.04024 5.58858 5.56973 7.04092 4.73125 8.86866ZM15.2338 5.24132C16.9481 6.01368 18.3262 7.38263 19.0895 9.08858L19.5995 8.86866C18.7604 7.04092 17.2905 5.56973 15.4621 4.73125ZM9.2212 4.60518L9.45929 5.09503C10.2805 4.74962 11.1784 4.57726 12.1602 4.57726C13.1153 4.57726 14.0496 4.75939 14.8806 5.09503L15.1082 4.60518C14.1846 4.24659 13.1821 4.03243 12.1602 4.03243C11.148 4.03243 10.126 4.24659 9.2212 4.60518Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}