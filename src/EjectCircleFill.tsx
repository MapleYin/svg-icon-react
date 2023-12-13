import React from 'react'

export function EjectCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM6.76006 14.7318C6.27217 14.7318 5.96963 15.0784 5.96963 15.5845L5.96963 16.4041C5.96963 16.892 6.27217 17.2386 6.76006 17.2386L17.5616 17.2386C18.0495 17.2386 18.3611 16.892 18.3611 16.4041L18.3611 15.5845C18.3611 15.0784 18.0495 14.7318 17.5616 14.7318ZM11.6632 5.6542L6.26036 12.0069C6.10137 12.1841 6.04981 12.3256 6.04141 12.4775C6.04346 12.7619 6.27852 12.9529 6.59493 12.9529L17.7261 12.9529C18.0509 12.9529 18.281 12.7619 18.281 12.4775C18.281 12.3256 18.219 12.1848 18.0606 12.0069L12.6683 5.6542C12.5456 5.50996 12.3455 5.43682 12.1608 5.43682C11.9853 5.43682 11.7852 5.50293 11.6632 5.6542Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
