import React from 'react'

export default function HareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 37.1759 28.4061' className={className}>
      <path
        d='M19.2879 24.7918C20.0844 24.7918 21.0675 24.3907 22.4979 24.3907C23.9925 24.3907 24.515 24.7918 25.7364 24.7918C27.6017 24.7918 28.6341 24.0762 28.6341 23.1629C28.6341 21.1856 25.9084 19.7292 22.4783 19.7292C20.7416 19.7292 19.9024 19.8861 18.949 20.1226L17.6838 17.2469C16.281 14.0295 14.0033 12.4186 11.2051 12.4186L9.78496 12.4186C9.35186 12.4186 9.13926 12.24 9.13926 11.8998C9.13926 11.2659 10.1108 11.1167 11.097 11.1167C14.6229 11.1167 17.1813 13.0467 18.7597 16.9262L19.6463 19.081C20.4498 18.887 21.3866 18.8082 22.3695 18.8082C23.0754 18.8082 23.4454 18.857 24.1953 18.9547C24.9298 18.4071 25.7438 17.692 26.8017 16.4537C28.1618 17.8626 30.2893 18.6706 32.1994 18.6706C35.3813 18.6706 36.8146 17.8907 36.8146 15.1619C36.8146 10.8563 33.2618 7.73946 30.1251 8.1543L27.05 3.59785C25.4055 1.18164 23.0372 0 20.7359 0C18.9182 0 16.5707 0.991114 16.5707 2.34697C16.5707 3.3249 18.3631 4.42803 19.9912 5.33965L27.3204 9.44151C26.0731 10.6973 25.3809 11.1097 24.7649 11.1097C24 11.1097 23.3343 10.9016 21.8576 9.98496C18.1085 7.88691 15.1845 5.62041 11.2435 5.62041C7.09033 5.62041 3.99824 7.87607 2.34512 12.2039C0.997461 12.2507 0 13.0374 0 14.3369C0 15.7829 1.1251 16.608 2.73506 16.6639C4.40547 19.0946 7.16465 20.2674 10.9323 20.2674C11.0899 20.2674 11.2664 20.2667 11.4436 20.2667L16.3296 23.7591C17.2953 24.44 18.3399 24.7918 19.2879 24.7918ZM9.69747 25.1712C11.9636 25.1712 13.494 24.868 14.8614 24.0651L10.9182 21.1547C10.7424 21.1645 10.5094 21.184 10.2366 21.184C9.84141 21.184 8.39757 21.0075 7.65303 21.0075C6.29288 21.0075 5.7087 21.64 5.7087 22.5703C5.7087 24.1403 7.09571 25.1712 9.69747 25.1712ZM31.6487 14.2806C31.1927 14.2806 30.8168 13.8852 30.8168 13.4298C30.8168 12.9549 31.2115 12.5672 31.6494 12.5672C32.1055 12.5672 32.4814 12.9249 32.4814 13.3803C32.4814 13.8545 32.0866 14.2806 31.6487 14.2806Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
