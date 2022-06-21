import React from 'react';
import AssignOne from './pages/AssignOne';
import AssignTwo from './pages/AssignTwo';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth, IsLogin } from './hooks/AuthContext';
import { FeedProvider } from './hooks/FeedContext';

function App() {
  return (
    <>
      <AuthProvider>
        <FeedProvider>
          <Routes>
            <Route
              path="/main"
              element={
                <RequireAuth>
                  <AssignTwo />
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
                        <AssignOne />
                      </IsLogin>
                    </>
                  }
                  key={index}
                />
              );
            })}
          </Routes>
        </FeedProvider>
      </AuthProvider>
    </>
  );
}

export default App;
