import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Marina from './pages/Marina';
import Infraestrutura from './pages/Infraestrutura';
import Fotos from './pages/Fotos';
import Noticias from './pages/Noticias';
import Classificados from './pages/Classificados';
import Paraty from './pages/Paraty';
import Contato from './pages/Contato';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="marina" element={<Marina />} />
          <Route path="infraestrutura" element={<Infraestrutura />} />
          <Route path="fotos" element={<Fotos />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="classificados" element={<Classificados />} />
          <Route path="paraty" element={<Paraty />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
