import React from 'react'

export default function SnowflakeSlash({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.7305 25.4277' className={className}>
      <path
        d='M12.8941 14.6132L12.9143 17.118L12.9143 19.8887L16.5193 21.9651C16.6668 22.0451 16.7022 22.1646 16.6431 22.2794C16.5631 22.3975 16.4254 22.4275 16.2793 22.3482L12.9143 20.3628L12.9143 24.5798C12.9143 24.7587 12.8218 24.863 12.6982 24.863C12.5668 24.863 12.4918 24.7587 12.4918 24.5798L12.4918 20.353L9.04234 22.3482C8.90533 22.4275 8.81509 22.3975 8.73443 22.2794C8.68511 22.1646 8.72124 22.0632 8.84986 21.9833L12.4918 19.879L12.4918 17.118L12.5152 14.234ZM19.1526 20.8766C19.1219 20.9013 19.0842 20.9142 19.0414 20.9142C18.9141 20.9142 18.821 20.8099 18.821 20.6311L18.8208 20.5446ZM11.7909 13.5091L8.95601 15.114L6.57476 16.4666L6.56637 20.6311C6.56637 20.8099 6.48297 20.9142 6.34664 20.9142C6.22368 20.9142 6.1437 20.8092 6.1437 20.6311L6.14302 16.7224L2.50728 18.8355C2.36119 18.9148 2.23189 18.8912 2.15191 18.7542C2.09077 18.6821 2.14507 18.5703 2.29185 18.4721L5.94506 16.3772L2.52486 14.3702C2.36968 14.2902 2.35034 14.2027 2.42056 14.0552C2.5062 13.9593 2.58101 13.9343 2.72779 14.0143L6.37681 16.1123L8.75874 14.75L11.5137 13.2317ZM22.9681 14.0748C23.0474 14.1734 23.0176 14.2902 22.8631 14.3702L19.4423 16.3772L23.0962 18.4721C23.2234 18.5514 23.2777 18.6626 23.2172 18.7723C23.1743 18.8905 23.0457 18.9162 22.88 18.8355L19.2443 16.7301L19.2441 17.6514L18.8146 17.2214L18.8132 16.4666L17.0737 15.4783L16.0005 14.4038L16.6286 14.75L18.9826 16.1032L22.6602 14.0143C22.8154 13.9343 22.8707 13.9593 22.9681 14.0748ZM19.2255 4.73092L19.2443 8.70455L22.8989 6.5733C23.0282 6.48356 23.175 6.49947 23.2354 6.59879C23.2972 6.72809 23.2618 6.86511 23.1052 6.94577L19.4611 9.03092L22.8534 10.9912C22.9988 11.09 23.0474 11.2068 22.987 11.297C22.9 11.4216 22.7784 11.4459 22.6225 11.3659L19.0378 9.27702L16.6474 10.677L13.8198 12.2205L13.5516 11.9519L16.4313 10.3129L18.8035 8.95065L18.821 4.73092C18.821 4.57028 18.8771 4.50299 19.0044 4.50299C19.1546 4.48483 19.2255 4.5528 19.2255 4.73092ZM2.50728 6.5733L6.14302 8.70455L6.14716 7.86094L6.57287 8.28698L6.57408 8.95065L8.11877 9.8341L9.22635 10.9426L8.73989 10.677L6.35933 9.2777L2.77457 11.3659C2.61734 11.4459 2.48736 11.4397 2.40103 11.3159C2.33989 11.1866 2.36968 11.09 2.54302 10.9912L5.92622 9.03092L2.28208 6.94577C2.12691 6.85671 2.09009 6.72809 2.15191 6.59879C2.21236 6.49947 2.34234 6.494 2.50728 6.5733ZM12.9143 0.791275L12.9143 5.00836L16.2793 3.03199C16.4254 2.9527 16.5631 2.98268 16.6431 3.09176C16.7022 3.21559 16.6668 3.32604 16.5193 3.40602L12.9143 5.48239L12.9143 8.25377L12.8901 11.2897L12.513 10.9121L12.4918 8.25377L12.4918 5.50124L8.84986 3.38786C8.72124 3.30788 8.68511 3.21559 8.73443 3.09176C8.81509 2.98268 8.90533 2.9527 9.04234 3.03199L12.4918 5.0272L12.4918 0.791275C12.4918 0.621546 12.5668 0.517248 12.6982 0.517248C12.8218 0.517248 12.9143 0.621546 12.9143 0.791275ZM6.56637 4.73092L6.56678 4.95863L6.19223 4.58362C6.223 4.52801 6.27918 4.50299 6.3648 4.50299C6.51089 4.50299 6.56637 4.57028 6.56637 4.73092Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M23.9822 24.4312C24.0872 24.5355 24.2603 24.5348 24.3646 24.4305C24.5052 24.3074 24.4689 24.1622 24.3646 24.0572L1.37789 1.04322C1.28336 0.957089 1.13677 0.92916 0.995461 1.04322C0.891163 1.1566 0.891163 1.32135 0.995461 1.42565Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
