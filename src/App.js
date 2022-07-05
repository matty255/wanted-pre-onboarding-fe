import React from 'react';
import { FeedProvider } from './store/FeedContext';
import { RoutesExport } from './store/Routes';
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
