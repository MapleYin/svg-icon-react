import React from 'react'

export default function QuoteBubble({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6406' className={className}>
      <path
        d='M6.07774 25.6406C6.25158 25.6406 6.4047 25.53 6.5218 25.4358L11.1259 21.5226L22.002 21.5226C24.6743 21.5226 26.4199 19.7463 26.4199 17.1053L26.4199 5.90919C26.4199 3.2584 24.6743 1.49121 22.002 1.49121L4.41798 1.49121C1.74492 1.49121 0 3.23047 0 5.90919L0 17.1053C0 19.784 1.74492 21.5226 4.41798 21.5226L5.68623 21.5226L5.68623 25.1907C5.68623 25.4668 5.86163 25.6406 6.07774 25.6406ZM6.1714 25.0855L6.1714 21.2773C6.1714 21.0903 6.0921 21.011 5.90577 21.011L4.45499 21.011C2.08985 21.011 0.511533 19.4454 0.511533 17.0676L0.511533 5.93712C0.511533 3.56837 2.08985 1.99366 4.45499 1.99366L21.9649 1.99366C24.2645 1.99366 25.9084 3.56837 25.9084 5.93712L25.9084 17.0676C25.9084 19.4454 24.2645 21.011 21.9649 21.011L11.2957 21.011C11.0074 21.011 10.8668 21.0724 10.5915 21.3029Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.10225 10.316C7.10225 11.6873 8.05586 12.6902 9.41739 12.6902C10.0369 12.6902 10.6006 12.4725 10.9787 11.9799L11.0952 11.9799C10.6453 13.3468 9.2546 14.1491 8.66475 14.3179C8.3252 14.4169 8.20664 14.5577 8.20664 14.7683C8.20664 15.0256 8.39629 15.2062 8.66543 15.2062C9.59415 15.2062 12.3099 13.9048 12.3099 10.7757C12.3099 8.95567 11.0304 7.84053 9.62999 7.84053C8.18965 7.84053 7.10225 8.94131 7.10225 10.316ZM14.1023 10.316C14.1023 11.6873 15.056 12.6902 16.4175 12.6902C17.037 12.6902 17.6007 12.4725 17.9788 11.9799L18.0855 11.9799C17.6545 13.3468 16.2729 14.1491 15.6648 14.3179C15.3344 14.4169 15.2067 14.5577 15.2067 14.7683C15.2067 15.0256 15.3964 15.2062 15.6564 15.2062C16.5942 15.2062 19.3093 13.9048 19.3093 10.7757C19.3093 8.95567 18.0298 7.84053 16.6294 7.84053C15.1897 7.84053 14.1023 8.94131 14.1023 10.316Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
