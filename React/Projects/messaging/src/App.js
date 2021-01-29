import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./Components/SideBar/SideBar";
import Chat from "./Components/Chat/Chat";
import { login, logout, selectUser } from "./features/userSlice";
import Landing from "./Pages/Landing/Landing";
import { auth } from "./fire/firebase";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <SideBar />
          <Chat />
        </>
      ) : (
        <div>
          <Landing />
        </div>
      )}
    </div>
  );
}

export default App;
