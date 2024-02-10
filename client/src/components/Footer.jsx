
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  return (
    <div className='bg-gray-200 mt-10 p-20 items-center flex flex-col  px-10 md:px-80'>
     <div className='flex gap-4'>
     
  <a href="https://www.instagram.com/walle.muller/" target="_blank" rel="noopener noreferrer">
    <InstagramIcon />
  </a>
  <a href="https://github.com/muller4341" target="_blank" rel="noopener noreferrer">
    <GitHubIcon />
  </a>
  <a href="https://www.linkedin.com/in/muluken-walle-34704729a/" target="_blank" rel="noopener noreferrer">
    <LinkedInIcon />
  </a>
  <a href="https://mail.google.com/mail/u/1/#inbox" target="_blank" rel="noopener noreferrer">
    <EmailIcon />
  </a>
  </div>
        <h1 className='text-gray-500 text-[15px] mt-4'>Copyright by Muluken Walle @2024
       </h1>
    </div>
  )
}

export default Footer
