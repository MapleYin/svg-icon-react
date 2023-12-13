import React from 'react'

export function NetworkBadgeShieldHalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.9518 27.2476' className={className}>
      <path
        d='M27.8895 12.3553C27.698 12.2823 27.5056 12.2092 27.311 12.1356C27.2623 11.666 27.1751 11.2086 27.0485 10.7668C25.1718 11.6365 23.1401 12.2526 21.0005 12.5595C21.0047 12.595 21.0062 12.6312 21.0062 12.6677C21.0062 12.8471 20.9717 13.0186 20.9082 13.1756C20.8099 13.2123 20.7089 13.2499 20.6069 13.2879C20.0809 13.4851 19.6983 13.7176 19.4395 14.0328C18.8151 13.9415 18.3254 13.4291 18.2678 12.7946C18.2187 12.7994 18.1687 12.8004 18.1186 12.8012C17.1812 12.8135 16.2558 12.7686 15.3511 12.6522C15.3235 12.9593 15.3166 13.2717 15.3166 13.5857C15.3166 15.2057 15.4998 16.782 15.8493 18.2935C15.9904 18.2509 16.1411 18.2282 16.2983 18.2282C17.0357 18.2282 17.62 18.719 17.7643 19.398C18.174 19.4083 18.5839 19.3963 18.9928 19.3591L18.9928 19.9208C18.59 19.9552 18.1862 19.9658 17.7826 19.9565C17.7004 20.5475 17.2912 21.0145 16.7297 21.1732C17.2299 22.4812 17.8598 23.7231 18.602 24.8839C19.2295 24.7421 19.832 24.5371 20.4079 24.2826C20.5363 24.4098 20.6812 24.5362 20.8428 24.6632C19.3079 25.3835 17.5957 25.7797 15.7952 25.7797C9.09571 25.7797 3.63438 20.3087 3.63438 13.6189C3.63438 11.6854 4.08994 9.85431 4.91074 8.23419L4.95031 8.14145C4.95159 8.14237 4.95287 8.14329 4.95426 8.14406C6.95485 4.17611 11.0704 1.44829 15.7945 1.44829C22.0589 1.44829 27.2542 6.2447 27.8895 12.3553ZM9.81173 21.9725C10.0013 22.6398 10.178 23.2684 10.385 23.8984C11.9988 24.7568 13.8409 25.2399 15.7952 25.2399C16.5556 25.2399 17.299 25.1668 18.017 25.0219C17.2741 23.8322 16.6455 22.5617 16.1473 21.2261C15.3814 21.1538 14.8031 20.5337 14.7957 19.7474C12.9242 19.4951 11.0817 18.9907 9.31922 18.2428C9.36284 19.4766 9.52838 20.7241 9.81173 21.9725ZM9.66934 23.4797C9.54683 23.0423 9.40245 22.5662 9.27374 22.1121C8.97482 20.7304 8.81001 19.352 8.77684 17.9917C7.19873 17.2852 5.69399 16.3699 4.30123 15.2495C4.77774 18.7289 6.80649 21.7118 9.66934 23.4797ZM10.0408 12.7923C9.95718 12.7923 9.87508 12.7856 9.79564 12.7709C9.43463 14.3445 9.2632 15.9751 9.29048 17.6317C11.086 18.4239 12.9709 18.9501 14.8873 19.2055C14.9782 18.9486 15.1371 18.7274 15.3432 18.5609C14.9588 16.9657 14.7598 15.2984 14.7598 13.5857C14.7598 13.2514 14.7673 12.919 14.796 12.5923C13.6415 12.4497 12.5168 12.2098 11.4316 11.8773C11.1955 12.4162 10.6589 12.7923 10.0408 12.7923ZM4.17355 13.6189L4.21545 14.4479C5.62284 15.653 7.15596 16.6321 8.77104 17.3825C8.75992 15.7487 8.93856 14.1445 9.29184 12.5956C8.82491 12.3339 8.50958 11.834 8.50958 11.2611C8.50958 11.1087 8.53246 10.9612 8.57552 10.8221C7.37163 10.3019 6.23178 9.66594 5.16805 8.92844C4.52633 10.3604 4.17355 11.9487 4.17355 13.6189ZM15.3712 12.1107C16.2628 12.224 17.1752 12.2638 18.0997 12.2444C18.1791 12.2426 18.2584 12.2404 18.3362 12.2327C18.4299 11.9591 18.611 11.7231 18.847 11.5583C18.5572 10.5621 18.3776 9.51719 18.315 8.43843C18.1952 6.34276 18.5248 4.33048 19.216 2.51141L18.586 2.34932C16.7668 5.20026 15.6175 8.53253 15.3712 12.1107ZM10.658 9.87384C11.1889 10.1113 11.5616 10.6459 11.5616 11.2611C11.5616 11.2936 11.5606 11.3259 11.5568 11.3575C12.6082 11.6822 13.6976 11.9153 14.8157 12.0523C15.0651 8.45501 16.1968 5.10963 18.0151 2.21503C17.3223 2.07509 16.6057 2.00234 15.8721 2.00115C13.5642 4.19275 11.777 6.89101 10.658 9.87384ZM18.8802 8.38257C18.9435 9.40304 19.1113 10.39 19.3779 11.3309C19.4637 11.3136 19.5524 11.3047 19.6432 11.3047C20.1483 11.3047 20.5974 11.5924 20.8322 12.0107C22.9774 11.7052 25.0157 11.0909 26.907 10.2165C25.8404 6.72364 23.17 3.92958 19.7499 2.70331C19.0712 4.45829 18.7613 6.39743 18.8802 8.38257ZM5.40321 8.4404C6.47008 9.18344 7.61377 9.82408 8.82153 10.3463C9.0999 9.97861 9.54276 9.74029 10.0408 9.74029C10.0703 9.74029 10.0995 9.74114 10.128 9.74475C11.1954 6.84974 12.8697 4.2171 15.0445 2.03513C10.8094 2.29252 7.19239 4.83107 5.40321 8.4404Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M29.424 20.7104L29.424 16.1283C29.424 15.407 29.2435 15.1428 28.5488 14.8953C27.3372 14.4445 26.3163 14.0306 25.1026 13.5742C24.7909 13.4717 24.4255 13.4899 24.2011 13.5805C23.0447 14.0467 21.9791 14.4445 20.7669 14.8953C20.0729 15.1428 19.8923 15.407 19.8923 16.1283L19.8923 20.7104C19.8923 22.5966 20.8285 23.3087 24.2136 25.2218C24.5009 25.3808 24.902 25.3508 25.1209 25.2218C28.4878 23.3275 29.424 22.5966 29.424 20.7104ZM24.6397 24.8287C24.6147 24.8203 24.5897 24.8091 24.5542 24.7862C21.1348 22.8418 20.4378 22.331 20.4378 20.7337L20.4378 16.0773C20.4378 15.7725 20.6011 15.5409 20.8988 15.4321C22.0954 14.9883 23.2906 14.5264 24.4502 14.0722C24.5045 14.0604 24.5861 14.0409 24.6397 14.0416Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
