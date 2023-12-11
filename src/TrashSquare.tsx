import React from 'react'

export default function TrashSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.2906' className={className}>
      <path
        d='M3.18125 22.2906L18.778 22.2906C20.8532 22.2906 21.96 21.1476 21.96 19.1121L21.96 3.51895C21.96 1.48281 20.8532 0.339746 18.778 0.339746L3.18125 0.339746C1.10674 0.339746 0 1.4458 0 3.51895L0 19.1121C0 21.1853 1.10674 22.2906 3.18125 22.2906ZM3.21124 21.7882C1.42628 21.7882 0.511533 20.8657 0.511533 19.0871L0.511533 3.54327C0.511533 1.76534 1.42628 0.842881 3.21124 0.842881L18.7487 0.842881C20.459 0.842881 21.4484 1.76534 21.4484 3.54327L21.4484 19.0871C21.4484 20.8657 20.459 21.7882 18.7487 21.7882Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.91729 18.727L14.1823 18.727C14.893 18.727 15.5125 18.1563 15.5418 17.4638L16.137 6.50763L17.3817 6.50763C17.5462 6.50763 17.6884 6.3836 17.68 6.21983C17.6807 6.07354 17.5462 5.93975 17.3817 5.93975L13.9039 5.93975L13.9039 4.69366C13.9039 3.95323 13.293 3.36319 12.4199 3.36319L9.65948 3.36319C8.78643 3.36319 8.19502 3.95323 8.19502 4.69366L8.19502 5.93975L4.59571 5.93975C4.42286 5.93975 4.28907 6.07354 4.28907 6.21983C4.28907 6.3836 4.42286 6.50763 4.59571 6.50763L5.97168 6.50763L6.54942 17.4638C6.57871 18.1563 7.18711 18.727 7.91729 18.727ZM8.88116 16.7647C8.71944 16.7647 8.62539 16.663 8.60655 16.4915L8.0209 8.5213C8.00206 8.34005 8.14083 8.21876 8.34229 8.21876C8.53194 8.21876 8.65323 8.30235 8.67139 8.49268L9.16416 16.4545C9.17393 16.6441 9.09102 16.7647 8.88116 16.7647ZM10.9563 16.7459C10.7841 16.7459 10.6446 16.6253 10.6446 16.4545L10.6446 8.51153C10.6446 8.3212 10.7464 8.21876 10.9563 8.21876C11.1564 8.21876 11.2595 8.3212 11.2595 8.51153L11.2595 16.4545C11.2595 16.6253 11.1193 16.7459 10.9563 16.7459ZM13.0216 16.7647C12.8215 16.7647 12.7295 16.6441 12.7483 16.4545L13.2313 8.49268C13.2502 8.30235 13.3715 8.21876 13.5618 8.21876C13.7619 8.21876 13.9007 8.34005 13.8818 8.5213L13.2962 16.4915C13.2773 16.663 13.1931 16.7647 13.0216 16.7647ZM8.70958 5.93975L8.70958 4.74386C8.70958 4.26515 9.07315 3.94835 9.60772 3.94835L12.3327 3.94835C12.8861 3.94835 13.2497 4.26515 13.2497 4.74386L13.2497 5.93975Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
