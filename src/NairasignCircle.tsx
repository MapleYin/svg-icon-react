import React from 'react'

export default function NairasignCircle({
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
        d='M8.0831 12.449C8.0831 12.6065 8.19941 12.7234 8.39453 12.7234L8.94053 12.7234L8.94053 17.4257C8.94053 17.6108 9.08887 17.7215 9.2168 17.7215C9.36426 17.7215 9.49376 17.6108 9.49376 17.4257L9.49376 12.7234L12.0554 12.7234L14.7518 17.487C14.8381 17.6415 14.9403 17.7033 15.0808 17.7033C15.2546 17.7033 15.3882 17.5788 15.3882 17.3693L15.3882 12.7241L15.9446 12.7241C16.1391 12.7241 16.2554 12.5883 16.2554 12.4309C16.2554 12.2721 16.1391 12.1376 15.9446 12.1376L15.3882 12.1376L15.3882 7.25869C15.3882 7.08262 15.2678 6.97197 15.1203 6.97197C14.9735 6.97197 14.844 7.08262 14.844 7.25869L14.844 12.1376L12.3753 12.1376L9.58604 7.19737C9.49971 7.05195 9.39747 6.98945 9.24727 6.98945C9.0832 6.98945 8.94053 7.10488 8.94053 7.31436L8.94053 12.1551L8.39453 12.1551C8.2001 12.1551 8.0831 12.2896 8.0831 12.449ZM9.49376 12.1551L9.49376 8.1878L11.7439 12.1551ZM12.6958 12.7241L14.844 12.7241L14.844 16.4979Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
