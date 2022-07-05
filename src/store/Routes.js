import { AuthProvider, RequireAuth, IsLogin } from './AuthContext';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Main from '../pages/Main';

export const RoutesExport = () => {
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
