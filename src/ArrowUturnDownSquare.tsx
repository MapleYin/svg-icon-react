import React from 'react'

export default function ArrowUturnDownSquare({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.2348' className={className}>
      <path
        d='M3.18125 21.96L18.778 21.96C20.8532 21.96 21.96 20.8169 21.96 18.7724L21.96 3.1876C21.96 1.14307 20.8532 0 18.778 0L3.18125 0C1.10674 0 0 1.11514 0 3.1876L0 18.7724C0 20.8539 1.10674 21.96 3.18125 21.96ZM3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474L0.511533 3.2126C0.511533 1.43399 1.42628 0.511533 3.21124 0.511533L18.7487 0.511533C20.459 0.511533 21.4484 1.43399 21.4484 3.2126L21.4484 18.7474C21.4484 20.526 20.459 21.4484 18.7487 21.4484Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.5164 5.26387C10.0324 5.26387 8.38017 7.04561 8.38017 9.73711L8.38017 14.9977L8.41084 16.2984L7.95156 15.7444L5.32852 13.1005C5.25537 13.0357 5.18721 12.9744 5.08906 12.9744C4.93047 12.9744 4.80664 13.0794 4.80664 13.2562C4.80664 13.3536 4.84843 13.4211 4.90547 13.4768L8.31299 16.8173C8.39863 16.9029 8.51494 16.9656 8.64238 16.9656C8.77891 16.9656 8.89453 16.9029 8.98018 16.8173L12.3897 13.4761C12.437 13.4204 12.4879 13.3529 12.4879 13.2555C12.4879 13.0794 12.3641 12.9744 12.2055 12.9744C12.0996 12.9744 12.0398 13.0344 11.966 13.1089L9.35655 15.7225L8.88301 16.2984L8.91368 14.9977L8.91368 9.73711C8.91368 7.35714 10.365 5.78399 12.52 5.78399C14.6777 5.78399 16.1107 7.36417 16.1107 9.7378C16.1107 10.142 16.1107 11.796 16.1107 11.8637C16.1107 12.023 16.2207 12.1202 16.3736 12.1202C16.5266 12.1202 16.6365 12.023 16.6365 11.8623C16.6365 11.803 16.6365 10.142 16.6365 9.7378C16.6365 7.03721 14.9913 5.26387 12.5164 5.26387Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
