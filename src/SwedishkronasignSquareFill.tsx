import React from 'react'

export default function SwedishkronasignSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM6.78955 6.03262L6.78955 15.8317C6.78955 15.9778 6.90361 16.101 7.05947 16.101C7.20625 16.101 7.3294 15.9778 7.3294 15.8317L7.3294 13.1899L8.21553 12.3233L11.0919 16.0269C11.213 16.1861 11.3736 16.1875 11.4766 16.0998C11.5872 16.0219 11.6506 15.866 11.4918 15.6788L8.64561 11.9133L11.3815 9.13428C11.5221 8.97481 11.4803 8.80352 11.3821 8.71582C11.2651 8.62539 11.1059 8.61084 10.9639 8.74717L7.37754 12.463L7.3294 12.463L7.3294 6.03262C7.3294 5.88653 7.20625 5.76338 7.05947 5.76338C6.90361 5.76338 6.78955 5.88653 6.78955 6.03262ZM13.1597 8.91348L13.1597 15.8442C13.1597 16.0078 13.2905 16.1387 13.4541 16.1387C13.6275 16.1387 13.7492 16.0078 13.7492 15.8442L13.7492 11.5021C13.7492 10.325 14.2831 9.23858 15.4608 9.23858C15.626 9.23858 15.8204 9.25401 15.9249 9.27237C16.1168 9.2837 16.2333 9.19942 16.2333 9.0461C16.2333 8.91163 16.1734 8.82666 16.0646 8.78213C15.8979 8.69922 15.6739 8.68604 15.4927 8.68604C14.701 8.68604 13.9977 9.21524 13.7681 10.1277L13.7367 10.1277L13.7367 8.91348C13.7367 8.76036 13.6156 8.63018 13.4618 8.63018C13.2898 8.63018 13.1597 8.76036 13.1597 8.91348Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
