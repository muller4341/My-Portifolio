
import SectionHeading from '../Shared/SectionHeading'
import  AppText  from '../Constants/AppText'
import CompanyImage from '../Constants/CompanyImage'
 const Companies = () => {
  return (
  <div id='companies' className='mt-16 rounded-[2rem] bg-slate-950 px-5 py-12 text-white shadow-2xl shadow-slate-900/20'>
    <div className='flex justify-center items-center flex-col'>
        <SectionHeading firstTitle={ AppText.CompaniesI} secondTitle={AppText.WorkedFor} />
    <p className='mt-4 max-w-2xl text-center text-sm leading-6 text-slate-300'>Companies and teams I have contributed to, shown here as a compact gallery of the places where I have shipped work.</p>
    <div className='mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4'>
        {Array.isArray(CompanyImage) && CompanyImage.map((item, index) => (
  <div key={index} className='flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/10'>
    <img src={item.imageUrl} alt={`Company ${index}`} className="h-[60px] object-contain" />
    </div>
))}

        
        </div>
        </div>
    </div>
  )
}

export default Companies
