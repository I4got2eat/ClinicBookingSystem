import React from "react";
import {PhysicianMockDB} from "./PhysicianMockDB.js"

export const AdminAppointments = () =>{
    return(
 <>

        <div className="adminAppointments">

    
            <h1>Doctors</h1>

            {PhysicianMockDB.map((doctor) =>(
                <div className="row">
                    <h3 className="doctorsName">{doctor.name}</h3>
                    <h3 className="doctorsName">{doctor.specialization}</h3>
                </div>
                ))}


        </div>
</>
    )
}

