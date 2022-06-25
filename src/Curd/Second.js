import React from 'react'

const Second = (selectData={selectData}) => {
  return (
    <div>
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
        
        <button onClick="window.print()">Print</button> &nbsp; &nbsp; 
 
    </div>
  )
}

export default Second
