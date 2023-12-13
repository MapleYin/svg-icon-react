import React from 'react'

export function FigureWalkCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.9452 19.6439C15.3086 19.6439 15.6434 19.3711 15.6434 18.9023C15.6434 18.7161 15.5952 18.5501 15.4976 18.3548L14.0956 15.5111C13.9666 15.2811 13.8201 15.0299 13.6925 14.8353L12.7947 13.556L12.8358 13.4151C13.0911 12.6255 13.1895 12.1274 13.2383 11.3294L13.3848 9.21573C13.4447 8.23301 12.8658 7.4833 11.8399 7.4833C11.0496 7.4833 10.5854 7.89209 9.85088 8.54209L8.56934 9.66514C8.16963 10.0181 8.07129 10.3397 8.04131 10.8091L7.89483 12.5349C7.86485 12.9966 8.1208 13.3007 8.5337 13.33C8.91661 13.3411 9.20186 13.1054 9.25069 12.6234L9.41602 10.7428L10.0773 10.1959C10.2727 10.0306 10.5336 10.1101 10.4959 10.4198L10.3696 11.9446C10.2824 12.8124 10.6556 13.4081 11.0482 13.9075L12.4845 15.7246C12.6303 15.8997 12.6414 15.9862 12.7098 16.0957L14.2289 19.164C14.404 19.5337 14.6774 19.6439 14.9452 19.6439ZM8.44873 19.6815C8.68379 19.6815 8.89864 19.5839 9.02627 19.4263L11.1843 16.8295C11.4193 16.5456 11.4396 16.5261 11.4988 16.2526L11.681 15.4941L10.5036 14.0036L10.1137 15.9011L8.07696 18.3012C7.88301 18.5244 7.75401 18.7016 7.75401 18.9952C7.75401 19.4074 8.04766 19.6815 8.44873 19.6815ZM15.2359 11.6487L16.7744 11.6487C17.2375 11.6487 17.5402 11.3928 17.5402 10.9799C17.5402 10.5586 17.2375 10.2922 16.7744 10.2922L15.1467 10.2922L13.8826 8.91934L13.755 10.7349L14.3557 11.3265C14.6187 11.5804 14.8244 11.6487 15.2359 11.6487ZM12.6678 7.01612C13.5299 7.01612 14.2169 6.31094 14.2169 5.47813C14.2169 4.61533 13.5299 3.92901 12.6678 3.92901C11.8154 3.92901 11.1298 4.61533 11.1298 5.47813C11.1298 6.31094 11.8154 7.01612 12.6678 7.01612Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
