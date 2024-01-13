import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Header from "./components/Header";
import Body from "./components/Body";
import imageData from './components/Data';

function App() {
  return (
    <div>
      <Header/>
      <Body images = {imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
