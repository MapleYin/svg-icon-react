import React from 'react'

export default function LicenseplateFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.6705 19.5563' className={className}>
      <path
        d='M31.3092 3.17852L31.3092 16.3596C31.3092 18.3957 30.194 19.5388 28.1279 19.5388L3.18125 19.5388C1.10674 19.5388 0 18.4327 0 16.3596L0 3.17852C0 1.10537 1.10674 0 3.18125 0L28.1279 0C30.194 0 31.3092 1.14307 31.3092 3.17852ZM23.8572 7.12481C23.8572 7.3129 23.947 7.43058 24.1071 7.43058C24.2666 7.43058 24.3822 7.29112 24.3884 7.07579C24.4615 6.13155 24.9348 5.12628 25.9162 5.12628C26.9283 5.12628 27.377 6.03439 27.377 7.14962C27.377 8.18809 26.9653 9.27198 25.8326 9.27198L25.2022 9.27198C25.0435 9.27198 24.9272 9.38828 24.9272 9.54639C24.9272 9.72335 25.0435 9.84102 25.2022 9.84102L25.8326 9.84102C27.093 9.84102 27.6611 10.7212 27.6611 12.0115C27.6611 13.1776 27.2696 14.4202 26.0384 14.4202C25.0926 14.4202 24.4386 13.704 24.2258 12.396C24.1938 12.2063 24.1458 12.0601 23.9745 12.0601C23.8082 12.0601 23.6855 12.1462 23.6855 12.3581C23.6855 13.3076 24.3607 14.9577 26.0384 14.9577C27.594 14.9577 28.2459 13.4771 28.2459 12.0136C28.2459 10.9489 27.8566 9.84366 26.8672 9.50528C27.7263 8.94141 27.9396 8.0421 27.9396 7.16094C27.9396 5.62169 27.1987 4.58106 25.9162 4.58106C24.5007 4.58106 23.8572 6.08008 23.8572 7.12481ZM4.95566 4.94933L2.68701 14.5101C2.67657 14.5722 2.65635 14.6194 2.65635 14.6821C2.65635 14.8359 2.79922 14.9459 2.93829 14.9459C3.11026 14.9459 3.17208 14.8652 3.22227 14.7135L3.9294 11.7065L6.72578 11.7065L7.42383 14.7051C7.44677 14.8219 7.52607 14.9459 7.69873 14.9459C7.88955 14.9459 7.9793 14.7982 7.9793 14.6821C7.9793 14.6383 7.9877 14.6273 7.96817 14.5478L5.68067 4.94865C5.63682 4.75099 5.53321 4.61104 5.31192 4.61104C5.12334 4.61104 5.00019 4.75802 4.95566 4.94933ZM9.61446 4.71983C9.46631 4.71983 9.35068 4.83116 9.35068 5.03107L9.35068 14.6256C9.35068 14.8101 9.46768 14.9459 9.63262 14.9459C9.79756 14.9459 9.91524 14.8101 9.91524 14.6256L9.91524 10.8065L11.3641 10.8065C12.986 10.8065 13.8377 9.41046 13.8377 7.78165C13.8377 6.14356 12.9852 4.71983 11.3702 4.71983ZM16.7134 4.73898L15.0202 6.34151C14.9339 6.42579 14.9173 6.49327 14.9173 6.5796C14.9173 6.73771 15.0336 6.8254 15.154 6.8254C15.2453 6.8254 15.301 6.77589 15.3798 6.70753L16.713 5.52716L16.713 14.6578C16.713 14.8046 16.8418 14.9264 16.9963 14.9264C17.1424 14.9264 17.2712 14.8046 17.2712 14.6578L17.2712 4.95499C17.2712 4.75235 17.1494 4.64806 16.9643 4.64806C16.8432 4.64806 16.7807 4.68419 16.7134 4.73898ZM18.3763 7.34258C18.3763 7.53975 18.4744 7.64972 18.645 7.64972C18.824 7.64972 18.9194 7.54522 18.9347 7.38096C19.0428 6.42833 19.2192 5.16193 20.413 5.16193C21.2805 5.16193 21.8627 5.92677 21.8627 7.22432C21.8627 8.10479 21.4357 9.31836 20.8296 10.3258L18.4492 14.278C18.3888 14.39 18.377 14.4561 18.377 14.5411C18.377 14.7494 18.5051 14.8294 18.6757 14.8294L22.3874 14.8294C22.5455 14.8294 22.6359 14.7194 22.6359 14.5418C22.6359 14.3823 22.5455 14.2737 22.3874 14.2737L19.0996 14.2737L21.2701 10.6715C21.9517 9.5419 22.4182 8.15958 22.4182 7.20411C22.4182 5.57579 21.6349 4.5797 20.4137 4.5797C18.7189 4.5797 18.3763 6.51612 18.3763 7.34258ZM6.58701 11.1492L4.05909 11.1492L5.33213 5.84962ZM13.2354 7.78165C13.2354 9.12989 12.6198 10.2499 11.2834 10.2499L9.91524 10.2499L9.91524 5.29454L11.2834 5.29454C12.6303 5.29454 13.2354 6.40616 13.2354 7.78165Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
