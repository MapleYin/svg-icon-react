import React from 'react'

export default function MacbookAndIpad({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.9389 21.4795' className={className}>
      <path
        d='M30.8115 3.91241L30.8115 5.40323L30.3083 5.40323L30.3083 3.89005C30.3083 2.66466 29.6872 2.07082 28.4618 2.07082L7.11574 2.07082C5.89036 2.07082 5.27835 2.66466 5.27835 3.89005L5.27835 18.4683L15.491 18.4683L15.491 18.5679C15.491 19.0931 15.5859 19.5569 15.7665 19.9488L2.0213 19.9488C1.58087 19.9488 1.28624 19.6451 1.28624 19.204C1.28624 18.772 1.58087 18.4683 2.0213 18.4683L4.76613 18.4683L4.76613 3.91241C4.76613 2.35714 5.55265 1.55928 7.12062 1.55928L28.466 1.55928C30.0206 1.55928 30.8115 2.35714 30.8115 3.91241Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.4313 20.5891L32.9987 20.5891C34.3121 20.5891 35.0492 19.8528 35.0492 18.5679L35.0492 8.33371C35.0492 7.02999 34.3121 6.30274 32.9987 6.30274L18.4313 6.30274C17.1178 6.30274 16.3815 7.02091 16.3815 8.33371L16.3815 18.5679C16.3815 19.8898 17.1178 20.5891 18.4313 20.5891ZM18.4501 20.0828C17.4139 20.0828 16.915 19.5866 16.915 18.5379L16.915 8.363C16.915 7.31496 17.4139 6.81808 18.4501 6.81808L32.9791 6.81808C33.9693 6.81808 34.515 7.31496 34.515 8.363L34.515 18.5379C34.515 19.5866 33.9693 20.0828 32.9791 20.0828ZM22.2556 19.4857L29.1743 19.4857C29.3318 19.4857 29.4746 19.3525 29.4746 19.1944C29.4746 19.0363 29.3318 18.8941 29.1743 18.8941L22.2556 18.8941C22.0891 18.8941 21.9553 19.0363 21.9553 19.1944C21.9553 19.3525 22.0891 19.4857 22.2556 19.4857Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
