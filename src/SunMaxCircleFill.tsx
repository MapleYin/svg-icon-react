import React from 'react'

export default function SunMaxCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM11.8853 18.1592L11.8853 19.9878C11.8853 20.1234 12.0259 20.2648 12.1608 20.2648C12.2958 20.2648 12.4371 20.1234 12.4371 19.9878L12.4371 18.1592C12.4371 18.0249 12.2958 17.9024 12.1608 17.9024C12.0259 17.9024 11.8853 18.0249 11.8853 18.1592ZM7.71221 16.2142L6.42364 17.4846C6.31436 17.5938 6.33252 17.779 6.42364 17.8701C6.52452 17.9619 6.70128 17.9808 6.81056 17.8617L8.09913 16.6011C8.19024 16.5016 8.20841 16.3255 8.09913 16.2142C7.98985 16.1237 7.8208 16.1049 7.71221 16.2142ZM16.2232 16.2142C16.1126 16.3248 16.1314 16.4827 16.2232 16.5822L17.493 17.8617C17.6022 17.9808 17.7874 17.9619 17.8799 17.8617C17.971 17.779 17.9892 17.5932 17.8799 17.4846L16.5997 16.2142C16.5002 16.1237 16.3416 16.1049 16.2232 16.2142ZM8.59336 12.1524C8.59336 14.0802 10.2149 15.6836 12.1427 15.6836C14.0697 15.6836 15.6822 14.0802 15.6822 12.1524C15.6822 10.2254 14.0697 8.61221 12.1427 8.61221C10.2149 8.61221 8.59336 10.2254 8.59336 12.1524ZM18.176 11.8769C18.0417 11.8769 17.9192 12.0175 17.9192 12.1524C17.9192 12.2874 18.0417 12.428 18.176 12.428L20.0053 12.428C20.1312 12.428 20.2809 12.279 20.2809 12.1524C20.2809 12.0168 20.1312 11.8769 20.0053 11.8769ZM4.32618 11.8769C4.19053 11.8769 4.04991 12.0168 4.04991 12.1524C4.04991 12.279 4.19053 12.428 4.32618 12.428L6.14571 12.428C6.28067 12.428 6.40313 12.2874 6.40313 12.1524C6.40313 12.0175 6.28067 11.8769 6.14571 11.8769ZM17.493 6.43409L16.2232 7.71426C16.1314 7.80606 16.1133 7.97237 16.2232 8.08165C16.3416 8.19161 16.5002 8.18184 16.5913 8.08165L17.8799 6.82032C17.9892 6.70196 17.9703 6.5252 17.8799 6.43409C17.7874 6.34229 17.6106 6.31504 17.493 6.43409ZM6.44317 6.43409C6.35205 6.5252 6.33252 6.70196 6.44248 6.82032L7.71221 8.08165C7.82149 8.19161 7.98917 8.18184 8.09913 8.08165C8.19024 7.99053 8.19024 7.83194 8.09913 7.71426L6.8294 6.43409C6.72012 6.31573 6.53497 6.33389 6.44317 6.43409ZM11.8853 4.30802L11.8853 6.13663C11.8853 6.27159 12.0259 6.39405 12.1608 6.39405C12.2958 6.39405 12.4371 6.27159 12.4371 6.13663L12.4371 4.30802C12.4371 4.17237 12.2958 4.04014 12.1608 4.04014C12.0259 4.04014 11.8853 4.17237 11.8853 4.30802Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}