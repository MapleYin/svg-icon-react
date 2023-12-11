import React from 'react'

export default function Magicmouse({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.0724 26.1858' className={className}>
      <path
        d='M6.86039 26.1753C10.8764 26.1753 13.1165 24.2769 13.3876 20.6707C13.8201 15.0835 13.8285 11.0657 13.3954 5.51817C13.1171 1.88936 10.8764 0 6.86039 0C2.83461 0 0.603651 1.88936 0.324744 5.51817C-0.107678 11.0657-0.108361 15.0835 0.323377 20.6707C0.604335 24.2769 2.83461 26.1753 6.86039 26.1753ZM6.86039 25.6638C3.14184 25.6638 1.09018 23.9376 0.83491 20.6707C0.403855 15.0828 0.404539 11.0741 0.827195 5.51817C1.0895 2.22862 3.14184 0.511533 6.86039 0.511533C10.5699 0.511533 12.6222 2.22862 12.8838 5.51817C13.3162 11.0741 13.3169 15.0828 12.8852 20.6707C12.6215 23.9376 10.5699 25.6638 6.86039 25.6638ZM6.91557 22.1771C7.27827 22.1771 7.32846 22.3535 7.63256 22.3535C7.92758 22.3535 8.14243 22.0787 8.31118 21.813C8.53647 21.5089 8.61528 21.2048 8.61528 21.1853C8.60483 21.1748 8.02592 20.9314 8.02592 20.2918C8.02592 19.6843 8.48696 19.4479 8.50649 19.4095C8.22192 19.0154 7.7602 19.0154 7.63256 19.0154C7.2894 19.0154 7.02436 19.1926 6.86674 19.1926C6.67006 19.1926 6.41547 19.0154 6.1309 19.0154C5.58129 19.0154 5.03031 19.4583 5.03031 20.3029C5.03031 20.8812 5.21791 21.4217 5.47319 21.7941C5.71733 22.1087 5.90492 22.3535 6.17973 22.3535C6.44545 22.3535 6.57241 22.1771 6.91557 22.1771ZM7.69184 17.9162C7.25942 17.9162 6.81791 18.3577 6.81791 18.9562C7.32846 18.9861 7.7895 18.3975 7.69184 17.9162Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
