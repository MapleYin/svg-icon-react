import React from 'react'

export default function PuzzlepieceExtension({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.2859 22.8762' className={className}>
      <path
        d='M0.596387 20.2165C0.596387 21.7583 1.68496 22.8274 3.28399 22.8274L19.8771 22.8274C21.4671 22.8274 22.5557 21.7583 22.5557 20.2165L22.5557 14.6494C22.5557 14.2788 22.8677 14.0429 23.2306 14.3095C23.9482 14.8207 24.7195 15.6269 26.4922 15.6269C28.801 15.6269 30.2859 14.0445 30.2859 11.656C30.2859 9.26738 28.801 7.68506 26.4922 7.68506C24.7195 7.68506 23.9482 8.49121 23.2306 9.00175C22.8677 9.26904 22.5557 9.0331 22.5557 8.6625L22.5557 2.61085C22.5557 1.06904 21.4671 0 19.8771 0L3.28399 0C1.68496 0 0.596387 1.06904 0.596387 2.61085L0.596387 8.546C0.596387 9.16768 0.95801 9.44278 1.52334 9.44278C1.78116 9.44278 2.01173 9.33966 2.33448 9.0839C3.14249 8.42599 3.85469 7.97315 5.04805 7.97315C7.02695 7.97315 8.321 9.35118 8.321 11.4332C8.321 13.5146 7.02695 14.8933 5.04805 14.8933C3.85469 14.8933 3.14249 14.4313 2.33448 13.7825C2.01173 13.5177 1.78116 13.4139 1.52334 13.4139C0.95801 13.4139 0.596387 13.6897 0.596387 14.3106ZM1.1086 20.211L1.1086 14.2344C1.1086 13.8964 1.40157 13.8081 1.76515 14.0747C2.48145 14.5909 3.26612 15.4041 5.03536 15.4041C7.35323 15.4041 8.83819 13.8218 8.83819 11.4332C8.83819 9.03555 7.35323 7.4623 5.03536 7.4623C3.26612 7.4623 2.48145 8.26572 1.76515 8.78193C1.40157 9.04853 1.1086 8.96025 1.1086 8.63134L1.1086 2.61632C1.1086 1.35997 1.99474 0.503135 3.31397 0.503135L19.8479 0.503135C21.1664 0.503135 22.0532 1.35997 22.0532 2.61632L22.0532 8.60118C22.0532 9.22286 22.4058 9.66622 22.9711 9.66622C23.2282 9.66622 23.4595 9.56241 23.7906 9.30665C24.5902 8.65782 25.3018 8.19591 26.4958 8.19591C28.4747 8.19591 29.7687 9.57393 29.7687 11.656C29.7687 13.738 28.4747 15.116 26.4958 15.116C25.3018 15.116 24.5902 14.6541 23.7906 14.0053C23.4595 13.7495 23.2282 13.6457 22.9711 13.6457C22.4058 13.6457 22.0532 14.0891 22.0532 14.7107L22.0532 20.211C22.0532 21.4674 21.1664 22.3242 19.8479 22.3242L3.31397 22.3242C1.99474 22.3242 1.1086 21.4674 1.1086 20.211Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}