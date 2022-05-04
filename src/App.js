import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "./Routes/PublicRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
