import React from 'react'

export default function RectangleInsetFilledBadgeRecord({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.8897 28.9856' className={className}>
      <path
        d='M35.2866 6.692L35.2866 15.2905C35.2047 15.2793 35.1204 15.2777 35.0357 15.2777C34.9476 15.2777 34.8599 15.2795 34.7744 15.2912L34.7744 6.71632C34.7744 4.93839 33.7856 4.01525 32.0754 4.01525L9.44386 4.01525C7.6589 4.01525 6.74415 4.93839 6.74415 6.71632L6.74415 22.2511C6.74415 24.0297 7.6589 24.9522 9.44386 24.9522L28.8048 24.9522C28.8791 25.1293 28.9661 25.2996 29.0628 25.4637L9.41388 25.4637C7.33936 25.4637 6.23262 24.3583 6.23262 22.2761L6.23262 6.692C6.23262 4.60977 7.33936 3.50371 9.41388 3.50371L32.1047 3.50371C34.1799 3.50371 35.2866 4.64678 35.2866 6.692Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M33.8847 6.62794L33.8847 15.3844C30.6739 15.9347 28.1818 18.7716 28.1818 22.1316C28.1818 22.8014 28.2803 23.4499 28.4673 24.0617L9.36388 24.0617C8.22843 24.0617 7.63459 23.4672 7.63459 22.3311L7.63459 6.62794C7.63459 5.50021 8.22843 4.90568 9.36388 4.90568L32.1547 4.90568C33.2908 4.90568 33.8847 5.50021 33.8847 6.62794Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M35.0357 28.0867C38.3014 28.0867 40.9992 25.407 40.9992 22.1316C40.9992 18.866 38.3007 16.1675 35.0441 16.1675C31.7785 16.1675 29.0807 18.866 29.0807 22.1316C29.0807 25.407 31.7792 28.0867 35.0357 28.0867ZM35.0357 27.5306C32.0904 27.5306 29.6375 25.077 29.6375 22.1316C29.6375 19.1779 32.0904 16.7236 35.0441 16.7236C37.9888 16.7236 40.4347 19.1779 40.4347 22.1316C40.4347 25.077 37.9888 27.5306 35.0357 27.5306ZM35.0441 26.5381C37.4287 26.5381 39.4506 24.5246 39.4506 22.1232C39.4506 19.7387 37.428 17.7168 35.0441 17.7168C32.6512 17.7168 30.6293 19.7387 30.6293 22.1232C30.6293 24.5246 32.6428 26.5381 35.0441 26.5381Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}