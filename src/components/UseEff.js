import { React, useEffect, useState } from "react";

const useEff = () => {
  const [drinkList, setDrinkList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    fetcher()
  }, [searchQuery]);

  const fetcher = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setDrinkList(response.drinks);
      });
  };

  return (
    <>
    <div className="container">
    <form className="d-flex my-4">
        <input className="form-control me-2 text-center" onChange={handleChange}  value={searchQuery} type="search" placeholder="Search" name="search" aria-label="Search" />
      </form>
      <div className="row">
        {drinkList === null && <h1>Data not found</h1> }
        {drinkList !== null && drinkList.map((ele, index) => {
          return (
            <div className="col-md-4" key={index}>
              <img src={ele.strDrinkThumb} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ele.strDrink}</h5>
                <h5 className="card-title">{ele.strGlass}</h5>
                <p className="card-text">
                  {ele.strInstructions}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>          
    </div>
    </>
  );
};

export default useEff;
