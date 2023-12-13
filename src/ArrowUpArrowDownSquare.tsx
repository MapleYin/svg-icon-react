import React from 'react'

export function ArrowUpArrowDownSquare({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.00811 4.70928L3.30411 8.38946C3.23096 8.4542 3.20664 8.52305 3.20664 8.62549C3.20664 8.76251 3.33682 8.8836 3.46475 8.8836C3.53223 8.8836 3.63604 8.84112 3.70919 8.76798L5.63379 6.84972L6.95947 5.51222L6.93086 6.73576L6.93086 17.0635C6.93086 17.2277 7.0708 17.3397 7.2169 17.3397C7.36368 17.3397 7.47569 17.2096 7.47569 17.0635L7.47569 6.74415L7.44571 5.51222L8.77207 6.84972L10.6883 8.76866C10.7614 8.84181 10.8652 8.8836 10.9327 8.8836C11.0697 8.8836 11.1901 8.76319 11.1901 8.62549C11.1901 8.5126 11.184 8.46192 11.1115 8.38946L7.38936 4.70928C7.2794 4.61817 7.1208 4.60567 7.00811 4.70928ZM14.9623 17.2702L18.6656 13.5907C18.7388 13.5169 18.7631 13.4487 18.7631 13.3449C18.7631 13.217 18.6336 13.0875 18.5057 13.0875C18.4193 13.0875 18.3337 13.1384 18.2605 13.1927L16.345 15.1291L15.0103 16.4666L15.048 15.2353L15.048 4.91602C15.048 4.75108 14.8996 4.63975 14.7528 4.63975C14.6067 4.63975 14.494 4.76993 14.494 4.91602L14.494 15.236L14.5331 16.4673L13.1977 15.1291L11.2815 13.1927C11.2083 13.1195 11.1233 13.0875 11.037 13.0875C10.8902 13.0875 10.7796 13.1981 10.7796 13.3449C10.7796 13.476 10.7851 13.5162 10.8575 13.5907L14.5797 17.2702C14.6981 17.3704 14.851 17.3641 14.9623 17.2702Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
