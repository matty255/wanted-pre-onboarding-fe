import React from 'react';
import { FeedProvider } from './store/FeedContext';
import { RoutesExport } from './store/Routes';
import { AuthProvider } from './store/AuthContext';
function App() {
  return (
    <>
      <FeedProvider>
        <RoutesExport />
      </FeedProvider>
    </>
  );
}

export default App;
