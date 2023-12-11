import React from 'react'

export default function SunSnowCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM7.88887 16.5527L7.90069 17.482L7.09903 17.014C6.95186 16.9156 6.79922 16.917 6.72041 17.0571C6.61299 17.2134 6.72608 17.3556 6.86758 17.428L7.68037 17.8711L6.86758 18.3135C6.71631 18.4118 6.61299 18.5456 6.70996 18.6662C6.80694 18.8245 6.94209 18.8454 7.09903 18.7471L7.90069 18.2608L7.88047 19.2083C7.88887 19.3855 7.96133 19.5256 8.1126 19.5256C8.28975 19.5256 8.36358 19.3855 8.36221 19.2083L8.35039 18.2608L9.15205 18.7471C9.28037 18.8266 9.43301 18.8141 9.53067 18.6857C9.62061 18.547 9.53477 18.3937 9.3835 18.3135L8.58887 17.8711L9.3835 17.4274C9.54317 17.3556 9.61924 17.2148 9.52227 17.0571C9.44346 16.9177 9.29854 16.9345 9.15205 17.014L8.35039 17.482L8.36221 16.5534C8.36358 16.3749 8.28975 16.2355 8.1126 16.2355C7.96133 16.2355 7.88819 16.3749 7.88887 16.5527ZM11.9364 16.5527L11.9482 17.482L11.1466 17.014C11.0085 16.9156 10.8475 16.917 10.7771 17.0571C10.6606 17.2134 10.7827 17.3556 10.9158 17.428L11.7279 17.8711L10.9158 18.3135C10.7639 18.4118 10.6606 18.5456 10.7575 18.6662C10.8552 18.8245 10.9897 18.8454 11.1466 18.7471L11.9482 18.2608L11.9371 19.2083C11.9364 19.3855 12.0089 19.5256 12.1602 19.5256C12.338 19.5256 12.4111 19.3855 12.4105 19.2083L12.3986 18.2608L13.1996 18.7471C13.3286 18.8266 13.4806 18.8141 13.5698 18.6857C13.6689 18.547 13.583 18.3937 13.4311 18.3135L12.6371 17.8711L13.4311 17.4274C13.5823 17.3556 13.6675 17.2148 13.5705 17.0571C13.491 16.9177 13.3468 16.9345 13.1996 17.014L12.3986 17.482L12.4105 16.5534C12.4111 16.3749 12.338 16.2355 12.1602 16.2355C12.0089 16.2355 11.9357 16.3749 11.9364 16.5527ZM15.984 16.5527L15.9965 17.482L15.1941 17.014C15.0477 16.9156 14.895 16.917 14.8162 17.0571C14.7088 17.2134 14.8219 17.3556 14.9634 17.428L15.7762 17.8711L14.9634 18.3135C14.7933 18.4118 14.7276 18.5456 14.8058 18.6662C14.9027 18.8245 15.0379 18.8454 15.1941 18.7471L15.9965 18.2608L15.9847 19.2083C15.984 19.3855 16.0571 19.5256 16.2077 19.5256C16.3856 19.5256 16.4587 19.3855 16.458 19.2083L16.4462 18.2608L17.2472 18.7471C17.3762 18.8266 17.5288 18.8141 17.6265 18.6857C17.7164 18.547 17.6208 18.3937 17.4793 18.3135L16.6847 17.8711L17.4793 17.4274C17.6201 17.3556 17.7339 17.2148 17.6181 17.0571C17.5393 16.9177 17.3943 16.9156 17.2472 17.014L16.4462 17.482L16.458 16.5534C16.4587 16.3749 16.3856 16.2355 16.2077 16.2355C16.0571 16.2355 15.9833 16.3749 15.984 16.5527ZM4.22198 14.4414C4.06954 14.4414 3.94776 14.5507 3.94776 14.7031C3.94776 14.8828 4.07022 14.9739 4.22198 14.9739L20.099 14.9739C20.278 14.9739 20.3816 14.8828 20.3816 14.7031C20.3816 14.5325 20.2787 14.4414 20.099 14.4414ZM8.45918 11.8795C8.45918 12.5564 8.62949 13.188 8.9499 13.7525L15.3704 13.7525C15.6999 13.188 15.8618 12.5564 15.8618 11.8795C15.8618 9.82461 14.215 8.17715 12.1602 8.17715C10.106 8.17715 8.45918 9.82461 8.45918 11.8795ZM4.22266 11.4141C4.06817 11.4141 3.94776 11.5436 3.94776 11.6953C3.94776 11.8743 4.06817 11.985 4.22266 11.985L6.95137 11.985C7.14356 11.985 7.22764 11.8841 7.22764 11.6953C7.22764 11.5429 7.12471 11.4141 6.95137 11.4141ZM17.369 11.4141C17.2047 11.4141 17.1018 11.5429 17.1018 11.6953C17.1018 11.875 17.2424 11.985 17.369 11.985L20.1074 11.985C20.271 11.985 20.3816 11.8925 20.3816 11.6953C20.3816 11.5254 20.271 11.4141 20.1074 11.4141ZM6.36485 6.13165C6.26739 6.22276 6.26739 6.37589 6.37803 6.48653L8.30557 8.41475C8.3792 8.49678 8.57071 8.50792 8.66114 8.39864C8.80674 8.2628 8.74112 8.07969 8.66817 8.00606L6.73858 6.07784C6.64679 5.94835 6.46436 6.01534 6.36485 6.13165ZM17.5908 6.07784L15.6619 8.00606C15.5876 8.08037 15.5143 8.2628 15.6599 8.39864C15.7594 8.50655 15.9418 8.48839 16.0154 8.41475L17.9514 6.48653C18.062 6.37589 18.0627 6.22276 17.9646 6.13165C17.865 6.01397 17.6819 5.94903 17.5908 6.07784ZM11.8796 3.39357L11.8796 6.12227C11.8796 6.27676 12.0084 6.39854 12.1602 6.39854C12.3398 6.39854 12.4498 6.23907 12.4498 6.12227L12.4498 3.39357C12.4498 3.21114 12.3392 3.11866 12.1602 3.11866C11.9902 3.11866 11.8796 3.21114 11.8796 3.39357Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
