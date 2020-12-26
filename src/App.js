import {BrowserRouter as Router, Route} from 'react-router-dom' 

// Component
import Navbar from './Container/Navbar/Navbar'
import HomePage from './Container/Pages/HomePage/HomePage'
import HadithPage from './Container/Pages/HadithPage/HadithPage'
import HadithById from './Container/Pages/HadithPage/HadithById'
import Footer from './Components/Footer/Footer'
// Style
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={HomePage} />
      {/* Routing Hadith Page */}
      <Route path="/hadith" component={HadithPage} />
      <Route path="/hadith-detail/:id" component={HadithById} />
      <Footer />
    </Router>
  );
}

export default App;
