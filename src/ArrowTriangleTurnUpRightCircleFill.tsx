import React from 'react'

export function ArrowTriangleTurnUpRightCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM14.3839 7.34453L14.3839 9.31826L9.99883 9.31826C8.04082 9.31826 7.20771 10.1877 7.20771 12.2379L7.20771 17.0311C7.20771 17.1748 7.29385 17.3014 7.4334 17.3098C7.58136 17.3091 7.66817 17.1748 7.66817 17.0311L7.66817 12.2252C7.66817 10.4366 8.28907 9.81573 10.019 9.81573L14.3839 9.79689L14.3839 11.7895C14.3839 12.2892 14.8759 12.383 15.181 12.1329L17.8144 9.99806C18.1088 9.75928 18.1088 9.37471 17.8144 9.13526L15.181 7.00176C14.8759 6.75029 14.3839 6.84483 14.3839 7.34453Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
