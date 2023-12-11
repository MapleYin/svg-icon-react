import React from 'react'

export default function HouseAndFlag({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.2439 25.1307' className={className}>
      <path
        d='M0.396465 12.3128L11.8698 6.44044C12.2906 6.2297 12.6492 6.2297 13.0805 6.44044L24.572 12.3128C24.9215 12.4844 25.1119 12.0172 24.8242 11.8706L13.302 5.96846C12.7473 5.68066 12.2399 5.68066 11.6482 5.98731L0.144214 11.8706C-0.152569 12.0172 0.0469464 12.4844 0.396465 12.3128ZM5.05642 25.0637L19.9308 25.0637C21.3367 25.0637 22.0478 24.3351 22.0478 22.9403L22.0478 10.642L21.532 10.3968L21.532 22.8474C21.532 24.0441 21.0199 24.5479 19.8238 24.5479L5.15438 24.5479C3.95897 24.5479 3.45594 24.0441 3.45594 22.8474L3.45594 10.3884L2.94011 10.647L2.94011 22.9403C2.94011 24.3448 3.65125 25.0637 5.05642 25.0637ZM9.04246 24.8226L15.8526 24.8226L15.8526 16.3459C15.8526 15.9373 15.5828 15.6766 15.1826 15.6766L9.7118 15.6766C9.31229 15.6766 9.04246 15.9373 9.04246 16.3459ZM27.4121 25.0637C27.5525 25.0637 27.6693 24.9462 27.6693 24.8051L27.6693 5.43986C27.9255 5.37423 28.3122 5.28976 28.8937 5.28976C30.5297 5.28976 31.5045 6.12941 33.2006 6.12941C33.7471 6.12941 34.1266 6.06876 34.4731 5.91046C34.74 5.75011 34.8815 5.6297 34.8815 5.41524L34.8815 0.906253C34.8815 0.711818 34.7889 0.61504 34.6239 0.61504C34.3925 0.61504 33.9412 0.840333 33.1518 0.840333C31.4856 0.840333 30.5179 0 28.8449 0C28.2237 0 27.8722 0.0983399 27.5905 0.218946C27.3061 0.322071 27.1542 0.499709 27.1542 0.694633L27.1542 24.8051C27.1542 24.9462 27.271 25.0637 27.4121 25.0637ZM0.672241 25.0637L31.0096 25.0637C31.1507 25.0637 31.2675 24.9462 31.2675 24.8051C31.2675 24.6647 31.1507 24.5479 31.0096 24.5479L0.672241 24.5479C0.531809 24.5479 0.414327 24.6647 0.414327 24.8051C0.414327 24.9462 0.531809 25.0637 0.672241 25.0637Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
