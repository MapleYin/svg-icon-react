import React from 'react'

export default function N4AltSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.15654 13.3649C7.15654 13.5569 7.29082 13.6724 7.53301 13.6724L12.5913 13.6724L12.5913 16.3768C12.5913 16.5806 12.7026 16.6862 12.8737 16.6862C13.0462 16.6862 13.1575 16.5813 13.1575 16.3768L13.1575 13.6724L14.716 13.6724C14.8857 13.6724 15.0159 13.561 15.0159 13.3836C15.0159 13.2005 14.8857 13.0898 14.716 13.0898L13.1575 13.0898L13.1575 9.63751C13.1575 9.43301 13.0462 9.32871 12.8737 9.32871C12.7026 9.32871 12.5913 9.43369 12.5913 9.63751L12.5913 13.0898L7.90655 13.0898C8.90177 11.1271 10.8992 7.94268 12.0341 5.82149C12.0584 5.77286 12.0716 5.71583 12.0716 5.64971C12.0716 5.51973 11.9986 5.38477 11.7905 5.38477C11.6667 5.38477 11.6049 5.46065 11.5367 5.55791C10.4014 7.47842 8.42432 10.8721 7.26035 13.0335C7.16904 13.205 7.15654 13.285 7.15654 13.3649Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}