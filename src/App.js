import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route  exact path="/*" element={ <News key="general" title="General"/>}/>
      <Route  exact path="/Home" element={ <News key="general" title="General"/>}/>
      <Route  exact path="/entertainment" element={ <News key="entertainment"  title="Entertainment"/>}/>
      <Route  exact path="/business" element={ <News  key="business" title="Business"/>}/>
      <Route  exact path="/health" element={ <News key="health" title="Health"/>}/>
      <Route  exact path="/science" element={ <News  key="science" title="Science"/>}/>
      <Route  exact path="/sports" element={ <News  key="sports"  title="Sports"/>}/>
      <Route  exact path="/technology" element={ <News key="technology" title="Technology"/>}/>
   


    </Routes>
  




    </Router>

    
    </>
  
  );
}

export default App;

