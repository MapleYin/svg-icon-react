import React from 'react'

export default function WaveformCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM10.6046 4.85294L10.6046 19.452C10.6046 19.6162 10.7062 19.7269 10.8795 19.7269C11.0515 19.7269 11.1544 19.6155 11.1544 19.452L11.1544 4.85294C11.1544 4.68028 11.0515 4.56895 10.8795 4.56895C10.7068 4.56895 10.6046 4.68028 10.6046 4.85294ZM15.6839 7.32237L15.6839 16.9916C15.6839 17.1636 15.7959 17.2749 15.9595 17.2749C16.1321 17.2749 16.2344 17.1636 16.2344 16.9916L16.2344 7.32237C16.2344 7.15039 16.1321 7.03838 15.9595 7.03838C15.7959 7.03838 15.6839 7.15039 15.6839 7.32237ZM8.06914 7.78038L8.06914 16.5329C8.06914 16.7062 8.18047 16.8085 8.34405 16.8085C8.5167 16.8085 8.61895 16.7062 8.61895 16.5329L8.61895 7.78038C8.61895 7.61681 8.5167 7.50479 8.34405 7.50479C8.18047 7.50479 8.06914 7.61681 8.06914 7.78038ZM13.1491 8.95226L13.1491 15.3617C13.1491 15.5337 13.2605 15.6359 13.4324 15.6359C13.596 15.6359 13.708 15.5337 13.708 15.3617L13.708 8.95226C13.708 8.78936 13.596 8.67804 13.4324 8.67804C13.2605 8.67804 13.1491 8.78936 13.1491 8.95226ZM18.2291 9.52569L18.2291 14.7974C18.2291 14.9609 18.3411 15.0723 18.5138 15.0723C18.6774 15.0723 18.788 14.9616 18.788 14.7974L18.788 9.52569C18.788 9.35235 18.6774 9.25011 18.5138 9.25011C18.3411 9.25011 18.2291 9.35304 18.2291 9.52569ZM5.51553 10.6411L5.51553 13.6813C5.51553 13.8448 5.62754 13.9562 5.79883 13.9562C5.96241 13.9562 6.07442 13.8448 6.07442 13.6813L6.07442 10.6411C6.07442 10.4691 5.96241 10.3571 5.79883 10.3571C5.62686 10.3571 5.51553 10.4691 5.51553 10.6411Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}