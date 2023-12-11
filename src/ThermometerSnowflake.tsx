import React from 'react'

export default function ThermometerSnowflake({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.0513 31.8898' className={className}>
      <path
        d='M17.318 0.346878L17.3173 2.89648L19.375 1.71377C19.5409 1.60156 19.7289 1.59658 19.8223 1.7624C19.9247 1.93799 19.816 2.08702 19.6572 2.18243L17.3166 3.53233L17.3237 8.71816L21.8293 6.1249L21.83 3.43487C21.83 3.24473 21.8898 3.08096 22.0967 3.08096C22.2918 3.08096 22.3711 3.24473 22.3711 3.43282L22.3711 5.80596L24.569 4.54307C24.7355 4.4581 24.9256 4.43428 25.0106 4.59238C25.1144 4.77002 25.0056 4.93086 24.8448 5.00811L22.649 6.27803L24.7067 7.46143C24.8718 7.54502 24.9624 7.70518 24.8698 7.87032C24.7653 8.06475 24.596 8.03047 24.4295 7.93643L22.0974 6.59561L17.5995 9.19453L22.1044 11.7935L24.4366 10.4436C24.5947 10.3586 24.7737 10.3341 24.8768 10.5188C24.9786 10.6755 24.8704 10.835 24.7039 10.9283L22.6469 12.111L24.8441 13.3921C25.0042 13.4777 25.1144 13.6295 25.0106 13.7883C24.9061 13.9652 24.7348 13.9407 24.5753 13.8635L22.3788 12.6013L22.3782 14.9479C22.3782 15.143 22.2989 15.3088 22.1037 15.3088C21.8975 15.3081 21.828 15.143 21.828 14.9549L21.828 12.2823L17.3237 9.6709L17.3166 14.8554L19.6565 16.206C19.8153 16.3007 19.9066 16.4497 19.8216 16.626C19.7283 16.81 19.5402 16.7861 19.3744 16.6746L17.3173 15.4919L17.318 18.0422C17.318 18.2323 17.2387 18.3898 17.0493 18.3898C16.8591 18.3898 16.7798 18.2323 16.7798 18.0422L16.7805 15.4919L14.7151 16.6746C14.5577 16.7861 14.3612 16.81 14.2769 16.626C14.1919 16.4497 14.2832 16.3007 14.4413 16.206L16.7721 14.8554L16.7742 9.6709L12.6887 12.0347L12.6883 11.3929L16.4991 9.19453L12.6855 6.99549L12.6851 6.36468L16.7742 8.71816L16.7721 3.53233L14.4407 2.18243C14.2826 2.08702 14.1731 1.93799 14.2762 1.7624C14.3605 1.59658 14.557 1.60156 14.7235 1.71377L16.7805 2.89648L16.7798 0.346878C16.7798 0.157423 16.8591 0 17.0493 0C17.2387 0 17.318 0.157423 17.318 0.346878ZM12.2678 3.43487L12.2678 3.52295C12.2012 3.36861 12.1228 3.22255 12.0354 3.08373C12.2092 3.10487 12.2678 3.25853 12.2678 3.43487Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.60834 29.7219C11.8912 29.7219 14.5178 27.0765 14.5178 23.8306C14.5178 22.0736 13.8001 20.5406 12.2501 19.3306C11.8573 19.0222 11.7714 18.7926 11.7714 18.228L11.7721 5.47803C11.7721 3.52705 10.4646 2.13866 8.60834 2.13866C6.7514 2.13866 5.44319 3.52705 5.44319 5.47803L5.44388 18.228C5.44388 18.7926 5.36712 19.0222 4.96517 19.3306C3.41517 20.5406 2.69749 22.0736 2.69749 23.8306C2.69749 27.0765 5.32406 29.7219 8.60834 29.7219ZM8.60834 29.2401C5.63148 29.2401 3.18969 26.8067 3.18969 23.8306C3.18969 22.2122 3.84945 20.7494 5.30678 19.6861C5.78051 19.3393 5.95492 18.9108 5.95492 18.3199L5.95492 5.47305C5.95492 3.82178 7.05385 2.64902 8.60834 2.64902C10.1615 2.64902 11.2604 3.82178 11.2604 5.47305L11.2604 18.3199C11.2604 18.9108 11.4439 19.3393 11.9176 19.6861C13.3749 20.7494 14.0256 22.2122 14.0256 23.8306C14.0256 26.8067 11.5838 29.2401 8.60834 29.2401Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.60765 27.5591C10.6652 27.5591 12.3173 25.9069 12.3173 23.8299C12.3173 22.3905 11.5157 21.1933 10.3275 20.5646C9.83421 20.3037 9.67025 20.1014 9.67025 19.3667L9.67025 17.4639C9.67025 16.8856 9.23353 16.4126 8.60765 16.4126C7.99086 16.4126 7.54506 16.8856 7.54506 17.4639L7.54506 19.3667C7.54506 20.1014 7.38109 20.3037 6.89691 20.5646C5.69965 21.1933 4.89799 22.3905 4.89799 23.8299C4.89799 25.9069 6.55014 27.5591 8.60765 27.5591Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}