import React from 'react';

const Table = (props) => {
    const { allData, handleDelete, handleEdit } = props;

  return (
    <div>
      <div className="App">
      {allData.length>0 && (<table>
        <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Address</th>
        </tr>
        </thead>
        <tbody>
        {allData.map((ele, key) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{ele.name}</td>
              <td>{ele.surname}</td>
              <td>{ele.address}</td>
              <td className="p-2">
                <button type="button" onClick={()=>handleDelete(ele.id)}>Delete</button>
              </td>
              <td className="p-2">
                <button type="button" onClick={()=>handleEdit(ele)}>Edit</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>)}
    </div>
    </div>
  )
}

export default Table
