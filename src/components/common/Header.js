import { useEffect, useReducer, useState } from "react";
import useAuth from "../../customHooks/useAuth";
import {
  articleReducerFunction,
  articleInitialState,
} from "../../reducer/article";

const Header = () => {
  const { auth, login, logout } = useAuth();
  const [articleState, articleDispatch] = useReducer(
    articleReducerFunction,
    articleInitialState
  );
  const [notificationCount, setNotificationCount] = useState(0);

  /*
    Purpose : Function to increment notification's count
    */
  const incrementNotifCount = () => {
    setNotificationCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("*****", notificationCount);

    // Clean-up function to log when the component unmounts
    return () => {
      console.log("Cleaning up Header component", notificationCount);
    };
  }, [notificationCount]);

  // Header JSX
  return (
    <>
      <h1 onClick={incrementNotifCount}>FinHub Header {notificationCount}</h1>
      <div>Article's count : {articleState?.articles?.length ?? 0}</div>
      <div
        style={{
          color: "red",
        }}
        onClick={() => {
          articleDispatch({
            type: "ARTICLE_INSERT",
            payload: {
              name: `Article ${articleState?.articles?.length + 1}`,
            },
          });
        }}
      >
        Add now
      </div>
      <div>
        {articleState.articles.map((art, idx) => (
          <div key={idx}>{art.name}</div>
        ))}
      </div>
    </>
  );
};
export default Header;
