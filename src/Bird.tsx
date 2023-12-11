import React from 'react'

export default function Bird({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.5551 31.7112' className={className}>
      <path
        d='M20.0005 7.97154C18.5578 7.97154 17.3157 8.45425 15.7093 11.5564C12.9411 8.27144 6.94895 4.56763 0.810087 4.11909C0.350023 4.08706 0.0709218 4.2814 0.0318593 4.74771C-0.450953 11.0563 4.60784 15.7994 11.5331 16.3279C9.92746 20.131 6.91731 24.5581 3.61838 27.6735C3.36828 27.8936 3.32131 28.1792 3.55979 28.5655C4.8968 30.6118 9.04866 31.8218 11.9348 30.8203C12.1993 30.7221 12.4002 30.6346 12.4002 30.1597L12.4002 25.0211C16.2973 25.0569 21.6641 23.1132 20.3417 16.5722L20.0402 15.0389C22.7007 14.5145 24.3112 13.0737 24.3112 11.8445C24.3112 10.0877 22.4499 7.97154 20.0005 7.97154ZM19.9885 8.49869C22.2456 8.49869 23.7749 10.2948 23.7749 11.8445C23.7749 12.8755 22.4041 14.0803 19.7232 14.5513C19.5728 14.5813 19.4558 14.7165 19.4851 14.8746L19.8439 16.8145C20.9711 22.9581 15.9893 24.6862 12.1936 24.5002C11.9978 24.4744 11.8724 24.6172 11.8724 24.7865L11.8724 30.1469C11.8724 30.2187 11.8599 30.2703 11.7686 30.2989C9.06946 31.2817 5.18822 30.1632 3.96546 28.2107C3.92367 28.1319 3.9307 28.1055 3.99134 28.0456C7.39886 24.8572 10.5793 20.1374 12.1241 16.3278C12.2398 16.0275 12.1346 15.8255 11.8064 15.806C4.92611 15.346 0.138511 10.9228 0.568098 4.78141C0.586945 4.67828 0.598762 4.6483 0.720052 4.65943C6.81614 5.12867 12.5816 8.68053 15.3157 11.9174C15.4373 12.076 15.615 12.1463 15.7631 12.1463C15.9018 12.1463 16.0717 12.0587 16.1501 11.8908C17.6843 8.8483 18.6508 8.49869 19.9885 8.49869ZM18.3069 8.37828L18.8181 8.23443C17.1532 4.4855 14.9443 1.91324 11.7 0.121341C11.248-0.123095 10.8699 0.0111845 10.7166 0.439411C10.0176 2.3481 9.78186 4.90435 10.0301 7.26353L10.5668 7.41813C10.3285 4.80123 10.5456 2.4026 11.2203 0.595668C11.2503 0.491175 11.2815 0.48639 11.3846 0.548402C14.541 2.29098 16.6751 4.69694 18.3069 8.37828ZM21.1957 11.652C21.5423 11.652 21.8199 11.3654 21.8199 11.0188C21.8199 10.6722 21.5423 10.394 21.1957 10.394C20.8491 10.394 20.5618 10.6722 20.5618 11.0188C20.5618 11.3654 20.8491 11.652 21.1957 11.652ZM23.8303 13.1544L26.7537 13.4958C27.2353 13.5487 27.3696 12.8959 26.8957 12.7091L24.2916 11.6881Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}