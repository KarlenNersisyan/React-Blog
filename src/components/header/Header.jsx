import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> React </span>
        <span className="headerTitleLg"> Blog </span>
      </div>
      <img
        className="headerImg"
        src="https://scontent.fevn6-2.fna.fbcdn.net/v/t1.6435-9/188335914_1234219070332519_9102793115898146773_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=oNvAiNxjREsAX-QHtfP&tn=aa_2j_U9cTaMr5sX&_nc_ht=scontent.fevn6-2.fna&oh=ad73b833b2ad1f7836f1ac5c2e4a15c9&oe=6123E7E2"
        alt="Karlen Nersisyan"
      />
    </div>
  );
}
