import React from 'react'

export default function N34Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.53838 17.4189C10.051 17.4189 11.1521 16.2588 11.1521 14.4655C11.1521 13.1517 10.5184 12.0673 9.1962 11.9501L9.1962 11.9201C10.3388 11.6356 10.8682 10.5654 10.8682 9.49122C10.8682 8.00157 9.95557 6.91397 8.48955 6.91397C7.25498 6.91397 6.51885 7.65547 6.18476 8.75967C6.09824 9.04014 6.08779 9.26475 6.08779 9.38809C6.08779 9.57686 6.18594 9.69727 6.36201 9.69727C6.58916 9.69727 6.6126 9.55919 6.65645 9.33204C6.81475 8.36846 7.39043 7.49395 8.48955 7.49395C9.62412 7.49395 10.2543 8.41505 10.2543 9.5587C10.2543 10.7344 9.49785 11.675 8.32012 11.675L7.71358 11.675C7.50528 11.675 7.44346 11.8276 7.44346 11.9619C7.44346 12.1234 7.55205 12.2572 7.71358 12.2572L8.33057 12.2572C9.68975 12.2572 10.5152 13.0094 10.5152 14.5082C10.5152 15.7091 9.89072 16.8193 8.55723 16.8193C7.31729 16.8193 6.62149 15.8542 6.49317 14.947C6.46748 14.7212 6.40635 14.5985 6.18057 14.5985C6.01426 14.5985 5.90293 14.726 5.90293 14.9105C5.90293 15.0617 5.96015 15.3604 6.01943 15.5557C6.35351 16.6354 7.23682 17.4189 8.53838 17.4189ZM16.8904 17.3693C17.0554 17.3693 17.1974 17.1867 17.1974 17.0415L17.1974 14.76L18.0887 14.76C18.2725 14.76 18.3874 14.65 18.3874 14.4599C18.3874 14.2893 18.2368 14.1793 18.0887 14.1793L17.1974 14.1793L17.1974 7.42696C17.1974 6.99991 16.9159 6.90762 16.7123 6.90762C16.3949 6.90762 16.2425 7.10821 16.0746 7.42013L12.8061 13.8317C12.7204 14.0071 12.6702 14.1541 12.6702 14.3149C12.6702 14.5705 12.8415 14.76 13.1529 14.76L16.5647 14.76L16.5647 17.0415C16.5647 17.2181 16.6835 17.3693 16.8904 17.3693ZM16.5667 14.1723L13.3018 14.1723L13.3018 14.1493L16.5179 7.76261L16.5667 7.76261Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}