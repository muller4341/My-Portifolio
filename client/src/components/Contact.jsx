
import { contactusbg, phone } from '../assets'
import AppText  from '../Constants/AppText'
import SectionHeading from '../Shared/SectionHeading'
//import    from '@heroicons/react/outline';
function ContactUs() {
  return (
    <div id="contact" className='mt-16 flex flex-col justify-center rounded-[2rem] bg-white/80 px-4 py-12 shadow-xl shadow-slate-900/5 md:px-10'>
        <div className='flex flex-row  justify-center '>
        <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us}/>
        <img src={phone} className="w-[80px] ml-4" alt="phone"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 md:px-20 mt-8'>
            <img src={contactusbg} className="mx-auto w-[280px] md:w-[340px] drop-shadow-2xl" alt="contact"/>
           <div className='w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-inner shadow-slate-900/5'>
           <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold text-slate-500 '>Email</label>
            <input type="text"  placeholder='yourname@gmail.com'
             className='rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100'  />
            </div>
            <div className='mt-5 flex flex-col gap-2'>
            <label className='text-sm font-semibold text-slate-500 '>Message</label>
            <textarea type="text" rows={7} placeholder='Type your message here'
             className='rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100'  />
           <button className='mt-5 flex flex-row items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-5 py-3 text-[14px] font-semibold text-white shadow-lg shadow-amber-500/30 transition duration-300 hover:-translate-y-0.5'>
           Submit
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

            </button>
            </div>
            
          
         
          
           </div>
           
           
        </div>
    </div>
  )
}

export default ContactUs
