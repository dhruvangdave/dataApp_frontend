import {React, useEffect, useState} from 'react';

function Search() {
    const [ drinks, setDrinks ] = useState([]);
    const [ search, setSearch ] = useState('');

    useEffect(()=>{
        fetching()
    }, [search])

    const fetching = ()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res)=> res.json())
            .then((response) => setDrinks(response.drinks))
    }

    const handleChange = (e) =>{
        e.preventDefault();
        setSearch(e.target.value);
    }

    return (
        <>
            <div className="container py-4">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" value={search} name={search} placeholder="Search" aria-label="Search" onChange={handleChange}/>
                </form>

                <div className="row p-2">
                    { drinks === null && <h3 className="text-center py-3">"Data not found"</h3>}
                { drinks !== null  && drinks.map((ele, index)=>{
                    return (
                        <div className="card col-md-3" key={index}>
                            <img src={ele.strDrinkThumb} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{ ele.strDrink }</h5>
                                <p className="card-text">{ ele.strInstructions }</p>
                                <a href={ele.strDrinkThumb} className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </>
    );
}

export default Search;