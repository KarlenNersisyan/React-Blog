import './singlePost.css';

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNtnFXWY2ex1MPske9tOTBaKjIkYu4JmoRLj2CwLJhE_sLRV4GxsUCjGSQCqRRNv5txeivcO9V_M&usqp=CAU"
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
