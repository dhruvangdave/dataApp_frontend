import { React, useState, useEffect } from "react";

const InputForm1 = () => {
  const [work, setWork] = useState({
    title: "",
    subTitle: "",
    description: ""
  });
  const [workList, setWorkList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    const res = fetch(`http://127.0.0.1:8000/api/data/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("deleted");
        fetchWork();
      });
  };

  const handleEdit = (element) => {
    setIsEdit(true);
    setEditId(element.id);
    setWork(element);
  };

  const fetchWork = () => {
    const res = fetch(`http://127.0.0.1:8000/api/data`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((response) => {
        setWorkList(response.data);
      });
  };

  useEffect(() => {
      fetchWork();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const res = fetch(`http://127.0.0.1:8000/api/data/${editId}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          id: 4,
          title: "Dhruvang 4",
          subTitle: "Dave 4",
          description: "new address"
        })
      }).then((resp) => fetchWork());
      setEditId(false);
      setIsEdit(false);
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const res = fetch(`http://127.0.0.1:8000/api/data`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          title: work.title,
          subTitle: work.subTitle,
          description: work.description
        })
      }).then((resp) => fetchWork());
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setWork({ ...work, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title :-
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={work.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subTitle" className="form-label">
              Sub title :-
            </label>
            <input
              type="name"
              className="form-control"
              id="subTitle"
              name="subTitle"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={work.subTitle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description :-
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={work.description}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="container">
        <table>
          <thead>
            <tr>
              <th className="p-2">Index</th>
              <th className="p-2">Title</th>
              <th className="p-2">Sub-title</th>
              <th className="p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {workList.map((ele, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{ele.title}</td>
                  <td>{ele.subTitle}</td>
                  <td>{ele.description}</td>
                  <td className="p-2">
                    <button type="button" onClick={() => handleDelete(ele.id)}>
                      Delete
                    </button>
                  </td>
                  <td className="p-2">
                    <button type="button" onClick={() => handleEdit(ele)}>
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InputForm1;
