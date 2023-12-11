import React from 'react'

export default function Mug({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9909 23.6487' className={className}>
      <path
        d='M7.20665 23.6389L9.03908 23.6389C13.459 23.6389 16.2464 21.3146 16.2464 17.5962L16.2464 2.16983C16.2464 0.70596 12.7554 0 8.11378 0C3.49102 0 0 0.70596 0 2.16983L0 17.5962C0 21.3146 2.78672 23.6389 7.20665 23.6389ZM7.20665 23.116C3.09327 23.116 0.52286 20.9808 0.52286 17.5962L0.52286 3.11857C1.69962 3.96974 4.5546 4.3919 8.11378 4.3919C11.673 4.3919 14.5468 3.96974 15.7235 3.11857L15.7235 17.5962C15.7235 20.9808 13.1531 23.116 9.03908 23.116ZM8.11378 3.8584C3.77374 3.8584 0.478235 3.09356 0.478235 2.21446C0.478235 1.31719 3.77374 0.534188 8.11378 0.534188C12.4629 0.534188 15.7682 1.31719 15.7682 2.21446C15.7682 3.09356 12.4629 3.8584 8.11378 3.8584ZM16.0867 17.0035L17.3022 17.0035C18.7926 17.0035 19.6296 16.1624 19.6296 14.6154L19.6296 8.66495C19.6296 7.10821 18.7926 6.25801 17.3022 6.25801L16.0867 6.25801L16.0867 6.78087L17.3022 6.78087C18.4523 6.78087 19.1068 7.47374 19.1068 8.66495L19.1068 14.6154C19.1068 15.7969 18.4523 16.4807 17.3022 16.4807L16.0867 16.4807Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
