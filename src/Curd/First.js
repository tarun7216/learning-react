import React, { useEffect, useState } from "react";

import Second from "./Second";
import "./Style.css";

const First = ({ clickHandler }) => {
  const [data, setData] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectData, setSelectData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  // console.log(data)
  // above console log is used to see data

  // https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((items) => {
        return Object.values(items)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };
  // const submitHandler = (e) => {
  //   e.preventDefalut();
  //   const newData = [...selectData];
  //   setSelectData(newData);
  //   setSearchInput("");
  // }

  const handleSelectedSearch = (items) => {
    const data = [...selectData, items];
    setSelectData(data);
  };

  function VerifyUser() {
    if (selectData.length >= 1) {
      return <h4>selected Employees</h4>;
    } else {
      return <h4>Selected Employees &nbsp; &nbsp; No Employee Selected </h4>;
    }
  }
  // https://bobbyhadz.com/blog/javascript-cannot-read-property-filter-of-undefined

  return (
    <div>
      <center>
        <div className="Box">
          <h3>Employee Selection List App</h3>
          <div>
            <input
              type="search"
              placeholder="Search Employee"
              onChange={(e) => searchItems(e.target.value)}
            />
            {/* https://namespaceit.com/blog/typeerror-cannot-read-properties-of-
       undefined-reading-map-reactjs-getting-data-from-a-file */}
            {/* (data || []).filter(items => items.name.includes(search) ). */}
            {(filteredResults || []).map((items, index) => {
              return (
                <div className="Box " key={index}>
                  <button
                    type="Submit"
                    value="Add"
                    name="Add"
                    onClick={() => handleSelectedSearch(items)}
                  >
                    <b>FirstName:</b> {items.name.first} &nbsp;
                    <b>LastName:</b> {items.name.last}&nbsp;
                    <b>Email:</b> {items.email}&nbsp;
                  </button>
                </div>
              );
            })}
          </div>
          <div className="Box1">
            {VerifyUser()}
            <center>
              {(selectData || []).map((select, value) => {
                return (
                  <div key="value">
                    <table>
                      <thead>
                        <tr>
                          <th>FirstName</th>
                          <th>LastName</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{select.name.first}</td>
                          <td>{select.name.last}</td>
                          <td>{select.email}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </center>
          </div>
        </div>
      </center>
    </div>
  );
};

export default First;
