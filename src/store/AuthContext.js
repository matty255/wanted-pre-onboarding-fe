import React from 'react';
import { fakeAuthProvider } from '../hooks/auth';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

let AuthContext = React.createContext(!null);

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState(
    localStorage.getItem('userData')
      ? JSON.parse(localStorage.getItem('userData')).id
      : null
  );

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      localStorage.setItem(
        'userData',
        JSON.stringify({
          id: 'test01@test.test',
          pwd: '!Qwe1234',
          auth: false,
        })
      );
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      안녕 {auth.user}!
      <button
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (JSON.parse(localStorage.getItem('userData')).auth === false) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export function IsLogin({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (auth.user && JSON.parse(localStorage.getItem('userData')).auth === true) {
    return <Navigate to="/main" state={{ from: location }} replace />;
  }

  return children;
}
