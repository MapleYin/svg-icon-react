import React from 'react'

export function LightbulbMaxFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8478 40.5678' className={className}>
      <path
        d='M3.19229 13.0034C3.30889 13.0034 3.46749 12.8741 3.46749 12.7575C3.46749 12.6221 3.30889 12.4739 3.19229 12.4739L0.245904 12.4739C0.129299 12.4739 0 12.6228 0 12.7575C0 12.8735 0.129299 13.0034 0.245904 13.0034ZM5.79766 6.21759C5.88584 6.29601 6.04493 6.29669 6.16104 6.21759C6.27784 6.10987 6.27716 5.95147 6.16104 5.82627L4.10284 3.75762C4.00626 3.64151 3.83741 3.64151 3.73877 3.75762C3.64151 3.85626 3.64151 4.00489 3.73877 4.12101ZM12.4746 3.22022C12.4746 3.3459 12.5851 3.4668 12.7198 3.4668C12.856 3.4668 13.0034 3.3459 13.0034 3.22022L13.0034 0.282915C13.0034 0.148147 12.8644 0 12.7198 0C12.5851 0 12.4746 0.148147 12.4746 0.282915ZM19.2695 5.82627C19.1534 5.95147 19.1528 6.10987 19.2695 6.21759C19.3675 6.31554 19.5538 6.31485 19.6329 6.21759L21.7107 4.12101C21.8268 4.00489 21.8268 3.85626 21.7107 3.75762C21.612 3.64151 21.4634 3.64151 21.3382 3.75762ZM25.2029 13.0034C25.3195 13.0034 25.4865 12.8735 25.4865 12.7575C25.4865 12.6228 25.3195 12.4739 25.2029 12.4739L22.2565 12.4739C22.1399 12.4739 22.0099 12.6221 22.0099 12.7575C22.0099 12.8741 22.1399 13.0034 22.2565 13.0034Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.7198 5.71837C8.72765 5.71837 5.55352 8.85929 5.55352 12.326C5.55352 16.0771 8.0756 17.4669 8.70812 25.6879C8.7381 26.0177 8.89913 26.1626 9.31271 26.1626L16.1367 26.1626C16.5503 26.1626 16.7113 26.0177 16.7413 25.6879C17.3738 17.4669 19.8784 16.0771 19.8784 12.326C19.8784 8.85929 16.7218 5.71837 12.7198 5.71837ZM9.4671 28.0312L16.0103 28.0312C16.2731 28.0312 16.4752 27.829 16.4752 27.5753C16.4752 27.3125 16.2731 27.1111 16.0103 27.1111L9.4671 27.1111C9.21339 27.1111 9.01192 27.3125 9.01192 27.5753C9.01192 27.829 9.21339 28.0312 9.4671 28.0312ZM12.7387 31.0182C14.4838 31.0182 15.7055 30.191 15.7752 28.9796L9.71124 28.9796C9.7712 30.191 11.002 31.0182 12.7387 31.0182Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
