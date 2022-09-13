import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img
            className='postImg'
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F10%2F437574-germany-house-cochem-hdr-cities.jpg&f=1&nofb=1'
            alt=''
        />
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>
    </div>
  )
}
