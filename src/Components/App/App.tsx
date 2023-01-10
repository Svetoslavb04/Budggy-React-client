import AuthProvider from '../../context/authContext';
import Content from '../Core/Content';
import './App.scss';

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
