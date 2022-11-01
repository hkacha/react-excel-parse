import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Jamnagar77Rular from './pages/Jamnagar77Rular';
import Kalawad76 from './pages/Kalawad76';
import Dwarka82 from './pages/Dwarka82';

const App = () => {
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jamnagar77Rular />} />
        <Route path="/kalawad" element={<Kalawad76 />} />
        <Route path="/dwarka" element={<Dwarka82 />} />
      </Routes>
    </BrowserRouter>
	);
};

export default App;
