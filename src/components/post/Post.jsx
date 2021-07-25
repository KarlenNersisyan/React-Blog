import './post.css';

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://scontent.fevn6-2.fna.fbcdn.net/v/t1.6435-9/188335914_1234219070332519_9102793115898146773_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=oNvAiNxjREsAX-QHtfP&tn=aa_2j_U9cTaMr5sX&_nc_ht=scontent.fevn6-2.fna&oh=ad73b833b2ad1f7836f1ac5c2e4a15c9&oe=6123E7E2"
        alt="Karlen Nersisyan"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Live</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate"> 1 hour age</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
        consequatur ab. Recusandae itaque veniam maxime officiis tenetur iste!
        Asperiores sunt assumenda eos dolore culpa exercitationem iusto at
        provident omnis ratione! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Ducimus, consequatur ab. Recusandae itaque veniam
        maxime officiis tenetur iste! Asperiores sunt assumenda eos dolore culpa
        exercitationem iusto at provident omnis ratione! Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Ducimus, consequatur ab. Recusandae
        itaque veniam maxime officiis tenetur iste! Asperiores sunt assumenda
        eos dolore culpa exercitationem iusto at provident omnis ratione!
      </p>
    </div>
  );
}
