import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListProducers from './pages/list-producers';
import CreateProducers from './pages/create-producer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ListProducers />} />
          <Route path="/create" element={<CreateProducers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
