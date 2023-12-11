import React from 'react'

export default function CarSideHillUpFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.7675 26.0291' className={className}>
      <path
        d='M7.91191 6.90373L9.00117 7.53693C9.0709 7.3466 9.14199 7.16398 9.25283 7.00021C10.1692 5.39542 12.1772 4.85421 13.7826 5.76994C15.3692 6.71496 15.9105 8.69494 14.9843 10.2997C14.8825 10.4907 14.7801 10.6434 14.6581 10.7758L24.4378 16.4364C24.5166 16.2537 24.5968 16.09 24.6888 15.8989C25.6059 14.3123 27.6138 13.7711 29.2186 14.6973C30.824 15.613 31.3464 17.6216 30.4209 19.2271C30.3192 19.3902 30.2069 19.5421 30.085 19.6934L30.9866 20.2178C31.8861 20.7463 32.6905 20.5156 33.2386 19.5784L35.0555 16.4175C35.6287 15.4384 35.4839 14.5858 34.7473 13.8786L33.2929 12.4921C33.0433 10.8428 32.4884 8.08429 29.2675 6.22901L27.4876 5.19679C24.3861 3.39669 23.0898 3.01876 20.6342 3.1171L16.3168 3.27403L12.3024 1.57481C10.4457 0.777155 8.90352 1.20391 8.03613 2.72882L7.22578 4.14171C6.45996 5.4299 6.65371 6.16789 7.91191 6.90373ZM10.7918 10.939C12.0795 11.6721 13.6706 11.2606 14.4121 9.97287C15.1536 8.67609 14.7148 7.10314 13.4278 6.36164C12.159 5.62014 10.5665 6.04006 9.825 7.32775C9.0835 8.62453 9.52227 10.1975 10.7918 10.939ZM26.2466 19.8566C27.5154 20.5981 29.1072 20.1586 29.8487 18.8898C30.5896 17.6021 30.1515 16.0103 28.8826 15.2695C27.5949 14.5286 26.0025 14.9576 25.261 16.2356C24.5194 17.5233 24.9498 19.1151 26.2466 19.8566Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.0424742 8.57169C-0.0381911 8.69259-0.000690262 8.84758 0.127242 8.92756L29.5885 25.9378C29.6976 25.9996 29.8351 25.981 29.9151 25.8621C29.9866 25.7042 29.9394 25.5492 29.8212 25.4881L0.369043 8.47784C0.250877 8.41603 0.104292 8.45284 0.0424742 8.57169ZM4.8787 3.7879L6.7709 0.515239C6.94355 0.231935 6.77041 0.000194311 6.44033 0L3.08739 0.124809C2.72352 0.130962 2.53456 0.45938 2.71171 0.793952L4.27303 3.7588C4.41659 4.03302 4.72489 4.07121 4.8787 3.7879Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
