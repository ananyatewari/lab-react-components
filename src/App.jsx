import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Header from "./components/Header";
import Body from "./components/Body";
// import imageData from './components/Data';

function App(pic) {
  return (
    <div>
      <Header/>
      <Body images = {pic.images}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
