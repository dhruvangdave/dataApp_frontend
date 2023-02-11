import "./App.css";
// import InputForm from "./components/InputForm";
// import InputForm1 from "./components/InputForm1";
import UseEff from "./components/UseEff";
import New from "./components/New";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <InputForm /> */}
      {/* <InputForm1 /> */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UseEff />} />
                <Route path="new" element={<New />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;