import React from 'react'

export function WindshieldRearAndWiperAndDrop({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.0425 26.3287' className={className}>
      <path
        d='M3.09859 3.70952C1.38701 3.74621 0.511533 4.66681 0.511533 6.40616L0.511533 15.5893C0.511533 17.3672 1.42628 18.2897 3.21124 18.2897L11.8871 18.2897L12.1954 18.8012L3.18125 18.8012C1.10674 18.8012 0 17.6867 0 15.6136L0 6.38185C0 4.44109 0.969903 3.33989 2.79595 3.20744ZM29.6812 6.38185L29.6812 15.6136C29.6812 17.6497 28.5751 18.8012 26.4999 18.8012L12.8063 18.8012L12.4979 18.2897L26.4706 18.2897C28.1802 18.2897 29.1696 17.3672 29.1696 15.5893L29.1696 6.40616C29.1696 4.62824 28.1802 3.70578 26.4706 3.70578L23.0275 3.70578C22.9449 3.53637 22.8569 3.36533 22.7644 3.19356L26.4999 3.19356C28.5751 3.19356 29.6812 4.33663 29.6812 6.38185ZM17.3858 3.19356C17.2931 3.36533 17.205 3.53637 17.1223 3.70578L3.70576 3.70578L3.39696 3.19356Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M20.5293 1.17071C21.2901 2.33809 22.0151 3.5798 22.5493 4.74718C23.0755 5.87765 23.3989 6.90372 23.3989 7.67189C23.3989 9.62306 22.0803 10.9201 20.0796 10.9201C18.0782 10.9201 16.7512 9.62306 16.7512 7.67189C16.7512 6.90372 17.0739 5.87765 17.6008 4.74718C18.144 3.5798 18.869 2.33809 19.6208 1.17071C19.7505 0.989459 19.8718 0.889751 20.0796 0.889751C20.2776 0.889751 20.4087 0.989459 20.5293 1.17071Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.7383 24.6126C15.8943 24.6126 16.8433 23.6644 16.8433 22.5076C16.8433 21.3495 15.895 20.402 14.7383 20.402C13.5815 20.402 12.6333 21.3495 12.6333 22.5076C12.6333 23.6825 13.5711 24.6126 14.7383 24.6126ZM14.7383 24.1111C13.8633 24.1111 13.1425 23.382 13.1425 22.5076C13.1425 21.632 13.8633 20.9105 14.7383 20.9105C15.5938 20.9105 16.3341 21.6508 16.3341 22.5076C16.3341 23.382 15.6126 24.1111 14.7383 24.1111ZM13.628 21.1779L14.0896 20.9298L2.62872 1.91924C2.56758 1.81856 2.42442 1.71543 2.254 1.81495C2.10449 1.89424 2.09834 2.06036 2.16015 2.15265Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
