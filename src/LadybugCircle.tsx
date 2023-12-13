import React from 'react'

export function LadybugCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1602 9.22295C13.369 9.22295 14.5382 8.98926 15.2908 8.62022C15.6842 8.41514 15.8118 8.20596 15.8118 7.86143C15.8118 6.85332 15.3501 6.0253 14.5718 5.47344L14.5062 4.85489C14.4762 4.60098 14.518 4.49083 14.7928 4.33868L15.7867 3.813C16.0925 3.63722 15.861 3.13565 15.5364 3.32393L14.5468 3.86211C14.081 4.13145 13.83 4.47598 13.9515 4.96836L13.9885 5.11914C13.4603 4.90206 12.8476 4.77012 12.1602 4.77012C11.4818 4.77012 10.8691 4.90206 10.3416 5.11914L10.3786 4.96836C10.4994 4.47666 10.2673 4.14122 9.77354 3.86211L8.79298 3.32393C8.46837 3.13565 8.23692 3.63722 8.54268 3.813L9.53731 4.33868C9.80303 4.49083 9.85391 4.60098 9.82325 4.85489L9.74854 5.47344C8.97022 6.0253 8.5085 6.85332 8.5085 7.86143C8.5085 8.20596 8.63682 8.41514 9.03926 8.62022C9.79122 8.98926 10.952 9.22295 12.1602 9.22295ZM12.1602 10.405C12.2479 10.405 12.3328 10.4711 12.3328 10.577L12.3328 19.31C12.3328 19.5882 12.4659 19.7905 12.9347 19.7515C14.5818 19.6309 15.9576 18.883 16.8987 17.6648L18.2602 18.7317C18.4226 18.8362 18.6079 18.8104 18.6936 18.6843C18.8071 18.5505 18.803 18.384 18.6497 18.2606L17.2465 17.152C17.8731 16.1257 18.2387 14.8308 18.231 13.3446L19.7904 13.3446C19.9674 13.3446 20.1089 13.222 20.1089 13.0471C20.1089 12.8449 19.9862 12.7404 19.8093 12.7404L18.1996 12.7586C18.1104 11.5459 17.7259 10.3689 17.1879 9.47999L18.5289 8.40626C18.6634 8.2836 18.6766 8.10733 18.5909 7.9547C18.4683 7.80137 18.3024 7.80274 18.1575 7.917L16.827 8.98028C16.6214 8.76905 16.3577 8.67686 16.1883 8.77452C14.7676 9.62881 13.3954 9.77442 12.1602 9.77442C10.9528 9.77442 9.56182 9.62881 8.15997 8.77452C7.97169 8.65801 7.7087 8.7502 7.51221 8.98028L6.19073 7.917C6.03673 7.80274 5.84297 7.82022 5.73848 7.9547C5.65284 8.10733 5.6667 8.30245 5.80118 8.40626L7.16035 9.47999C6.59444 10.3689 6.21973 11.5459 6.12139 12.7586L4.52989 12.7404C4.35294 12.7404 4.23936 12.8449 4.23936 13.0471C4.23936 13.222 4.35294 13.3446 4.52989 13.3446L6.09844 13.3446C6.09073 14.8308 6.45635 16.1257 7.07383 17.152L5.67969 18.2606C5.52706 18.384 5.51319 18.5505 5.63585 18.6843C5.72149 18.8104 5.89776 18.8362 6.06925 18.7317L7.42159 17.6648C8.36338 18.883 9.74756 19.6309 11.3954 19.7515C11.8544 19.7905 11.9966 19.5882 11.9966 19.31L11.9966 10.577C11.9966 10.4711 12.0815 10.405 12.1602 10.405ZM8.21075 12.1389C8.21075 11.5264 8.73536 11.0667 9.31084 11.0667C9.90518 11.0667 10.4109 11.5452 10.4109 12.1389C10.4109 12.7234 9.90518 13.2208 9.31084 13.2208C8.73536 13.2208 8.21075 12.7234 8.21075 12.1389ZM8.31338 15.7013C8.31338 15.0379 8.87774 14.4547 9.54112 14.4547C10.222 14.4547 10.8059 15.0379 10.8059 15.7013C10.8059 16.3737 10.222 16.9479 9.54112 16.9479C8.87774 16.9479 8.31338 16.3737 8.31338 15.7013ZM16.1284 12.1389C16.1284 12.7234 15.6129 13.2208 15.0283 13.2208C14.434 13.2208 13.9373 12.7234 13.9373 12.1389C13.9373 11.5452 14.434 11.0667 15.0283 11.0667C15.6129 11.0667 16.1284 11.5264 16.1284 12.1389ZM16.0258 15.7013C16.0258 16.3737 15.4614 16.9479 14.7981 16.9479C14.1263 16.9479 13.5424 16.3737 13.5424 15.7013C13.5424 15.0379 14.1263 14.4547 14.7981 14.4547C15.4614 14.4547 16.0258 15.0379 16.0258 15.7013Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
