import "./App.css";
import { HomeScreen } from "./Screens/HomeScreen";
import "./Screens/WelcomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { WelcomePage } from "./Screens/WelcomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomeScreen />} />
        {/* <Route path="/tvshows" element={<TvShows />} /> */}
      </Routes>
    </>
  );
}

export default App;
