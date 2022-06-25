import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "./URL";
import {useNavigate} from 'react-router-dom'
import Read from "./Read";

const Create = () => {
  const genderdata = ["Male", "Female", "Others"];
  const [gender, setGender] = useState("");

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [gmail, setGmail] = useState("");
  const [msg, setMsg] = useState("");
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();



  const submitHandler = (e) => {
    e.preventDefault();
    
    // console.log(data);
   
  };
  const data = {
      firstName: fName,
      lastName: lName,
      eMail: gmail,
      textMessage: msg,
      Sex: gender,
      accepted: accepted,
    };
    
   const postData = async () => {
        await axios.post(API_URL, {data})  // to post data in api

        navigate('/read');   

    }
     
  return (
    <div>
      <center>
        <div>
          <form onSubmit={submitHandler}>
            <table>
              <thead>
                <tr>
                  <th>FirstName:</th>
                  <th>
                    <input
                      type="text"
                      name="fName"
                      value={fName}
                      onChange={(e) => setFName(e.target.value)}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LastName:</td>
                  <td>
                    <input
                      type="text"
                      name="lName"
                      value={lName}
                      onChange={(e) => setLName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <input
                      type="email"
                      name="gmail"
                      value={gmail}
                      onChange={(e) => setGmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Message: </td>
                  <td>
                    <textarea
                      type="textarea"
                      name="msg"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>gender:</td>
                  <td>
                    {genderdata.map((text, index) => {
                      return (
                        <div key={index}>
                          <input
                            type="radio"
                            value={text}
                            name="gender"
                            onChange={(e) => setGender(e.target.value)}
                          />
                          <b>{text}</b>
                        </div>
                      );
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
            <input
              type="checkbox"
              value={accepted}
              onClick={() => setAccepted(!accepted)}
            />
            If I tick checkbox submit button should Enable.
            <br />
            <button disabled={!accepted} onClick={postData}>Submit</button>
          </form>
        </div>

        <Read />
      </center>
    </div>
  );
};

export default Create;
