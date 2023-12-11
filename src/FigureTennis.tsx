import React from 'react'

export default function FigureTennis({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.7512 27.3182' className={className}>
      <path
        d='M10.7795 8.49268C12.1465 8.49268 13.2848 7.36348 13.2848 5.98741C13.2848 4.60225 12.1465 3.47305 10.7795 3.47305C9.39366 3.47305 8.25538 4.60225 8.25538 5.98741C8.25538 7.36348 9.39366 8.49268 10.7795 8.49268ZM21.2216 27.3182C21.8605 27.3182 22.3899 26.7972 22.3899 26.159L22.3899 20.3338C22.3899 19.9216 22.1834 19.5986 21.8605 19.3427L17.3507 15.6294L16.4572 10.7772C16.3596 10.2855 16.4189 9.80421 16.6734 9.31319L20.4746 1.72061C20.7599 1.14102 20.5235 0.443555 19.9445 0.158301C19.3747-0.126269 18.6675 0.108789 18.3829 0.668848L14.6501 8.14493C14.376 8.69385 14.0015 9.02862 13.4421 9.26368L6.85108 12.0047L4.18955 9.87325C3.77217 9.53194 3.21378 9.5376 2.88018 9.74991L2.88018 6.50381L2.30293 6.50381L2.30293 10.7283C2.30293 11.1301 2.4208 11.4642 2.7249 11.7006L5.95762 14.2735C6.36006 14.5881 6.7918 14.5588 7.30235 14.3524L10.9075 12.8493C11.3992 12.6429 11.6545 12.9184 11.7138 13.2713L13.5007 23.0944L8.55987 25.0689C7.97051 25.3137 7.66641 25.9825 7.90215 26.5817C8.17696 27.2505 8.84512 27.4458 9.42403 27.2198L15.2401 24.8924C15.7507 24.686 16.0067 24.1943 15.9767 23.6649L15.6524 19.1362C15.6217 18.6257 16.1629 18.3593 16.5465 18.6146L20.0624 20.9538L20.0624 26.159C20.0624 26.7972 20.5639 27.3182 21.2216 27.3182ZM2.61006 0.69785C1.15059 0.69785 0 1.84004 0 3.3002C0 4.71377 1.05772 6.40303 2.61006 6.91837C4.16241 6.40303 5.20128 4.71377 5.20128 3.3002C5.20128 1.84004 4.05069 0.69785 2.61006 0.69785ZM2.61006 1.26534C3.73877 1.26534 4.63379 2.15264 4.63379 3.30225C4.63379 4.45117 3.91612 5.77949 2.61006 6.30703C1.30401 5.77949 0.568169 4.45117 0.568169 3.30225C0.568169 2.15264 1.4625 1.26534 2.61006 1.26534Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
