import React from 'react'

export default function DocRichtextFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M3.41954 10.9158C3.24825 10.9158 3.15078 10.81 3.15078 10.6764C3.15078 10.6339 3.16192 10.5789 3.17442 10.5421L5.69268 4.246C5.73086 4.15098 5.84014 4.09053 5.95264 4.09053C6.05675 4.09053 6.14854 4.15098 6.18673 4.246L8.70499 10.5421C8.71749 10.5796 8.73702 10.6339 8.73702 10.6764C8.73702 10.81 8.63184 10.9158 8.45987 10.9158C8.36738 10.9158 8.29014 10.8588 8.24697 10.7615L7.40176 8.62803L4.47696 8.62803L3.64151 10.7615C3.59835 10.8595 3.5127 10.9158 3.41954 10.9158ZM4.69591 8.08946L7.1835 8.08946L5.94629 4.92686L5.93243 4.92686ZM11.1006 5.98331C10.9363 5.98331 10.8068 5.85313 10.8068 5.69932C10.8068 5.54551 10.9363 5.4251 11.1006 5.4251L16.9569 5.4251C17.1296 5.4251 17.2591 5.54551 17.2591 5.69932C17.2591 5.85313 17.1296 5.98331 16.9569 5.98331ZM11.1006 10.4609C10.9363 10.4609 10.8068 10.3308 10.8068 10.1763C10.8068 10.0322 10.9363 9.90273 11.1006 9.90273L16.9569 9.90273C17.1296 9.90273 17.2591 10.0322 17.2591 10.1763C17.2591 10.3308 17.1296 10.4609 16.9569 10.4609ZM2.60469 22.3273L2.60469 14.7754C2.60469 13.6628 3.14659 13.1418 4.25714 13.1418L15.7749 13.1418C16.8875 13.1418 17.4267 13.6628 17.4267 14.7754L17.4267 22.3387L17.1727 22.3387L13.7509 18.619C13.4159 18.2541 12.9735 18.1097 12.5786 18.1097C12.2389 18.1097 11.8446 18.273 11.4504 18.6002L8.2919 21.3093L7.10938 20.2153C6.81007 19.9355 6.47237 19.7736 6.15352 19.7736C5.86329 19.7736 5.55421 19.9265 5.22765 20.2153L2.85861 22.3273ZM7.21612 18.545C8.1336 18.545 8.88711 17.8006 8.88711 16.8838C8.88711 15.9663 8.1336 15.2142 7.21612 15.2128C6.30772 15.2205 5.55489 15.9663 5.55489 16.8838C5.55489 17.8006 6.30772 18.545 7.21612 18.545ZM0 23.3611C0 25.4356 1.10537 26.5424 3.1876 26.5424L16.8528 26.5424C18.926 26.5424 20.0314 25.4356 20.0314 23.3611L20.0314 3.23643C20.0314 1.16192 18.926 0.0551754 16.8528 0.0551754L3.1876 0.0551754C1.10537 0.0551754 0 1.16192 0 3.23643Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
