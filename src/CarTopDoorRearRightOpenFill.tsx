import React from 'react'

export function CarTopDoorRearRightOpenFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.4855 28.5526' className={className}>
      <path
        d='M12.0621 28.533C16.8635 28.533 19.6146 27.1917 19.6146 24.8598L19.6146 4.60577C19.6146 1.64209 16.9285 0 12.0621 0C7.22291 0 4.52769 1.64209 4.52769 4.60577L4.52769 24.8598C4.52769 27.1917 7.27886 28.533 12.0621 28.533ZM12.0802 11.9353C10.7394 11.9353 8.87282 12.0511 8.26393 12.0511C7.37047 12.0511 6.92262 11.6982 6.84313 10.7014L6.68414 8.90459C6.54537 7.24121 7.19186 6.39639 12.0802 6.39639C16.9693 6.39639 17.6158 7.24121 17.477 8.90459L17.3173 10.7014C17.2385 11.6982 16.7907 12.0511 15.8972 12.0511C15.2883 12.0511 13.0768 11.9353 12.0802 11.9353ZM12.0802 25.104C7.88053 25.104 6.69 24.5321 6.83492 22.8479L6.92692 21.8045C7.04957 20.4361 8.19196 19.9731 12.0802 19.9731C15.9692 19.9731 17.1116 20.4361 17.2342 21.8045L17.3262 22.8479C17.4712 24.5321 16.2806 25.104 12.0802 25.104ZM19.4412 17.7029L19.4412 18.4061L24.054 22.9169C24.1603 23.0142 24.318 23.0135 24.4062 22.9169C24.5119 22.8287 24.5119 22.6612 24.4062 22.5647Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
