import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/style/themes/default';
import GlobalStyle from '../assets/style/global';
import Home from '../pages/Home';
import NewPurchase from '../pages/NewPurchase';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpurchase" element={<NewPurchase />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
