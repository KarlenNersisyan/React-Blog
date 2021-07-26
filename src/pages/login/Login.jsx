import './login.css';

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle"> Login </span>
      <form className="loginForm">
        <label> Email </label>
        <input
          type="email"
          className="loginInput"
          placeholder=" Enter Your Email ..."
        />
        <label> Password </label>
        <input
          type="password"
          className="loginInput"
          placeholder=" Enter Your Password ..."
        />
        <button className="loginButton"> Register </button>
        <button className="loginRegisterButton"> Register </button>
      </form>
    </div>
  );
}