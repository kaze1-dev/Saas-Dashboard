import React from 'react'
import { Ellipsis, ScrollText } from 'lucide-react'

const Cards = () => {
   return (
      <div className='grid grid-cols-2 gap-4 cursor-default'>
         <div className='border border-neutral-800 rounded-xl border-solid p-3 hover:border-neutral-700 transition'>
            <div className='mb-4'>
               <div className='flex gap-4 items-center'>
                  <div className='rounded flex items-center justify-center p-1 bg-neutral-800'>
                     <ScrollText className='text-blue-600' />
                  </div>
                  <div>
                     <h4 className='text-neutral-400 font-bold'>
                        Total Revenue
                     </h4>
                  </div>
               </div>

            </div>

            <h1 className='text-2xl font-bold mb-2 text-neutral-200'>
               $145,000
            </h1>
            <h5 className='text-xs text-neutral-400'>
               From last week
            </h5>
         </div>

           <div className='border border-neutral-800 hover:border-neutral-700 transition rounded-xl border-solid p-3'>
            <div className='mb-4'>
               <div className='flex gap-4 items-center'>
                  <div className='rounded flex items-center justify-center p-1 bg-neutral-800'>
                     <ScrollText className='text-blue-600' />
                  </div>
                  <div>
                     <h4 className='text-neutral-400 font-bold'>
                        Total Revenue
                     </h4>
                  </div>
               </div>

            </div>

            <h1 className='text-2xl font-bold mb-2 text-neutral-200'>
               $145,000
            </h1>
            <h5 className='text-xs text-neutral-400'>
               From last week
            </h5>
         </div>

           <div className='border border-neutral-800 hover:border-neutral-700 transition rounded-xl border-solid p-3'>
            <div className='mb-4'>
               <div className='flex gap-4 items-center'>
                  <div className='rounded flex items-center justify-center p-1 bg-neutral-800'>
                     <ScrollText className='text-blue-600' />
                  </div>
                  <div>
                     <h4 className='text-neutral-400 font-bold'>
                        Total Revenue
                     </h4>
                  </div>
               </div>

            </div>

            <h1 className='text-2xl font-bold mb-2 text-neutral-200'>
               $145,000
            </h1>
            <h5 className='text-xs text-neutral-400'>
               From last week
            </h5>
         </div>

           <div className='border border-neutral-800 hover:border-neutral-700 transition rounded-xl border-solid p-3'>
            <div className='mb-4'>
               <div className='flex gap-4 items-center'>
                  <div className='rounded flex items-center justify-center p-1 bg-neutral-800'>
                     <ScrollText className='text-blue-600' />
                  </div>
                  <div>
                     <h4 className='text-neutral-400 font-bold'>
                        Total Revenue
                     </h4>
                  </div>
               </div>

            </div>

            <h1 className='text-2xl font-bold mb-2 text-neutral-200'>
               $145,000
            </h1>
            <h5 className='text-xs text-neutral-400'>
               From last week
            </h5>
         </div>
      </div>


   )
}

export default Cards