import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import New from './pages/New';
import Missing from './pages/Missing';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
