import React from "react";
import { AdminAppointments } from "./AdminAppointments";


export const AdminBoard = ({email}) =>{
    return (
        <>

<div className="dashboard">
    
    
    
                <div className="sideMenu">
                    <h1 className="menu"> Menu </h1>
                    <h3 className="appointmens custsomBtn"> Appointmens </h3>
                    <h3 className="appointmens custsomBtn"> Doctors/Services </h3>
                    <h3 className="appointmens custsomBtn"> Applications </h3>
                    <div className="logoutBtn">
    
                    </div>
                </div>
                <AdminAppointments />
    
</div>

        </>
    )
}