import React from 'react'

export default function Brazilianrealsign({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.3386 28.2607' className={className}>
      <path
        d='M0.22276 25.3847C0.336435 25.3847 0.44552 25.2749 0.44552 25.1319L0.44552 15.6034L4.66944 15.6034C5.00597 15.6034 5.5087 15.5853 5.82569 15.5566L11.7323 25.1754C11.8053 25.2997 11.8685 25.3854 12.0103 25.3854C12.1226 25.3854 12.1967 25.3126 12.1967 25.1946C12.1967 25.1244 12.1835 25.064 12.146 25.0092L6.29484 15.4998C9.73224 14.9456 11.7114 12.7751 11.7114 9.5377C11.7114 5.69024 9.07423 3.48223 4.64542 3.48223L0.344927 3.48223C0.0993186 3.48223 0 3.60108 0 3.83829L0 25.1319C0 25.2749 0.0993186 25.3847 0.22276 25.3847ZM0.44552 15.1729L0.44552 3.92247L4.67442 3.92247C8.79532 3.92247 11.2793 5.92481 11.2793 9.52364C11.2793 13.0421 8.77217 15.1729 4.66173 15.1729ZM20.4726 24.3248C24.3252 24.3248 26.9773 22.1051 26.9773 19.0955C26.9773 16.5046 25.3291 14.9305 21.7142 14.0615L19.6977 13.5607C16.4 12.7611 14.8342 11.3824 14.8342 9.25088C14.8342 6.62364 17.4128 4.74689 20.4265 4.74689C23.4652 4.74689 25.8924 6.54249 26.1305 9.00176C26.1253 9.17061 26.2191 9.24288 26.3539 9.24288C26.5207 9.24288 26.5907 9.17012 26.5907 8.95244C26.5907 8.83184 26.5712 8.67285 26.5405 8.52158C26.0777 6.02334 23.5422 4.26074 20.4265 4.26074C17.1733 4.26074 14.39 6.37539 14.39 9.24092C14.39 11.6127 16.0375 13.1505 19.5668 14.0433L21.5924 14.5531C25.0461 15.4225 26.5331 16.7775 26.5331 19.0772C26.5331 21.8205 23.9665 23.8296 20.4928 23.8296C17.1549 23.8296 14.6176 21.8462 14.3668 19.0245C14.3734 18.8389 14.2872 18.7457 14.1434 18.7457C13.9954 18.7457 13.8968 18.875 13.8968 19.0368C13.8968 19.1958 13.9079 19.3359 13.9386 19.4858C14.4217 22.3561 17.0217 24.3248 20.4726 24.3248ZM20.451 28.2607C20.5921 28.2607 20.7082 28.1356 20.7082 27.9944L20.7082 1.01914C20.7082 0.86963 20.5921 0.753515 20.451 0.753515C20.3015 0.753515 20.1854 0.86963 20.1854 1.01914L20.1854 27.9944C20.1854 28.1356 20.3015 28.2607 20.451 28.2607Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}