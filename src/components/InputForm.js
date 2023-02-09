import { React, useState, useEffect } from "react";
import Table from "./Table";

const InputForm = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    address: "",
  });

  console.log('data', data)
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [personalDetails, setPersonalDetails] = useState([]);

  const fetching = ()=> {
    const res = fetch("http://localhost/DataApp/read.php")
      .then((res) => res.json())
      .then((response) => {
        setPersonalDetails(response);
      });
  }
  useEffect(() => {
    return() =>{
      fetching();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      const res = fetch(`http://localhost/DataApp/update.php`, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          "eid": data.id,
          "ename": data.name,
          "esurname": data.surname,
          "eaddress": data.address,
        })
      }).then((resp) => {fetching()});
      setEditId(false);
      setIsEdit(false);
    }
    else {
      const res = fetch(`http://localhost/DataApp/insert.php`, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          "ename": data.name,
          "esurname": data.surname,
          "eaddress": data.address,
        })
      }).then((resp) => {fetching()});
    }
  };

  const handleDelete = (id) => {
    const res = fetch(`http://localhost/DataApp/delete.php`, {
      method: "POST",
      body: JSON.stringify({ eid: id }),
    }).then((data) => {fetching()});
  };

  const handleEdit = (element) => {
    setIsEdit(true);
    setEditId(element.id);
    setData(element);
  };

  const onChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <h1>Fill the details</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name :-{" "}
            <input
              type="text"
              name="name"
              id="name"
              onChange={onChange}
              value={data.name}
              required
              minLength={3}
            />
          </label>
          <hr />
          <label htmlFor="surname">
            Surname :-{" "}
            <input
              type="text"
              name="surname"
              id="surname"
              value={data.surname}
              onChange={onChange}
              required
              minLength={3}
            />
          </label>
          <hr />
          <label htmlFor="address">
            Address :-{" "}
            <input
              type="text"
              name="address"
              id="address"
              onChange={onChange}
              value={data.address}
              required
              minLength={3}
            />
          </label>
          <hr />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
        <hr />
        <Table
          allData={personalDetails}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
};

export default InputForm;
