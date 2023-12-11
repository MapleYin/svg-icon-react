import React from 'react'

export default function TennisRacketCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.6773 5.65138C16.8621 3.83751 13.8017 4.0796 11.6696 6.21163C10.3838 7.49883 9.80469 9.19776 9.91505 10.6076C10.061 12.7451 9.63526 13.996 7.57022 16.0415L8.28722 16.7676C10.3236 14.7207 11.4991 14.3619 13.6555 14.4234C15.1498 14.4577 16.802 13.9735 18.1073 12.6682C20.2575 10.5166 20.501 7.47432 18.6773 5.65138ZM18.2453 6.07364C19.8704 7.69874 19.6849 10.2559 17.6941 12.2271C15.7034 14.1989 13.1658 14.3942 11.5316 12.7873C9.90655 11.1538 10.1109 8.61553 12.1024 6.64366C14.0826 4.65294 16.63 4.43947 18.2453 6.07364ZM4.71436 19.1002L5.23556 19.6228C5.45587 19.8333 5.76681 19.8333 5.98644 19.6228L8.93692 16.6709C9.15723 16.4506 9.15723 16.1417 8.93692 15.9214L8.41573 15.3988C8.23311 15.2162 7.88585 15.1792 7.66553 15.3988L4.71436 18.3514C4.49542 18.571 4.49474 18.8806 4.71436 19.1002ZM18.7742 11.1973L19.1324 10.6994L13.5775 5.14454L13.1083 5.53976ZM16.2321 13.5899L16.7858 13.2785L11.1011 7.59376L10.6682 8.02598ZM10.4077 11.4912L10.7062 12.0572L17.5104 5.25294L17.0616 4.8464ZM12.5213 13.6428L13.0748 13.953L19.4773 7.54142L19.0883 7.07374Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}