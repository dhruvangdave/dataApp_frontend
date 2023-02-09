import { React, useEffect, useState } from "react";

const useEff = () => {
  const [drinkList, setDrinkList] = useState([]);

  const fetcher = () => {
    // setDrinkList([{
    //     "okay": "oka",
    //     "okay": "oka",
    //     "okay": "oka"
    // }])
    // console.log(drinkList);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setDrinkList(response.drinks);
      });
  };
  console.log(drinkList);

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <>
    <div className="container">
      <div className="row">
        {drinkList.map((ele, index) => {
            
          return (
            <div className="col-md-4" key={index}>
              <img src={ele.strDrinkThumb} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Drinks to cheers</h5>
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
