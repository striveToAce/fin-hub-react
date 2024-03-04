import "./index.css";
/*
auth : if true->(user loggedin) else (user loggedout)
*/
const Header = ({ auth = false }) => {
  /*
  auth's value based button - css
  */
  const buttonClass = `btn ${
    auth ? "heading-logout-color" : "heading-login-color"
  }`;

  return (
    <div className="border-b navbar bg-base-100 fin-hub-header">
      <a href="/" className="btn btn-ghost text-xl">
        FinHub
      </a>
      <button type="submit" className={buttonClass}>
        {auth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Header;
