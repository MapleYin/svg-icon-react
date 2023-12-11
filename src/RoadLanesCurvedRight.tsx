import React from 'react'

export default function RoadLanesCurvedRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.9676 17.733' className={className}>
      <path
        d='M1.86266 17.6422C2.19821 17.6422 2.36901 17.552 2.42966 17.2517C3.60925 10.8068 6.26208 5.56954 11.4039 0.330081C11.5229 0.200588 11.4352 0.083105 11.3309 0.083105L11.1968 0.083105C11.068 0.083105 10.9992 0.0962889 10.8901 0.181056C6.27848 3.8084 1.76901 9.23721 0.0189093 17.1722C-0.0437864 17.455 0.0432263 17.6422 0.373307 17.6422ZM30.3299 17.6422C30.5449 17.6422 30.671 17.5213 30.5756 17.2644C28.3202 11.7168 28.0288 6.43565 29.4448 0.244925C29.488 0.13379 29.4059 0.083105 29.338 0.083105L28.9321 0.083105C28.7985 0.083105 28.7464 0.127637 28.7117 0.223537C26.8989 6.00957 26.9232 11.7277 28.3692 17.3142C28.4305 17.5511 28.5761 17.6422 28.8708 17.6422ZM18.8338 2.16661C19.1007 2.16661 19.1974 2.0585 19.3019 1.89835C19.6655 1.32198 20.0261 0.688581 20.3019 0.274906C20.3917 0.122463 20.3019 0 20.1488 0L20.1639 0C20.024 0 19.8839 0.0774413 19.8164 0.182618C19.5243 0.557814 19.0137 1.25186 18.6219 1.78789C18.4938 1.95215 18.6171 2.16661 18.8609 2.16661ZM16.131 8.34757C16.3923 8.34757 16.5624 8.19493 16.6426 7.88331C16.7695 7.35323 16.9389 6.74522 17.1851 6.03526C17.2708 5.77129 17.1043 5.64453 16.9205 5.64453L16.9968 5.64453C16.776 5.64453 16.6352 5.73652 16.5132 6.02588C16.2405 6.67813 16.0272 7.27979 15.8439 7.80948C15.7428 8.12247 15.9654 8.34757 16.193 8.34757ZM14.7323 17.6422C15.0319 17.6422 15.2711 17.4239 15.2711 17.1495C15.301 15.4827 15.4092 13.5818 15.6031 12.3493C15.6456 12.133 15.5007 11.9824 15.2737 11.9824L15.3137 11.9824C15.0943 11.9824 14.9096 12.1226 14.8658 12.3356C14.6246 13.5939 14.4286 15.4587 14.3148 17.1488C14.2953 17.4316 14.5149 17.6422 14.7957 17.6422Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
