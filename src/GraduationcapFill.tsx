import React from 'react'

export default function GraduationcapFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.6447 30.527' className={className}>
      <path
        d='M32.5704 10.3091L19.8223 4.44386C18.5053 3.83068 17.5805 3.64943 16.6375 3.65988C15.7029 3.64943 14.7781 3.83068 13.4521 4.44386L0.712991 10.3091C0.261427 10.514 0 10.8924 0 11.3435C0 11.7946 0.261427 12.1709 0.712991 12.3856L7.74091 15.5778L14.66 11.9486C14.4072 11.7497 14.2676 11.5326 14.2676 11.3246C14.2676 10.8556 15.1997 10.241 16.6312 10.241C18.071 10.241 18.9843 10.8556 18.9843 11.3246C18.9843 11.8321 18.071 12.4375 16.6312 12.4375C16.0911 12.4375 15.6258 12.3608 15.2358 12.2072L8.28213 15.873L13.4521 18.2424C14.7963 18.8563 15.7029 19.0368 16.6375 19.0271C17.5805 19.0368 18.5053 18.8563 19.8223 18.2424L32.5704 12.3856C33.022 12.1709 33.2834 11.7946 33.2834 11.3435C33.2834 10.8924 33.022 10.514 32.5704 10.3091ZM8.27939 16.854L8.27939 24.1247C10.1408 25.3209 12.9559 26.2684 16.6375 26.2684C23.6634 26.2684 27.5462 22.8362 27.5462 20.7142L27.5462 15.6603L20.195 19.0402C18.8769 19.6497 17.7694 19.9364 16.6375 19.9168C15.514 19.9364 14.4065 19.6497 13.0884 19.0402ZM5.71904 15.6791L5.71904 20.7142C5.71904 21.6515 6.41738 22.7519 7.73525 23.7478L7.73525 16.6091ZM7.73525 26.0404L8.27939 26.0404L8.27939 24.1247C8.09648 24.0016 7.90859 23.8848 7.73525 23.7478ZM6.77616 26.0361L6.77616 29.4577C6.77616 30.1499 7.15322 30.527 7.8539 30.527L8.16845 30.527C8.86982 30.527 9.24687 30.1499 9.24687 29.4577L9.24687 26.0361C9.24687 25.3354 8.86982 24.9583 8.16845 24.9583L7.8539 24.9583C7.15322 24.9583 6.77616 25.3354 6.77616 26.0361Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
