import React from 'react'

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function ConditonalRedering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    return setIsLoggedIn(true);
  };

  const handleLogout = () => {
    return setIsLoggedIn(false);
  };
  const logIn = isLoggedIn;
  let button;

  isLoggedIn ? (
    (button = <LogoutButton onClick={handleLogout} />)
  ) : (
    <LoginButton onClick={handleLogin} />
  );
  return <div>{button}</div>;
}

export default ConditonalRedering;
