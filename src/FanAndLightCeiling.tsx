import React from 'react'

export default function FanAndLightCeiling({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.211 26.5086' className={className}>
      <path
        d='M14.4297 20.6797C16.5559 20.6797 18.1109 19.9144 18.1109 18.7909C18.1109 17.6759 16.5747 16.9203 14.4297 16.9203C12.2938 16.9203 10.7479 17.6759 10.7479 18.7909C10.7479 19.9144 12.3029 20.6797 14.4297 20.6797ZM14.4297 4.63849C16.5665 4.63849 18.7871 3.20235 18.7871 1.48409C18.7871 0.882425 18.4392 0.649123 17.9635 0.437208C17.3897 0.193262 15.9418 0.00908196 14.4297 0C12.9078 0.00908196 11.46 0.193262 10.8862 0.437208C10.4293 0.649123 10.0814 0.863578 10.0814 1.48409C10.0814 3.20235 12.2922 4.63849 14.4297 4.63849ZM14.4297 4.09298C12.4449 4.09298 10.5804 2.76827 10.6087 1.47979C10.608 1.2543 10.6562 1.08468 11.1246 0.915731C11.6433 0.702448 12.9803 0.544147 14.4297 0.544147C15.8694 0.544147 17.2064 0.702448 17.725 0.915731C18.2123 1.10284 18.2605 1.2543 18.2598 1.47979C18.2874 2.76827 16.4047 4.09298 14.4297 4.09298ZM14.1691 4.50772L14.1691 13.6135L14.6806 13.6135L14.6806 4.50772ZM14.4297 14.1733C15.679 14.1733 16.7244 14.4062 17.461 14.7939L17.9458 14.4592C17.0993 13.9338 15.8933 13.6392 14.4297 13.6392C12.9487 13.6392 11.744 13.9331 10.8975 14.4571L11.3774 14.7995C12.1132 14.4041 13.1643 14.1733 14.4297 14.1733ZM14.4297 21.8471C17.3543 21.8471 19.2692 20.6038 19.2692 18.7909C19.2692 16.9774 17.3543 15.762 14.4297 15.762C11.496 15.762 9.58049 16.9774 9.58049 18.7909C9.58049 20.6038 11.496 21.8471 14.4297 21.8471ZM14.4297 21.3129C11.7957 21.3129 10.1147 20.2664 10.1147 18.7909C10.1147 17.3148 11.7957 16.2962 14.4297 16.2962C17.0539 16.2962 18.735 17.3148 18.735 18.7909C18.735 20.2664 17.0539 21.3129 14.4297 21.3129ZM14.4297 15.762L3.50969 10.1698C0.395619 8.56817-1.34735 12.4273 1.28751 13.7786L9.94036 18.1894L10.0803 17.5782L1.54015 13.2329C-0.48377 12.1989 0.792987 9.4549 3.22707 10.696L13.4002 15.8868ZM9.7216 19.1217L9.7216 18.4549L3.45734 21.324C0.451377 22.7004 2.61857 26.4682 5.23596 25.103L12.1021 21.5411L11.4944 21.1499L4.95334 24.5579C3.07746 25.5563 1.58566 22.8597 3.72883 21.8697ZM14.4297 15.762L15.4494 15.8868L25.6226 10.696C28.0567 9.4549 29.3334 12.1989 27.3095 13.2329L18.7694 17.5782L18.91 18.1894L27.5621 13.7786C30.197 12.4273 28.454 8.56817 25.34 10.1698ZM19.1281 19.1217L25.1208 21.8697C27.2647 22.8597 25.7722 25.5563 23.8963 24.5579L17.3553 21.1499L16.7567 21.5411L23.6137 25.103C26.2311 26.4682 28.3983 22.7004 25.3923 21.324L19.1281 18.4549Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
