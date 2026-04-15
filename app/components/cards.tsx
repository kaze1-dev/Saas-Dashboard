import React from 'react'
import { ArrowDown, ArrowUp, Ellipsis, ScrollText } from 'lucide-react'
import Graph from './graphs/green'
import Red from './graphs/red'

const Cards = () => {
   return (
      <div className='grid grid-cols-2 gap-4 cursor-default items-center'>
         <div className='border border-neutral-800 rounded-xl border-solid p-4 hover:border-neutral-700 transition flex gap-15 items-center'>
            <div className=''>
               <div className='mb-4'>
                  <div className='flex gap-4 items-center'>
                     <div className='rounded-lg flex items-center justify-center p-1 bg-neutral-900'>
                        <ScrollText className='text-blue-600' />
                     </div>
                     <div>
                        <h4 className='text-neutral-400 font-bold'>
                           Total Revenue
                        </h4>
                     </div>
                  </div>

               </div>
               <div className='flex gap-4 items-center'>
                  <h1 className='text-2xl font-bold text-neutral-300'>
                     $145,000
                  </h1>
                  <div className='flex bg-blue-500/10 transition rounded-lg px-3 py-0.5 items-center gap-1'>
                     <div className=''>
                        <ArrowUp className='w-4 text-blue-600  font-bold' />
                     </div>
                     <div className='text-xs text-blue-600 font-sans font-bold'>
                        10%
                     </div>
                  </div>
               </div>

               <h5 className='text-xs text-neutral-400 mt-4'>
                  From last week
               </h5>
            </div>
            <Graph />
         </div>

         <div className='border border-neutral-800 rounded-xl border-solid p-4 hover:border-neutral-700 transition flex gap-15 items-center'>
            <div className=''>
               <div className='mb-4'>
                  <div className='flex gap-4 items-center'>
                     <div className='rounded-lg flex items-center justify-center p-1 bg-neutral-900'>
                        <ScrollText className='text-blue-600' />
                     </div>
                     <div>
                        <h4 className='text-neutral-400 font-bold'>
                           Total Revenue
                        </h4>
                     </div>
                  </div>

               </div>
               <div className='flex gap-4 items-center'>
                  <h1 className='text-2xl font-bold text-neutral-300'>
                     $145,000
                  </h1>
                  <div className='flex bg-blue-500/10 transition rounded-lg px-3 py-0.5 items-center gap-1'>
                     <div className=''>
                        <ArrowUp className='w-4 text-blue-600  font-bold' />
                     </div>
                     <div className='text-xs text-blue-600 font-sans font-bold'>
                        10%
                     </div>
                  </div>
               </div>

               <h5 className='text-xs text-neutral-400 mt-4'>
                  From last week
               </h5>
            </div>
            <Graph />
         </div>

         <div className='border border-neutral-800 rounded-xl border-solid p-4 hover:border-neutral-700 transition flex gap-15 items-center'>
            <div className=''>
               <div className='mb-4'>
                  <div className='flex gap-4 items-center'>
                     <div className='rounded-lg flex items-center justify-center p-1 bg-neutral-900'>
                        <ScrollText className='text-blue-600' />
                     </div>
                     <div>
                        <h4 className='text-neutral-400 font-bold'>
                           Total Revenue
                        </h4>
                     </div>
                  </div>

               </div>
               <div className='flex gap-4 items-center'>
                  <h1 className='text-2xl font-bold text-neutral-300'>
                     $145,000
                  </h1>
                  <div className='flex bg-blue-500/10 transition rounded-lg px-3 py-0.5 items-center gap-1'>
                     <div className=''>
                        <ArrowUp className='w-4 text-blue-600  font-bold' />
                     </div>
                     <div className='text-xs text-blue-600 font-sans font-bold'>
                        10%
                     </div>
                  </div>
               </div>

               <h5 className='text-xs text-neutral-400 mt-4'>
                  From last week
               </h5>
            </div>
            <Graph />
         </div>

         <div className='border border-neutral-800 rounded-xl border-solid p-4 hover:border-neutral-700 transition flex gap-15 items-center'>
            <div className=''>
               <div className='mb-4'>
                  <div className='flex gap-4 items-center'>
                     <div className='rounded-lg flex items-center justify-center p-1 bg-neutral-900'>
                        <ScrollText className='text-blue-600' />
                     </div>
                     <div>
                        <h4 className='text-neutral-400 font-bold'>
                           Total Revenue
                        </h4>
                     </div>
                  </div>

               </div>
               <div className='flex gap-4 items-center'>
                  <h1 className='text-2xl font-bold text-neutral-300'>
                     $145,000
                  </h1>
                  <div className='flex bg-red-500/10  transition rounded-lg px-3 py-0.5 items-center gap-1'>
                     <div className=''>
                        <ArrowDown className='w-4 text-red-600  font-bold' />
                     </div>
                     <div className='text-xs text-red-600 font-sans font-bold'>
                        10%
                     </div>
                  </div>
               </div>

               <h5 className='text-xs text-neutral-400 mt-4'>
                  From last week
               </h5>
            </div>
            <Red />
         </div>

        
      </div>


   )
}

export default Cards