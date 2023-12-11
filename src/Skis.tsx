import React from 'react'

export default function Skis({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.2284 28.8838' className={className}>
      <path
        d='M0.928812 17.6671C-0.319238 18.9145-0.299706 20.6684 0.928128 21.9157C2.16573 23.1338 3.9378 23.1527 5.18517 21.9053L21.8976 5.18448C23.145 3.93711 23.1352 2.16435 21.9171 0.935833C20.6698-0.301084 18.9158-0.319931 17.6685 0.927435ZM1.30987 18.0488L18.0495 1.3085C19.0338 0.324902 20.5811 0.306055 21.5354 1.30781C22.5183 2.26279 22.5092 3.81914 21.5158 4.80273L4.80411 21.5242C3.81983 22.5078 2.26349 22.5267 1.30919 21.534C0.307432 20.5797 0.326279 19.0324 1.30987 18.0488ZM11.0673 10.377L12.4578 11.7668C12.6361 11.9444 12.9078 11.936 13.0848 11.7668C13.2624 11.5815 13.2624 11.3091 13.0848 11.1314L11.7027 9.74092C11.5257 9.56397 11.2443 9.56328 11.0673 9.74092C10.8897 9.91719 10.889 10.1993 11.0673 10.377ZM7.83224 13.6107L9.22345 15.0026C9.4004 15.1802 9.67277 15.1788 9.8504 15.0026C10.0274 14.8256 10.028 14.5441 9.8504 14.3665L8.4592 12.9753C8.28224 12.7983 8.00919 12.7983 7.83224 12.9753C7.65528 13.1529 7.65597 13.4337 7.83224 13.6107ZM6.96944 23.6896C5.72208 24.9369 5.73184 26.709 6.94991 27.9375C8.19728 29.1654 9.95119 29.1849 11.1986 27.9368L27.9382 11.1972C29.1856 9.94981 29.1667 8.19659 27.9389 6.94854C26.7013 5.73115 24.9292 5.7207 23.6812 6.96807ZM7.35051 24.0615L24.0629 7.34981C25.0465 6.36554 26.6029 6.34737 27.5578 7.33028C28.5596 8.28458 28.5408 9.83184 27.5572 10.8252L10.8168 27.5558C9.83322 28.5394 8.28595 28.5582 7.33166 27.5565C6.34806 26.6022 6.35783 25.0549 7.35051 24.0615ZM17.0989 16.3903L18.4894 17.7795C18.667 17.9571 18.9485 17.9571 19.1254 17.7795C19.3031 17.6039 19.3024 17.3218 19.1254 17.1448L17.7349 15.7627C17.5579 15.5858 17.2849 15.5844 17.0989 15.7627C16.9303 15.939 16.9296 16.2127 17.0989 16.3903ZM13.8638 19.6331L15.255 21.0159C15.432 21.1936 15.7134 21.2013 15.891 21.0159C16.068 20.839 16.0596 20.5659 15.891 20.3883L14.4998 18.9971C14.3229 18.8208 14.0407 18.8208 13.8638 18.9971C13.6868 19.1747 13.6875 19.4562 13.8638 19.6331Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
