import { RequireAuth, IsLogin, AuthProvider } from './AuthContext';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Login from '../pages/Login';
import Main from '../pages/Main';
export const RoutesExport = () => {
  // userInfo test

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/main"
            element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }
          />

          {['/', '/login', '*'].map((path, index) => {
            return (
              <Route
                path={path}
                element={
                  <>
                    <IsLogin>
                      <Login />
                    </IsLogin>
                  </>
                }
                key={index}
              />
            );
          })}
        </Routes>
      </AuthProvider>
    </>
  );
};
