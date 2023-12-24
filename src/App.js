import Header from './Header.js';
import Body from './Body.js';
import BodyAbout from './BodyAbout.js';
import BodyContact from './BodyContact.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Body />} />
            <Route path="/body" element={<Body />} />
            <Route path="/bodyabout" element={<BodyAbout />} />
            <Route path="/bodycontact" element={<BodyContact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>


    // <>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Body />} />
    //     <Route path="/body" element={<Body />} />
    //     <Route path="/bodyabout" element={<BodyAbout />} />
    //     <Route path="/bodycontact" element={<BodyContact />} />
    //   </Routes>
    // </>
  )
}

export default App






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
