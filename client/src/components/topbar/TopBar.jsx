import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              {' '}
              Home{' '}
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              {' '}
              About{' '}
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              {' '}
              Contact{' '}
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              {' '}
              Write{' '}
            </Link>
          </li>
          <li className="topListItem">{user && 'LogOut'}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://scontent.fevn6-2.fna.fbcdn.net/v/t1.6435-9/188335914_1234219070332519_9102793115898146773_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=oNvAiNxjREsAX-QHtfP&tn=aa_2j_U9cTaMr5sX&_nc_ht=scontent.fevn6-2.fna&oh=ad73b833b2ad1f7836f1ac5c2e4a15c9&oe=6123E7E2"
            alt="Karlen Nersisyan"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                {' '}
                LOGIN
              </Link>
              <Link className="link" to="/register">
                {' '}
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
