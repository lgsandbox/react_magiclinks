import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import App from "./App";
import Error from './pages/errorPage'
import Login from "./components/login/Login";
import Callback from "./routes/Callback";
import Profile from "./components/login/Profile";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="error" element={<Error />} />
      <Route path="/login" element={<Error/>}/>
      <Route path="/signup" element={<Error/>}/>

      <Route path="/callback" element={ <Callback />}/>
      <Route path="*" element={    <Profile />}/>

      
    </Routes>
  </BrowserRouter>,
  rootElement
);

