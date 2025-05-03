import React, {useState} from "react";
const ObjectUser = () => {
    const[userDetails, ChangeUserDetails] = useState({"Name":"Isha", "Graduation": "btech", "Address": "dharamshala", "College":"GNDU University", "All":"EveryDetails"} );
    return(
        <div>
            <ul>
                <li>
                {userDetails.Name}
                </li>
                <li><button onClick ={()=>{
                    ChangeUserDetails(prevState => ({
                        ...prevState,
                        Name:"Isha Jaswal", 
                    }))
                }}>ChangeName</button></li>
            </ul>
            <ul>
                <li>
                {userDetails.Graduation}
                </li>
                <li><button onClick ={()=>{
                    ChangeUserDetails(prevState => ({
                        ...prevState,
                        Graduation:"B-Tech", 
                    }))
                }}>ChangeGraduation</button></li>
            </ul>
            <ul>
                <li>
                {userDetails.Address}
                </li>
                <li><button onClick={() =>
                    ChangeUserDetails(prevState => ({
                        ...prevState,
                        Address:"H.P."
                    }))
                }>ChangeAddress</button></li>
            </ul>
            <ul>
                <li>
                {userDetails.College}
                </li>
                <li><button onClick={() =>
                    ChangeUserDetails(prevState => ({
                        ...prevState,
                        College:"GNDU University"
                    }))
                }>ChangeCollege</button></li>
            </ul>
            <ul>
                <li>
                {userDetails.All}
                </li>
                <li><button onClick={() =>
                    ChangeUserDetails(prevState => ({
                        ...prevState,
                        Name:"Isha Jaswal",
                        Graduation:"B-Tech",
                        Address:"Dharamshala",
                        College:"Guru Nanak Dev University"
                    }))
                }>ChangeAll</button></li>
            </ul>
            </div>
)
}
export default ObjectUser;

