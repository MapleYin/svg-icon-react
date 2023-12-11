import React from 'react'

export default function IphoneGen2BadgePlay({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.3305 29.9078' className={className}>
      <path
        d='M19.7177 5.77393L19.7177 16.2214C19.639 16.2105 19.5579 16.2091 19.4766 16.2091C19.3852 16.2091 19.2941 16.2109 19.2055 16.2231L19.2055 5.7463C19.2055 4.04064 18.4715 3.32618 16.7722 3.32618L15.3452 3.32618C15.2051 3.32618 15.1249 3.39728 15.1249 3.53742L15.1249 3.63625C15.1249 3.9883 14.8942 4.23927 14.533 4.23927L11.4277 4.23927C11.0757 4.23927 10.8442 3.9883 10.8442 3.63625L10.8442 3.53742C10.8442 3.39728 10.7648 3.32618 10.6058 3.32618L9.19698 3.32618C7.49698 3.32618 6.763 4.04064 6.763 5.7463L6.763 24.1693C6.763 25.8658 7.49698 26.5894 9.19698 26.5894L13.6307 26.5894C13.7312 26.7697 13.846 26.9404 13.9739 27.1009L9.18194 27.1009C7.21358 27.1009 6.25147 26.1143 6.25147 24.1325L6.25147 5.77393C6.25147 3.79219 7.21358 2.81465 9.18194 2.81465L16.7865 2.81465C18.7549 2.81465 19.7177 3.79219 19.7177 5.77393Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.4407 23.063C25.4407 26.3384 22.7408 29.0181 19.4766 29.0181C16.2194 29.0181 13.5215 26.3307 13.5215 23.063C13.5215 19.7967 16.2194 17.0988 19.4766 17.0988C22.7617 17.0988 25.4407 19.7869 25.4407 23.063ZM17.4705 19.989L17.4705 26.1091C17.4705 26.3787 17.7583 26.5014 17.9966 26.3474L22.8677 23.3983C23.1235 23.2449 23.1214 22.9083 22.8727 22.7439L17.9966 19.75C17.7772 19.6239 17.4705 19.7382 17.4705 19.989Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}