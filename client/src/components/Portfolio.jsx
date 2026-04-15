import  { useEffect, useState } from 'react'
import  AppText from '../Constants/AppText'
import  portfolio  from '../Constants/portfolio'
import SectionHeading from '../Shared/SectionHeading';
import {robo} from './../assets/index'
const Portfolio = () => {

    const [portfolioList,setPortfolioList]=useState([]);
    const [portfolioListOrg,setPortfolioListOrg]=useState([]);
    const [activeType, setActiveType] = useState('All');

    useEffect(()=>{
        
        setPortfolioList(portfolio);
        setPortfolioListOrg(portfolio)
    },[])
    const filterPortfolio=(type)=>{
        setActiveType(type);
        if(type=='All')
        {
            setPortfolioList(portfolioListOrg);
        }
        else{
           const result= portfolioListOrg.filter(item=>item.type==type);
           setPortfolioList(result)
           console.log(result) 
        }
    }
  return (
        <div className='mt-16 flex justify-center flex-col rounded-[2rem] bg-gradient-to-br from-white/80 to-amber-50/80 px-4 py-12 shadow-xl shadow-slate-900/5 md:px-6'>
        <div className='flex flex-row px-6 md:px-0 items-center justify-center'>
        {/* <h1 className='text-[40px] font-bold'>{AppText.Creative}
        <span className='text-yellow-600'>{AppText.Portfolio}</span></h1> */}
        <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio} />
        <img src={robo} className="w-[70px] ml-5 animate-bounce" alt="robot"/>
        </div>
        <div className='flex flex-wrap justify-center gap-3 px-4 md:px-24 lg:px-48 mt-8'>
            <button onClick={()=>filterPortfolio('All')} className={`rounded-full border px-4 py-2 font-semibold transition duration-300 ${activeType === 'All' ? 'border-amber-600 bg-amber-600 text-white shadow-lg shadow-amber-500/30' : 'border-amber-200 bg-white text-amber-700 hover:border-amber-400 hover:bg-amber-50'}`}>All</button>
             <button  onClick={()=>filterPortfolio('ui/ux')}  className={`rounded-full border px-4 py-2 font-semibold transition duration-300 ${activeType === 'ui/ux' ? 'border-amber-600 bg-amber-600 text-white shadow-lg shadow-amber-500/30' : 'border-amber-200 bg-white text-amber-700 hover:border-amber-400 hover:bg-amber-50'}`}>UI/UX</button>
             <button onClick={()=>filterPortfolio('website')} className={`rounded-full border px-4 py-2 font-semibold transition duration-300 ${activeType === 'website' ? 'border-amber-600 bg-amber-600 text-white shadow-lg shadow-amber-500/30' : 'border-amber-200 bg-white text-amber-700 hover:border-amber-400 hover:bg-amber-50'}`}>Web App</button>
             <button onClick={()=>filterPortfolio('mobile')} className={`rounded-full border px-4 py-2 font-semibold transition duration-300 ${activeType === 'mobile' ? 'border-amber-600 bg-amber-600 text-white shadow-lg shadow-amber-500/30' : 'border-amber-200 bg-white text-amber-700 hover:border-amber-400 hover:bg-amber-50'}`}>Mobile App</button>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:px-24 lg:px-48 p-4 mt-6 '>
            {portfolioList.map((item,index)=>(
                <div  key={index} className='group flex flex-col overflow-hidden rounded-[1.5rem] border border-white bg-white p-3 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
                    <img src={item.imageUrl} className="h-[220px] object-cover rounded-[1rem]" alt={item.title}/>
                    <h1 className='mt-3 text-center text-[15px] font-bold text-slate-900 group-hover:text-amber-700'>{item.title}</h1>
                    <h1 className='px-2 pb-3 text-sm text-slate-500'>{item.desc}</h1>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio
