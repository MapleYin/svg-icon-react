import React from 'react'

export function SnowflakeCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1595 19.9774C12.3301 19.9774 12.4659 19.8325 12.4659 19.6417L12.4659 17.2695L14.314 18.3548C14.4923 18.4586 14.6797 18.4168 14.7549 18.2691C14.8392 18.1313 14.7953 17.9522 14.6372 17.8666L12.4478 16.6044L12.4478 14.9614L12.4032 12.6772L14.5287 13.867L15.8324 14.62L15.8597 17.1737C15.8597 17.3534 15.939 17.4815 16.1166 17.4815C16.3047 17.4815 16.4203 17.3646 16.4203 17.1737L16.421 14.9369L18.47 16.138C18.6288 16.2236 18.8071 16.2189 18.8935 16.0698C18.9784 15.8922 18.8982 15.7411 18.7583 15.6555L16.7093 14.4648L18.5937 13.3796C18.7524 13.2647 18.8249 13.1254 18.7406 12.9771C18.6368 12.8112 18.4662 12.8064 18.3081 12.8914L16.12 14.1557L14.7137 13.3105L12.6184 12.1706L14.7137 11.0217L16.12 10.1856L18.3081 11.44C18.4662 11.525 18.6375 11.5209 18.7406 11.3551C18.8249 11.2158 18.7524 11.0668 18.5937 10.9525L16.7093 9.86661L18.7583 8.67667C18.8982 8.59102 18.9784 8.43995 18.8935 8.26163C18.7994 8.12237 18.6288 8.10781 18.47 8.19346L16.421 9.39385L16.4203 7.15772C16.4203 6.96827 16.3047 6.85899 16.1082 6.85899C15.939 6.85899 15.8597 6.98711 15.8597 7.15772L15.8324 9.71211L14.519 10.4645L12.4032 11.6634L12.4478 9.3707L12.4478 7.72706L14.6372 6.46485C14.7953 6.37921 14.8392 6.20928 14.7549 6.06299C14.6797 5.91465 14.4923 5.87285 14.314 5.97735L12.4659 7.06191L12.4659 4.68975C12.4659 4.5087 12.3301 4.35401 12.1595 4.35401C11.9805 4.35401 11.8907 4.5003 11.8907 4.68975L11.8907 7.09961L9.94913 5.97735C9.80782 5.87354 9.63086 5.8958 9.5459 6.08116C9.47139 6.22813 9.5334 6.36104 9.67334 6.44669L11.8907 7.72706L11.8907 9.3707L11.9262 11.6634L9.90264 10.5385L8.47813 9.71211L8.47881 7.15772C8.47881 6.98711 8.36251 6.85899 8.18487 6.85899C8.01494 6.85899 7.91748 6.98575 7.91748 7.15772L7.9168 9.38477L5.8587 8.19346C5.67266 8.09805 5.51114 8.12305 5.42618 8.26163C5.34053 8.43926 5.42139 8.59102 5.56133 8.67667L7.61035 9.86661L5.72598 10.9525C5.54834 11.057 5.48565 11.2151 5.57901 11.3739C5.68213 11.5391 5.83458 11.5439 6.03038 11.44L8.19053 10.1772L9.59619 11.0217L11.7013 12.1706L9.59619 13.3105L8.19053 14.1557L6.03038 12.8914C5.83458 12.7876 5.68213 12.8015 5.57061 12.9575C5.48633 13.1254 5.54766 13.2835 5.72598 13.3796L7.61035 14.4648L5.56133 15.6555C5.42139 15.7411 5.34121 15.8922 5.42618 16.0698C5.51182 16.2189 5.67266 16.2425 5.8587 16.138L7.9168 14.9565L7.91748 17.1737C7.91748 17.3457 8.01494 17.4815 8.18487 17.4815C8.36251 17.4815 8.47881 17.3534 8.47881 17.1737L8.47813 14.62L9.90264 13.8021L11.9262 12.6772L11.8907 14.9614L11.8907 16.6044L9.67334 17.8855C9.5334 17.9711 9.47139 18.1124 9.5459 18.2594C9.63086 18.4357 9.80782 18.467 9.94913 18.3548L11.8907 17.2416L11.8907 19.6417C11.8907 19.8318 11.9805 19.9774 12.1595 19.9774Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
