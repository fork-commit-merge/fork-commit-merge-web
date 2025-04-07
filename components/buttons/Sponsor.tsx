/* eslint-disable @next/next/no-img-element */
function Sponsor() {
  return (
    <a
      className='inline-block transition-transform duration-200 hover:scale-105 hover:drop-shadow-lg'
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
