import React from 'react'

export default function FigureFall({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.6047 21.8417' className={className}>
      <path
        d='M4.46958 5.60883C5.83658 5.60883 6.93785 4.50756 6.93785 3.14056C6.93785 1.77357 5.83658 0.672301 4.46958 0.672301C3.10327 0.672301 2.002 1.77357 2.002 3.14056C2.002 4.50756 3.10327 5.60883 4.46958 5.60883ZM0.0268065 10.5142L0.695655 14.6579C0.932081 16.0875 2.90366 15.8198 2.65816 14.3908L2.05132 10.752L4.47095 9.80199C4.8895 9.64643 5.21245 9.75951 5.37007 10.0936L7.52037 14.374C8.15923 15.651 8.70816 16.0346 9.22916 16.4175L16.2192 21.5334C17.3825 22.3815 18.7627 20.7329 17.4424 19.7585L12.0133 15.7725C11.712 15.5395 11.7406 15.1391 12.081 14.9452L15.8006 12.7872L20.6683 15.1035C21.9697 15.7248 23.0235 13.9284 21.4773 13.1989L16.3126 10.7256C15.7582 10.4585 15.187 10.5192 14.6583 10.824L12.2143 12.2468C11.8998 12.4337 11.5809 12.3731 11.4358 12.0626L9.49127 8.0766C9.28619 7.63988 9.36226 7.24858 9.78355 7.06234L11.5705 6.24701C12.1598 5.97221 12.3663 5.78529 12.5057 5.26156L13.6252 1.3348C14.0206-0.0649063 12.1655-0.568422 11.7708 0.831286L10.652 4.70717L0.766749 9.0559C0.135596 9.32299-0.0819827 9.79584 0.0268065 10.5142Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
