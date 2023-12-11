import React from 'react'

export default function MinusDiamondFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2575 26.8998' className={className}>
      <path
        d='M15.7347 1.1075L25.8135 11.1863C27.2918 12.6646 27.2192 14.2526 25.7785 15.6932L15.7152 25.7936C14.2745 27.2343 12.6865 27.279 11.2082 25.8007L1.10216 15.6946C-0.367761 14.2163-0.369128 12.6653 1.10851 11.1877L11.2096 1.12429C12.6872-0.354028 14.2382-0.389672 15.7347 1.1075ZM7.39426 13.19C7.24992 13.19 7.13879 13.3327 7.13879 13.4743C7.13879 13.5873 7.26945 13.7202 7.39426 13.7202L19.4948 13.7202C19.6196 13.7202 19.7496 13.5873 19.7496 13.4743C19.7496 13.3327 19.6308 13.19 19.4948 13.19Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}