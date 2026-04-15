
import  AppText  from  "../Constants/AppText"
import  {muller } from './../assets'
import './Home.css'
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
<div className='relative overflow-hidden flex items-center gap-10 px-5 py-16 md:px-20 lg:px-28 justify-between flex-col-reverse md:flex-row'>
  <div className='absolute -top-12 left-0 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl'></div>
  <div className='absolute bottom-0 right-8 h-52 w-52 rounded-full bg-amber-500/15 blur-3xl'></div>

  <div className='flex w-full flex-row justify-end'>
    <div className='flex w-full flex-col items-start content-end max-w-2xl'>
      <div className='mb-4 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm'>
        Portfolio designer and full stack developer
      </div>
      <h1 className='text-[34px] leading-tight md:text-[48px] font-extrabold text-slate-900'>{AppText.hello}</h1>
      <div className='flex flex-wrap items-center gap-3'>
        <h1 className='text-[34px] md:text-[48px] font-extrabold text-slate-900'>{AppText.Iam}</h1>
        <div className='Typewriter'>
          <Typewriter
            options={{
              strings: [AppText.RahulSanap, AppText.FrontedDeveloper, AppText.UIUXDesigner, AppText.BackendDeveloper],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <p className='my-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg'>
        I am Muluken Walle and I work as a developer. I enjoy building clean interfaces, thoughtful user experiences,
        and solid backend foundations for products that feel polished.
      </p>
      <div className='flex flex-wrap gap-4'>
        <button className='rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl'>
          Resume
        </button>
        <button className='rounded-full border border-slate-300 bg-white/90 px-6 py-3 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-700'>
          Contact Me
        </button>
      </div>
    </div>
  </div>
  <div className='hero-card w-full flex justify-center md:justify-end'>
    <div className='relative rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-2xl shadow-amber-900/10 backdrop-blur'>
      <div className='absolute inset-0 rounded-[2rem] bg-gradient-to-br from-amber-400/15 to-orange-300/10'></div>
      <img src={muller} alt="Muluken Walle" className="relative z-10 w-[240px] md:w-[380px] drop-shadow-2xl"/>
    </div>
  </div>
</div>
  )
}

export default Home;
