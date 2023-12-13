import React from 'react'

export function TrashSlashSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.2906' className={className}>
      <path
        d='M21.96 3.51895L21.96 19.1121C21.96 21.1476 20.8532 22.2906 18.778 22.2906L3.18125 22.2906C1.10674 22.2906 0 21.1853 0 19.1121L0 3.51895C0 1.4458 1.10674 0.339746 3.18125 0.339746L18.778 0.339746C20.8532 0.339746 21.96 1.48281 21.96 3.51895ZM3.21124 0.842881C1.42628 0.842881 0.511533 1.76534 0.511533 3.54327L0.511533 19.0871C0.511533 20.8657 1.42628 21.7882 3.21124 21.7882L18.7487 21.7882C20.459 21.7882 21.4484 20.8657 21.4484 19.0871L21.4484 3.54327C21.4484 1.76534 20.459 0.842881 18.7487 0.842881Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.09641 9.66277L8.60655 16.4915C8.62471 16.663 8.70967 16.7647 8.88116 16.7647C9.08125 16.7647 9.17325 16.6441 9.1544 16.4545L8.77676 10.3444L10.6349 12.2061L10.6349 16.4545C10.6349 16.6253 10.7743 16.7459 10.9465 16.7459C11.1096 16.7459 11.2497 16.6253 11.2497 16.4545L11.2497 12.8221L12.8632 14.4386L12.7386 16.4545C12.7197 16.6441 12.8117 16.7647 13.0125 16.7647C13.1833 16.7647 13.2683 16.663 13.2864 16.4915L13.3996 14.9761L15.5587 17.1393L15.5411 17.4638C15.5027 18.1563 14.8832 18.727 14.1726 18.727L7.90752 18.727C7.17735 18.727 6.56895 18.1563 6.53965 17.4638L6.01851 7.58091ZM13.8941 4.69366L13.8941 5.93975L17.372 5.93975C17.5371 5.93975 17.6709 6.07354 17.6793 6.21983C17.6786 6.3836 17.5371 6.50763 17.372 6.50763L16.1363 6.50763L15.6928 14.6719L13.5804 12.5566L13.8818 8.5213C13.9 8.34005 13.7528 8.21876 13.5521 8.21876C13.3708 8.21876 13.2404 8.30235 13.2307 8.49268L13.0145 11.9899L11.2497 10.2226L11.2497 8.51153C11.2497 8.3212 11.1473 8.21876 10.9465 8.21876C10.7464 8.21876 10.6349 8.3212 10.6349 8.51153L10.6349 9.60694L6.97276 5.93975L8.18526 5.93975L8.18526 4.69366C8.18526 3.95323 8.77666 3.36319 9.65879 3.36319L12.4102 3.36319C13.293 3.36319 13.8941 3.95323 13.8941 4.69366ZM9.59864 3.94835C9.06339 3.94835 8.69981 4.26515 8.69981 4.74386L8.69981 5.93975L13.2399 5.93975L13.2399 4.74386C13.2399 4.26515 12.8764 3.94835 12.332 3.94835Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.576 18.2874C17.6986 18.4101 17.8951 18.4289 18.0087 18.2874C18.132 18.1543 18.132 17.978 18.0087 17.8547L4.43067 4.25782C4.30665 4.13448 4.11153 4.13448 3.99659 4.25782C3.85577 4.39024 3.87393 4.56788 3.99659 4.69054Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
