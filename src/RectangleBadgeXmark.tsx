import React from 'react'

export default function RectangleBadgeXmark({
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
        d='M12.8181 22.1316C12.8181 25.407 10.1189 28.0867 6.8546 28.0867C3.59669 28.0867 0.899517 25.3993 0.899517 22.1316C0.899517 18.8653 3.59669 16.1675 6.8546 16.1675C10.13 16.1675 12.8181 18.8556 12.8181 22.1316ZM9.08516 19.2544L6.88956 21.4779L4.75665 19.3646C4.5922 19.2001 4.33507 19.1638 4.12452 19.3646C3.90421 19.5737 3.95098 19.8225 4.12452 20.0058L6.22881 22.1296L4.01436 24.3531C3.82969 24.528 3.7961 24.8047 3.98848 24.9978C4.19063 25.1992 4.47638 25.1566 4.64288 24.9998L6.8755 22.7581L8.97071 24.8715C9.15401 25.0541 9.42091 25.0904 9.62237 24.8715C9.82315 24.6525 9.80431 24.4031 9.62237 24.2198L7.51808 22.1246L9.73184 19.9011C9.91651 19.7255 9.94102 19.4398 9.73888 19.2565C9.53741 19.0732 9.26983 19.0788 9.08516 19.2544Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
