import "./App.css";
import Search from "./cocktail/Search";

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

      {/*Cocktail-API Search component :- 11/2/23 */}
      {/*  <BrowserRouter>*/}
      {/*      <Routes>*/}
      {/*          <Route path="/" element={<UseEff />} />*/}
      {/*          <Route path="new" element={<New />} />*/}
      {/*      </Routes>*/}
      {/*  </BrowserRouter>*/}

      {/*COcktail API Search component :- 13/2/23*/}
        <Search />  
    </div>
  )
}

export default App;