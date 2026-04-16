import React from 'react'

const Navbar = () => {
   return (
      <div className='ml-3'>
         <nav className='bg-neutral-950 w-56 justify-between px-5 fixed top-3 bottom-3 flex flex-col py-5 font-sans cursor-default rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all'>
            <div className='flex flex-col'>
               <div className='flex gap-2 bg items-center mb-10 cursor-pointer'>
                  <div className='text-2xl font-mono font-semibold'>
                     <div className='bg-neutral-800 px-2.5 rounded relative text-neutral-300'>
                        <div>#</div>
                        <span className='absolute bg-green-500 border-full border-white w-2 h-2 rounded-full bottom-0 right-0'></span>

                     </div>
                  </div>
                  <div className='flex flex-col'>
                     <div className='text-xl  font-semibold text-neutral-300'>
                        Profile
                     </div>
                     <div className='text-neutral-500 text-xs'>
                        example123@gmail.com
                     </div>
                  </div>
               </div>
               <div className='bg-neutral-900 px-2 text-medium rounded-xl py-2 text-neutral-400 text-sm'>
                  Home
               </div>
               <div className='text-sm px-2 text-medium py-2 rounded-xl text-neutral-400'>
                  Analytics
               </div>
               <div className='text-sm px-2 py-2 rounded-xl text-neutral-400'>
                  Subscription
               </div>
            </div>
            <div className='flex flex-col gap-2 text-sm'>
               <div className='p-2 text-neutral-400 rounded-xl'>
                  Settings
               </div>
               <div className='p-2 text-neutral-400 rounded-xl'>
                  Help center
               </div>
            </div>

         </nav>
      </div>
   )
}

export default Navbar