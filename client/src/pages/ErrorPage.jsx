import React from 'react'
import {Link} from 'react-router-dom'
const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className='center'>
        <Link to='/' className='btn primary'>
        <h2>Page Not Found</h2>P
        </Link>
      </div>
    </section>
  )
}

export default ErrorPage
