import './App.scss';

import AuthProvider from '../../context/authContext';

import Content from '../Content';

function App() {
  return (
    <div id='app' className="app">
      <AuthProvider>
        <Content />
      </AuthProvider>
    </div>
  );
}

export default App;
