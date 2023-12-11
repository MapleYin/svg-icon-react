import React from 'react'

export default function Camera({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.6506 23.3785' className={className}>
      <path
        d='M3.18125 22.6972L26.108 22.6972C28.1825 22.6972 29.2893 21.5548 29.2893 19.5096L29.2893 6.17793C29.2893 4.1334 28.1825 2.99033 26.108 2.99033L22.2189 2.99033C21.1585 2.99033 20.9207 2.97939 20.216 2.18818L19.081 0.926173C18.3819 0.159474 17.9309 0 16.7703 0L12.1 0C10.9395 0 10.4884 0.159474 9.79844 0.926173L8.6543 2.18818C7.98731 2.9417 7.70206 2.99033 6.65147 2.99033L3.18125 2.99033C1.10674 2.99033 0 4.1334 0 6.17793L0 19.5096C0 21.5548 1.10674 22.6972 3.18125 22.6972ZM3.21124 22.1856C1.50098 22.1856 0.511533 21.2632 0.511533 19.4853L0.511533 6.20293C0.511533 4.42432 1.50098 3.50187 3.21124 3.50187L6.60684 3.50187C7.7669 3.50187 8.25294 3.41622 8.95196 2.63907L10.0857 1.37003C10.7901 0.578331 11.1612 0.511533 12.0441 0.511533L16.8263 0.511533C17.7098 0.511533 18.0802 0.578331 18.7847 1.37003L19.9274 2.63907C20.6265 3.41622 21.1125 3.50187 22.2732 3.50187L26.0787 3.50187C27.789 3.50187 28.7777 4.42432 28.7777 6.20293L28.7777 19.4853C28.7777 21.2632 27.789 22.1856 26.0787 22.1856ZM14.6404 19.6974C18.5231 19.6974 21.6719 16.5674 21.6719 12.6555C21.6719 8.73516 18.5601 5.61426 14.6404 5.61426C10.7578 5.61426 7.61807 8.73516 7.61807 12.6555C7.61807 16.5674 10.7578 19.6974 14.6404 19.6974ZM14.6404 19.1186C11.0771 19.1186 8.21427 16.23 8.21427 12.6555C8.21427 9.07257 11.0855 6.1839 14.6404 6.1839C18.2038 6.1839 21.075 9.07257 21.075 12.6555C21.075 16.23 18.2038 19.1186 14.6404 19.1186ZM22.4744 8.10899C22.4744 8.92364 23.1237 9.51504 23.9098 9.51504C24.6386 9.51504 25.2879 8.86778 25.2879 8.10899C25.2879 7.37949 24.6386 6.71201 23.9098 6.71201C23.1237 6.71201 22.4744 7.37949 22.4744 8.10899Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
