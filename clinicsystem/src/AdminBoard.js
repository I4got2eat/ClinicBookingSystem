import React from "react";
import { useNavigate } from "react-router-dom";
import { AdminAppointments } from "./AdminAppointments";
import { useState } from "react";

export const AdminBoard = ({email}) =>{
    const [logout, setLogout] = useState(false);
    const handleLogout = () =>{
        setLogout(true)
    }


    let navigate = useNavigate();

    if(logout){
        navigate(`/login`);
    }


    return (
        <>

<div className="dashboard">
    
    
    
                <div className="sideMenu">
                    <h1 className="menu"> Menu </h1>
                    <h3 className="appointmens custsomBtn"> Appointmens </h3>
                    <h3 className="appointmens custsomBtn"> Doctors/Services </h3>

                    <h3 className="appointmens custsomBtn"> Applications </h3>
                    <div onClick={()=> handleLogout} className="logoutBtn">
                    </div>
                </div>
                <AdminAppointments />
    
                </div>

        </>
    )
}