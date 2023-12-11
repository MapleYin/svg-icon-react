import React from 'react'

export default function FigureWaveCircle({
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
        d='M11.2662 20.476C11.6623 20.476 11.8931 20.2103 11.8931 19.7717L11.8931 14.1824C11.8931 13.9823 12.0005 13.8365 12.1608 13.8365C12.3373 13.8365 12.4266 13.9642 12.4266 14.1824L12.4266 19.7717C12.4266 20.1914 12.6957 20.476 13.1107 20.476C13.4795 20.476 13.7368 20.2103 13.7368 19.7717L13.7368 10.2153C13.7368 10.0096 13.8449 9.86446 14.0019 9.86446C14.186 9.86446 14.2753 9.99141 14.2753 10.2153L14.2753 14.3391C14.2753 14.7274 14.4963 14.9652 14.8533 14.9652C15.1824 14.9652 15.4021 14.7274 15.4021 14.3391L15.4021 10.2354C15.4021 8.42227 14.5194 7.70509 12.2076 7.70509L11.2354 7.70509C10.81 7.70509 10.6769 7.60743 10.3777 7.40801L9.321 6.70079L9.12705 4.22803C9.08867 3.82012 8.87676 3.60254 8.52881 3.61299C8.19062 3.65206 7.97168 3.89893 8.00098 4.28868L8.15791 6.54981C8.19629 7.01358 8.34824 7.3547 8.70049 7.58975L10.2864 8.71671C10.4942 8.85548 10.5919 9.09757 10.5919 9.42686L10.5919 19.7717C10.5919 20.1914 10.852 20.476 11.2662 20.476ZM12.2076 6.9629C13.0788 6.9629 13.747 6.28428 13.747 5.42491C13.747 4.56212 13.097 3.87579 12.2076 3.87579C11.363 3.87579 10.678 4.56212 10.678 5.42491C10.678 6.26612 11.363 6.9629 12.2076 6.9629Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}