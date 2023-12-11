import React from 'react'

export default function Shuffle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.4675 20.3192' className={className}>
      <path
        d='M0 16.1593C0 16.4162 0.164943 16.5875 0.416216 16.5875L3.19512 16.5875C4.94415 16.5875 5.94278 16.0756 7.24483 14.5385L13.952 6.52481C15.1652 5.08067 16.1006 4.55675 17.4503 4.55675L19.5857 4.55675L19.5857 7.65694C19.5857 7.88819 19.7131 8.01495 19.9821 8.01495C20.1152 8.01495 20.1833 7.992 20.3416 7.88185L24.8579 4.48897C25.1857 4.24004 25.1857 3.75948 24.8579 3.50918L20.3416 0.134473C20.1833 0.0243169 20.1152 0.00136733 19.9821 0.00136733C19.7131 0.00136733 19.5857 0.128126 19.5857 0.359378L19.5857 3.70029L17.5572 3.70029C15.8075 3.70029 14.8082 4.21289 13.5068 5.75L6.80039 13.763C5.58721 15.2078 4.64405 15.7311 3.29073 15.7311L0.416216 15.7311C0.201955 15.7311 0 15.94 0 16.1593ZM0 4.14737C0 4.36729 0.201955 4.57559 0.416216 4.57559L3.29073 4.57559C4.64473 4.57559 5.58789 5.09952 6.80039 6.54366L13.5068 14.5567C14.8082 16.0938 15.8075 16.6064 17.5572 16.6064L19.5857 16.6064L19.5857 19.9521C19.5857 20.1833 19.7131 20.3192 19.9821 20.3192C20.1152 20.3192 20.1833 20.2871 20.3416 20.177L24.8579 16.7841C25.1857 16.5352 25.1857 16.0553 24.8579 15.8134L20.3416 12.4387C20.1833 12.3285 20.1152 12.2965 19.9821 12.2965C19.7131 12.2965 19.5857 12.4323 19.5857 12.6636L19.5857 15.7499L17.4503 15.7499C16.1006 15.7499 15.1652 15.226 13.952 13.7818L7.24483 5.76885C5.94278 4.23174 4.94415 3.71914 3.19512 3.71914L0.416216 3.71914C0.164943 3.71914 0 3.89043 0 4.14737Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
