import React from 'react'

export default function Calendar({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.954 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L21.4107 22.0158C23.4859 22.0158 24.5927 20.8734 24.5927 18.8282L24.5927 3.24414C24.5927 1.19893 23.4859 0.0565428 21.4107 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.23526 21.5043C1.44034 21.5043 0.511533 20.5678 0.511533 18.7792L0.511533 8.03701C0.511533 6.24775 1.44034 5.321 3.23526 5.321L21.3651 5.321C23.0867 5.321 24.0805 6.24775 24.0805 8.03701L24.0805 18.7792C24.0805 20.5678 23.0867 21.5043 21.3651 21.5043ZM9.70166 9.67696L10.4439 9.67696C10.7366 9.67696 10.7539 9.65967 10.7539 9.37666L10.7539 8.64424C10.7539 8.37031 10.7366 8.34463 10.4439 8.34463L9.70166 8.34463C9.40957 8.34463 9.39229 8.37031 9.39229 8.64424L9.39229 9.37666C9.39229 9.65967 9.40957 9.67696 9.70166 9.67696ZM14.1677 9.67696L14.9099 9.67696C15.202 9.67696 15.2192 9.65967 15.2192 9.37666L15.2192 8.64424C15.2192 8.37031 15.202 8.34463 14.9099 8.34463L14.1677 8.34463C13.8749 8.34463 13.8485 8.37031 13.8485 8.64424L13.8485 9.37666C13.8485 9.65967 13.8749 9.67696 14.1677 9.67696ZM18.633 9.67696L19.3661 9.67696C19.6582 9.67696 19.6853 9.65967 19.6853 9.37666L19.6853 8.64424C19.6853 8.37031 19.6582 8.34463 19.3661 8.34463L18.633 8.34463C18.3409 8.34463 18.3139 8.37031 18.3139 8.64424L18.3139 9.37666C18.3139 9.65967 18.3409 9.67696 18.633 9.67696ZM5.23633 14.0739L5.97852 14.0739C6.27061 14.0739 6.28858 14.0573 6.28858 13.7834L6.28858 13.0412C6.28858 12.768 6.27061 12.7416 5.97852 12.7416L5.23633 12.7416C4.94424 12.7416 4.92627 12.768 4.92627 13.0412L4.92627 13.7834C4.92627 14.0573 4.94424 14.0739 5.23633 14.0739ZM9.70166 14.0739L10.4439 14.0739C10.7366 14.0739 10.7539 14.0573 10.7539 13.7834L10.7539 13.0412C10.7539 12.768 10.7366 12.7416 10.4439 12.7416L9.70166 12.7416C9.40957 12.7416 9.39229 12.768 9.39229 13.0412L9.39229 13.7834C9.39229 14.0573 9.40957 14.0739 9.70166 14.0739ZM14.1677 14.0739L14.9099 14.0739C15.202 14.0739 15.2192 14.0573 15.2192 13.7834L15.2192 13.0412C15.2192 12.768 15.202 12.7416 14.9099 12.7416L14.1677 12.7416C13.8749 12.7416 13.8485 12.768 13.8485 13.0412L13.8485 13.7834C13.8485 14.0573 13.8749 14.0739 14.1677 14.0739ZM18.633 14.0739L19.3661 14.0739C19.6582 14.0739 19.6853 14.0573 19.6853 13.7834L19.6853 13.0412C19.6853 12.768 19.6582 12.7416 19.3661 12.7416L18.633 12.7416C18.3409 12.7416 18.3139 12.768 18.3139 13.0412L18.3139 13.7834C18.3139 14.0573 18.3409 14.0739 18.633 14.0739ZM5.23633 18.4807L5.97852 18.4807C6.27061 18.4807 6.28858 18.455 6.28858 18.1811L6.28858 17.4389C6.28858 17.1649 6.27061 17.1393 5.97852 17.1393L5.23633 17.1393C4.94424 17.1393 4.92627 17.1649 4.92627 17.4389L4.92627 18.1811C4.92627 18.455 4.94424 18.4807 5.23633 18.4807ZM9.70166 18.4807L10.4439 18.4807C10.7366 18.4807 10.7539 18.455 10.7539 18.1811L10.7539 17.4389C10.7539 17.1649 10.7366 17.1393 10.4439 17.1393L9.70166 17.1393C9.40957 17.1393 9.39229 17.1649 9.39229 17.4389L9.39229 18.1811C9.39229 18.455 9.40957 18.4807 9.70166 18.4807ZM14.1677 18.4807L14.9099 18.4807C15.202 18.4807 15.2192 18.455 15.2192 18.1811L15.2192 17.4389C15.2192 17.1649 15.202 17.1393 14.9099 17.1393L14.1677 17.1393C13.8749 17.1393 13.8485 17.1649 13.8485 17.4389L13.8485 18.1811C13.8485 18.455 13.8749 18.4807 14.1677 18.4807Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
