import React from 'react'

export default function Applescript({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.6766 29.8084' className={className}>
      <path
        d='M0.000207609 12.7404C-0.0109253 13.8842 0.425599 14.8744 1.33224 15.7706L7.29689 21.7646C4.559 23.9181 3.95597 24.9717 3.95597 26.4348C3.95597 28.2314 5.4466 29.7394 7.47765 29.7687C8.66408 29.7889 9.62297 29.2831 10.3113 28.5843L19.0995 19.8038C20.866 18.0282 20.6916 16.0457 18.653 13.989L13.1083 8.44424L15.3802 6.18077C16.074 5.45128 16.4799 4.54962 16.4974 3.64024C16.528 1.58369 14.9639 0.000683665 12.8787 0C11.6939 0 10.8306 0.415626 9.73068 1.49805L1.00431 10.2056C0.358607 10.8604 0.0197389 11.7425 0.000207609 12.7404ZM2.67288 9.2626L10.0977 1.85528C11.0472 0.887607 11.835 0.530381 12.8787 0.530381C14.6698 0.530381 15.9872 1.8296 15.9872 3.62002C15.9872 4.39805 15.6488 5.17881 15.0048 5.80537L7.12668 13.6821C7.76877 10.9438 5.59055 8.71817 2.67288 9.2626ZM0.590549 12.8974C0.590549 11.0184 1.82912 9.71983 3.5714 9.71983C5.37296 9.71983 6.66105 11.0483 6.66105 12.995C6.66105 13.1708 6.66105 13.6709 6.61173 13.9446C6.53604 14.4099 7.07013 14.4929 7.20607 14.3556L12.7504 8.80216L18.2958 14.365C20.1614 16.2118 20.2773 17.8921 18.7235 19.4284L11.0602 27.1099C11.2329 25.1989 10.6638 24.417 9.07229 22.8066L2.15754 15.8438C1.00432 14.6898 0.590549 13.9189 0.590549 12.8974ZM4.4675 26.4325C4.4675 24.9087 5.36477 23.8811 7.72179 22.1525L8.71505 23.1639C10.0949 24.5626 10.5484 25.3141 10.5666 26.4325C10.5855 27.9795 9.20041 29.248 7.47765 29.248C5.79104 29.248 4.4675 27.9661 4.4675 26.4325Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}