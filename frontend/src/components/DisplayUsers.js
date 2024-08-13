import React from 'react'
import { Link } from 'react-router-dom'

export default function DisplayUsers(props) {

    let { id,name, phone, email, address, company, website ,username} = props

    let imageUrl=`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=sad`

    return (
        <div className="card mx-4 my-3 shadow" style={{maxWidth:'900px'}}>
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={imageUrl} className="img-fluid rounded-start p-2" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text fs-6 lh-sm">Email : {email}</p>
                        <p className="card-text fs-6 lh-sm">Phone : {phone}</p>
                        <p className="card-text fs-6 lh-sm">Company : {company.name}</p>
                        <p className="card-text fs-6 lh-sm">Website : {website}</p>
                        {/* <p className="card-text fs-6 lh-sm">Address : {add}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
