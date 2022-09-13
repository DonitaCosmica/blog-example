import './settings.css';
import Sidebar from '../../components/sidebar/SideBar';

export default function Settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img 
                        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F10%2F437574-germany-house-cochem-hdr-cities.jpg&f=1&nofb=1'
                        alt=''
                    />
                    <label htmlFor='fileInput'>
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type='file' id='fileInput' style={{ display: 'none' }} />
                </div>
                <label>Username</label>
                <input type='text' placeholder='Dona' />
                <label>Email</label>
                <input type='email' placeholder='dona@gmail.com' />
                <label>Password</label>
                <input type='password' />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  );
}
