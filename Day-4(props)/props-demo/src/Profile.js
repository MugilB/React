import React from 'react';
import { ReactDOM } from 'react';

function Profile(props)
{
    return(
        <div>
            <label>Name : </label>
            <span>{props.bio.name}</span><br></br>
            <label>Email : </label>
            <span>{props.bio.email}</span><br></br>
            <label>Age : </label>
            <span>{props.bio.age}</span><br></br>
            <label>Phone No :</label>
            <span>{props.bio.phone}</span><br></br>
            <label>Address : </label>
            <span>{props.bio.address}</span>
        </div>
    );
}

export default Profile;