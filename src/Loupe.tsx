import React from 'react'

export default function Loupe({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.7752 23.0699' className={className}>
      <path
        d='M0.248344 16.2295C-1.09551 20.3396 3.10284 23.0699 10.7027 23.0699C18.3111 23.0699 22.5094 20.3396 21.1655 16.2295L18.527 8.06885L18.527 3.2586C18.527 1.8293 15.4512 0.581735 10.7027 0.581735C5.97315 0.581735 2.89737 1.8293 2.89737 3.2586L2.89737 8.02002ZM0.717396 16.4131L3.14513 8.95763C4.02277 10.4201 6.81046 11.2706 10.7027 11.2706C14.3423 11.2706 17.3164 10.4201 18.2604 8.93946L20.6965 16.4131C21.8797 20.0921 17.8738 22.5395 10.7027 22.5395C3.54073 22.5395-0.474888 20.0921 0.717396 16.4131ZM3.4089 3.2586C3.4089 2.22735 6.33761 1.1046 10.7027 1.1046C15.0958 1.1046 18.0154 2.22735 18.0154 3.2586C18.0154 4.29053 15.0958 5.4126 10.7027 5.4126C6.33761 5.4126 3.4089 4.29053 3.4089 3.2586Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
