import './App.css';
import AfterBanner from './components/AfterBanner';
import AfterDeploy from './components/AfterDeploy';
 import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <AfterDeploy/>
     <AfterBanner/>
    </div>
  );
}

export default App;
