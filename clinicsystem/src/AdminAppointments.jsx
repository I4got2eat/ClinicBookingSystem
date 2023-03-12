import React, { useEffect, useState } from "react";
import {PhysicianMockDB} from "./PhysicianMockDB.js"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

export const AdminAppointments = () =>{
    
    const [PhysicainDetails, setPhysicianDetails] = useState(false);
    const [selectedPhyscian ,setSelectedPhysician] = useState();
    const localizer = momentLocalizer(moment);

    const hanldePhysician = (e) =>{
        setPhysicianDetails(true);
        console.log(PhysicianMockDB[e]);
        setSelectedPhysician(PhysicianMockDB[e]);

    }


    const events = [
    {
        title: "Appointment",
        start:  new Date(moment()) ,
        end: new Date(moment().add(4, "hour"))
    }
,
    {
        title: "Appointment",
        start: new Date(moment().add(3, "day")),
        end: new Date(moment().add(3, "day"))
    }
]

useEffect(() => {
    // console.log(PhysicianMockDB)
})

    return(
 <>

        <div className="adminAppointments">

    
            <h1 className="title">Physician list</h1>

            {/* {PhysicianMockDB.map((doctor) =>(
                <div className="row">
                    <h3 className="doctorsName">{doctor.name}</h3>
                    <h3 className="doctorsName">{doctor.specialization}</h3>
                </div>
                ))} */}

                <table className="doctorTable">
                    <tbody>
                {PhysicianMockDB.map((doctor, key) =>(
                    
                    <tr key={key} onClick={()=>hanldePhysician(key)}>
                        <td>{doctor.name}</td>
                        <td className="specField">{doctor.specialization}</td>
                    </tr>
                    
                    
                ))}
                </tbody>
                </table>
                
                {PhysicainDetails?(<>
                <div className="PhysicianInfo"> 

               <h3 className="physiciaName"> {selectedPhyscian.name}</h3>
               <p> field of expertise: {selectedPhyscian.specialization}  <br/>
               phone number: {selectedPhyscian.phone} 
               <br/> email: + {selectedPhyscian.phone} <br/>
               Education: {selectedPhyscian.education} <br/>
               Awards: <span className="test"> {selectedPhyscian.awards}</span>
               </p>



                </div>
                
                </>):(<></>)}
                

        </div>


        <div className="calendar">
            
        <h1 className="title">Appointments</h1>
    <Calendar
    events={events}
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
</>
    )
}

