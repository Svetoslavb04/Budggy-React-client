import './App.scss';

import AuthProvider from '../../context/authContext';

import Content from '../Content';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#4CC441',
        main: '#4E9F3D',
        dark: '#1E5128'
      },
      secondary: {
        light: '#202120',
        main: '#191A19',
        dark: '#0a0a0a'
      }
    }
  });

  return (
    <div id='app' className="app">
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Content />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
