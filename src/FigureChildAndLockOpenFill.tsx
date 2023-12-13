import React from 'react'

export function FigureChildAndLockOpenFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38.1967 26.0515' className={className}>
      <path
        d='M32.333 7.24782L32.333 10.0173C32.333 10.154 32.1779 10.2835 32.0549 10.2835C31.9313 10.2835 31.7859 10.161 31.7859 10.0173L31.7859 7.32497C31.7859 3.79147 29.5975 1.29187 26.2488 1.29187C22.9105 1.29187 20.713 3.79147 20.713 7.32497L20.713 10.1101C21.7166 10.3787 22.3957 11.2927 22.3957 12.4701L22.3957 22.1833C22.3957 23.5951 21.4192 24.6282 20.0798 24.6282L12.056 24.6282C12.0647 24.4886 12.0507 24.3393 12.0133 24.1823L10.5072 17.8352C10.3934 17.3663 10.4395 16.2479 10.4395 15.0962L12.2379 15.8355C13.2514 16.2489 14.1659 15.7785 14.5299 14.9987C14.9017 14.1342 14.5163 13.1065 13.4404 12.6498L9.681 11.0701C9.92989 10.7633 10.1149 10.4101 10.2222 10.0252L20.0798 10.0252C20.109 10.0252 20.138 10.0257 20.1659 10.0293L20.1659 7.24782C20.1659 3.48785 22.5618 0.769008 26.2488 0.769008C29.9365 0.769008 32.333 3.48785 32.333 7.24782Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.33158 11.2895C8.50277 11.2895 9.43822 10.3618 9.43822 9.20105C9.43822 8.00261 8.50277 7.07419 7.33158 7.07419C6.189 7.07419 5.22357 8.00261 5.22357 9.20105C5.22357 10.3618 6.189 11.2895 7.33158 11.2895ZM7.3309 18.4062C7.6225 18.4062 7.88412 18.5911 7.98041 18.9588L9.4516 24.4638C9.7557 25.6378 11.2873 25.236 11.1297 24.2771C11.0516 23.6987 9.80365 19.0153 9.62787 17.9808C9.51977 17.2931 9.55043 15.5802 9.55043 14.1677C9.55043 13.9606 9.71918 13.8323 9.90883 13.9118L12.5696 14.9987C13.1408 15.2351 13.5537 14.9869 13.7169 14.6215C13.8816 14.2379 13.7233 13.721 13.0906 13.4677L10.4838 12.3851C9.80434 12.1131 9.06469 11.9484 8.29369 11.8703C7.98412 11.9741 7.6725 12.0089 7.3309 12.0089C6.99769 12.0089 6.68607 11.9741 6.3765 11.8703C5.60551 11.9484 4.86518 12.1131 4.17729 12.3851L1.57055 13.4677C0.946915 13.721 0.788614 14.2379 0.94418 14.6215C1.10746 14.9869 1.52943 15.2351 2.10063 14.9987L4.76137 13.9118C4.94193 13.8323 5.11977 13.9606 5.11977 14.1677C5.11977 15.5802 5.15111 17.2931 5.03324 17.9808C4.85746 19.0153 3.61859 23.6987 3.54047 24.2771C3.38285 25.236 4.91518 25.6378 5.21859 24.4638L6.6807 18.9588C6.77768 18.5911 7.03861 18.4062 7.3309 18.4062Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
