import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({href, src, alt, className, imageClass}) => {
  return (

    <Link to={href} className={className}>
        <picture >
            <img className={`block ${imageClass}`} src={src} alt={alt} />
        </picture>
    </Link>

  )
}

export default Image
