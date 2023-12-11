import React from 'react'

export default function ArrowDownRightTopleftRectangleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M29.054 3.18829L29.054 18.7724C29.054 20.8169 27.9473 21.96 25.8721 21.96L3.18125 21.96C1.10674 21.96 0 20.8546 0 18.7724L0 3.18829C0 1.10606 1.10674 0 3.18125 0L25.8721 0C27.9473 0 29.054 1.14307 29.054 3.18829ZM2.45577 2.71437C2.45577 2.81115 2.49054 2.87228 2.54689 2.92795L8.80185 9.18291L9.93008 10.2848L8.20879 10.3102L4.38282 10.3102C4.20899 10.3102 4.11241 10.4151 4.11241 10.5674C4.11241 10.7106 4.20831 10.7967 4.38146 10.7967L10.5612 10.7967C10.691 10.7967 10.789 10.6783 10.789 10.5417L10.789 4.38282C10.789 4.21036 10.684 4.11172 10.5506 4.11172C10.3886 4.11172 10.2836 4.21739 10.2836 4.38146L10.2836 7.58389L10.2673 9.91895L9.1836 8.78232L2.93976 2.54689C2.89181 2.49893 2.82296 2.45577 2.71232 2.45577C2.56007 2.45577 2.45577 2.56007 2.45577 2.71437Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
