import React from 'react'

export function PoweroutletStrip({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45.599 14.0119' className={className}>
      <path
        d='M3.21162 12.9562L33.5192 12.9562C35.6383 12.9562 36.7217 11.8358 36.7217 9.75362L36.7217 3.21231C36.7217 1.1211 35.6383 0 33.5192 0L3.21162 0C1.0834 0 0 1.0834 0 3.21231L0 9.75362C0 11.8734 1.0834 12.9562 3.21162 12.9562ZM3.23955 12.4333C1.43897 12.4333 0.52286 11.5172 0.52286 9.71661L0.52286 3.24024C0.52286 1.43966 1.43897 0.52286 3.23955 0.52286L33.4815 0.52286C35.2171 0.52286 36.1988 1.43966 36.1988 3.24024L36.1988 9.71661C36.1988 11.5172 35.2171 12.4333 33.4815 12.4333ZM36.398 10.4992L37.0489 10.4992C38.1115 10.4992 38.7002 9.91055 38.7002 8.84796L38.7002 4.1082C38.7002 3.04561 38.1115 2.45694 37.0489 2.45694L36.398 2.45694L36.398 3.00245L37.084 3.00245C37.7743 3.00245 38.1547 3.3835 38.1547 4.08292L38.1547 8.88233C38.1547 9.57266 37.7743 9.95371 37.084 9.95371L36.398 9.95371ZM38.5732 6.97091L45.2377 6.97091L45.2377 6.45937L38.5732 6.45937Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.14102 9.24756L5.23926 9.24756C5.49024 9.24756 5.6792 9.03975 5.6792 8.79786L5.6792 4.16671C5.6792 3.86895 5.49024 3.69883 5.23926 3.69883L4.14102 3.69883C3.86143 3.69883 3.67315 3.86895 3.67315 4.16671L3.67315 8.79786C3.67315 9.03975 3.86143 9.24756 4.14102 9.24756ZM11.599 10.2262C13.6644 10.2262 15.3286 8.57169 15.3286 6.48751C15.3286 4.42286 13.6644 2.73907 11.599 2.73907C9.50577 2.73907 7.84151 4.42286 7.84151 6.48751C7.84151 8.57169 9.50577 10.2262 11.599 10.2262ZM10.3388 8.52784C10.0731 8.52784 9.86524 8.32979 9.86524 8.05567L9.86524 4.90186C9.86524 4.63614 10.0731 4.42833 10.3388 4.42833C10.6136 4.42833 10.8207 4.63546 10.8207 4.90186L10.8207 8.05567C10.8207 8.32139 10.6136 8.52784 10.3388 8.52784ZM12.8314 8.52784C12.5656 8.52784 12.3578 8.32139 12.3578 8.05567L12.3578 4.90186C12.3578 4.63546 12.5649 4.42833 12.8314 4.42833C13.1062 4.42833 13.3133 4.63546 13.3133 4.90186L13.3133 8.05567C13.3133 8.32139 13.1062 8.52784 12.8314 8.52784ZM20.6228 10.2262C22.6881 10.2262 24.353 8.57169 24.353 6.48751C24.353 4.42286 22.6881 2.73907 20.6228 2.73907C18.5393 2.73907 16.8659 4.42286 16.8659 6.48751C16.8659 8.57169 18.5393 10.2262 20.6228 10.2262ZM19.3716 8.52784C19.0968 8.52784 18.889 8.32139 18.889 8.05567L18.889 4.90186C18.889 4.63614 19.0968 4.42833 19.3716 4.42833C19.638 4.42833 19.8444 4.63546 19.8444 4.90186L19.8444 8.05567C19.8444 8.32139 19.638 8.52784 19.3716 8.52784ZM21.8642 8.52784C21.5894 8.52784 21.3816 8.32139 21.3816 8.05567L21.3816 4.90186C21.3816 4.63546 21.5894 4.42833 21.8642 4.42833C22.1306 4.42833 22.337 4.63546 22.337 4.90186L22.337 8.05567C22.337 8.32139 22.1299 8.52784 21.8642 8.52784ZM29.6367 10.2262C31.7021 10.2262 33.367 8.57169 33.367 6.48751C33.367 4.42286 31.7021 2.73907 29.6367 2.73907C27.5442 2.73907 25.8799 4.42286 25.8799 6.48751C25.8799 8.57169 27.5442 10.2262 29.6367 10.2262ZM28.3772 8.52784C28.1024 8.52784 27.9036 8.32139 27.9036 8.05567L27.9036 4.90186C27.9036 4.63614 28.1024 4.42833 28.3772 4.42833C28.6436 4.42833 28.85 4.63546 28.85 4.90186L28.85 8.05567C28.85 8.32139 28.652 8.52784 28.3772 8.52784ZM30.8697 8.52784C30.5949 8.52784 30.3955 8.32139 30.3955 8.05567L30.3955 4.90186C30.3955 4.63546 30.6033 4.42833 30.8697 4.42833C31.1445 4.42833 31.351 4.63546 31.351 4.90186L31.351 8.05567C31.351 8.32139 31.1445 8.52784 30.8697 8.52784Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
