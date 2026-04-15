
import aboutSection from '../Constants/AboutSection'

import {  laptop, wave } from './../assets'  //book
import  AppText  from '../Constants/AppText'
const AboutMe = () => {
  return (
    <div id="aboutme" className='relative mt-24 overflow-hidden px-4 md:px-10'>
          <img src={wave} alt="" className="absolute left-0 top-0 w-screen opacity-50" />
        <div className='relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-amber-100 bg-gradient-to-br from-amber-600 via-amber-500 to-orange-500 px-6 py-10 shadow-2xl shadow-amber-900/10 md:px-12 md:py-14'>
          <img src={laptop} alt="" className="absolute -right-2 top-0 hidden w-[220px] md:block lg:w-[320px]" />
          <div className='max-w-3xl'>
            <div className='mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur'>About Me</div>
            <h1 className='text-4xl md:text-5xl font-extrabold text-white'>
              {AppText.About} <span className='text-slate-900'>{AppText.Me}</span>
            </h1>
            <p className='mt-6 max-w-2xl text-base leading-7 text-white/90 md:text-lg'>
              {AppText.aboutMeDescripion}
            </p>
          </div>
        </div>
        <div className='mx-auto -mt-10 grid max-w-6xl grid-cols-1 gap-5 px-0 md:grid-cols-3 md:px-4'>
           {
            aboutSection.map((item,index)=>(
                <div key={index} className="group flex flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-4 shadow-lg shadow-slate-900/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className='overflow-hidden rounded-xl'>
                    <img src={item.image} className="h-[190px] w-full object-cover transition duration-300 group-hover:scale-105" alt={item.title}/>
                  </div>
                  <h1 className='mt-4 text-lg font-bold text-slate-900'>{item.title}</h1>
                  <h1 className='mt-2 text-sm leading-6 text-slate-500'>{item.desc}</h1>
                </div>
            ))
            }
        </div>
    </div>
   
  )
}

export default AboutMe
