import React from 'react'

export function WindSnowCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.41202 10.4215C4.48624 9.92188 5.71964 9.64552 6.98732 9.64552C8.79864 9.64552 9.89805 9.97071 11.6319 9.97071C12.9201 9.97071 13.8388 9.08565 13.8388 7.85176C13.8388 6.70801 12.9517 5.74258 11.7666 5.74258C10.644 5.74258 9.76924 6.56807 9.62159 7.56094C9.61338 7.76241 9.79209 7.92325 9.98721 7.90489C10.1614 7.88585 10.2566 7.74141 10.2669 7.6001C10.4329 6.93497 10.9584 6.39542 11.7666 6.39542C12.6271 6.39542 13.1853 7.04239 13.1853 7.85176C13.1853 8.73516 12.5914 9.33672 11.6319 9.33672C9.93917 9.33672 8.93126 8.99131 6.98732 8.99131C5.64513 8.99131 4.27364 9.30039 3.11359 9.84541C2.92413 9.92559 2.89708 10.1214 2.95841 10.2872C3.0379 10.4446 3.25118 10.5121 3.41202 10.4215ZM16.8249 13.9217C18.8005 13.9217 20.0273 12.7855 20.0273 11.1805C20.0273 9.69698 18.8312 8.46856 17.3238 8.46856C15.8422 8.46856 14.6926 9.64063 14.5908 11.07C14.5776 11.2406 14.7484 11.4065 14.924 11.3994C15.0821 11.3931 15.2298 11.2516 15.2437 11.0887C15.3329 10.0245 16.1584 9.12208 17.3238 9.12208C18.4884 9.12208 19.3829 10.0314 19.3829 11.1805C19.3829 12.4231 18.4396 13.2682 16.8249 13.2682C14.1898 13.2682 11.4042 11.829 7.94044 11.829C6.13839 11.829 4.58976 12.1674 3.1129 12.7744C2.93458 12.856 2.89708 13.0692 2.95841 13.2078C3.01905 13.3932 3.23234 13.423 3.39386 13.3687C4.73468 12.6883 6.19767 12.4825 7.94044 12.4825C11.2339 12.4825 14.0156 13.9217 16.8249 13.9217ZM11.669 19.5959C12.7988 19.5959 13.693 18.6954 13.693 17.4972C13.693 15.6753 11.6951 14.6583 8.30372 14.6583C6.51964 14.6583 4.60587 15.0609 3.14923 15.6114C2.97159 15.6937 2.88731 15.8881 2.95841 16.0351C3.01905 16.1925 3.23234 16.2607 3.39386 16.2064C4.80734 15.6475 6.62296 15.3021 8.30372 15.3021C11.3698 15.3021 13.0395 16.1219 13.0395 17.4972C13.0395 18.3345 12.4826 18.9431 11.669 18.9431C10.8734 18.9431 10.3598 18.5105 10.244 17.6934C10.2315 17.5087 10.0788 17.3617 9.90821 17.3547C9.68877 17.3561 9.57725 17.5637 9.58975 17.7399C9.71739 18.9 10.5754 19.5959 11.669 19.5959ZM17.3238 7.67842C17.5017 7.67842 17.5741 7.53897 17.5734 7.36182L17.5616 6.41641L18.3619 6.90127C18.4902 6.98077 18.6429 6.96895 18.7398 6.84063C18.8298 6.69346 18.7342 6.54922 18.5934 6.46973L17.7994 6.02803L18.5934 5.5836C18.7335 5.50411 18.8563 5.36329 18.7405 5.20635C18.6617 5.0669 18.5091 5.06485 18.3619 5.16319L17.5616 5.62989L17.5734 4.70333C17.5741 4.52413 17.5017 4.38604 17.3238 4.38604C17.1732 4.38604 17.0917 4.52413 17.0924 4.70264L17.1035 5.62989L16.3032 5.16319C16.1463 5.06485 16.0041 5.06621 15.9253 5.20635C15.8186 5.371 15.931 5.50411 16.0725 5.58428L16.893 6.02803L16.0725 6.46973C15.903 6.56807 15.8276 6.70118 15.9155 6.8211C16.0118 6.9878 16.1463 6.99961 16.3032 6.90127L17.1035 6.41641L17.0931 7.36182C17.0924 7.53897 17.1732 7.67842 17.3238 7.67842ZM17.3465 14.874C17.1605 14.874 17.0564 15.0516 17.0647 15.2557L17.0815 16.3135L16.1949 15.7552C16.0069 15.6483 15.8328 15.6735 15.7161 15.8524C15.6196 16.0033 15.6923 16.1859 15.9048 16.2921L16.8159 16.7818L15.9048 17.2786C15.7286 17.3667 15.6092 17.5429 15.7357 17.7302C15.8335 17.8986 16.0251 17.905 16.1949 17.7896L17.0815 17.26L17.0647 18.2982C17.0564 18.5016 17.1605 18.6708 17.3465 18.6708C17.559 18.6708 17.6541 18.5016 17.6548 18.2976L17.6296 17.26L18.5239 17.7896C18.6937 17.905 18.8867 17.8979 18.9755 17.7302C19.1103 17.5415 18.9811 17.3667 18.8147 17.2702L17.9127 16.7818L18.8147 16.2921C18.9811 16.1949 19.0922 16.011 18.9839 15.8419C18.8665 15.6832 18.6749 15.6671 18.5239 15.7552L17.6296 16.3135L17.6555 15.2557C17.6548 15.0516 17.559 14.874 17.3465 14.874Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
