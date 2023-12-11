import React from 'react'

export default function Tent_2Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.66778 17.3693L20.0495 17.3693C20.4586 17.3693 20.6539 17.0838 20.4272 16.6389L14.7987 5.30714C14.7061 5.10499 14.543 5.02003 14.359 5.02003C14.175 5.02003 14.0112 5.11339 13.9199 5.30645L8.29073 16.6389C8.06338 17.0838 8.27754 17.3693 8.66778 17.3693ZM11.7631 16.7545L14.145 11.2583C14.2363 11.0457 14.4796 11.0457 14.573 11.2583L16.9724 16.7545L15.2218 16.7545L14.359 12.4622L13.5144 16.7545ZM8.17042 14.728L7.58038 11.7075L6.97081 14.728L5.73077 14.728L7.42774 10.8266C7.48067 10.6907 7.66329 10.6851 7.72462 10.8266L9.42042 14.7257L10.702 12.0913L7.9211 6.46602C7.84864 6.31339 7.71485 6.24727 7.58038 6.24727C7.42637 6.24727 7.29258 6.31339 7.22081 6.46602L3.12501 14.7505C2.95557 15.0719 3.09503 15.3345 3.42393 15.3345L9.13418 15.3345L9.41856 14.728Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}