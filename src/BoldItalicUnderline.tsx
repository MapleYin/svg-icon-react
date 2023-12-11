import React from 'react'

export default function BoldItalicUnderline({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44.536 25.2734' className={className}>
      <path
        d='M30.985 25.2734L43.8829 25.2734C44.0815 25.2734 44.1746 25.1628 44.1746 25.0097C44.1746 24.8565 44.0815 24.7459 43.8829 24.7459L30.985 24.7459C30.778 24.7459 30.6758 24.8565 30.6758 25.0097C30.6758 25.1628 30.778 25.2734 30.985 25.2734Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M37.4203 22.0411C41.5563 22.0411 44.1746 19.5009 44.1746 15.5095L44.1746 3.62198C44.1746 3.46153 44.0837 3.37129 43.9323 3.37129C43.7907 3.37129 43.6921 3.46153 43.6921 3.62198L43.6921 15.5076C43.6921 19.2595 41.2653 21.5968 37.4203 21.5968C33.6032 21.5968 31.1492 19.2595 31.1492 15.5076L31.1492 3.62198C31.1492 3.46153 31.0583 3.37129 30.916 3.37129C30.7744 3.37129 30.6758 3.46153 30.6758 3.62198L30.6758 15.5095C30.6758 19.5009 33.2942 22.0411 37.4203 22.0411Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.301 21.7189L23.5917 21.7189C23.7265 21.7189 23.8335 21.6152 23.8335 21.4798C23.8335 21.3275 23.7272 21.233 23.5924 21.233L19.6827 21.233L23.3568 4.02091L27.2657 4.02091C27.4005 4.02091 27.5075 3.9173 27.5075 3.78184C27.5075 3.62051 27.4012 3.53506 27.2664 3.53506L18.9743 3.53506C18.8298 3.53506 18.7332 3.62051 18.7332 3.78184C18.7332 3.9173 18.8305 4.02091 18.9659 4.02091L22.8742 4.02091L19.2093 21.233L15.3003 21.233C15.1649 21.233 15.0592 21.3275 15.0592 21.4798C15.0592 21.6152 15.1565 21.7189 15.301 21.7189Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.07921 21.7377L7.17237 21.7377C11.1031 21.7377 13.4796 19.8168 13.4796 16.6646C13.4796 14.2036 11.7023 12.4724 9.17091 12.1799L9.17091 12.1088C11.0959 11.7613 12.5301 10.041 12.5301 8.04883C12.5301 5.34668 10.3544 3.55391 7.13419 3.55391L1.07921 3.55391C0.421584 3.55391 0 3.98594 0 4.6631L0 20.6278C0 21.3057 0.421584 21.7377 1.07921 21.7377ZM2.22628 19.8025L2.22628 13.2835L6.57833 13.2835C9.57734 13.2835 11.185 14.4285 11.185 16.5371C11.185 18.6296 9.64365 19.8025 6.79473 19.8025ZM2.22628 11.4492L2.22628 5.49044L6.63916 5.49044C8.93125 5.49044 10.2981 6.54054 10.2981 8.36026C10.2981 10.3217 8.76797 11.4492 6.10528 11.4492Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}