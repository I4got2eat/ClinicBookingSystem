import React from "react";

export const LogIn = () =>{

    return(
        <>
        <fieldset className="logIn">
            <input placeholder="Email" type={"email"}></input>

            

            <input placeholder="Password" type={"password"}></input>
            
        <button className="logInBtn" type="submit">Log in</button>
        </fieldset>

        </>
    )

}