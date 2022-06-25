import React, { useEffect, useState } from 'react'
import { API_URL } from './URL';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Read = () => {
    const[apiData,setApiData] = useState([]);
    const navigate = useNavigate();
   
    const editUser = ({firstName, lastName, eMail, textMessage, Sex, accepted}) => {
      localStorage.getItem()
      navigate('/update')
    }

    const deleteUser = async (id) => {
       await axios.delete(API_URL + id)
       
        callGetAPI()
      };

    const callGetAPI = async () => {
        const resp = await axios.get(API_URL);
        setApiData(resp.data);
    }

    useEffect (()=> {
    callGetAPI();

    }, []);
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Message</th>
                <th>Gender</th>
                <th>Checked</th>
                <th>Delete Action</th>
                <th>Edit Action</th>
                
            </tr>
        </thead>
        <tbody>
        {apiData.map(lists => {
            console.log(lists.id)
            return (
              <tr key={lists.id}>
                <td>{lists.data.firstName} </td>
                <td>{lists.data.lastName}</td>
                <td>{lists.data.eMail}</td>
                <td>{lists.data.textMessage}</td>
                <td>{lists.data.Sex}</td>
                <td>{lists.data.accepted ? 'checked' : 'Not-checked'}</td>
                <td><button onClick={() => deleteUser(lists.id)}>Delete</button></td>
                <td><button onClick={() => editUser(lists)}>Edit</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Read
