import Cards from "./components/cards";

export default function Home() {
   return (
      <div className='pl-64 pr-4 cursor-default'>
         <div className='my-4 flex justify-between items-center'>
            <h1 className='text-2xl py-4 font-bold text-neutral-300'>
               Sales Overview
            </h1>
            <div className='border border-neutral-800 hover:border-neutral-700 cursor-default text-sm text-neutral-300 font-bold px-4 py-1 rounded-2xl'>
               <h4>Jan 27, 2026 - Feb 6 2024</h4>
            </div>
         </div>
         <div>
            <Cards />
         </div>
      </div>

   );
}
