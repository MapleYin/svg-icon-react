import React from 'react'

export function VisionproSlash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.4964 26.2758' className={className}>
      <path
        d='M6.59941 4.8301C2.83851 5.8795 0.511533 8.1219 0.511533 12.7979C0.511533 17.8044 3.43067 21.3983 7.51875 21.3983C11.6653 21.3983 13.8975 17.6116 16.563 17.6116C18.4017 17.6116 20.0533 19.4383 22.2784 20.5524L23.2635 21.5401C20.285 20.5909 18.4584 18.1232 16.563 18.1232C14.2061 18.1232 11.9819 21.9098 7.51875 21.9098C3.19297 21.9098 0 17.9767 0 12.7979C0 7.94635 2.41122 5.57045 6.20126 4.43085ZM33.1351 12.7979C33.1351 17.477 30.5286 21.1392 26.8245 21.7917L26.3864 21.3522C30.0631 20.9266 32.6235 17.48 32.6235 12.7979C32.6235 4.75569 25.7414 3.91224 16.563 3.91224C13.9364 3.91224 11.4975 3.9815 9.36455 4.27689L8.92359 3.83454C11.2009 3.48335 13.7997 3.4007 16.563 3.4007C25.7544 3.4007 33.1351 4.31438 33.1351 12.7979Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M28.2745 25.2842C28.3788 25.3885 28.5247 25.3885 28.6472 25.2842C28.7794 25.1792 28.7528 25.0061 28.6486 24.9018L4.85987 1.03908C4.77374 0.952944 4.61875 0.906851 4.47744 1.03908C4.37314 1.15246 4.37314 1.31721 4.47744 1.42151Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
