import { useNavigate } from "react-router-dom";
import "./index.css";
/*
auth : if true->(user loggedin) else (user loggedout)
*/
const Header = ({ auth = false }) => {
  const navigate = useNavigate();
  /*
  auth's value based button - css
  */
  const buttonClass = `btn ${
    auth ? "heading-logout-color" : "heading-login-color"
  }`;

  return (
    <div className="border-b navbar bg-base-100 fin-hub-header">
      <span
        onClick={() => {
          navigate("/");
        }}
        className="btn btn-ghost text-purple-500 text-xl"
      >
        FinHub
      </span>
      <button
        onClick={() => {
          navigate("/login");
        }}
        className={buttonClass}
      >
        {auth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Header;
