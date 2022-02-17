import React, { useState } from "react";
import {Table} from 'react-bootstrap'

function TwoD() {
  const [home, setHome] = useState({
    rows: 0,
    columns: 0,
  });

  const [state, setState] = useState([]);

  const [arr] = useState({
    col: { cols: [] },
    row: { rows: [] },
  });

  const [search, setSearch] = useState([]);
  const [text, setText] = useState("grey");
 

  function handleChange(e) {
    setHome({ ...home, [e.target.name]: e.target.value });
  }

  function submit() {
    const characters = "qwertyuioplkjhgfdsazxcvbnm";
    function generateString(length) {
      let result = " ";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    let temp = [];
    for (let i = 0; i < home.rows; i++) {
      temp.push(generateString(home.columns).split(""));
      console.log(temp);
    }

    setState([...temp]);
    console.log((arr.col.cols = [...temp]));
  }

  function searchText(e) {
    setSearch({...search,[e.target.name]:e.target.name});
    console.log(search);

    if(search.text===state.text){
      setText("marron")
    }
  }

  return (
    <div className="container mt-5 lg">
      <div className="container p-5 border shadow w-50 bg-light">
        <div className="mb-3">
          <span style={{ color: "blue" }}>Number of Rows : </span>{" "}
          <input
            type="text"
            id="inputPassword5"
            onChange={handleChange}
            name="rows"
          />
        </div>
        <div>
          <span style={{ color: "blue" }}>Number of Columns: </span>{" "}
          <input
            type="text"
            id="inputPassword5"
            onChange={handleChange}
            name="columns"
          />
        </div>
        <div className="p-4">
          <button type="submit" className="btn btn-success" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <form className="d-flex d-grid gap-3 col-2 mx-auto lg">
          <input
            className="form-control"
            type="text"
            style={{color:"red"}}
            onChange={searchText}
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
      <Table striped bordered hover className="col">
        <tbody >
          {state.map((ele, index) => {
           
            return (
                <tr key={index} >
                <td>
                  {ele.map((item) => {
                   
                    return item;
                  })}
                </td>
                <br />
              </tr>
            );
          })}
        </tbody>
      </Table>

    </div>
  );
}

export default TwoD;
