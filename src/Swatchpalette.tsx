import React from 'react'

export function Swatchpalette({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.8023 27.5818' className={className}>
      <path
        d='M23.6259 9.84541L26.0269 14.0126C26.8189 15.3763 26.4659 16.7746 25.1009 17.5673L9.90089 26.3336C9.80061 26.3918 9.70027 26.4437 9.60018 26.4874C9.7435 26.2694 9.85134 26.0212 9.91854 25.7452L18.8268 20.5782L15.9181 15.5593L16.2211 15.0353L19.273 20.3194L24.8355 17.0931C25.9171 16.4699 26.2269 15.3828 25.5765 14.2537L23.158 10.0872C22.5342 9.01261 21.4423 8.68468 20.3607 9.31554L19.1086 10.0417L19.6144 9.16685L20.095 8.88965C21.4601 8.09765 22.8402 8.47627 23.6259 9.84541Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.2821 1.84072L19.4312 4.24238C20.8151 5.04483 21.2286 6.37618 20.4178 7.77755L11.1454 23.8132C10.8361 24.3482 10.4486 24.7267 10.0104 24.945L10.0104 24.3581C10.2763 24.1804 10.5125 23.9214 10.7075 23.5841L11.9866 21.3656L10.0104 20.2225L10.0104 19.6263L12.2461 20.9155L16.4987 13.5394L10.0104 9.77876L10.0104 9.20992L16.7503 13.103L19.973 7.51328C20.6234 6.40235 20.3073 5.33341 19.1789 4.6921L15.0229 2.29181C13.9196 1.64913 12.8375 1.9087 12.1962 3.01895L10.0104 6.81011L10.0104 5.81438L11.759 2.79053C12.5685 1.39121 13.9137 1.05576 15.2821 1.84072Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M2.59854 27.5442L7.3921 27.5442C8.99493 27.5442 10.0104 26.5483 10.0104 24.9838L10.0104 2.56944C10.0104 1.00498 8.99493 0 7.3921 0L2.59854 0C1.00908 0 0 1.00498 0 2.56944L0 24.9838C0 26.5483 1.00908 27.5442 2.59854 27.5442ZM2.59991 27.0417C1.30548 27.0417 0.511533 26.2512 0.511533 24.9874L0.511533 2.55674C0.511533 1.30206 1.30548 0.511533 2.59991 0.511533L7.39981 0.511533C8.69082 0.511533 9.49883 1.30206 9.49883 2.55674L9.49883 24.9874C9.49883 26.2512 8.69082 27.0417 7.39981 27.0417ZM0.326274 9.51612L9.70294 9.51612L9.70294 9.00459L0.326274 9.00459ZM0.326274 18.5389L9.70294 18.5389L9.70294 18.0273L0.326274 18.0273Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
