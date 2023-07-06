import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";

const Router = createBrowserRouter({
  
})

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
