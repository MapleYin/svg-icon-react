import React from 'react'

export default function MenubarDockRectangleBadgeRecord({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.9274 28.9856' className={className}>
      <path
        d='M35.3055 6.692L35.3055 15.2896C35.2295 15.2791 35.1513 15.2777 35.0728 15.2777C34.9785 15.2777 34.8846 15.2797 34.7933 15.2921L34.7933 7.33752L6.763 7.33752L6.763 22.2511C6.763 24.0297 7.67775 24.9522 9.4627 24.9522L28.8418 24.9522C28.9161 25.1293 29.0031 25.2996 29.0999 25.4637L9.43272 25.4637C7.35821 25.4637 6.25147 24.3583 6.25147 22.2761L6.25147 6.692C6.25147 4.60977 7.35821 3.50371 9.43272 3.50371L32.1235 3.50371C34.1987 3.50371 35.3055 4.64678 35.3055 6.692ZM28.2188 22.1316L28.2439 22.6191L12.0485 22.6191C11.3747 22.6191 10.9255 22.1888 10.9255 21.5254L10.9255 20.0541C10.9255 19.3907 11.3747 18.9604 12.0485 18.9604L29.0129 18.9604C28.5054 19.91 28.2188 20.9907 28.2188 22.1316ZM9.4627 4.01525C7.67775 4.01525 6.763 4.93839 6.763 6.71632L6.763 6.79425L34.7933 6.79425L34.7933 6.71632C34.7933 4.93839 33.8045 4.01525 32.0942 4.01525Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M35.0728 28.0867C38.3391 28.0867 41.0369 25.407 41.0369 22.1316C41.0369 18.866 38.3384 16.1675 35.0721 16.1675C31.8155 16.1675 29.1184 18.866 29.1184 22.1316C29.1184 25.407 31.8162 28.0867 35.0728 28.0867ZM35.0728 27.5306C32.1281 27.5306 29.6745 25.077 29.6745 22.1316C29.6745 19.1779 32.1281 16.7236 35.0721 16.7236C38.0265 16.7236 40.4717 19.1779 40.4717 22.1316C40.4717 25.077 38.0265 27.5306 35.0728 27.5306ZM35.0721 26.5381C37.4657 26.5381 39.4876 24.5246 39.4876 22.1232C39.4876 19.7387 37.465 17.7168 35.0721 17.7168C32.6798 17.7168 30.6579 19.7387 30.6579 22.1232C30.6579 24.5246 32.6805 26.5381 35.0721 26.5381Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}