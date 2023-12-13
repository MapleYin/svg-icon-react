import React from 'react'

export function N18CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM11.7239 9.5877C11.7239 10.6029 12.1943 11.5127 13.2088 11.8581L13.2088 11.879C12.1514 12.1148 11.4394 13.2687 11.4394 14.4912C11.4394 16.0651 12.4433 17.4005 14.1457 17.4005C15.7823 17.4005 16.8702 16.1575 16.8702 14.4912C16.8702 13.2861 16.1652 12.1141 15.121 11.879L15.121 11.8581C16.0733 11.5211 16.5961 10.5793 16.5961 9.5793C16.5961 8.15733 15.6953 6.95049 14.1457 6.95049C12.6629 6.95049 11.7239 8.12051 11.7239 9.5877ZM8.61767 7.20401L6.77773 8.74121C6.6998 8.81573 6.6623 8.87618 6.6623 8.97842C6.6623 9.13995 6.76045 9.26671 6.93037 9.26671C7.01602 9.26671 7.05986 9.23536 7.11416 9.20128L8.7833 7.83985L8.7833 17.0274C8.7833 17.2056 8.93711 17.3587 9.11524 17.3587C9.28223 17.3587 9.42696 17.2056 9.42696 17.0274L9.42696 7.33604C9.42696 7.15039 9.27383 6.98955 9.09727 6.98955C8.90029 6.98955 8.7458 7.08975 8.61767 7.20401ZM16.2343 14.4732C16.2343 15.7341 15.4526 16.8226 14.1639 16.8226C12.8765 16.8226 12.076 15.7522 12.076 14.4732C12.076 13.167 12.8953 12.2084 14.1639 12.2084C15.2941 12.2084 16.2343 13.0267 16.2343 14.4732ZM15.9852 9.61749C15.9852 10.7891 15.1776 11.6032 14.1639 11.6032C13.2423 11.6032 12.3433 10.9044 12.3433 9.61749C12.3433 8.40958 13.0963 7.53682 14.1639 7.53682C15.3543 7.53682 15.9852 8.56602 15.9852 9.61749Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
