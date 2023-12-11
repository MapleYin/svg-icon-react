import React from 'react'

export default function MessageBadgeCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM4.99082 11.9015C4.99082 13.9236 6.20586 15.8197 8.19327 16.794C8.32227 16.8358 8.3586 16.9453 8.27207 17.0736C8.01045 17.4852 7.67706 18.0141 7.40362 18.3259C7.14287 18.6166 7.22237 18.938 7.63301 18.938C8.29004 18.938 9.63497 18.4833 10.8507 17.8026C10.9588 17.7336 11.0188 17.7225 11.1107 17.7231C11.4555 17.7238 11.8029 17.7518 12.1686 17.7518C16.1836 17.7518 19.3379 15.1157 19.3379 11.9015C19.3379 11.284 19.2215 10.6879 19.003 10.1286C18.5444 10.4888 17.9673 10.7032 17.3432 10.7032C15.8517 10.7032 14.6363 9.48018 14.6363 7.99639C14.6363 7.46262 14.7918 6.96346 15.062 6.54387C14.1822 6.22582 13.204 6.05049 12.1686 6.05049C8.14512 6.05049 4.99082 8.68653 4.99082 11.9015ZM15.2385 7.99639C15.2385 9.14424 16.1876 10.0927 17.3432 10.0927C18.4974 10.0927 19.4549 9.14424 19.4549 7.99639C19.4549 6.84151 18.4974 5.88467 17.3432 5.88467C16.1876 5.88467 15.2385 6.84151 15.2385 7.99639Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}