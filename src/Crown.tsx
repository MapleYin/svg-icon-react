import React from 'react'

export default function Crown({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.0944 21.7467' className={className}>
      <path
        d='M2.50674 8.88459C3.88878 8.88459 5.0128 7.75148 5.0128 6.37716C5.0128 4.99581 3.88878 3.86202 2.50674 3.86202C1.13311 3.86202 0 4.99513 0 6.37716C0 7.75148 1.12471 8.88459 2.50674 8.88459ZM2.50674 8.36671C1.40762 8.36671 0.517197 7.46788 0.517197 6.37716C0.517197 5.27736 1.40762 4.37922 2.50674 4.37922C3.60586 4.37922 4.49561 5.27873 4.49561 6.37716C4.49561 7.46788 3.59815 8.36671 2.50674 8.36671ZM14.3847 5.0128C15.7674 5.0128 16.8914 3.87969 16.8914 2.50606C16.8914 1.12403 15.7674 0 14.3847 0C13.002 0 11.8779 1.12334 11.8779 2.50606C11.8779 3.87969 13.0026 5.0128 14.3847 5.0128ZM14.3847 4.49561C13.2856 4.49561 12.3951 3.5961 12.3951 2.50606C12.3951 1.41466 13.2856 0.517197 14.3847 0.517197C15.4838 0.517197 16.3735 1.40694 16.3735 2.50606C16.3735 3.5961 15.4761 4.49561 14.3847 4.49561ZM26.2256 8.88459C27.6083 8.88459 28.733 7.75148 28.733 6.37716C28.733 4.99513 27.609 3.86202 26.2256 3.86202C24.8436 3.86202 23.7195 4.99581 23.7195 6.37716C23.7195 7.75148 24.8436 8.88459 26.2256 8.88459ZM26.2256 8.36671C25.1349 8.36671 24.2367 7.46788 24.2367 6.37716C24.2367 5.27873 25.1272 4.37922 26.2256 4.37922C27.3254 4.37922 28.2152 5.27736 28.2152 6.37716C28.2152 7.46788 27.3254 8.36671 26.2256 8.36671ZM3.43936 8.4966L7.38741 10.9296C8.37257 11.5289 9.28722 11.355 9.90568 10.563L14.3486 5.02413L13.8592 4.81417L9.41221 10.3502C8.9753 10.9023 8.40919 10.9343 7.85099 10.5875L3.70841 8.0544ZM25.293 8.41281L25.0239 7.97061L21.0496 10.4011C20.3238 10.8498 19.6921 10.7535 19.1714 10.08L14.9109 4.73038L14.4123 4.94034L18.967 10.6475C19.4458 11.2705 20.2948 11.4821 20.9071 11.0972ZM5.4544 17.7712L23.315 17.7712L23.315 17.2483L5.4544 17.2483ZM2.99082 8.51232L5.61504 19.1194C6.04746 20.8895 6.88076 21.5727 8.546 21.5727L20.2234 21.5727C21.8893 21.5727 22.7226 20.8895 23.155 19.1194L25.7792 8.51232L25.282 8.29122L22.6147 19.216C22.3167 20.4176 21.5037 21.0498 20.2338 21.0498L8.53624 21.0498C7.26632 21.0498 6.45333 20.4176 6.15538 19.216L3.488 8.29122Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
