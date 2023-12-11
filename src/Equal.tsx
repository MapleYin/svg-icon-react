import React from 'react'

export default function Equal({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.556 8.23693' className={className}>
      <path
        d='M0.248638 0.544054L15.9467 0.544054C16.0821 0.544054 16.1946 0.432235 16.1946 0.296099C16.1946 0.15928 16.0821 0.0474608 15.9467 0.0474608L0.248638 0.0474608C0.112503 0.0474608 0 0.15928 0 0.296099C0 0.432235 0.112503 0.544054 0.248638 0.544054ZM0.248638 8.23693L15.9467 8.23693C16.0821 8.23693 16.1946 8.12511 16.1946 7.98829C16.1946 7.86123 16.0821 7.74942 15.9467 7.74942L0.248638 7.74942C0.112503 7.74942 0 7.86123 0 7.98829C0 8.12511 0.112503 8.23693 0.248638 8.23693Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}