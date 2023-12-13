import React from 'react'

export function MoonDustCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.31318 14.5471L16.5064 14.5471C17.0277 14.0781 17.4619 13.4961 17.7662 12.8303C17.8562 12.684 17.8457 12.5313 17.7719 12.4568C17.7001 12.3773 17.5586 12.348 17.3871 12.4269C16.806 12.641 16.1803 12.7848 15.2928 12.7848C11.8554 12.7848 9.81485 10.7197 9.81485 7.24102C9.81485 6.41436 9.95997 5.70508 10.2586 5.09102C10.3311 4.91954 10.3199 4.7669 10.2209 4.66446C10.1121 4.5627 9.9295 4.56065 9.74619 4.68828C7.85117 5.73975 6.55527 7.67657 6.55527 10.1766C6.55527 11.9468 7.18613 13.4972 8.31318 14.5471ZM4.19728 15.7734L20.123 15.7734C20.2923 15.7734 20.4043 15.6732 20.4043 15.5033C20.4043 15.3334 20.293 15.2339 20.123 15.2339L4.19728 15.2339C4.04552 15.2339 3.91534 15.3432 3.91534 15.5033C3.91534 15.6732 4.0462 15.7734 4.19728 15.7734ZM5.95127 17.9546C6.18204 17.9546 6.38145 17.7545 6.38145 17.5147C6.38145 17.2846 6.18204 17.0845 5.95127 17.0845C5.71143 17.0845 5.51202 17.2846 5.51202 17.5147C5.51202 17.7545 5.71143 17.9546 5.95127 17.9546ZM9.07491 17.9546C9.30499 17.9546 9.50508 17.7545 9.50508 17.5147C9.50508 17.2846 9.30499 17.0845 9.07491 17.0845C8.83506 17.0845 8.63496 17.2846 8.63496 17.5147C8.63496 17.7545 8.83506 17.9546 9.07491 17.9546ZM12.1797 17.9546C12.4098 17.9546 12.6099 17.7545 12.6099 17.5147C12.6099 17.2846 12.4098 17.0845 12.1797 17.0845C11.9398 17.0845 11.7397 17.2846 11.7397 17.5147C11.7397 17.7545 11.9398 17.9546 12.1797 17.9546ZM15.2838 17.9546C15.5146 17.9546 15.7147 17.7545 15.7147 17.5147C15.7147 17.2846 15.5146 17.0845 15.2838 17.0845C15.0537 17.0845 14.8445 17.2846 14.8445 17.5147C14.8445 17.7545 15.0537 17.9546 15.2838 17.9546ZM18.3886 17.9546C18.6193 17.9546 18.8194 17.7545 18.8194 17.5147C18.8194 17.2846 18.6193 17.0845 18.3886 17.0845C18.1578 17.0845 17.9493 17.2846 17.9493 17.5147C17.9493 17.7545 18.1578 17.9546 18.3886 17.9546ZM7.53125 19.8193C7.76133 19.8193 7.96143 19.6192 7.96143 19.3801C7.96143 19.1493 7.76133 18.9492 7.53125 18.9492C7.29141 18.9492 7.09131 19.1493 7.09131 19.3801C7.09131 19.6192 7.29141 19.8193 7.53125 19.8193ZM10.6542 19.8193C10.885 19.8193 11.0844 19.6192 11.0844 19.3801C11.0844 19.1493 10.885 18.9492 10.6542 18.9492C10.4144 18.9492 10.2149 19.1493 10.2149 19.3801C10.2149 19.6192 10.4144 19.8193 10.6542 19.8193ZM13.759 19.8193C13.9898 19.8193 14.1892 19.6192 14.1892 19.3801C14.1892 19.1493 13.9898 18.9492 13.759 18.9492C13.5191 18.9492 13.3197 19.1493 13.3197 19.3801C13.3197 19.6192 13.5191 19.8193 13.759 19.8193ZM16.8449 19.8193C17.0757 19.8193 17.2842 19.6192 17.2842 19.3801C17.2842 19.1493 17.0757 18.9492 16.8449 18.9492C16.6142 18.9492 16.4057 19.1493 16.4057 19.3801C16.4057 19.6192 16.6142 19.8193 16.8449 19.8193Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
