// useEffect allows you to perform side effects in function components. i.e. console.log or it could interact with a kind of DOM API like history or window.

import React, {useEffect, useState} from "react";

function Useeffect() {
    // this below is called a state variable
    const [name, setName] = useState("Jan");
    const [admin, setAdmin] = useState(false);

    // by default, this runs after every render and every update
    // so learning to custumise when the useEffect function to fire. 
    // every time we change the state, this useEffect call fires.
        // useEffect(() => {
        //     document.title = `Celebrate ${name}`;
        // })

    useEffect(() => {
        // document.title = `Celebrate ${name}`;
        console.log(`Celebrate ${name}`);
    }, [name]);
    useEffect(() => {
        console.log(`The user is: ${
            admin ? "admin":"not admin"
        }`);
    })

    return (
        <section>
            <p>Congratulations {name}!</p>
            <button onClick={()=> setName("Will")}>Change Winner</button>

            <p>{admin ? "logged in" : "not logged in"}</p>
            <button onClick={() => setAdmin(true)}>Log in</button>
        </section>
    );
}

export default Useeffect;