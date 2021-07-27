import './singlePost.css';

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://scontent.fevn6-2.fna.fbcdn.net/v/t1.6435-9/188335914_1234219070332519_9102793115898146773_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=oNvAiNxjREsAX-QHtfP&tn=aa_2j_U9cTaMr5sX&_nc_ht=scontent.fevn6-2.fna&oh=ad73b833b2ad1f7836f1ac5c2e4a15c9&oe=6123E7E2"
          alt="Karlen Nersisyan"
        />
        <h1 className="singlePostTitle">
          Karlen Harutyuni Nersisyan
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>{' '}
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            {' '}
            Author: <b> Karlen</b>
          </span>
          <span className="singlePostDate"> 2 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          voluptates et molestiae consectetur explicabo, blanditiis sequi
          ducimus, cumque quos ut magnam! Sed quod facere excepturi quam ex,
          porro perferendis at.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          voluptates et molestiae consectetur explicabo, blanditiis sequi
          ducimus, cumque quos ut magnam! Sed quod facere excepturi quam ex,
          porro perferendis at.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          voluptates et molestiae consectetur explicabo, blanditiis sequi
          ducimus, cumque quos ut magnam! Sed quod facere excepturi quam ex,
          porro perferendis at.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          voluptates et molestiae consectetur explicabo, blanditiis sequi
          ducimus, cumque quos ut magnam! Sed quod facere excepturi quam ex,
          porro perferendis at.
        </p>
      </div>
    </div>
  );
}
