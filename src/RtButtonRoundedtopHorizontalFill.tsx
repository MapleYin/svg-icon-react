import React from 'react'

export default function RtButtonRoundedtopHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2232 20.2154' className={className}>
      <path
        d='M26.8618 8.95489L26.8618 17.1689C26.8618 19.0912 25.7837 20.205 23.8327 20.205L3.02979 20.205C1.06904 20.205 0 19.1282 0 17.1689L0 8.95489C0 3.09258 2.4334 0 8.92726 0L17.9346 0C24.42 0 26.8618 3.09258 26.8618 8.95489ZM14.3172 5.01768C14.1452 5.01768 14.0248 5.13809 14.0248 5.3087C14.0248 5.48067 14.1452 5.60109 14.3172 5.60109L16.5879 5.60109L16.5879 15.0164C16.5879 15.1932 16.7222 15.3268 16.8983 15.3268C17.075 15.3268 17.2177 15.1932 17.2177 15.0164L17.2177 5.60109L19.1825 5.60109C19.3538 5.60109 19.4833 5.48067 19.4833 5.3087C19.4833 5.13809 19.3538 5.01768 19.1825 5.01768ZM7.94669 4.94434C7.74629 4.94434 7.63565 5.06612 7.63565 5.26583L7.63565 14.9313C7.63565 15.1121 7.77491 15.2541 7.96553 15.2541C8.15479 15.2541 8.27589 15.1128 8.27589 14.9313L8.27589 10.7243L10.3222 10.7243L12.2104 15.0637C12.2766 15.2105 12.3747 15.2541 12.5235 15.2541C12.7221 15.2541 12.8389 15.1015 12.8389 14.9542C12.8389 14.8999 12.8257 14.8395 12.8098 14.7951L10.9374 10.546C11.9712 10.231 12.7417 9.33067 12.7417 7.79278C12.7417 6.10235 11.7878 4.94434 10.0009 4.94434ZM12.1008 7.81368C12.1008 9.14151 11.4211 10.1128 9.9459 10.1128L8.27589 10.1128L8.27589 5.53409L9.92706 5.53409C11.234 5.53409 12.1008 6.30216 12.1008 7.81368Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}