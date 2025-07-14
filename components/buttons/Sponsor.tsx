/* eslint-disable @next/next/no-img-element */
function Sponsor() {
  return (
    <a
      className=' inline-block transition-all duration-300 ease-in-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]'
      target='_blank'
      rel='noopener noreferrer'
      href='https://github.com/sponsors/nikohoffren?o=esc'
    >
      <img
        className='h-6'
        src='https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors'
        alt='Sponsor'
      />
    </a>
  )
}

export default Sponsor
