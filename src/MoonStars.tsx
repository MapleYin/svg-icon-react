import React from 'react'

export function MoonStars({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.964 24.5723' className={className}>
      <path
        d='M21.7551 13.6201C21.8239 13.6201 21.8789 13.5833 21.89 13.4956C22.4664 10.0992 22.402 10.2509 25.8472 9.54687C25.909 9.53505 25.964 9.49052 25.964 9.4119C25.964 9.32489 25.909 9.28876 25.8408 9.27694C22.4131 8.57723 22.4664 8.73436 21.89 5.31913C21.8789 5.24051 21.8239 5.2037 21.7551 5.2037C21.6869 5.2037 21.6313 5.24051 21.6208 5.32753C21.0431 8.6994 21.1654 8.56796 17.6693 9.27694C17.6019 9.28807 17.5462 9.32489 17.5462 9.4119C17.5462 9.48983 17.6019 9.53505 17.6693 9.54687C21.1654 10.2389 21.0424 10.1187 21.6208 13.497C21.6313 13.5833 21.6869 13.6201 21.7551 13.6201ZM15.7388 5.97889C15.784 5.97889 15.8076 5.96434 15.8181 5.91005C16.0983 3.70985 16.208 3.54091 18.5338 3.17616C18.6153 3.16571 18.6397 3.133 18.6397 3.0787C18.6397 3.02372 18.6153 2.99169 18.5338 2.98055C16.2269 2.51317 16.3595 2.33583 15.8181 0.246667C15.8076 0.192369 15.784 0.177818 15.7388 0.177818C15.7026 0.177818 15.6797 0.192369 15.6595 0.246667C15.1188 2.33583 15.3072 2.51317 12.9444 2.98055C12.872 2.99169 12.8477 3.02372 12.8477 3.0787C12.8477 3.133 12.872 3.16571 12.9444 3.17616C15.3072 3.64354 15.3422 3.70985 15.6595 5.91005C15.6797 5.96434 15.7026 5.97889 15.7388 5.97889Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.5749 24.5723C16.9915 24.5723 20.5474 22.5707 22.1998 19.0856C22.3238 18.8433 22.3288 18.5986 22.2132 18.4648C22.0905 18.3233 21.8752 18.2836 21.5824 18.3853C20.5521 18.7753 19.4276 19.0362 17.8531 19.0362C11.9139 19.0362 8.20841 15.4745 8.20841 9.27529C8.20841 8.06474 8.39034 6.70683 8.98419 5.44648C9.11729 5.16005 9.08868 4.91474 8.92901 4.7705C8.77706 4.61718 8.50382 4.61171 8.13926 4.81815C4.86084 6.63905 2.53564 10.0562 2.53564 14.4036C2.53564 20.0671 6.30215 24.5723 12.5749 24.5723ZM12.5672 24.085C6.61573 24.085 3.02286 19.736 3.02286 14.4136C3.02286 10.3842 5.43682 7.01924 8.5083 5.16719C8.01143 6.14463 7.70713 7.69844 7.70713 9.25927C7.70713 15.7098 11.6346 19.5291 17.8998 19.5291C19.4188 19.5291 20.8312 19.2255 21.7831 18.8472C20.2102 22.0655 16.7069 24.085 12.5672 24.085Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
