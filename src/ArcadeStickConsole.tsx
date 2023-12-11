import React from 'react'

export default function ArcadeStickConsole({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.5657 21.1379' className={className}>
      <path
        d='M4.4683 21.1379L28.7361 21.1379C32.1334 21.1379 33.5879 19.4276 33.1283 15.5277L31.7241 3.89376C31.4075 1.27032 29.9584 0 27.3689 0L5.83549 0C3.24662 0 1.80599 1.27032 1.48939 3.89376L0.0858711 15.5277C-0.383563 19.4276 1.07093 21.1379 4.4683 21.1379ZM4.4683 20.6348C1.44701 20.6348 0.127776 19.0961 0.570842 15.4351L1.98139 3.93468C2.25346 1.63526 3.52318 0.503135 5.83549 0.503135L27.3689 0.503135C29.6819 0.503135 30.9509 1.63526 31.2321 3.93468L32.6335 15.4351C33.0773 19.1149 31.7664 20.6348 28.7361 20.6348Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.52836 14.1474C8.72055 14.1474 8.81645 14.0792 8.81645 13.9595L8.81645 9.64005C10.1348 9.48194 11.1763 8.36251 11.1763 6.98985C11.1763 5.53721 9.99008 4.35166 8.52836 4.35166C7.06527 4.35166 5.87064 5.52881 5.87064 6.98985C5.87064 8.36319 6.91146 9.48194 8.24027 9.64141L8.24027 13.9595C8.24027 14.0792 8.34457 14.1474 8.52836 14.1474ZM8.52836 16.2239C10.6351 16.2239 12.1191 15.0963 12.1191 13.484C12.1191 12.2097 11.1752 11.2367 9.76059 10.9028L9.76059 11.4665C10.8649 11.7881 11.5622 12.5327 11.5622 13.484C11.5622 14.7558 10.3079 15.6487 8.52836 15.6487C6.75717 15.6487 5.49379 14.7558 5.49379 13.484C5.49379 12.532 6.20023 11.7874 7.30521 11.4658L7.30521 10.9028C5.87103 11.236 4.92787 12.2097 4.92787 13.484C4.92787 15.0963 6.41185 16.2239 8.52836 16.2239ZM15.4768 9.38614C16.299 9.38614 16.9356 8.75928 16.9356 7.93711C16.9356 7.10586 16.299 6.47901 15.4768 6.47901C14.6546 6.47901 14.0096 7.10586 14.0096 7.93711C14.0096 8.75928 14.6546 9.38614 15.4768 9.38614ZM20.7991 9.38614C21.6212 9.38614 22.2669 8.75928 22.2669 7.93711C22.2669 7.10586 21.6212 6.47901 20.7991 6.47901C19.9776 6.47901 19.341 7.10586 19.341 7.93711C19.341 8.75928 19.9776 9.38614 20.7991 9.38614ZM26.1116 9.38614C26.9247 9.38614 27.5697 8.75928 27.5697 7.93711C27.5697 7.10586 26.9247 6.47901 26.1116 6.47901C25.2894 6.47901 24.6437 7.10586 24.6437 7.93711C24.6437 8.75928 25.2894 9.38614 26.1116 9.38614ZM17.2444 14.6896C18.0665 14.6896 18.7122 14.0627 18.7122 13.2496C18.7122 12.4086 18.0665 11.7817 17.2444 11.7817C16.4229 11.7817 15.7863 12.4086 15.7863 13.2496C15.7863 14.0627 16.4229 14.6896 17.2444 14.6896ZM22.5673 14.6896C23.3888 14.6896 24.0345 14.0627 24.0345 13.2496C24.0345 12.4086 23.3888 11.7817 22.5673 11.7817C21.7542 11.7817 21.1085 12.4086 21.1085 13.2496C21.1085 14.0627 21.7542 14.6896 22.5673 14.6896ZM27.8798 14.6896C28.6929 14.6896 29.3386 14.0627 29.3386 13.2496C29.3386 12.4086 28.6929 11.7817 27.8798 11.7817C27.0577 11.7817 26.4126 12.4086 26.4126 13.2496C26.4126 14.0627 27.0577 14.6896 27.8798 14.6896Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
