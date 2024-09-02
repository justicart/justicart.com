import './App.css';
import Footer from "./Footer.js";

function App() {
  

  return (
    <div className="App">
      <div className="header">
        Justin Carter
      </div>
      <div className="contentSection">
        <div className="face"></div>
        <div className="content">
          <div className="title">Current project</div>
          <div className="project">
            <a href="https://www.boltfoundry.com">
              <div className="bf"></div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
