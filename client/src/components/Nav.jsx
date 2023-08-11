import React from 'react'

const Nav = () => {
  return (
    <nav
        className='left-0 top-0 w-full py-10 px-[20rem] shadow-lg mb-4'
    >
        <div
            className='flex justify-between items-center w-full'
        >
            <h1
                className='text-2xl cursor-pointer font-bmont text-dblack'
            >
                <a href="/">The Stoic Youth</a>
            </h1>
            <div
                className='h-full bg-dgold py-2 px-4 rounded-md cursor-pointer'
            >
                <h2 className='text-sm text-dblack font-rob'>
                    SUBSCRIBE
                </h2>
            </div>
        </div>
    </nav>
  )
}

export default Nav