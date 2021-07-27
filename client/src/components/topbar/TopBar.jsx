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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8AqDOJu_ZBvJS6_APqq78rptWFW7C20U42R4GN8BE88b8z_4gk7kvwYzDF_f8YzYOQ0rtGfp81fs&usqp=CAU"
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
