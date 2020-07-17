import React from 'react';

export default function Headphone({ headphone, deleteHeadphone, startHeadphoneDate, endHeadphoneDate }) {

   const handleDeleteClick = () => {
      deleteHeadphone(headphone._id);
   }

   const handleStartDateClick = () => {
      startHeadphoneDate(headphone._id);
   }

   const handleEndDateClick = () => {
      endHeadphoneDate(headphone._id);
   }

   return (
      <div className="row my-1 border rounded py-2 d-flex justify-content-center align-items-center">
         <div className="col-sm-12 col-md-10 col-lg-8 col-xl-3">
            {headphone.name}
         </div>
         <div className="col-sm-5 col-md-5 col-xl-4">
            <label>Start Date: {headphone.startDate ? new Date(headphone.startDate).toLocaleTimeString() : <button className="btn btn-success" onClick={() => handleStartDateClick()}>Start</button>} </label>
         </div>
         <div className="col-sm-5 col-md-5 col-xl-4">
            <label>End Date: {headphone.endDate ? new Date(headphone.endDate).toLocaleTimeString() : <button className="btn btn-danger" onClick={() => handleEndDateClick()}>End</button>} </label>
         </div>
         <div className="col-1">
            <button className="btn-warning" onClick={() => handleDeleteClick()}>X</button>
         </div>
      </div>
   )
}
