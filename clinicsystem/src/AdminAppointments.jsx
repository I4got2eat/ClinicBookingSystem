import React, { useEffect, useState } from "react";
import { PhysicianMockDB } from "./PhysicianMockDB.js";
import { AppointmentsMockDB } from "./AppointmentsMockDB.js";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { PatientMockDB } from "./PatientMockDB.js";
import moment from "moment";

export const AdminAppointments = () => {
  const [PhysicainDetails, setPhysicianDetails] = useState(false);
  const [selectedPhyscian, setSelectedPhysician] = useState();
  const [events, setEvents] = useState();
  const localizer = momentLocalizer(moment);

  const hanldePhysician = (e) => {
    let test = [];
    console.log(e);
    setPhysicianDetails(true);
    setSelectedPhysician(PhysicianMockDB[e]);
    AppointmentsMockDB.forEach((appoint) => {
      if (appoint.PhysicianIndex === e) {
        test.push(appoint);
      }
    });
    setEvents(test);
    console.log(events);
  };

  const deleteAppointment = (e) => {
    console.log(e);
    AppointmentsMockDB.forEach((element) => {
      if (element.id === e) {
        element = "";
        console.log("succes");
      }
    });

    console.log(AppointmentsMockDB);
  };

  return (
    <>
      <div className="adminAppointments">
        <h1 className="title">Physician list</h1>
        <div className="physicianWindow">
          <table className="doctorTable">
            <tbody>
              {PhysicianMockDB.map((doctor, key) => (
                <tr
                  className="physicianTableRow"
                  key={key}
                  onClick={() => hanldePhysician(key)}
                >
                  <td>{doctor.name}</td>
                  <td style={{ textAlign: "right" }}>
                    {doctor.specialization}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {PhysicainDetails ? (
          <>
            <div className="PhysicianInfo">
              <h2>Additonal information</h2>
              <p>
                {" "}
                Field of expertise:
                <span className="customInfo">
                  {" "}
                  {selectedPhyscian.specialization}{" "}
                </span>{" "}
                <br />
                Phone number:{" "}
                <span className="customInfo">{selectedPhyscian.phone} </span>
                <br />
                Room number:
                <span className="customInfo"> {selectedPhyscian.room} </span>
                <br /> Email:{" "}
                <span className="customInfo"> {selectedPhyscian.email} </span>
                <br />
                Education:{" "}
                <span className="customInfo">
                  {selectedPhyscian.education}{" "}
                </span>
                <br />
                Awards:{" "}
                <span className="customInfo"> {selectedPhyscian.awards}</span>
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="calendar">
        {PhysicainDetails ? (
          <>
            {" "}
            <h1 className="Physciaititle">
              {selectedPhyscian.name} appointments
            </h1>
          </>
        ) : (
          <h1 className="Physciaititle">Appointments</h1>
        )}

        {events ? (
          <>
            <Calendar
              events={events}
              localizer={localizer}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />

            <table className="AllAppiointments">



              <tr className="AllAppointmentsTitleRow">
                <td>Patients name</td>
                <td>Starts at</td>
                <td>Ends at</td>
              </tr>

              {events.map((event) => (
                <tr className="AllAppointmentsRow">
                  <td className="testing">
                    {PatientMockDB[event.PatientIndex].name}
                  </td>
                  <td className="testing">
                    {event.start.toLocaleDateString("en-US")} /{" "}
                    {moment(event.start).format("LT")}
                  </td>
                  <td className="testing">
                    {event.end.toLocaleDateString("en-US")} /{" "}
                    {moment(event.end).format("LT")}{" "}
                  </td>
                  <div
                    className="delete"
                    onClick={() => deleteAppointment(event.id)}
                  ></div>
                </tr>
              ))}
            </table>
          </>
        ) : (
          <h1 className="title"> select a physician</h1>
        )}
      </div>
    </>
  );
};
