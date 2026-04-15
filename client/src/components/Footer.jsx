
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  return (
    <div className='mt-16 rounded-t-[2rem] bg-slate-950 px-10 py-12 text-white shadow-2xl shadow-slate-900/20'>
     <div className='flex justify-center gap-4'>
     
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
        <h1 className='mt-5 text-center text-sm text-slate-400'>Copyright by Muluken Walle @2025
       </h1>
    </div>
  )
}

export default Footer
