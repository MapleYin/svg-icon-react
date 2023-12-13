import React from 'react'

export function SunDustCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.217 12.018C7.217 11.8578 7.10567 11.7297 6.93369 11.7297L4.20704 11.7297C4.05391 11.7297 3.9251 11.8585 3.9251 12.018C3.9251 12.1872 4.05391 12.2972 4.20704 12.2972L6.93369 12.2972C7.12452 12.2972 7.217 12.2067 7.217 12.018ZM8.65753 8.7002C8.80313 8.57344 8.73682 8.38194 8.65547 8.30967L6.72862 6.37374C6.61798 6.26309 6.44532 6.31055 6.34786 6.42686C6.24903 6.52569 6.24971 6.67882 6.35967 6.78946L8.29561 8.72471C8.36787 8.79698 8.5587 8.81719 8.65753 8.7002ZM12.1602 6.70215C12.3392 6.70215 12.4484 6.54405 12.4484 6.42793L12.4484 3.6922C12.4484 3.50138 12.3385 3.40958 12.1602 3.40958C11.9909 3.40958 11.881 3.50138 11.881 3.6922L11.881 6.42793C11.881 6.57198 12.0091 6.70215 12.1602 6.70215ZM15.6726 8.7002C15.7714 8.81651 15.9531 8.79766 16.0352 8.72471L17.9697 6.78946C18.0797 6.67882 18.0804 6.52637 17.9822 6.42686C17.8834 6.31895 17.7107 6.26377 17.6015 6.37374L15.6648 8.30967C15.5919 8.38262 15.5276 8.57344 15.6726 8.7002ZM17.1124 12.018C17.1124 12.1879 17.2523 12.2972 17.3866 12.2972L20.1224 12.2972C20.2943 12.2972 20.405 12.2061 20.405 12.018C20.405 11.8397 20.2943 11.7297 20.1224 11.7297L17.3866 11.7297C17.2237 11.7297 17.1124 11.8578 17.1124 12.018ZM8.93789 14.0738L15.3824 14.0738C15.7028 13.5093 15.8738 12.8791 15.8738 12.1931C15.8738 10.1325 14.2207 8.4794 12.1602 8.4794C10.1003 8.4794 8.45625 10.1325 8.45625 12.1931C8.45625 12.8791 8.61748 13.5093 8.93789 14.0738ZM4.20636 15.3002L20.123 15.3002C20.3014 15.3002 20.405 15.2091 20.405 15.0301C20.405 14.8602 20.293 14.7606 20.123 14.7606L4.20636 14.7606C4.0462 14.7606 3.9251 14.879 3.9251 15.0301C3.9251 15.2091 4.04688 15.3002 4.20636 15.3002ZM5.95127 17.4814C6.18204 17.4814 6.39122 17.2813 6.39122 17.0414C6.39122 16.8113 6.18204 16.6112 5.95127 16.6112C5.7212 16.6112 5.51202 16.8113 5.51202 17.0414C5.51202 17.2813 5.7212 17.4814 5.95127 17.4814ZM9.07491 17.4814C9.30567 17.4814 9.51417 17.2813 9.51417 17.0414C9.51417 16.8113 9.30567 16.6112 9.07491 16.6112C8.84414 16.6112 8.63565 16.8113 8.63565 17.0414C8.63565 17.2813 8.84414 17.4814 9.07491 17.4814ZM12.1797 17.4814C12.4105 17.4814 12.619 17.2813 12.619 17.0414C12.619 16.8113 12.4105 16.6112 12.1797 16.6112C11.9489 16.6112 11.7404 16.8113 11.7404 17.0414C11.7404 17.2813 11.9489 17.4814 12.1797 17.4814ZM15.2845 17.4814C15.5146 17.4814 15.7237 17.2813 15.7237 17.0414C15.7237 16.8113 15.5146 16.6112 15.2845 16.6112C15.0537 16.6112 14.8445 16.8113 14.8445 17.0414C14.8445 17.2813 15.0537 17.4814 15.2845 17.4814ZM18.3893 17.4814C18.6193 17.4814 18.8285 17.2813 18.8285 17.0414C18.8285 16.8113 18.6193 16.6112 18.3893 16.6112C18.1585 16.6112 17.9584 16.8113 17.9584 17.0414C17.9584 17.2813 18.1585 17.4814 18.3893 17.4814ZM7.53125 19.3461C7.76202 19.3461 7.97051 19.1467 7.97051 18.9068C7.97051 18.6761 7.76202 18.476 7.53125 18.476C7.30049 18.476 7.092 18.6761 7.092 18.9068C7.092 19.1467 7.30049 19.3461 7.53125 19.3461ZM10.6542 19.3461C10.885 19.3461 11.0941 19.1467 11.0941 18.9068C11.0941 18.6761 10.885 18.476 10.6542 18.476C10.4241 18.476 10.2149 18.6761 10.2149 18.9068C10.2149 19.1467 10.4241 19.3461 10.6542 19.3461ZM13.759 19.3461C13.9898 19.3461 14.1982 19.1467 14.1982 18.9068C14.1982 18.6761 13.9898 18.476 13.759 18.476C13.5282 18.476 13.3197 18.6761 13.3197 18.9068C13.3197 19.1467 13.5282 19.3461 13.759 19.3461ZM16.8449 19.3461C17.0757 19.3461 17.2849 19.1467 17.2849 18.9068C17.2849 18.6761 17.0757 18.476 16.8449 18.476C16.6148 18.476 16.4147 18.6761 16.4147 18.9068C16.4147 19.1467 16.6148 19.3461 16.8449 19.3461Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
