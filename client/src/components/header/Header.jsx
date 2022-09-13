import './header.css';

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img 
            className='headerImg'
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.opengovpartnership.org%2Fwp-content%2Fuploads%2F2017%2F04%2FGermany.jpg&f=1&nofb=1'
            alt=''
        />
    </div>
  )
}
