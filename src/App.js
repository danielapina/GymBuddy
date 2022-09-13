import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./components/Landing";
import Layout from './components/layouts/Layout';
import AboutUs from './components/AboutUs';
import Slips from './components/Slips';
import Excercise from './components/Exercise';
import Saved from './components/Saved';
import NotFound from './components/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="slips" element={<Slips />} />
        <Route path="exercises" element={<Excercise />} />
        <Route path="saved" element={<Saved />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
