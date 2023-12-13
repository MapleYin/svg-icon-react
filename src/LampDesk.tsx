import React from 'react'

export function LampDesk({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.1455 27.1656' className={className}>
      <path
        d='M10.7128 14.4242L20.4896 4.64679C21.0461 4.09024 20.8017 3.20049 19.8691 2.90635C17.1527 2.05811 14.6313 1.98926 11.618 2.18389L11.1072 1.62569C10.0795 0.475097 8.66564 0.324317 7.50391 1.43789C6.39034 2.6003 6.54883 4.00011 7.69171 5.03419L8.24991 5.54425C8.05528 8.56593 8.12345 11.0859 8.98009 13.803C9.27423 14.7273 10.1647 14.9724 10.7128 14.4242ZM10.3463 14.0486C10.0588 14.3271 9.65324 14.2056 9.47677 13.6482C8.62697 11.0075 8.60763 8.50958 8.80294 5.58487C8.80431 5.38565 8.74865 5.27999 8.62052 5.16299L8.0548 4.6461C7.13937 3.81719 6.96271 2.75186 7.87951 1.8044C8.82628 0.896005 9.88185 1.0629 10.7212 1.98038L11.2381 2.54542C11.3467 2.67423 11.4446 2.73058 11.6543 2.72852C14.5756 2.54229 17.0749 2.55255 19.7143 3.40372C20.28 3.5795 20.4008 3.99346 20.1231 4.2712ZM15.5719 12.9061C17.4345 12.8872 18.9435 11.3796 18.9435 9.517C18.9435 8.49659 18.4865 7.5711 17.7863 6.96241L17.3838 7.29337C18.0142 7.81955 18.4086 8.62638 18.4086 9.517C18.4086 11.0854 17.1389 12.353 15.5719 12.3719C14.6624 12.3719 13.8549 11.9586 13.3287 11.3108L12.9703 11.7027C13.6042 12.4435 14.5277 12.9061 15.5719 12.9061ZM7.48145 1.80626L7.83253 1.41475L6.51095 0.112013C6.40597 0.0258785 6.25304 0.00771463 6.14942 0.112013C6.04512 0.196781 6.04444 0.377643 6.14942 0.481941ZM1.13057 14.5807L8.70333 7.57843L8.26612 7.29483L0.76631 14.2207ZM0.830085 15.5572C1.30714 15.5572 1.66994 15.2042 1.66994 14.7265C1.66994 14.2683 1.28898 13.8964 0.830085 13.8964C0.371194 13.8964 0 14.2683 0 14.7265C0 15.2042 0.362113 15.5572 0.830085 15.5572ZM5.50519 19.9286L5.8631 19.5707L1.28018 15.0066L0.922265 15.3555ZM5.77569 20.6659C6.24367 20.6659 6.60578 20.2975 6.60578 19.8261C6.60578 19.3679 6.2339 18.996 5.77569 18.996C5.31612 18.996 4.93584 19.3679 4.93584 19.8261C4.93584 20.3038 5.29796 20.6659 5.77569 20.6659ZM5.51504 26.6782L6.02658 26.6782L6.02658 20.0872L5.51504 20.0872ZM1.55566 27.1656L10.6638 27.1656C10.8371 27.1656 10.9478 27.0543 10.9478 26.9069C10.9478 26.6315 10.763 26.3361 10.303 26.3361L1.91651 26.3361C1.45713 26.3361 1.27236 26.6315 1.27236 26.9069C1.27236 27.0543 1.38232 27.1656 1.55566 27.1656Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
