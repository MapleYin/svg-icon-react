import React from 'react'

export default function ForkKnifeCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM8.98018 4.24727L8.93907 8.62139C8.93907 8.8837 8.76328 9.02247 8.55547 9.02247C8.33086 9.02247 8.19141 8.8837 8.19141 8.60254L8.22207 4.37354C8.22207 4.0876 8.07491 3.9293 7.80918 3.9293C7.53438 3.9293 7.39492 4.08692 7.37539 4.33653L7.18848 8.7002C7.13897 9.93409 7.39336 10.4196 8.32452 10.8577C8.56729 10.9742 8.62862 11.1144 8.62862 11.4046L8.48282 19.5644C8.47237 20.1049 8.89092 20.4278 9.41329 20.4278C9.9545 20.4278 10.3542 20.1049 10.3444 19.5644L10.1986 11.4046C10.1986 11.1144 10.269 10.9742 10.5125 10.8577C11.4241 10.4196 11.7246 9.93409 11.6569 8.7002L11.4505 4.33653C11.431 4.08692 11.2929 3.9293 11.0181 3.9293C10.7614 3.9293 10.6045 4.0876 10.6045 4.37354L10.6352 8.60254C10.6352 8.8837 10.4782 9.02247 10.2893 9.02247C10.0808 9.02247 9.90498 8.8837 9.90498 8.62139L9.83799 4.24727C9.83799 3.9711 9.68741 3.83233 9.41329 3.83233C9.15733 3.83233 8.98018 3.9711 8.98018 4.24727ZM15.0052 4.19141C13.8145 5.85088 13.1254 8.67071 13.1254 11.849L13.1254 12.4295C13.1254 13.0386 13.3207 13.3175 13.673 13.6084L13.9183 13.8099C14.1547 14.0038 14.281 14.2822 14.2621 14.74L14.0318 19.3779C14.0032 20.1049 14.4588 20.4278 14.9805 20.4278C15.5231 20.4278 15.9228 20.1063 15.9228 19.5476L15.9228 4.27725C15.9228 3.96065 15.7597 3.83233 15.533 3.83233C15.2973 3.83233 15.1571 3.95996 15.0052 4.19141Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}