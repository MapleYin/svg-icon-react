import React from 'react'

export default function RJoystick({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.8832 22.0797' className={className}>
      <path
        d='M17.9266 18.9402C17.9266 20.9116 16.1933 22.0797 13.2567 22.0797C10.3286 22.0797 8.59532 20.9116 8.59532 18.9402L8.59532 18.1153C9.99727 18.426 11.5597 18.5897 13.2567 18.5897C14.9568 18.5897 16.5221 18.4254 17.9266 18.1136Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.2567 17.6766C20.9986 17.6766 25.6004 14.1818 25.6004 9.92637C25.6004 5.6625 21.007 2.17617 13.2463 2.17617C5.51485 2.17617 0.912406 5.6625 0.912406 9.92637C0.912406 14.1818 5.51485 17.6766 13.2567 17.6766ZM13.2567 17.1757C6.2422 17.1757 1.40197 14.1659 1.40197 9.92637C1.40197 5.68751 6.2422 2.66866 13.2463 2.66866C20.279 2.66866 25.1206 5.68751 25.1206 9.92637C25.1206 14.1659 20.2797 17.1757 13.2567 17.1757Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.111 13.6868C11.2585 13.6868 11.395 13.5755 11.395 13.4357L11.395 10.3916L13.4845 10.3916L15.277 13.4856C15.3444 13.6157 15.4106 13.6875 15.5394 13.6875C15.6814 13.6875 15.792 13.5887 15.792 13.4551C15.792 13.352 15.7425 13.2963 15.6812 13.1861L14.0329 10.3402C15.1067 10.1165 15.7925 9.2585 15.7925 8.14229C15.7925 6.82208 14.8189 5.87344 13.4437 5.87344L11.0929 5.87344C10.9468 5.87344 10.848 5.98409 10.848 6.16153L10.848 13.4357C10.848 13.5755 10.9656 13.6868 11.111 13.6868ZM11.395 9.85323L11.395 6.4048L13.4983 6.4048C14.5428 6.4048 15.2545 7.1047 15.2545 8.13458C15.2545 9.15538 14.5435 9.85323 13.497 9.85323Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
