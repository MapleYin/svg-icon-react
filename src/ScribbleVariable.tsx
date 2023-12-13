import React from 'react'

export function ScribbleVariable({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.7998 23.5565' className={className}>
      <path
        d='M0.353027 15.5985C0.869727 16.0963 1.7376 15.9767 2.41241 15.454C2.71719 15.2169 3.43917 14.4552 7.15302 10.6576C11.6645 6.03099 15.7735 2.02953 17.1427 2.90502C18.5561 3.79818 16.3574 7.0349 15.0945 8.87787C9.92353 16.3663 7.67089 19.4674 9.31484 21.112C10.4439 22.2405 12.5356 21.6729 17.203 17.6165C20.1653 15.0212 22.115 13.188 23.1417 14.1958C23.8193 14.8546 23.4786 15.8821 22.1444 18.2134C20.9146 20.3403 19.7411 22.1631 20.8009 23.2222C21.6405 24.0618 23.0049 23.2913 25.3248 21.2319C25.4591 21.1067 25.4841 20.9599 25.3441 20.8388C25.2153 20.7288 25.0511 20.7225 24.9027 20.8695C23.4033 22.3759 21.7998 23.3649 21.2128 22.7765C20.6217 22.1958 21.1273 20.8158 22.5078 18.6053C24.3042 15.7076 24.3632 14.4821 23.5764 13.6973C22.2552 12.3704 20.648 13.438 16.6337 16.9732C13.2036 19.982 11.0588 21.0436 10.3232 20.3171C9.40216 19.3869 10.4709 17.5802 16.3029 9.40503C19.1999 5.33949 20.1965 2.69261 18.5174 1.39544C16.3608-0.250663 13.3093 1.01067 5.43494 8.66791C1.51582 12.4837 0.772949 13.2064 0.489062 13.5293C-0.109671 14.1796-0.162989 15.1006 0.353027 15.5985Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
