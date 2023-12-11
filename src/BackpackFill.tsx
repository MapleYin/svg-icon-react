import React from 'react'

export default function BackpackFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.6082 29.0522' className={className}>
      <path
        d='M5.52927 27.7073L12.7176 27.7073C16.5129 27.7073 18.2758 25.8774 18.2465 22.0598C18.1976 17.3232 18.1683 13.8902 18.0596 11.3115C17.7352 4.04278 15.8642 2.04688 9.12761 2.04688C2.39167 2.04688 0.51159 4.04278 0.196355 11.3115C0.0784841 13.8902 0.0491872 17.3232 0.000359055 22.0598C-0.0289378 25.8774 1.73396 27.7073 5.52927 27.7073ZM5.58142 23.1493C4.62663 23.1493 3.98845 22.5105 3.98845 21.5375L3.98845 16.2404C3.98845 15.2675 4.62663 14.6286 5.58142 14.6286L12.6654 14.6286C13.6202 14.6286 14.2584 15.2675 14.2584 16.2404L14.2584 21.5375C14.2584 22.5105 13.6202 23.1493 12.6654 23.1493ZM3.98845 18.3409L14.2584 18.3409L14.2584 17.7855L3.98845 17.7855ZM9.13738 0C7.68278 0 6.47106 1.04278 6.47106 2.5046L7.00525 2.5046C7.00525 1.33067 7.97205 0.534188 9.13738 0.534188C10.2936 0.534188 11.2597 1.33067 11.2597 2.5046L11.7939 2.5046C11.7939 1.04278 10.5822 0 9.13738 0Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
