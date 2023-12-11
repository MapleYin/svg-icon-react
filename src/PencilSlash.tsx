import React from 'react'

export default function PencilSlash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.2067 19.8251' className={className}>
      <path
        d='M10.073 10.9417L2.48794 18.5172L0.241253 19.8057C0.113127 19.8775-0.0708582 19.7376 0.0281654 19.5913L1.33969 17.341L8.91332 9.78139ZM17.9141 3.11053L11.7331 9.28366L10.5736 8.12419L16.7658 1.94343ZM19.5598 0.256315L19.5753 0.271845C19.9769 0.672725 19.9839 1.08044 19.514 1.53152L18.6866 2.3492L17.5272 1.17233L18.3371 0.354655C18.7512-0.0587255 19.1959-0.107554 19.5598 0.256315Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.4143 17.9993C18.5193 18.1036 18.684 18.1036 18.7876 17.9993C18.9101 17.8761 18.8919 17.7218 18.7876 17.6169L2.69917 1.52838C2.61303 1.44293 2.4476 1.41432 2.32514 1.52838C2.21244 1.64176 2.21244 1.80719 2.32514 1.91081Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
