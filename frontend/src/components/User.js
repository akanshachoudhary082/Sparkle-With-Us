import React from 'react'
import { useLocation } from "react-router-dom";
import DisplayUsers from './DisplayUsers';

export default function User() {
  const location = useLocation();
  // console.log(location.state.data, " useLocation Hook");
  const data = location.state.data;
  return (
    <div>
      {/* <div className="card-body">
        <h4 className="card-title">{data.name}</h4>
        <p className="card-text fs-6 lh-sm">Email : {data.email}</p>
        <p className="card-text fs-6 lh-sm">Phone : {data.phone}</p>
        <p className="card-text fs-6 lh-sm">Company : {data.company.name}</p>
        <p className="card-text fs-6 lh-sm">Website : {data.website}</p>
        <p className="card-text fs-6 lh-sm">Address : {data.add}</p>
      </div> */}
      <div>{data}</div>
    </div>
  )
}
