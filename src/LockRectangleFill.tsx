import React from 'react'

export function LockRectangleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M29.054 3.18829L29.054 18.7724C29.054 20.8169 27.9473 21.96 25.8721 21.96L3.18125 21.96C1.10674 21.96 0 20.8546 0 18.7724L0 3.18829C0 1.10606 1.10674 0 3.18125 0L25.8721 0C27.9473 0 29.054 1.14307 29.054 3.18829ZM11.3638 7.38966L11.3638 9.30001C10.3995 9.29366 9.92715 9.75196 9.92715 10.8082L9.92715 16.1314C9.92715 17.1813 10.3932 17.6305 11.3475 17.6305L17.7163 17.6305C18.6706 17.6305 19.1457 17.1813 19.1457 16.1314L19.1457 10.8082C19.1457 9.75196 18.6643 9.29366 17.7 9.30001L17.7 7.38966C17.7 5.37422 16.43 4.04922 14.5322 4.04922C12.6429 4.04922 11.3638 5.37422 11.3638 7.38966ZM17.1248 7.39962L17.1248 9.29932L11.939 9.29932L11.939 7.39962C11.939 5.72882 12.9834 4.63009 14.5322 4.63009C16.0804 4.63009 17.1248 5.72882 17.1248 7.39962Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
