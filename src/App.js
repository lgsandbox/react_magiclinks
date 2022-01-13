// created global styles, layout schema, render breakpoints
// add routes & pages to, encapsulate component sections

import { createGlobalStyle } from "styled-components"
import Home from "./routes/pages/home.js";




const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  
  }
`


function App() {

  const displaySize = window.screen.availWidth;


  // desktop render
  if(displaySize >= 768) {   
    return (
      <>
        <GlobalStyle/>
          <div>
            <Home/>
          </div> 
    
      </>
    );
  } else {
    return (
      <>
        <GlobalStyle/>
        <Home/>
      </>
    );
  }

 } 

export default App;
