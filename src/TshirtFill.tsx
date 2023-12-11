import React from 'react'

export default function TshirtFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.2377 25.2623' className={className}>
      <path
        d='M9.34061 25.2623L21.5357 25.2623C23.4276 25.2623 24.2936 24.4158 24.3236 22.5616L24.489 9.94903L28.1553 10.7625C28.8857 10.9249 29.3248 10.658 29.5808 9.871L30.7953 6.01573C31.0519 5.23848 30.6858 4.66611 29.9113 4.30703L21.3012 0.260254C20.9044 0.0726557 20.657 0.119433 20.3636 0.279785C19.1266 0.941602 17.1986 1.41602 15.4431 1.41602C13.6777 1.41602 11.7497 0.941602 10.5135 0.279785C10.2284 0.119433 9.97196 0.0726557 9.57518 0.260254L0.965021 4.30703C0.190507 4.66611-0.174923 5.23848 0.0810341 6.01573L1.29558 9.871C1.55223 10.658 1.99129 10.9249 2.72108 10.7625L6.39646 9.94903L6.5534 22.5616C6.5827 24.4158 7.44871 25.2623 9.34061 25.2623ZM15.4431 4.96465C13.1382 4.96465 10.9799 3.24444 10.6482 0.856065C12.2152 1.54757 13.958 1.9502 15.4431 1.9502C16.9183 1.9502 18.6611 1.54757 20.2281 0.856065C19.8978 3.24307 17.7311 4.96465 15.4431 4.96465Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}