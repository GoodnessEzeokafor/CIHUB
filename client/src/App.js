import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Features from "./components/Features"
import About from "./components/About"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default class App extends Component {
  render() {
    return (
<div class="wrapper">
	<Navbar />
	<Header />	 
	<Features />
	<About />
  <Services />
  <Pricing />
  <Contact />
  <Footer />
  <div class="scroll-up">
            <a href="#totop"><i class="fa fa-angle-up"></i></a>
         </div>
</div>
    );
  }
}
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
