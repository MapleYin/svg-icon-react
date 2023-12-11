import React from 'react'

export default function Centsign({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.1316 22.3774' className={className}>
      <path
        d='M7.23965 19.4897C10.3963 19.4897 12.8802 17.7934 13.6887 15.136C13.757 14.9219 13.7611 14.8069 13.7611 14.6899C13.7611 14.5615 13.68 14.4915 13.5509 14.4915C13.3371 14.4915 13.3368 14.621 13.2323 14.9249C12.4538 17.3943 10.1727 19.041 7.24034 19.041C3.08126 19.041 0.4755 16.0052 0.4755 11.1838C0.4755 6.36719 3.09806 3.30773 7.23897 3.30773C10.1713 3.30773 12.4427 4.98233 13.203 7.34981C13.3166 7.75704 13.3196 7.88516 13.5341 7.88516C13.6527 7.88516 13.7689 7.82354 13.7689 7.68672C13.7689 7.56973 13.7368 7.45478 13.6782 7.23086C12.8509 4.61123 10.3572 2.85 7.23829 2.85C2.80371 2.85 0 6.10108 0 11.1838C0 16.2524 2.78623 19.4897 7.23965 19.4897ZM7.17832 22.3403C7.3335 22.3403 7.47413 22.2297 7.47413 22.0725L7.47413 0.276957C7.47413 0.110646 7.3335 0 7.17832 0C7.01338 0 6.92861 0.129493 6.92861 0.276957L6.92861 22.0725C6.92861 22.2199 7.01338 22.3403 7.17832 22.3403Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}