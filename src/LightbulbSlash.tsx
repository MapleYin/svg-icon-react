import React from 'react'

export function LightbulbSlash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.2271 29.9345' className={className}>
      <path
        d='M11.9329 28.2354C10.0252 28.2354 8.69746 27.3796 8.61865 26.0726L15.2472 26.0726C15.1663 27.3796 13.8399 28.2354 11.9329 28.2354ZM16.0058 24.4953C16.0058 24.758 15.812 24.9609 15.5492 24.9609L8.3166 24.9609C8.0538 24.9609 7.86005 24.758 7.86005 24.4953C7.86005 24.2415 8.0538 24.0387 8.3166 24.0387L15.5492 24.0387C15.812 24.0387 16.0058 24.2415 16.0058 24.4953ZM4.71651 6.36581C4.62027 6.78587 4.57071 7.21866 4.57071 7.65902C4.57071 11.4651 7.30479 13.0061 8.06045 22.4041L15.8054 22.4041C15.9419 20.7059 16.143 19.2643 16.3823 18.0265L16.8456 18.4896C16.6349 19.6106 16.4623 20.9089 16.3466 22.4146C16.3159 22.7632 16.1451 22.927 15.6938 22.927L8.17197 22.927C7.72002 22.927 7.54921 22.7632 7.51923 22.4146C6.81904 13.3163 4.04785 11.7932 4.04785 7.65902C4.04785 7.07346 4.12982 6.49693 4.29343 5.94292ZM19.8173 7.65902C19.8173 10.5005 18.5081 12.1086 17.4623 15.7907L17.0206 15.349C18.0591 11.7527 19.2944 10.2177 19.2944 7.65902C19.2944 4.03012 15.929 0.915474 11.9329 0.915474C9.36972 0.915474 7.06571 2.19692 5.74844 4.0768L5.37266 3.70101C6.77908 1.75178 9.17855 0.401696 11.9329 0.401696C16.3271 0.401696 19.8173 3.83783 19.8173 7.65902Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M21.5422 21.906C21.6478 22.011 21.8203 22.0103 21.9246 21.906C22.0107 21.8199 22.0289 21.637 21.9246 21.5327L1.37314 0.980509C1.30517 0.912538 1.10341 0.876894 0.999797 0.980509C0.886417 1.08481 0.8871 1.25024 0.999797 1.36294Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
