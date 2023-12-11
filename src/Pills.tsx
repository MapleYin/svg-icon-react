import React from 'react'

export default function Pills({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.0165 26.9156' className={className}>
      <path
        d='M1.56765 19.3061C3.66618 21.3851 6.32254 21.4032 8.40994 19.3249L17.8045 9.93037C19.8828 7.84297 19.8639 5.15732 17.7849 3.08877C15.6864 1.00976 13.0301 0.990912 10.9426 3.07832L1.5572 12.4638C-0.530206 14.5512-0.511358 17.2368 1.56765 19.3061ZM1.9451 18.9377C0.146465 17.1202 0.195293 14.552 2.05252 12.6947L11.1736 3.57364C13.0315 1.71573 15.6179 1.64874 17.4166 3.46553C19.2061 5.27393 19.1573 7.84219 17.3001 9.70009L8.17898 18.8205C6.32107 20.6784 3.73464 20.7454 1.9451 18.9377ZM6.14529 8.02432L12.8585 14.7277L13.2261 14.3601L6.51365 7.64687ZM19.5332 26.9156C22.9192 26.9156 25.6539 24.1803 25.6539 20.7949C25.6539 17.4311 22.8997 14.6951 19.5332 14.6951C16.1771 14.6951 13.4229 17.4311 13.4229 20.7949C13.4229 24.1614 16.159 26.9156 19.5332 26.9156ZM19.5332 26.4041C16.4342 26.4041 13.9345 23.8855 13.9345 20.7949C13.9345 17.7147 16.453 15.2066 19.5332 15.2066C22.6238 15.2066 25.1424 17.7147 25.1424 20.7949C25.1424 23.9051 22.6343 26.4041 19.5332 26.4041ZM13.5892 21.066L25.4682 21.066L25.4682 20.535L13.5892 20.535Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
