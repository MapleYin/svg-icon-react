import React from 'react'

export default function PlayHouseFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.1612 26.0432' className={className}>
      <path
        d='M14.2447 2.1093L23.9705 10.2846L23.9705 22.8624C23.9705 24.1593 23.2015 24.927 21.9123 24.927L4.95314 24.927C3.66397 24.927 2.90401 24.1593 2.90401 22.8624L2.90401 10.2476L12.5928 2.1093C13.1621 1.63625 13.6559 1.61672 14.2447 2.1093ZM9.82325 9.87385L9.82325 19.6668C9.82325 20.0684 10.2639 20.2567 10.6411 20.0559L18.8219 15.2319C19.1887 15.013 19.188 14.5263 18.8212 14.3087L10.6411 9.50295C10.2639 9.284 9.82325 9.4716 9.82325 9.87385ZM14.4359 0.420411L22.3346 7.08585L22.3346 3.14326C22.3346 2.9002 22.5031 2.74209 22.7371 2.74209L23.5596 2.74209C23.7845 2.74209 23.9705 2.9002 23.9705 3.14326L23.9705 8.46636L26.6397 10.7188C26.756 10.8142 26.7998 10.8753 26.7998 10.9796C26.7998 11.106 26.6991 11.2096 26.5455 11.2096C26.4608 11.2096 26.4353 11.1896 26.3741 11.1402L14.0433 0.738683C13.5757 0.337414 13.1976 0.402355 12.8229 0.738683L0.426377 11.1402C0.365927 11.1896 0.339753 11.2096 0.246587 11.2096C0.105666 11.2096 0 11.1173 0 10.9866C0 10.878 0.0438482 10.8142 0.151759 10.7188L12.4303 0.420411C13.101-0.140137 13.8022-0.140137 14.4359 0.420411Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}