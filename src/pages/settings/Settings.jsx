import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle"> Update Your Account </span>
          <span className="settingsDeleteTitle"> Delete Account </span>
        </div>
        <form className="settingsForm">
          <label> Profile Picture</label>
          <div className="settingsPP">
            <img
              className="settingsPPIMg"
              src="https://scontent.fevn6-2.fna.fbcdn.net/v/t1.6435-9/188335914_1234219070332519_9102793115898146773_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=oNvAiNxjREsAX-QHtfP&tn=aa_2j_U9cTaMr5sX&_nc_ht=scontent.fevn6-2.fna&oh=ad73b833b2ad1f7836f1ac5c2e4a15c9&oe=6123E7E2"
              alt="Karlen Nersisyan"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label> Username </label>
          <input type="text" placeholder="Karlen" />
          <label> Email </label>
          <input type="email" placeholder="1999karlen@gmail.com" />
          <label> Password </label>
          <input type="password" />
          <button className="settingsSubmit"> Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
