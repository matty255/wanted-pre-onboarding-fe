import React from 'react';
import AssignOne from './pages/AssignOne';
import AssignTwo from './pages/AssignTwo';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { AuthProvider, RequireAuth, IsLogin } from './hooks/AuthContext';
import { PokeProvider } from './hooks/PokemonContext';

function App() {
  return (
    <>
      <AuthProvider>
        <PokeProvider>
          <Routes>
            <Route
              path="/main"
              element={
                <RequireAuth>
                  <AssignTwo />
                </RequireAuth>
              }
            />
            {['/', '/login'].map((path, index) => {
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
        </PokeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
