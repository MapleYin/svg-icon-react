import React from 'react'

export default function SunsetCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.49142 14.4002L7.13018 14.4002C7.3001 14.4002 7.41007 14.2923 7.41007 14.1147C7.41007 13.9559 7.29034 13.82 7.13018 13.82L4.49142 13.82C4.33966 13.82 4.20313 13.9565 4.20313 14.1147C4.20313 14.2728 4.33966 14.4002 4.49142 14.4002ZM8.4042 10.9538C8.48418 11.0338 8.69249 11.0352 8.78995 10.937C8.94327 10.7844 8.87696 10.5942 8.79698 10.5143L6.93917 8.64669C6.82989 8.53809 6.64112 8.58555 6.54366 8.7005C6.43712 8.81749 6.43712 8.97765 6.55548 9.08624ZM12.1602 3.92598C11.9916 3.92598 11.8558 4.05479 11.8558 4.20587L11.8558 7.12725L11.8857 7.98086L11.3662 7.44249L10.194 6.27159C10.1403 6.20958 10.0665 6.14962 9.95635 6.14962C9.78077 6.14962 9.63858 6.28341 9.63858 6.46739C9.63858 6.55938 9.68741 6.65069 9.81573 6.77833L11.9603 8.9251C11.9964 8.96964 12.087 9.00167 12.1602 9.00167C12.2333 9.00167 12.333 8.96964 12.3691 8.9251L14.5144 6.77833C14.6518 6.63185 14.6824 6.55938 14.6824 6.46739C14.6824 6.28341 14.5486 6.14962 14.373 6.14962C14.2915 6.14962 14.2065 6.18165 14.1452 6.23389L12.9693 7.44883L12.4353 7.98291L12.4736 7.12725L12.4736 4.20587C12.4736 4.05479 12.3378 3.92598 12.1602 3.92598ZM15.5317 10.937C15.6376 11.0345 15.8361 11.0345 15.9168 10.9538L17.7746 9.08624C17.8825 8.97765 17.8832 8.81749 17.7857 8.7005C17.689 8.59327 17.4988 8.53878 17.3818 8.64669L15.5331 10.5143C15.4518 10.5949 15.3868 10.7844 15.5317 10.937ZM17.1999 14.4002L19.838 14.4002C20.0086 14.4002 20.1172 14.2916 20.1172 14.1147C20.1172 13.9377 20.0086 13.82 19.838 13.82L17.1999 13.82C17.0391 13.82 16.9103 13.9559 16.9103 14.1147C16.9103 14.2923 17.0768 14.4002 17.1999 14.4002ZM15.7575 14.2702C15.7575 12.2919 14.1482 10.6813 12.1602 10.6813C10.1825 10.6813 8.57188 12.2919 8.57188 14.2702C8.57188 14.9458 8.74151 15.5564 9.04375 16.1105L15.2856 16.1105C15.5879 15.5564 15.7575 14.9458 15.7575 14.2702ZM4.49073 17.3058L19.8296 17.3058C20.0065 17.3058 20.1172 17.1888 20.1172 17.0293C20.1172 16.8517 20.0072 16.7347 19.8296 16.7347L4.49073 16.7347C4.33194 16.7347 4.20313 16.8705 4.20313 17.0293C4.20313 17.1888 4.33263 17.3058 4.49073 17.3058Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}