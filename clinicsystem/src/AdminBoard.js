import React from "react";

export const AdminBoard = ({email}) =>{
    return (
        <>
            <div className="header" >
                <h1 className="profileTitle">Sourcery clinic</h1>
                <h3 className="AccountsEmail" >{email}</h3>
            </div>


        </>
    )
}