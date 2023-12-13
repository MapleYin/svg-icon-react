import React from 'react'

export function AntCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM13.1176 3.91299C13.1176 3.98477 13.1553 4.06358 13.2152 4.14512L14.1192 5.27168C14.3983 5.64072 14.4108 5.89668 14.0284 6.15694L13.9176 6.2294C13.3764 5.92119 12.7613 5.7252 12.1615 5.7252C11.552 5.7252 10.9376 5.92119 10.3964 6.2294L10.2939 6.15694C9.91153 5.89668 9.92539 5.64072 10.2038 5.27168L11.1078 4.14512C11.1671 4.06358 11.1964 3.98477 11.1964 3.91299C11.1964 3.77647 11.0821 3.66289 10.9358 3.66289C10.8118 3.66289 10.7282 3.72354 10.6739 3.82168L9.82305 4.88174C9.30049 5.52676 9.34365 6.05664 9.92666 6.55469L9.96572 6.58399C9.20723 7.24737 8.77461 8.20596 8.77461 9.2043C8.77461 10.1863 9.32354 10.8636 10.302 11.1245C10.1925 11.2326 10.1012 11.3923 10.0335 11.5987L8.73145 11.4027C8.20957 11.3351 8.04717 11.1236 8.04717 10.6633L8.04717 8.6211C8.04717 8.44414 7.94268 8.32149 7.76641 8.32149C7.58877 8.32149 7.46611 8.42529 7.46611 8.6211L7.46611 10.6944C7.46611 11.5091 7.83017 11.8598 8.75586 11.9958L9.96719 12.1596C9.99219 12.597 10.1818 12.9905 10.4721 13.246L8.40859 13.7193C7.51924 13.9349 7.16767 14.4127 7.31347 15.2337L7.86172 18.7394C7.88398 18.917 7.99482 19.004 8.15293 19.004C8.32988 19.004 8.46436 18.85 8.43369 18.6787L7.88887 15.2453C7.80235 14.7066 7.94815 14.4387 8.41621 14.3299C8.62901 14.2811 8.85996 14.2148 9.07207 14.1659C8.81865 14.5477 8.69649 15.0152 8.69649 15.5861C8.69649 17.7071 10.3614 19.6998 12.1615 19.6998C13.9616 19.6998 15.6259 17.7071 15.6259 15.5861C15.6259 15.0152 15.5044 14.5477 15.2503 14.1659C15.4631 14.2148 15.6941 14.2811 15.9062 14.3299C16.3749 14.4387 16.5207 14.7066 16.4342 15.2453L15.8894 18.6787C15.8573 18.85 15.9925 19.004 16.1694 19.004C16.3275 19.004 16.43 18.917 16.4607 18.7394L17.0089 15.2337C17.1372 14.4127 16.7947 13.9265 15.9138 13.7193L13.851 13.246C14.1224 13.0282 14.3302 12.6151 14.3559 12.1596L15.5672 11.9958C16.4929 11.8598 16.8569 11.5091 16.8569 10.6944L16.8569 8.6211C16.8569 8.44414 16.7525 8.32149 16.5566 8.32149C16.3804 8.32149 16.2759 8.44414 16.2759 8.6211L16.2759 10.6633C16.2759 11.1236 16.1135 11.3435 15.5909 11.4027L14.2896 11.5987C14.2212 11.4111 14.1299 11.2515 14.0211 11.1427C14.9807 10.8915 15.5478 10.224 15.5478 9.2043C15.5478 8.20596 15.1151 7.24737 14.3573 6.58399L14.3866 6.55469C14.9787 6.05664 15.0142 5.52608 14.5 4.88174L13.6491 3.82168C13.5942 3.71514 13.5022 3.66289 13.3872 3.66289C13.2402 3.66289 13.1176 3.7667 13.1176 3.91299Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
