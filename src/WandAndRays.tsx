import React from 'react'

export function WandAndRays({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.0506 26.7967' className={className}>
      <path
        d='M24.9207 25.9867C25.2092 26.285 25.574 26.257 25.8234 25.9867C26.0742 25.7248 26.1112 25.3815 25.8234 25.084L13.5651 12.7685C13.2955 12.4981 12.9118 12.5163 12.6533 12.7685C12.3928 13.0297 12.3844 13.4016 12.6533 13.6712ZM16.8785 17.3525L12.9839 13.4209C12.8333 13.2703 12.8013 13.154 12.9428 13.0125C13.0641 12.8912 13.1811 12.9219 13.3323 13.0731L17.2458 16.9859Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.3875 13.6373C26.5411 13.6373 26.6893 13.4982 26.6893 13.3446C26.6893 13.191 26.5411 13.0422 26.3875 13.0422L22.4547 13.0422C22.3011 13.0422 22.1613 13.191 22.1613 13.3446C22.1613 13.4982 22.3011 13.6373 22.4547 13.6373Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M19.5603 6.70898C19.4442 6.82578 19.4442 7.00372 19.5603 7.11983C19.6855 7.23595 19.8551 7.23595 19.9803 7.11983L22.7614 4.33868C22.8775 4.21348 22.8775 4.03487 22.7614 3.91875C22.6453 3.80195 22.4674 3.80195 22.3513 3.91875Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.638 0.301763C13.638 0.148147 13.4982 0 13.3446 0C13.191 0 13.0429 0.148147 13.0429 0.301763L13.0429 4.22549C13.0429 4.37911 13.191 4.52794 13.3446 4.52794C13.4982 4.52794 13.638 4.37911 13.638 4.22549Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.69014 7.11983C6.78809 7.21778 6.98487 7.23595 7.10098 7.11983C7.22618 7.02256 7.22618 6.82578 7.10098 6.70898L4.33936 3.91943C4.23233 3.82148 4.03555 3.80195 3.91943 3.91875C3.80332 4.0251 3.80332 4.22188 3.91943 4.338Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.302446 13.0422C0.148147 13.0422 0 13.191 0 13.3446C0 13.4982 0.148147 13.6373 0.302446 13.6373L4.22618 13.6373C4.38048 13.6373 4.52862 13.4982 4.52862 13.3446C4.52862 13.191 4.38048 13.0422 4.22618 13.0422Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.8999 22.3499C3.80264 22.4478 3.78379 22.6446 3.9083 22.7607C4.00625 22.8671 4.20372 22.8775 4.31983 22.7614L7.10098 19.9991C7.20733 19.8921 7.22618 19.6953 7.10098 19.5792C7.00372 19.4819 6.80625 19.4631 6.69014 19.5792Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.638 22.4547C13.638 22.3011 13.4982 22.1529 13.3446 22.1529C13.191 22.1529 13.0429 22.3011 13.0429 22.4547L13.0429 26.3875C13.0429 26.5411 13.191 26.6809 13.3446 26.6809C13.4982 26.6809 13.638 26.5411 13.638 26.3875Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
