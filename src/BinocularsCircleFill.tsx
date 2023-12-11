import React from 'react'

export default function BinocularsCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM13.5389 7.91641L13.5389 9.26074C13.116 9.0625 12.6346 8.93965 12.1602 8.93965C11.669 8.93965 11.1959 9.0541 10.7542 9.28096L10.7542 7.91641C10.7542 6.9003 10.1085 6.2001 9.01358 6.2001C8.23047 6.2001 7.55957 6.62549 7.22549 7.36338L4.17823 14.0519C3.96973 14.4841 3.88389 14.8593 3.88389 15.2547C3.88389 16.8972 5.3667 18.154 7.33233 18.154C9.27002 18.154 10.7542 16.8972 10.7542 15.2547L10.7542 12.9674C11.1673 12.7301 11.6683 12.5968 12.1602 12.5968C12.6548 12.5968 13.1265 12.719 13.5389 12.936L13.5389 15.2547C13.5389 16.8972 15.0231 18.154 16.9601 18.154C18.9257 18.154 20.4085 16.8972 20.4085 15.2547C20.4085 14.8593 20.3227 14.4841 20.1148 14.0519L17.0676 7.36338C16.7342 6.62549 16.0619 6.2001 15.2788 6.2001C14.1839 6.2001 13.5389 6.9003 13.5389 7.91641ZM10.1168 15.2547C10.1168 16.6627 9.03194 17.5627 7.33233 17.5627C5.62501 17.5627 4.53175 16.6445 4.53175 15.2547C4.53175 13.8467 5.62501 12.9551 7.33233 12.9551C9.01377 12.9551 10.1168 13.8648 10.1168 15.2547ZM19.7606 15.2547C19.7606 16.6445 18.6674 17.5627 16.9601 17.5627C15.2605 17.5627 14.1756 16.6627 14.1756 15.2547C14.1756 13.8648 15.2793 12.9551 16.9601 12.9551C18.6674 12.9551 19.7606 13.8467 19.7606 15.2547ZM13.5389 10.7641L13.5389 11.4146C13.1265 11.1981 12.6548 11.0571 12.1602 11.0571C11.6683 11.0571 11.1484 11.1988 10.7542 11.4473L10.7542 10.7829C11.1777 10.5567 11.669 10.443 12.1602 10.443C12.6346 10.443 13.116 10.5651 13.5389 10.7641Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
