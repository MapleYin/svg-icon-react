import React from 'react'

export function Ear({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.5697 27.9057' className={className}>
      <path
        d='M0.595703 20.4435C0.595703 23.4234 2.59746 25.4286 5.56358 25.4286C7.96368 25.4286 9.84913 24.094 10.9016 21.8079L11.4365 20.6148C14.185 14.6745 18.5697 15.0895 18.5697 9.15303C18.5697 3.62266 15.0649 0 9.71944 0C4.3294 0 0.595703 3.8084 0.595703 9.33946ZM1.11856 20.4548L1.11856 9.33946C1.11856 4.07452 4.58712 0.52286 9.71944 0.52286C14.6962 0.52286 18.0469 4.0005 18.0469 9.15303C18.0469 14.7827 13.7707 14.5029 11.0084 20.3364L10.384 21.6583C9.38428 23.7642 7.68379 24.9121 5.55928 24.9121C2.91241 24.9121 1.11856 23.1155 1.11856 20.4548ZM4.22803 15.3686C4.37686 15.3686 4.49366 15.2518 4.49366 15.112L4.49366 9.01338C4.49366 5.96505 6.57003 3.91232 9.63565 3.91232C12.7678 3.91232 14.7458 5.91827 14.7458 9.01338C14.7458 9.15313 14.8626 9.26993 15.0121 9.26993C15.1519 9.26993 15.2687 9.15313 15.2687 9.01338C15.2687 5.61514 13.0521 3.39854 9.63565 3.39854C6.28574 3.39854 3.9708 5.68916 3.9708 9.01338L3.9708 15.112C3.9708 15.2518 4.0876 15.3686 4.22803 15.3686ZM4.29522 11.1869L9.20742 11.1869C10.4349 11.1869 11.2946 11.9985 11.2946 13.1374C11.2946 13.6852 11.0155 14.3962 10.6395 14.8497L9.08877 16.8008C9.03379 16.8676 9.01015 16.9357 9.01015 17.0137C9.01015 17.1814 9.1458 17.2611 9.28623 17.2611C9.38506 17.2611 9.44756 17.225 9.53321 17.1087L11.1738 15.0286C11.5992 14.4938 11.8858 13.6932 11.8858 13.0593C11.8858 11.6005 10.8322 10.6641 9.17813 10.6641L4.29522 10.6641Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
