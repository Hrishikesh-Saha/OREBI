import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`px-3 md:px-0 max-w-[1600px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
