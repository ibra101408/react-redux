import React from "react";
import  {useDispatch} from "react-redux";
import { login } from "../features/user"
import { logout } from "../features/user"


function Login(){
    const dispatch = useDispatch()

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(login({name: "Dan", age: 20, email: "d@gmail" }));
                }}
            >
                Login
            </button>

            <button
                onClick={() =>{
                    dispatch(logout());
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Login;