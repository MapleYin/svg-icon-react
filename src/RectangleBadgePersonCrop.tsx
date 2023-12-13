import React from 'react'

export function RectangleBadgePersonCrop({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.6486 28.9856' className={className}>
      <path
        d='M35.6661 6.692L35.6661 22.2761C35.6661 24.3206 34.5594 25.4637 32.4842 25.4637L12.8309 25.4637C12.9273 25.2996 13.014 25.1293 13.0881 24.9522L32.4549 24.9522C34.1651 24.9522 35.1539 24.0297 35.1539 22.2511L35.1539 6.71632C35.1539 4.93839 34.1651 4.01525 32.4549 4.01525L9.82335 4.01525C8.03839 4.01525 7.12365 4.93839 7.12365 6.71632L7.12365 15.2914C7.03579 15.2795 6.94539 15.2777 6.8546 15.2777C6.77283 15.2777 6.69137 15.2792 6.61211 15.2902L6.61211 6.692C6.61211 4.60977 7.71885 3.50371 9.79337 3.50371L32.4842 3.50371C34.5594 3.50371 35.6661 4.64678 35.6661 6.692Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.8181 22.1316C12.8181 25.407 10.1189 28.0867 6.8546 28.0867C3.59669 28.0867 0.899517 25.3993 0.899517 22.1316C0.899517 18.8653 3.59669 16.1675 6.8546 16.1675C10.13 16.1675 12.8181 18.8556 12.8181 22.1316ZM2.91388 25.768L2.91388 25.8266C3.83946 27.0184 5.26729 27.5787 6.87276 27.5787C8.47892 27.5787 9.80411 27.0554 10.8037 25.8266L10.8037 25.805C10.4585 25.0691 8.95782 23.9884 6.8546 23.9884C4.77862 23.9884 3.27794 25.0691 2.91388 25.768ZM4.74796 20.5137C4.74796 21.8495 5.60938 22.9176 6.83575 22.9176C8.0712 22.9176 8.95147 21.8495 8.95147 20.5137C8.95147 19.323 8.05235 18.2165 6.83575 18.2165C5.6464 18.2165 4.74796 19.323 4.74796 20.5137Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
