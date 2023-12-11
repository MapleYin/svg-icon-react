import React from 'react'

export default function MoonDust({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.9125 30.1002' className={className}>
      <path
        d='M9.66407 2.3333C9.81602 2.47686 9.83487 2.7333 9.72061 2.99815C9.2587 3.98623 9.01524 5.14112 9.01524 6.44629C9.01524 12.0221 12.2772 15.3064 17.7669 15.3064C19.1901 15.3064 20.2051 15.0936 21.1462 14.7435C21.4013 14.6333 21.6257 14.6633 21.7483 14.8048C21.8465 14.9309 21.8583 15.158 21.744 15.4067C21.0177 16.9576 19.8812 18.1843 18.464 19.0499L17.1411 19.0499C18.9755 18.2377 20.4146 16.9132 21.2771 15.2618C20.4153 15.5815 19.1291 15.8168 17.8079 15.8168C12.0181 15.8168 8.4874 12.2734 8.4874 6.43594C8.4874 5.10177 8.74218 3.72355 9.15888 2.82696C6.42901 4.5089 4.3003 7.53223 4.3003 11.1426C4.3003 14.6889 6.04218 17.6428 8.92943 19.0499L7.81362 19.0499C5.26471 17.4272 3.77744 14.5458 3.77744 11.1326C3.77744 7.1498 5.88164 4.04424 8.9043 2.38027C9.20118 2.18428 9.50167 2.1793 9.66407 2.3333Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.488188 19.5738L27.0505 19.5738C27.2231 19.5738 27.3624 19.4618 27.3624 19.3164C27.3624 19.1619 27.2231 19.0499 27.0505 19.0499L0.488188 19.0499C0.324612 19.0499 0.175587 19.1619 0.175587 19.3164C0.175587 19.4618 0.324612 19.5738 0.488188 19.5738ZM2.07149 23.996C2.34063 23.996 2.54141 23.7868 2.54141 23.5268C2.54141 23.2569 2.34063 23.0568 2.07149 23.0568C1.81143 23.0568 1.61133 23.2569 1.61133 23.5268C1.61133 23.7868 1.81143 23.996 2.07149 23.996ZM7.40283 23.996C7.66358 23.996 7.86367 23.7868 7.86367 23.5268C7.86367 23.2569 7.66358 23.0568 7.40283 23.0568C7.13369 23.0568 6.93359 23.2569 6.93359 23.5268C6.93359 23.7868 7.13369 23.996 7.40283 23.996ZM12.7258 23.996C12.9858 23.996 13.1859 23.7868 13.1859 23.5268C13.1859 23.2569 12.9858 23.0568 12.7258 23.0568C12.456 23.0568 12.2559 23.2569 12.2559 23.5268C12.2559 23.7868 12.456 23.996 12.7258 23.996ZM18.048 23.996C18.3081 23.996 18.5173 23.7868 18.5173 23.5268C18.5173 23.2569 18.3081 23.0568 18.048 23.0568C17.7789 23.0568 17.5781 23.2569 17.5781 23.5268C17.5781 23.7868 17.7789 23.996 18.048 23.996ZM23.3703 23.996C23.6395 23.996 23.8396 23.7868 23.8396 23.5268C23.8396 23.2569 23.6395 23.0568 23.3703 23.0568C23.1012 23.0568 22.9004 23.2569 22.9004 23.5268C22.9004 23.7868 23.1012 23.996 23.3703 23.996ZM0.469923 27.0526C0.729982 27.0526 0.93008 26.8435 0.93008 26.5834C0.93008 26.3136 0.729982 26.1135 0.469923 26.1135C0.200098 26.1135 0 26.3136 0 26.5834C0 26.8435 0.200098 27.0526 0.469923 27.0526ZM5.79219 27.0526C6.05225 27.0526 6.26143 26.8435 6.26143 26.5834C6.26143 26.3136 6.05225 26.1135 5.79219 26.1135C5.52305 26.1135 5.32227 26.3136 5.32227 26.5834C5.32227 26.8435 5.52305 27.0526 5.79219 27.0526ZM11.1145 27.0526C11.3836 27.0526 11.5837 26.8435 11.5837 26.5834C11.5837 26.3136 11.3836 26.1135 11.1145 26.1135C10.8453 26.1135 10.6445 26.3136 10.6445 26.5834C10.6445 26.8435 10.8453 27.0526 11.1145 27.0526ZM16.4367 27.0526C16.7059 27.0526 16.9066 26.8435 16.9066 26.5834C16.9066 26.3136 16.7059 26.1135 16.4367 26.1135C16.1767 26.1135 15.9668 26.3136 15.9668 26.5834C15.9668 26.8435 16.1767 27.0526 16.4367 27.0526ZM21.759 27.0526C22.0281 27.0526 22.2289 26.8435 22.2289 26.5834C22.2289 26.3136 22.0281 26.1135 21.759 26.1135C21.4989 26.1135 21.2988 26.3136 21.2988 26.5834C21.2988 26.8435 21.4989 27.0526 21.759 27.0526ZM27.0813 27.0526C27.3504 27.0526 27.5512 26.8435 27.5512 26.5834C27.5512 26.3136 27.3504 26.1135 27.0813 26.1135C26.8212 26.1135 26.6211 26.3136 26.6211 26.5834C26.6211 26.8435 26.8212 27.0526 27.0813 27.0526ZM4.18086 30.1002C4.45 30.1002 4.65078 29.9001 4.65078 29.6394C4.65078 29.3702 4.45 29.1701 4.18086 29.1701C3.9208 29.1701 3.71094 29.3702 3.71094 29.6394C3.71094 29.9001 3.9208 30.1002 4.18086 30.1002ZM9.50313 30.1002C9.77227 30.1002 9.97305 29.9001 9.97305 29.6394C9.97305 29.3702 9.77227 29.1701 9.50313 29.1701C9.24307 29.1701 9.04297 29.3702 9.04297 29.6394C9.04297 29.9001 9.24307 30.1002 9.50313 30.1002ZM14.8254 30.1002C15.0945 30.1002 15.2953 29.9001 15.2953 29.6394C15.2953 29.3702 15.0945 29.1701 14.8254 29.1701C14.5653 29.1701 14.3652 29.3702 14.3652 29.6394C14.3652 29.9001 14.5653 30.1002 14.8254 30.1002ZM20.1567 30.1002C20.4175 30.1002 20.6176 29.9001 20.6176 29.6394C20.6176 29.3702 20.4175 29.1701 20.1567 29.1701C19.8876 29.1701 19.6875 29.3702 19.6875 29.6394C19.6875 29.9001 19.8876 30.1002 20.1567 30.1002ZM25.4797 30.1002C25.7397 30.1002 25.9398 29.9001 25.9398 29.6394C25.9398 29.3702 25.7397 29.1701 25.4797 29.1701C25.2105 29.1701 25.0098 29.3702 25.0098 29.6394C25.0098 29.9001 25.2105 30.1002 25.4797 30.1002Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
