import React from 'react'

export default function DeleteBackward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.3669 22.0158' className={className}>
      <path
        d='M22.1889 22.0158C24.2634 22.0158 25.3708 20.9014 25.3708 18.8282L25.3708 3.24414C25.3708 1.16192 24.2634 0.0565428 22.1889 0.0565428L11.794 0.0565428C10.4759 0.0565428 9.59326 0.243946 8.74248 1.10723L0.8876 9.04277C0.241895 9.68985 0 10.2672 0 10.9842C0 11.7012 0.223048 12.2974 0.8876 12.9354L8.74316 20.6105C9.61211 21.4549 10.4766 22.0151 11.7947 22.0151ZM22.1505 21.5043L11.8018 21.5043C10.7071 21.5043 9.88936 21.0492 9.0877 20.2462L1.2628 12.5738C0.722764 12.0324 0.521788 11.5642 0.521788 10.9842C0.521788 10.4133 0.741612 9.94503 1.2628 9.41339L9.08702 1.47218C9.88799 0.66915 10.7071 0.568076 11.8011 0.568076L22.1505 0.568076C23.9348 0.568076 24.8586 1.49054 24.8586 3.26846L24.8586 18.8039C24.8586 20.5818 23.9348 21.5043 22.1505 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.2696 15.9488C10.3775 15.9488 10.4289 15.9238 10.532 15.8207L14.8794 11.4811L19.219 15.8207C19.3306 15.9322 19.391 15.9488 19.4898 15.9488C19.6603 15.9488 19.7966 15.8391 19.7966 15.6784C19.7966 15.5887 19.7716 15.5198 19.6866 15.4349L15.3023 11.0505L19.6873 6.67315C19.773 6.58751 19.7973 6.52003 19.7973 6.4212C19.7973 6.26055 19.6609 6.15215 19.4905 6.15215C19.3931 6.15215 19.3249 6.17578 19.2211 6.28028L14.8794 10.6199L10.5307 6.28096C10.4276 6.17715 10.3775 6.14443 10.2696 6.14443C10.0901 6.14443 9.95381 6.26123 9.95381 6.42188C9.95381 6.52071 9.97881 6.58048 10.0729 6.67384L14.4488 11.0505L10.0729 15.4265C9.97881 15.5198 9.95381 15.5803 9.95381 15.6784C9.95381 15.8391 10.0901 15.9488 10.2696 15.9488Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
