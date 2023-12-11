import React from 'react'

export default function ArrowshapeBounceForwardFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.2507 22.4164' className={className}>
      <path
        d='M11.2269 22.4164C11.3882 22.4164 11.5645 22.2994 11.6083 22.1506C12.8833 17.3249 15.2999 15.564 20.053 15.564L21.1378 15.5919L21.1378 21.088C21.1378 21.5416 21.3668 21.8998 21.8483 21.8998C22.1688 21.8998 22.4462 21.7102 22.6466 21.5216L32.4965 12.3939C33.1594 11.77 33.2507 11.457 33.2507 11.1293C33.2507 10.8009 33.1775 10.4886 32.4965 9.86407L22.6466 0.732717C22.4519 0.540038 22.1702 0.358788 21.8406 0.358788C21.3668 0.358788 21.1378 0.712013 21.1378 1.16563L21.1378 6.80566L20.5369 6.80566C15.0167 6.80566 11.9752 9.5915 11.2394 16.3344L11.2221 16.3344C10.4912 9.63681 7.60771 6.80566 2.02745 6.80566C1.85714 6.80566 1.68067 6.80566 1.55343 6.80566C0.782423 6.80566 0.282519 7.23857 0.282519 8.12881L0.282519 14.1633C0.282519 15.1009 0.781739 15.5401 1.56544 15.5401C1.82686 15.5401 2.07647 15.5401 2.3379 15.5401C7.10234 15.5401 9.52441 17.2365 10.8468 22.1499C10.8899 22.2994 11.0746 22.4164 11.2269 22.4164Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
