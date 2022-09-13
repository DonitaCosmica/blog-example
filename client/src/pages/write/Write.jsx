import './write.css';

export default function Write() {
  return (
    <div className='write'>
        <img 
          className='writeImg'
          src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi2.cdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170813130921-dresden-germany-file-super-tease.jpg&f=1&nofb=1'
          alt=''
        />
        <form className='writeForm'>
          <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
              <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type='file' id='fileInput' style={{ display: "none" }} />
            <input type='text' placeholder='Title' className='writeInput' autoFocus={ true } />
          </div>
          <div className='writeFormGroup'>
            <textarea 
              placeholder='Tell your story...' 
              type='text' 
              className='writeInput writeText'
            ></textarea>
          </div>
          <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  );
}
