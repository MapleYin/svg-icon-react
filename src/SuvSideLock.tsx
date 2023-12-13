import React from 'react'

export function SuvSideLock({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.6881 34.4067' className={className}>
      <path
        d='M39.4179 10.6124L39.9661 11.4146C40.87 12.7586 41.3268 14.1413 41.3268 15.6123L41.3268 21.2781C41.3268 22.6921 40.5241 23.5211 38.9987 23.5211L36.782 23.5211C36.3801 25.1162 34.9587 26.263 33.222 26.263C31.4934 26.263 30.0733 25.1162 29.6717 23.5211L12.4286 23.5211C12.0268 25.1162 10.6062 26.263 8.87764 26.263C7.14146 26.263 5.71966 25.1162 5.31769 23.5211L2.35596 23.5211C0.76885 23.5211 0 22.723 0 21.0863L0 19.0203C0 16.1618 1.8251 14.5027 5.51436 14.0397L10.1753 13.4635L15.1703 10.3253C16.1821 9.69036 17.061 9.22746 17.9942 8.89712L17.9942 9.44155C17.1608 9.75566 16.3639 10.186 15.4435 10.7646L10.3616 13.9611L5.58389 14.5505C2.00636 14.9872 0.511533 16.3678 0.511533 19.0203L0.511533 21.109C0.511533 22.3971 1.11925 23.0096 2.34464 23.0096L5.22224 23.0096C5.20476 22.8702 5.19678 22.7276 5.19678 22.5828C5.19678 20.529 6.81543 18.911 8.87764 18.911C10.9308 18.911 12.5494 20.529 12.5494 22.5828C12.5494 22.7276 12.5414 22.8702 12.524 23.0096L29.5763 23.0096C29.5589 22.8702 29.5509 22.7276 29.5509 22.5828C29.5509 20.529 31.1689 18.911 33.222 18.911C35.2849 18.911 36.9029 20.529 36.9029 22.5828C36.9029 22.7276 36.8949 22.8702 36.8774 23.0096L39.001 23.0096C40.2402 23.0096 40.8243 22.4025 40.8243 21.2675L40.8243 15.6123C40.8243 14.2086 40.4024 13.0167 39.5484 11.7107L39.0002 10.8903C37.956 9.32355 36.4196 8.62589 34.1225 8.62589L28.0172 8.62589L28.0172 8.11436L34.1225 8.11436C36.4997 8.11436 38.2952 8.9458 39.4179 10.6124ZM5.709 22.5828C5.709 24.3685 7.092 25.7515 8.87764 25.7515C10.6542 25.7515 12.0372 24.3685 12.0372 22.5828C12.0372 20.8056 10.6542 19.4226 8.87764 19.4226C7.092 19.4226 5.709 20.8056 5.709 22.5828ZM30.0624 22.5828C30.0624 24.3685 31.4454 25.7515 33.222 25.7515C35.0083 25.7515 36.3913 24.3685 36.3913 22.5828C36.3913 20.8056 35.0083 19.4226 33.222 19.4226C31.4454 19.4226 30.0624 20.8056 30.0624 22.5828Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M20.1335 4.9086L20.6881 4.90791L20.6881 3.03633C20.6881 1.54405 21.6267 0.554597 23.0061 0.554597C24.3939 0.554597 25.3233 1.54405 25.3233 3.03633L25.3233 4.90791L25.8689 4.9086L25.8689 3.02569C25.8689 1.21055 24.714 0 23.0061 0C21.2975 0 20.1335 1.21055 20.1335 3.02569ZM20.1528 11.5827L25.8495 11.5827C26.7082 11.5827 27.1275 11.1621 27.1275 10.226L27.1275 5.46124C27.1275 4.51534 26.7082 4.11358 25.8495 4.11358L20.1528 4.11358C19.3032 4.11358 18.884 4.51534 18.884 5.46124L18.884 10.226C18.884 11.1621 19.3032 11.5827 20.1528 11.5827Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
