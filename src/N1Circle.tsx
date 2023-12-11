import React from 'react'

export default function N1Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.6482 17.8538C12.8144 17.8538 12.9187 17.7286 12.9187 17.5863L12.9187 6.78214C12.9187 6.60284 12.7669 6.4874 12.5813 6.4874C12.4533 6.4874 12.3427 6.52217 12.1646 6.65372L9.40166 8.42647C9.28467 8.49258 9.24151 8.57754 9.24151 8.68819C9.24151 8.84835 9.37871 8.97013 9.53047 8.97013C9.57842 8.97013 9.62295 8.95899 9.64844 8.93897L12.3108 7.22921L12.3708 7.22921L12.3708 17.5863C12.3708 17.7286 12.4933 17.8538 12.6482 17.8538Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}