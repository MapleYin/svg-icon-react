import React from 'react'

export function MacbookAndIphone({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36.1973 21.5022' className={className}>
      <path
        d='M30.7425 2.77198L30.1657 2.77198C29.8747 2.30888 29.3482 2.08214 28.591 2.08214L7.24493 2.08214C6.01954 2.08214 5.40753 2.67599 5.40753 3.90138L5.40753 18.4796L24.8941 18.4796L24.8941 18.5137C24.8941 19.0666 24.9882 19.5522 25.1711 19.9602L2.15049 19.9602C1.71006 19.9602 1.41543 19.6565 1.41543 19.2153C1.41543 18.7833 1.71006 18.4796 2.15049 18.4796L4.89531 18.4796L4.89531 3.92374C4.89531 2.36846 5.68184 1.57061 7.24981 1.57061L28.5952 1.57061C29.7023 1.57061 30.422 1.97522 30.7425 2.77198Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M27.8692 20.6004L33.2797 20.6004C34.6585 20.6004 35.3635 19.9072 35.3635 18.5137L35.3635 5.78117C35.3635 4.38762 34.6397 3.65676 33.2797 3.65676L27.8692 3.65676C26.5009 3.65676 25.7952 4.38762 25.7952 5.78117L25.7952 18.5137C25.7952 19.9072 26.482 20.6004 27.8692 20.6004ZM27.8804 20.0549C26.7895 20.0549 26.3407 19.6055 26.3407 18.532L26.3407 5.76281C26.3407 4.67053 26.7895 4.20227 27.8804 4.20227L33.2602 4.20227C34.3504 4.20227 34.818 4.67053 34.818 5.76281L34.818 18.532C34.818 19.6055 34.3504 20.0549 33.2602 20.0549ZM28.782 19.4104L32.3662 19.4104C32.5552 19.4104 32.6953 19.2807 32.6953 19.1001C32.6953 18.9482 32.537 18.7899 32.3662 18.7899L28.782 18.7899C28.6112 18.7899 28.4725 18.9482 28.4725 19.1001C28.4725 19.2814 28.5917 19.4104 28.782 19.4104ZM29.6332 5.622L31.5416 5.622C31.7724 5.622 31.925 5.46868 31.925 5.23792C31.925 4.99944 31.7724 4.8468 31.5416 4.8468L29.6332 4.8468C29.3934 4.8468 29.2407 4.99944 29.2407 5.23792C29.2407 5.46868 29.3934 5.622 29.6332 5.622Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
