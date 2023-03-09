import React from "react";

export const AdminBoard = ({email}) =>{
    return (
        <>
            {/* <div className="header" >
                <h1 className="profileTitle">Sourcery clinic</h1>
                <h3 className="AccountsEmail" >{email}</h3>
            </div> */}


            <div className="sideMenu">
                <h1 className="menu"> Menu </h1>
                <h3 className="appointmens custsomBtn"> Appointmens </h3>
                <h3 className="appointmens custsomBtn"> Doctors/Services </h3>
                <h3 className="appointmens custsomBtn"> Applications </h3>
                <div className="logoutBtn">

                </div>
            </div>
{/* 
            <div>
                <div className="profilePic"></div>
                <h1>Admin</h1>
            </div> */}


        </>
    )
}