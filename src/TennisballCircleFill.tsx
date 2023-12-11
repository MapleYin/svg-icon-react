import React from 'react'

export default function TennisballCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM11.336 5.5876C11.4469 6.01231 11.5062 6.43975 11.5062 6.93213C11.5062 9.62295 9.42784 11.7292 6.70909 11.7292C6.31504 11.7292 5.921 11.6804 5.57373 11.582C5.55557 11.7698 5.53672 11.9569 5.53672 12.1636C5.53672 15.8339 8.48916 18.7954 12.1686 18.7954C12.4833 18.7954 12.7994 18.7584 13.1142 18.72C12.9384 18.2674 12.8882 17.7841 12.8882 17.2917C12.8882 14.6002 14.9749 12.503 17.6664 12.503C18.0695 12.503 18.4259 12.5337 18.7913 12.6236C18.7913 12.4729 18.7913 12.3137 18.7913 12.1636C18.7913 8.4919 15.8389 5.53174 12.1686 5.53174C11.8817 5.53174 11.6138 5.5499 11.336 5.5876ZM13.4869 17.2917C13.4869 17.7359 13.5469 18.2158 13.7045 18.619C16.2992 17.9926 18.2996 15.8659 18.7125 13.1958C18.4141 13.161 18.0689 13.1115 17.6664 13.1115C15.2788 13.1115 13.4869 14.9034 13.4869 17.2917ZM5.65322 10.991C5.97891 11.0712 6.3709 11.1116 6.70909 11.1116C9.10508 11.1116 10.8977 9.31973 10.8977 6.93213C10.8977 6.50674 10.8286 6.05547 10.745 5.68936C8.13213 6.24942 6.11358 8.34815 5.65322 10.991Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}