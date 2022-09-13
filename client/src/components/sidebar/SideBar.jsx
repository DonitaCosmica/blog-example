import './sidebar.css';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img
                className=''
                src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zicasso.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Foriginal_scaled_down%2Fpublic%2Fcleanup%2Fsampletrip%2FMedieval_Germany_Intro.jpg&f=1&nofb=1'
                alt=''
            />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna.
            </p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Style</li>
                <li className='sidebarListItem'>Sport</li>
                <li className='sidebarListItem'>Tech</li>
                <li className='sidebarListItem'>Cinema</li>
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className='sidebarSocial'>
                <i className='sidebarIcon fa-brands fa-square-facebook'></i>
                <i className='sidebarIcon fa-brands fa-square-twitter'></i>
                <i className='sidebarIcon fa-brands fa-square-pinterest'></i>
                <i className='sidebarIcon fa-brands fa-square-instagram'></i>
            </div>
        </div>
    </div>
  )
}
