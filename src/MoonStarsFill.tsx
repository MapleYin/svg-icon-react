import React from 'react'

export default function MoonStarsFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.964 24.5723' className={className}>
      <path
        d='M21.7551 13.6201C21.8239 13.6201 21.8789 13.5833 21.89 13.4956C22.4664 10.0992 22.402 10.2509 25.8472 9.54687C25.909 9.53505 25.964 9.49052 25.964 9.4119C25.964 9.32489 25.909 9.28876 25.8408 9.27694C22.4131 8.57723 22.4664 8.73436 21.89 5.31913C21.8789 5.24051 21.8239 5.2037 21.7551 5.2037C21.6869 5.2037 21.6313 5.24051 21.6208 5.32753C21.0431 8.6994 21.1654 8.56796 17.6693 9.27694C17.6019 9.28807 17.5462 9.32489 17.5462 9.4119C17.5462 9.48983 17.6019 9.53505 17.6693 9.54687C21.1654 10.2389 21.0424 10.1187 21.6208 13.497C21.6313 13.5833 21.6869 13.6201 21.7551 13.6201ZM15.7388 5.97889C15.784 5.97889 15.8076 5.96434 15.8181 5.91005C16.0983 3.70985 16.208 3.54091 18.5338 3.17616C18.6153 3.16571 18.6397 3.133 18.6397 3.0787C18.6397 3.02372 18.6153 2.99169 18.5338 2.98055C16.2269 2.51317 16.3595 2.33583 15.8181 0.246667C15.8076 0.192369 15.784 0.177818 15.7388 0.177818C15.7026 0.177818 15.6797 0.192369 15.6595 0.246667C15.1188 2.33583 15.3072 2.51317 12.9444 2.98055C12.872 2.99169 12.8477 3.02372 12.8477 3.0787C12.8477 3.133 12.872 3.16571 12.9444 3.17616C15.3072 3.64354 15.3422 3.70985 15.6595 5.91005C15.6797 5.96434 15.7026 5.97889 15.7388 5.97889Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.5862 24.5723C17.0085 24.5723 20.5714 22.5644 22.2232 19.0807C22.3444 18.8249 22.3522 18.5823 22.2288 18.4401C22.1082 18.3007 21.8949 18.2525 21.5965 18.3627C20.5704 18.7449 19.4439 19.0136 17.8645 19.0136C11.9309 19.0136 8.23038 15.4582 8.23038 9.26396C8.23038 8.04071 8.41163 6.69755 9.00684 5.4415C9.14835 5.14872 9.11134 4.89706 8.95235 4.74511C8.79337 4.59315 8.51309 4.58134 8.14424 4.79481C4.86582 6.61434 2.53564 10.0406 2.53564 14.3923C2.53564 20.0551 6.30215 24.5723 12.5862 24.5723Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}