import React from 'react'

export default function SportscourtFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.8174 22.0158' className={className}>
      <path
        d='M0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158L15.2934 22.0158L15.2934 16.5704C12.368 16.4207 10.0232 14.0057 10.0232 11.0316C10.0232 8.06465 12.368 5.64893 15.2934 5.50127L15.2934 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 5.3416L4.58799 5.3416C6.06445 5.3416 6.83779 6.11494 6.83779 7.59981L6.83779 14.4712C6.83779 15.9477 6.06445 16.721 4.58799 16.721L0 16.721ZM0 16.1868L4.54961 16.1868C5.6957 16.1868 6.30361 15.588 6.30361 14.4412L6.30361 7.63047C6.30361 6.4837 5.6957 5.87579 4.54961 5.87579L0 5.87579ZM10.5882 11.031C10.5882 13.6976 12.665 15.8815 15.2934 16.0299L15.2934 6.04249C12.665 6.18175 10.5882 8.37413 10.5882 11.031ZM15.8276 22.0158L28.2741 22.0158C30.3493 22.0158 31.4561 20.8734 31.4561 18.8282L31.4561 16.721L26.8772 16.721C25.3916 16.721 24.6274 15.9477 24.6274 14.4712L24.6274 7.59981C24.6274 6.11494 25.3916 5.3416 26.8772 5.3416L31.4561 5.3416L31.4561 3.24414C31.4561 1.19893 30.3493 0.0565428 28.2741 0.0565428L15.8276 0.0565428L15.8276 5.50264C18.7607 5.63487 21.0866 8.06035 21.088 11.0316C21.081 14.0057 18.7361 16.4291 15.8276 16.5704ZM15.8276 16.0299C18.456 15.8815 20.5223 13.6976 20.523 11.031C20.5236 8.37413 18.4476 6.18106 15.8276 6.04249ZM25.1615 14.4412C25.1615 15.588 25.7604 16.1868 26.9065 16.1868L31.4561 16.1868L31.4561 5.87579L26.9065 5.87579C25.7604 5.87579 25.1615 6.4837 25.1615 7.63047Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}