import React from 'react'

export default function BackwardCircle({
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
        d='M10.5985 16.8735C10.8913 16.8735 11.2079 16.6421 11.2079 16.1352L11.2079 8.21651C11.2079 7.70958 10.8913 7.47813 10.5985 7.47813C10.4277 7.47813 10.2331 7.57442 10.0993 7.65665L3.27354 11.6702C3.10294 11.767 2.98233 11.9314 2.98233 12.1622C2.98233 12.4202 3.10294 12.5847 3.27354 12.6815L10.0993 16.695C10.2331 16.7682 10.4277 16.8735 10.5985 16.8735ZM18.7948 16.8735C19.1064 16.8735 19.4042 16.6421 19.4042 16.1352L19.4042 8.21651C19.4042 7.70958 19.1064 7.47813 18.7948 7.47813C18.6429 7.47813 18.4378 7.57442 18.2956 7.65665L11.4887 11.6702C11.2992 11.767 11.1786 11.9314 11.1786 12.1622C11.1786 12.4202 11.2992 12.5847 11.4887 12.6815L18.2956 16.695C18.4378 16.7682 18.6429 16.8735 18.7948 16.8735Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}