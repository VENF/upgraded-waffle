import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

// import Navbar from '././components/Navbar';
import Clients from './pages/Clients/Clients';
import SideMenu from './components/SideMenu/SideMenu';
import PageContainer from './components/PageContainer/PageContainer';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Navbar /> */}
      <SideMenu />
      <PageContainer>
        <Clients />
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;