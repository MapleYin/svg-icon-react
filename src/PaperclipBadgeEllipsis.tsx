import React from 'react'

export default function PaperclipBadgeEllipsis({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.1524 26.591' className={className}>
      <path
        d='M25.5674 2.78438C26.9917 4.2087 27.6516 6.83438 25.5188 8.97628L13.1716 21.3234C12.039 22.447 10.597 22.2835 9.71642 21.4029C8.82248 20.5083 8.6633 19.0706 9.79591 17.9471L19.0279 8.70528C19.2063 8.53604 19.3397 8.59053 19.4342 8.6753C19.519 8.76983 19.5728 8.9214 19.4133 9.08087L10.1638 18.3206C9.30901 19.1949 9.41145 20.287 10.1072 21.0023C10.8233 21.6988 11.9154 21.811 12.7897 20.9549L25.1509 8.60137C27.0201 6.71397 26.4332 4.39229 25.1939 3.1711C23.9461 1.92335 21.6321 1.32667 19.7636 3.21407L7.15481 15.8047C4.65891 18.3181 5.05109 21.7342 7.21359 23.896C9.37609 26.0592 12.7922 26.4598 15.3056 23.9555L18.5273 20.7369C18.5499 20.9465 18.5903 21.1505 18.647 21.3483L15.7475 24.2478C12.8257 27.1779 9.1464 26.5476 6.85841 24.2603C4.5711 21.973 3.92257 18.3118 6.86251 15.3628L19.3832 2.85049C21.5349 0.698829 24.1361 1.35302 25.5674 2.78438Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M31.2626 19.7371C31.2626 23.0125 28.5627 25.7013 25.2985 25.7013C22.0412 25.7013 19.3343 23.0139 19.3343 19.7371C19.3343 16.4799 22.0412 13.773 25.2985 13.773C28.5745 13.773 31.2626 16.461 31.2626 19.7371ZM21.4146 19.7183C21.4146 20.145 21.7528 20.493 22.1607 20.493C22.5693 20.493 22.9172 20.145 22.9354 19.7183C22.9451 19.3292 22.5881 18.9715 22.1607 18.9715C21.7528 18.9715 21.4146 19.3104 21.4146 19.7183ZM24.5796 19.7183C24.5796 20.145 24.9283 20.493 25.3355 20.493C25.7434 20.493 26.0829 20.145 26.1011 19.7183C26.12 19.3292 25.7622 18.9715 25.3355 18.9715C24.9283 18.9715 24.5796 19.3104 24.5796 19.7183ZM27.6706 19.7183C27.6706 20.145 28.0088 20.493 28.4174 20.493C28.8253 20.493 29.1733 20.145 29.1914 19.7183C29.2012 19.3292 28.8442 18.9715 28.4174 18.9715C28.0088 18.9715 27.6706 19.3104 27.6706 19.7183Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
