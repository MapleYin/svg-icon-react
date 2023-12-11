import React from 'react'

export default function Rectangle_3GroupFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.7976 20.984' className={className}>
      <path
        d='M1.55294 9.82354L14.4327 9.82354C15.4308 9.82354 15.9857 9.37901 15.9857 8.27627L15.9857 1.60245C15.9857 0.499026 15.4308 0.0558591 14.4327 0.0558591L1.55294 0.0558591C0.554885 0.0558591 0 0.499026 0 1.60245L0 8.27627C0 9.37901 0.554885 9.82354 1.55294 9.82354ZM4.78418 20.984L16.049 20.984C17.0478 20.984 17.6026 20.5311 17.6026 19.4283L17.6026 14.3658C17.6026 13.2624 17.0478 12.8186 16.049 12.8186L4.78418 12.8186C3.78545 12.8186 3.23057 13.2624 3.23057 14.3658L3.23057 19.4283C3.23057 20.5311 3.78545 20.984 4.78418 20.984ZM21.3867 19.7666L30.8735 19.7666C31.8814 19.7666 32.4362 19.3228 32.4362 18.22L32.4362 3.01241C32.4362 1.91875 31.8814 1.46514 30.8735 1.46514L21.3867 1.46514C20.388 1.46514 19.8331 1.91875 19.8331 3.01241L19.8331 18.22C19.8331 19.3228 20.388 19.7666 21.3867 19.7666Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}