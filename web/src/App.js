import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const demos = [
  { name: 'My Maps Replacement', file: 'my-maps-replacement.html' },
  { name: 'Another Map Demo', file: 'another-map-demo.html' },
  // Add more demos here
];

function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <nav style={{ width: 250, background: '#f0f0f0', padding: 20 }}>
        <h2>Map Demos</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {demos.map(demo => (
            <li key={demo.file}>
              <button
                style={{ width: '100%', margin: '8px 0', padding: 10 }}
                onClick={() => setSelectedDemo(demo.file)}
              >
                {demo.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main style={{ flex: 1, background: '#fff' }}>
        {selectedDemo ? (
          <iframe
            title={selectedDemo}
            src={`/demos/${selectedDemo}`}
            style={{ width: '100%', height: '100%', border: 'none' }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation"
          />
        ) : (
          <div style={{ padding: 40 }}>Select a demo to view it.</div>
        )}
      </main>
    </div>
  );
}

export default App;
