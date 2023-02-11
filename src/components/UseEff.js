import {React, useEffect, useState} from "react";
import {
    Link,
} from "react-router-dom";

import New from "./New";

const useEff = () => {
    const [drinkList, setDrinkList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        fetcher()
        console.log("Mounted back");
    }, [searchQuery]);

    useEffect(() => {
        return () => {
            console.log("Drink page is unmounted successfully.");
        }
    }, []);

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
                    <input className="form-control me-2 text-center" onChange={handleChange} value={searchQuery}
                           type="search" placeholder="Search" name="search" aria-label="Search"/>
                    <Link to="new">
                        <button className="btn btn-outline-success" type="submit">New </button>
                    </Link>
                </form>
                <div className="row">
                    {drinkList === null && <h1>Data not found</h1>}
                    {drinkList !== null && drinkList.map((ele, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <img src={ele.strDrinkThumb} className="card-img-top" alt="..."/>
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
