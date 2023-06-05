import moment from "moment"

export const AppointmentsMockDB = [
{
    title: "Appointment",
    start:  new Date(moment()) ,
    end: new Date(moment().add(1, "hour")),
     PhysicianIndex: 1,
     PatientIndex:0,
     id:98123
},
{
    title: "test 2",
    start: new Date(moment()),
    end: new Date(moment().add(1,"hour")),
    PhysicianIndex: 0,
    PatientIndex:0,
    id:72107

},

{
    title: "Appointment",
    start: new Date(moment()),
    end: new Date(moment().add(30, "minute")),
    PhysicianIndex: 1,
    PatientIndex:2,
    id:52219

  },
  {
    title: "Appointment",
    start: new Date(moment().add(10, "minute")),
    end: new Date(moment().add(10, "minute").add(8, "hour")),
     PhysicianIndex: 2,
     PatientIndex:3,
     id:31422

  },
  {
    title: "Appointment",
    start: new Date(moment().add(11, "minute")),
    end: new Date(moment().add(49, "minute")),
    PhysicianIndex: 1,
    PatientIndex:2,
    id:75412
  }

//   },
//   {
//     title: "Appointment",
//     start: new Date(moment().add(12, "minute")),
//     end: new Date(moment().add(12, "minute").add(10, "hour")),
//      PhysicianIndex: 4,
//      PatientIndex:5,

//   },
//   {
//     title: "Appointment",
//     start: new Date(moment().add(13, "minute")),
//     end: new Date(moment().add(13, "minute").add(11, "hour")),
//      PhysicianIndex: 5,
//      PatientIndex:2,

//   },
//   {
//     title: "Appointment",
//     start: new Date(moment().add(3, "day")),
//     end: new Date(moment().add(3, "day").add(30, "minute")),
//      PhysicianIndex: 1,
//      PatientIndex:5,

//   },
//   {
//     title: "Appointment",
//     start: new Date(moment().add(15, "minute")),
//     end: new Date(moment().add(15, "minute").add(11, "hour")),
//      PhysicianIndex: 7,
//      PatientIndex:4,

//   },
//   {
//     title: "Appointment",
//     start: new Date(moment().add(16, "minute")),
//     end: new Date(moment().add(16, "minute").add(10, "hour")),
//      PhysicianIndex: 8,
//      PatientIndex:2,

//   },
//   {
//     title: "Appointment",
//     start: new Date(moment().add(17, "minute")),
//     end: new Date(moment().add(17, "minute").add(9, "hour")),
//      PhysicianIndex: 9,
//      PatientIndex:1,

//   },
//   {
//     title: "Appointment",
//     start: new Date(moment().add(18, "minute")),
//     end: new Date(moment().add(18, "minute").add(8, "hour")),
//      PhysicianIndex: 10,
//      PatientIndex:3,
//   }
// ,

// {
//   title: "Appointment",
//   start: new Date(moment().add(18, "minute")),
//   end: new Date(moment().add(18, "minute").add(8, "hour")),
//    PhysicianIndex: 10,
//    PatientIndex:0,
// }

  



]
