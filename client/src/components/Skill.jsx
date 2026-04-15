import './../assets'
import { skill } from './../assets'
import  AppText  from '../Constants/AppText'
import   workDetail  from '../Constants/workDetail'
import  skillsList from '../Constants/skillsList'

const Skills = () => {
  return (
    <div className='mt-16 rounded-[2rem] bg-white/70 px-4 py-12 shadow-xl shadow-slate-900/5 md:px-10' id="skills">
      <div className='flex flex-row justify-center items-center gap-3'>
        <img src={skill} className="w-[70px] hover:animate-bounce" alt="skills" />
        <h1 className='text-[34px] md:text-[42px] font-extrabold text-slate-900'>{AppText.Skills}<span className='text-amber-600'>{AppText.Experties}</span></h1>
      </div>
      <div className='flex flex-col md:flex-row justify-evenly gap-10 px-4 md:px-6 mt-10'>
        <div className='grid grid-cols-4 gap-4 md:gap-6 items-center rounded-[1.5rem] bg-slate-50 p-5 shadow-inner shadow-slate-900/5'>
          {skillsList.map((item, index) => (
            <div key={index} className='w-[64px] rounded-2xl border border-white bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg' >
              <img src={item.icon} className="w-[60px]" alt="skill icon" />
            </div>
          ))}
        </div>
        <div className='flex flex-col justify-end md:mt-0 lg:mt-0'>
          {workDetail.map((item, index) => (
            <div key={index} className='mb-4 flex flex-row rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm'>
              <div className='mr-8 min-w-[70px] font-bold text-amber-600'>
                <h2>{item.year}</h2>
              </div>
              <div>
                <h3 className='font-bold w-full text-slate-900'>{item.position}</h3>
                <h3 className='font-medium text-[15px] text-slate-500'>{item.compnayName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;
