import React from 'react'

export default function RbButtonRoundedbottomHorizontal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2232 20.2154' className={className}>
      <path
        d='M8.92726 20.205L17.9346 20.205C24.42 20.205 26.8618 17.1033 26.8618 11.241L26.8618 3.02706C26.8618 1.10537 25.7837 0 23.8327 0L3.02979 0C1.06904 0 0 1.06836 0 3.02706L0 11.241C0 17.1033 2.4334 20.205 8.92726 20.205ZM8.96495 19.6935C2.76837 19.6935 0.511533 16.7654 0.511533 11.1934L0.511533 3.05137C0.511533 1.37745 1.35997 0.503135 3.05977 0.503135L23.8021 0.503135C25.4278 0.503135 26.3503 1.37745 26.3503 3.05137L26.3503 11.1934C26.3503 16.7654 24.0935 19.6935 17.8976 19.6935Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.83877 15.2471C8.02735 15.2471 8.15753 15.1155 8.15753 14.9249L8.15753 10.7243L10.1877 10.7243L12.0767 15.0566C12.1421 15.2041 12.2409 15.2471 12.3891 15.2471C12.5974 15.2471 12.7149 15.0951 12.7149 14.9479C12.7149 14.8936 12.701 14.8331 12.676 14.7888L10.8211 10.546C11.8458 10.231 12.617 9.33067 12.617 7.80118C12.617 6.10938 11.6631 4.94229 9.87481 4.94229L7.81924 4.94229C7.61045 4.94229 7.50889 5.07315 7.50889 5.27286L7.50889 14.9249C7.50889 15.1148 7.64815 15.2471 7.83877 15.2471ZM8.15753 10.1135L8.15753 5.55021L9.80098 5.55021C11.0995 5.55021 11.967 6.30919 11.967 7.81231C11.967 9.14083 11.2873 10.1135 9.81983 10.1135ZM14.9465 15.2291L17.3282 15.2291C19.0225 15.2291 20.0025 14.1299 20.0025 12.4956C20.0025 11.219 19.3706 10.096 18.1234 9.93272L18.1234 9.88321C19.0252 9.68926 19.6152 8.60596 19.6152 7.52676C19.6152 6.12706 18.7617 5.03379 17.2871 5.03379L14.9465 5.03379C14.7566 5.03379 14.6375 5.16807 14.6375 5.36505L14.6375 14.8797C14.6375 15.0787 14.7482 15.2291 14.9465 15.2291ZM15.2652 9.68194L15.2652 5.63898L17.1558 5.63898C18.3153 5.63898 18.9532 6.40997 18.9532 7.58018C18.9532 8.83057 18.2597 9.68194 17.0093 9.68194ZM15.2652 14.6246L15.2652 10.2775L17.1369 10.2775C18.534 10.2775 19.3531 11.0794 19.3531 12.4504C19.3531 13.8068 18.5883 14.6246 17.2409 14.6246Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
