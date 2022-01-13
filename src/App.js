// created global styles, layout schema, render breakpoints
// add routes & pages to, encapsulate component sections

import { GlobalStyle } from "./styles/global.styled.js";
import Home from "./pages/homePage.js";



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
