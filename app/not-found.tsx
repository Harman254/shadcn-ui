import React from 'react'
import Link from 'next/link'

const notfound = () => {
  return (
    <div className='h-screen flex flex-col'>
        <h1 className='text-4xl text-center font-bold'>404 - Page Not Found</h1>
        <p className='text-center text-2xl font-semibold'>The page you are looking for does not exist😰</p>
        <p className='text-center text-xl font-semibold'>
          Please check the URL or use the links below to explore our amazing
          application
        </p>
        
        <div className=' flex justify-center items-center gap-2 m-5'>
          <Link className='px-4 py-2 text-xl font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800    ' href='/'>Homepage</Link>
          <Link className='px-4 py-2 text-xl font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800    ' href='/latest'>Latest Products</Link>
          <Link className='px-4 py-2 text-xl font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800    ' href='/contact'>Contact Us</Link>
          
        </div>
    </div>
  )
}
        
  

export default notfound