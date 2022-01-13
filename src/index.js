import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Error from './routes/pages/error'
import TempReg from "./routes/pages/tempRegister";
import TempLog from "./routes/pages/tempLogin"
// routes succesful can nest pages folder


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="error" element={<Error />} />
      <Route path="tempReg" element={<TempReg />} />
      <Route path="tempLog" element={<TempLog />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);