import React from 'react'

export function PoweroutletTypeMSquare({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.02598 16.6354L15.934 16.6354C16.4514 16.6354 16.793 16.3022 16.793 15.7848L16.793 6.22129C16.793 5.70323 16.4514 5.36162 15.934 5.36162L6.02598 5.36162C5.5086 5.36162 5.16631 5.70323 5.16631 6.22129L5.16631 15.7848C5.16631 16.3022 5.5086 16.6354 6.02598 16.6354ZM10.9758 9.71397C10.3558 9.71397 9.8627 9.22159 9.8627 8.6002C9.8627 7.98018 10.3558 7.48779 10.9758 7.48779C11.5965 7.48779 12.0896 7.98018 12.0896 8.6002C12.0896 9.22159 11.5965 9.71397 10.9758 9.71397ZM8.4251 14.5085C7.8044 14.5085 7.31133 14.0161 7.31133 13.3961C7.31133 12.7754 7.8044 12.2823 8.4251 12.2823C9.04512 12.2823 9.52911 12.7754 9.52911 13.3961C9.52911 14.0161 9.04512 14.5085 8.4251 14.5085ZM13.5362 14.5085C12.9162 14.5085 12.4231 14.0161 12.4231 13.3961C12.4231 12.7754 12.9162 12.2823 13.5362 12.2823C14.1563 12.2823 14.65 12.7754 14.65 13.3961C14.65 14.0161 14.1563 14.5085 13.5362 14.5085Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
