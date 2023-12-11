import React from 'react'

export default function TablecellsBadgeEllipsis({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.1258 26.517' className={className}>
      <path
        d='M34.9047 5.45772L34.9047 12.8408L34.3925 12.8147L34.3925 9.93371L20.6331 9.93371L20.6331 16.5658L28.1868 16.5658C28.0953 16.7302 28.0157 16.9014 27.946 17.0774L20.6331 17.0774L20.6331 23.7179L28.7768 23.7179C28.902 23.9 29.0416 24.0708 29.1946 24.2294L9.03194 24.2294C6.95743 24.2294 5.85069 23.124 5.85069 21.0418L5.85069 5.45772C5.85069 3.3755 6.95743 2.26944 9.03194 2.26944L31.7228 2.26944C33.798 2.26944 34.9047 3.41251 34.9047 5.45772ZM6.36222 17.0774L6.36222 21.0168C6.36222 22.7954 7.27697 23.7179 9.06192 23.7179L20.1216 23.7179L20.1216 17.0774ZM6.36222 9.93371L6.36222 16.5658L20.1216 16.5658L20.1216 9.93371ZM6.36222 5.48204L6.36222 9.42217L20.1216 9.42217L20.1216 2.78097L9.06192 2.78097C7.27697 2.78097 6.36222 3.70412 6.36222 5.48204ZM20.6331 2.78097L20.6331 9.42217L34.3925 9.42217L34.3925 5.48204C34.3925 3.70412 33.4037 2.78097 31.6935 2.78097Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M40.2354 19.6631C40.2354 22.9469 37.5361 25.6266 34.2719 25.6266C31.0147 25.6266 28.3168 22.9399 28.3168 19.6631C28.3168 16.4052 31.0147 13.708 34.2719 13.708C37.557 13.708 40.2354 16.387 40.2354 19.6631ZM30.388 19.6442C30.388 20.071 30.7353 20.419 31.1432 20.419C31.5427 20.419 31.8899 20.071 31.9088 19.6442C31.9276 19.2552 31.5615 18.8975 31.1432 18.8975C30.7353 18.8975 30.388 19.2454 30.388 19.6442ZM33.5621 19.6442C33.5621 20.071 33.901 20.419 34.3089 20.419C34.7168 20.419 35.0648 20.071 35.0836 19.6442C35.0934 19.2552 34.7357 18.8975 34.3089 18.8975C33.901 18.8975 33.5621 19.2454 33.5621 19.6442ZM36.6441 19.6442C36.6441 20.071 36.9913 20.419 37.3908 20.419C37.7987 20.419 38.146 20.071 38.1649 19.6442C38.183 19.2552 37.8169 18.8975 37.3908 18.8975C36.9913 18.8975 36.6441 19.2454 36.6441 19.6442Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
