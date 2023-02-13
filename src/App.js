import React, {createContext} from "react";
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
const data = createContext();
const data1 = createContext();

function App() {

    const name = "Dhruvang";
    const sweetName = "Darling";
    const message = "Data not found";

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

      {/*Cocktail API Search component :- 13/2/23*/}
        <data.Provider value={[name, sweetName]}>
            <data1.Provider value={message}>
                <Search />
            </data1.Provider>
        </data.Provider>
    </div>
  )
}

export default App;
export {data, data1};