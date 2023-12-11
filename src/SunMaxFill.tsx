import React from 'react'

export default function SunMaxFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.8992 26.5434' className={className}>
      <path
        d='M13.2731 3.84356C13.4274 3.84356 13.5197 3.75059 13.5197 3.59697L13.5197 0.246587C13.5197 0.0929713 13.4274 0 13.2731 0C13.1195 0 13.0182 0.0929713 13.0182 0.246587L13.0182 3.59697C13.0182 3.75059 13.1195 3.84356 13.2731 3.84356ZM19.9248 6.61514C20.0409 6.69425 20.1637 6.69493 20.2805 6.61514L22.6555 4.24015C22.7346 4.12403 22.7346 4.00059 22.6555 3.87539C22.5394 3.79629 22.4075 3.79629 22.2914 3.87539L19.9248 6.25107C19.8366 6.36719 19.8366 6.48995 19.9248 6.61514ZM22.6859 13.2668C22.6859 13.4204 22.788 13.5127 22.9416 13.5127L26.2913 13.5127C26.4449 13.5127 26.5379 13.4204 26.5379 13.2668C26.5379 13.1132 26.4449 13.0202 26.2913 13.0202L22.9416 13.0202C22.788 13.0202 22.6859 13.1132 22.6859 13.2668ZM19.9248 19.9094C19.8366 20.0346 19.8366 20.1573 19.9248 20.2734L22.2914 22.6491C22.4075 22.7282 22.5394 22.7275 22.6555 22.6484C22.7346 22.5323 22.7346 22.4012 22.6555 22.2851L20.2889 19.9094C20.1637 19.8303 20.0409 19.8303 19.9248 19.9094ZM13.2731 22.681C13.1195 22.681 13.0182 22.7732 13.0182 22.9269L13.0182 26.2863C13.0182 26.4406 13.1195 26.5329 13.2731 26.5329C13.4274 26.5329 13.5197 26.4406 13.5197 26.2863L13.5197 22.9269C13.5197 22.7732 13.4274 22.681 13.2731 22.681ZM6.62217 19.9094C6.49698 19.8303 6.37353 19.8303 6.25742 19.9094L3.88242 22.2844C3.80332 22.4005 3.80332 22.5316 3.89082 22.6478C4.00694 22.7359 4.12969 22.7275 4.24581 22.6484L6.62149 20.2734C6.70059 20.1573 6.70059 20.0346 6.62217 19.9094ZM3.85128 13.2668C3.85128 13.1132 3.75899 13.0202 3.60537 13.0202L0.246587 13.0202C0.0929713 13.0202 0 13.1132 0 13.2668C0 13.4204 0.0929713 13.5127 0.246587 13.5127L3.60537 13.5127C3.75899 13.5127 3.85128 13.4204 3.85128 13.2668ZM6.62149 6.61514C6.70059 6.49063 6.70059 6.3665 6.62217 6.25107L4.24649 3.87539C4.13106 3.79697 3.99922 3.79629 3.88311 3.87539C3.804 4.00059 3.804 4.12403 3.88242 4.23946L6.25742 6.61514C6.37353 6.69425 6.50537 6.69425 6.62149 6.61514Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.2361 18.9928C16.3739 18.9928 18.9621 16.3955 18.9621 13.2668C18.9621 10.1283 16.3739 7.53105 13.2361 7.53105C10.0983 7.53105 7.50176 10.1283 7.50176 13.2668C7.50176 16.3955 10.0983 18.9928 13.2361 18.9928Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
