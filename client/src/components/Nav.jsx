import React from 'react'

const Nav = () => {
  return (
    <nav
        className='absolute left-0 top-0 w-full px-[20rem]
        py-8'
    >
        <div
            className='w-full flex justify-between items-center'
        >
            <h1
                className='text-4xl cursor-pointer'
            >
                The Stoic Youth
            </h1>
            <div>
                <button className='' >SUBSCRIBE</button>
            </div>
        </div>
    </nav>
  )
}

export default Nav