import React from 'react'

export default function RbButtonRoundedbottomHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2232 20.2154' className={className}>
      <path
        d='M26.8618 3.02706L26.8618 11.241C26.8618 17.1033 24.42 20.205 17.9346 20.205L8.92726 20.205C2.4334 20.205 0 17.1033 0 11.241L0 3.02706C0 1.06836 1.06904 0 3.02979 0L23.8327 0C25.7837 0 26.8618 1.10537 26.8618 3.02706ZM7.81358 4.94434C7.60479 4.94434 7.50322 5.06612 7.50322 5.26583L7.50322 14.9313C7.50322 15.1121 7.64248 15.2541 7.83243 15.2541C8.02169 15.2541 8.14278 15.1128 8.14278 14.9313L8.14278 10.7243L10.1891 10.7243L12.0773 15.0637C12.1435 15.2105 12.2423 15.2541 12.3814 15.2541C12.589 15.2541 12.6981 15.1015 12.6981 14.9542C12.6981 14.8999 12.6926 14.8395 12.6676 14.7951L10.8043 10.546C11.8381 10.231 12.6086 9.33067 12.6086 7.79278C12.6086 6.10235 11.6463 4.94434 9.86846 4.94434ZM14.9374 5.02676C14.7475 5.02676 14.6375 5.17012 14.6375 5.3587L14.6375 14.8867C14.6375 15.076 14.7482 15.2355 14.9374 15.2355L17.3178 15.2355C19.0211 15.2355 19.9997 14.1369 19.9997 12.4942C19.9997 11.2184 19.3588 10.0953 18.1227 9.93204L18.1227 9.88321C19.0148 9.68926 19.6048 8.60665 19.6048 7.51837C19.6048 6.12842 18.7513 5.02676 17.2767 5.02676ZM19.3511 12.4588C19.3511 13.8048 18.5862 14.631 17.2312 14.631L15.2471 14.631L15.2471 10.2775L17.1362 10.2775C18.5326 10.2775 19.3511 11.0787 19.3511 12.4588ZM11.9677 7.81368C11.9677 9.14151 11.288 10.1128 9.8128 10.1128L8.14278 10.1128L8.14278 5.53409L9.79395 5.53409C11.1009 5.53409 11.9677 6.30216 11.9677 7.81368ZM18.9512 7.58087C18.9512 8.83057 18.2576 9.68262 17.0079 9.68262L15.2471 9.68262L15.2471 5.63194L17.1551 5.63194C18.3133 5.63194 18.9512 6.40226 18.9512 7.58087Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
