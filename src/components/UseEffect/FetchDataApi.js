// fetching data with useEffect
// we have an api like (api.github.com/users). this is a rest api that returns json data and we want to make a request for this data and load it to our page

import React, {useState, useEffect} from "react";

function FetchDataApi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users`).then(response => response.json()).then(setData);
    }, []);
    // the empty array tells here that the useEffect function will render data only once when the page is loaded.
    // this empty array here is called a dependency array

    return (
        <div>
            {/* <p>No users</p> */}
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
            <button onClick={()=> {
                setData([])
            }}>Remove Data</button>
        </div>
    );
}

export default FetchDataApi;