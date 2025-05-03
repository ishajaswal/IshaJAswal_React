 import React from 'react';

function Hello1(props){
    const{name, message, seatNumber, item} = props;

    return (
        <div>
            <h1>{/* {props.message} {props.name} */}</h1>
            <h1>
                {message} {name}
            </h1>
            {Array.isArray(seatNumber) &&
            seatNumber.map((sn, index) => (
                <h2 key = {index}>
                    {index}:{sn}
                </h2>
            ))}
            {item &&
            typeof item === "object" && 
            Object.entries(item).map(([key, value]) => (
                <h2 key = {key}>
                    {key}: {value}
                </h2>
            )) }
            {item && typeof item === "object" && (
                <div>
                    {Object.entries(item).map(([key, value]) => (
                        <div key = {key}>
                            {Array.isArray(value) ? (
                                <div>
                                    <strong>{key}:</strong>
                                    <ul>
                                        {value.map((item, index) => (
                                            <li key = {index}>{item}</li>
                                        ))}
                                    </ul>
                                    </div>
                            ) : (
                                <p>
                                    <strong>{key}:</strong> {value}
                                </p>
                            )}
                            </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Hello1;
