import React from "react";

let Users = (props) => {
    console.log(Array.isArray(props.users))
    return <div>
        {
            props.users.map(u => <div>
                {u.fullName}
            </div>)
        }
    </div>
}

export default Users