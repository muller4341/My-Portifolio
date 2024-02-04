
import SectionHeading from '../Shared/SectionHeading'
import  AppText  from '../Constants/AppText'
import CompanyImage from '../Constants/CompanyImage'
 const Companies = () => {
  return (
    <div id='companies' className='bg-purple-200 p-5'>
        <div className='flex justify-center items-center flex-col'>
        <SectionHeading firstTitle={ AppText.CompaniesI} secondTitle={AppText.WorkedFor} />
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 m-3'>
        {Array.isArray(CompanyImage) && CompanyImage.map((item, index) => (
    <div key={index} className='m-3 transition-all ease-in-out hover:scale-110'>
        <img src={item.imageUrl} alt={`Company ${index}`} className="h-[60px]" />
    </div>
))}

        
        </div>
        </div>
    </div>
  )
}

export default Companies
