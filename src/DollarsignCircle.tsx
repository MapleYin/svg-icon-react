import React from 'react'

export default function DollarsignCircle({
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
        d='M12.1602 19.018C12.3183 19.018 12.4521 18.903 12.4521 18.7442L12.4521 17.6628C14.5616 17.5597 15.9286 16.3256 15.9286 14.7803C15.9286 13.366 14.9809 12.5062 12.9135 12.0136L12.4521 11.92L12.4521 7.49298C13.9218 7.58497 15.0077 8.4168 15.1597 9.51504C15.1763 9.72061 15.264 9.82647 15.4339 9.82647C15.6059 9.82647 15.7158 9.70743 15.7158 9.52637C15.7158 9.43575 15.7047 9.33672 15.6845 9.2461C15.4356 7.99903 14.1465 7.01543 12.4521 6.93115L12.4521 6.04385C12.4521 5.88506 12.3183 5.76104 12.1602 5.76104C11.9839 5.76104 11.878 5.8669 11.878 6.04385L11.878 6.93115C10.1113 7.02657 8.6708 8.1628 8.6708 9.66016C8.6708 10.967 9.64444 11.85 11.6428 12.311L11.878 12.3585L11.878 17.1017C10.2843 16.9915 9.07686 16.0627 8.95489 14.734C8.94669 14.5445 8.86739 14.4219 8.68067 14.4219C8.52686 14.4219 8.4085 14.5318 8.4085 14.7408C8.4085 14.8315 8.42871 14.9305 8.43916 15.0211C8.7083 16.4853 10.0133 17.5597 11.878 17.6523L11.878 18.7442C11.878 18.9212 12.0027 19.018 12.1602 19.018ZM11.878 11.7828L11.8174 11.7717C10.1328 11.3845 9.22901 10.7761 9.22901 9.66514C9.22901 8.45157 10.4169 7.57725 11.878 7.49298ZM12.4521 12.4866L12.7255 12.555C14.5538 12.961 15.3886 13.6162 15.3886 14.776C15.3886 16.0613 14.1832 17.0201 12.4521 17.1017Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
