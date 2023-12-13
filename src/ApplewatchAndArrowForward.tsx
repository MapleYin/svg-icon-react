import React from 'react'

export function ApplewatchAndArrowForward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.7742 22.9121' className={className}>
      <path
        d='M15.2239 0.768167L15.8366 2.65986C16.0354 3.30625 16.2332 3.45235 16.7792 3.74942C18.0322 4.46002 18.6524 5.52188 18.7419 7.17462L18.8946 7.17462C19.3826 7.17462 19.7111 7.54073 19.7111 8.05177L19.7111 9.88019C19.7111 10.4087 19.3826 10.7748 18.8946 10.7748L18.7551 10.7748L18.7551 15.3155C18.7551 17.2225 18.1407 18.4087 16.7792 19.1809C16.2332 19.4786 16.0354 19.6247 15.8366 20.2711L15.2239 22.1628C15.0811 22.6514 14.7109 22.9121 14.2 22.9121L9.13468 22.9121C8.63566 22.9121 8.2627 22.6507 8.11075 22.1628L7.5169 20.2711C7.29024 19.6247 7.10216 19.4786 6.54708 19.1809C5.18555 18.4087 4.5796 17.2225 4.5796 15.3155L4.5796 12.6038L5.10812 12.6038L5.10812 15.2997C5.10812 17.7823 6.58878 19.2651 9.07003 19.2651L14.2751 19.2651C16.7648 19.2651 18.2266 17.7823 18.2266 15.2997L18.2266 7.63126C18.2266 5.14796 16.7648 3.66525 14.2751 3.66525L9.07003 3.66525C6.58878 3.66525 5.10812 5.14796 5.10812 7.63126L5.10812 10.2881L4.5796 10.2881L4.5796 7.61553C4.5796 5.70713 5.18624 4.52862 6.54708 3.74942C7.10284 3.45303 7.29093 3.30557 7.5169 2.65986L8.11075 0.768167C8.2627 0.280274 8.63566 0.0188476 9.13468 0.0188476L14.2 0.0188476C14.7102 0.0188476 15.0824 0.271876 15.2239 0.768167Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.15401 11.7134L10.8273 11.7134L11.3887 11.7247L8.61661 14.4531L7.82677 15.243C7.77111 15.2902 7.74679 15.3584 7.74679 15.4202C7.74679 15.5872 7.86925 15.6902 8.01671 15.6902C8.08693 15.6902 8.14601 15.6665 8.20236 15.6102L12.1959 11.618C12.2446 11.5596 12.2702 11.518 12.2702 11.4505C12.2702 11.4012 12.2446 11.3407 12.1959 11.283L8.20236 7.29014C8.14601 7.23379 8.08693 7.21016 8.01671 7.21016C7.86925 7.21016 7.74679 7.31309 7.74679 7.48009C7.74679 7.54191 7.77111 7.61007 7.82677 7.65734L8.61661 8.44786L11.3887 11.1665L10.8273 11.1869L1.15401 11.1869C1.01153 11.1869 0.890435 11.3037 0.890435 11.4505C0.890435 11.5966 1.01153 11.7134 1.15401 11.7134Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
