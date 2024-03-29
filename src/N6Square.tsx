import React from 'react'

export function N6Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.0462 16.6862C13.2717 16.6862 14.7732 15.2019 14.7732 13.0379C14.7732 11.0413 13.2885 9.52881 11.2411 9.52881C9.5419 9.52881 8.39981 10.3693 7.76895 11.6554C7.74874 11.6554 7.73761 11.6554 7.72647 11.6554C7.72647 11.6065 7.72647 11.5584 7.72647 11.5096C7.72647 7.946 9.03663 5.871 11.2352 5.871C12.3809 5.871 13.4677 6.46485 13.8667 7.39248C13.9354 7.58057 14.0042 7.64874 14.1398 7.64874C14.3111 7.64874 14.3952 7.55762 14.3952 7.38496C14.3952 7.31885 14.3834 7.28135 14.3786 7.225C14.1996 6.49004 13.0447 5.31983 11.2477 5.31983C8.69375 5.31983 7.19727 7.58428 7.19727 11.3777C7.19727 12.794 7.41758 14.0531 7.78848 14.7833C8.39649 15.9738 9.59815 16.6862 11.0462 16.6862ZM11.0687 16.1573C9.24825 16.1573 7.9379 14.8645 7.9379 13.079C7.9379 11.3431 9.26573 10.0802 11.1064 10.0802C12.947 10.0802 14.2092 11.2963 14.2092 13.0985C14.2092 14.9426 12.9581 16.1573 11.0687 16.1573Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
