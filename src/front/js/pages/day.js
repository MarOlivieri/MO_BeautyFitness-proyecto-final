import React from "react";
import "../../styles/profileObjetive.css";
const DayRoutine = () => {
  return (
    <div>
     
      <main className="profileObjetive-container">
        <h1 className="mt-5">Day </h1>
        <h3>Name  Routine</h3>
        <h3>Intervals</h3>
        <div className="button-container">
        <button type="button" class="btn btn-secondary">Monday</button>
        <video src="..." class="object-fit-contain" autoplay></video>
        <video src="..." class="object-fit-contain" autoplay></video>
        <video src="..." class="object-fit-contain" autoplay></video>
        <video src="..." class="object-fit-contain" autoplay></video>


        
        <button type="button" class="btn btn-success mt-20 p-10">Continue</button>
        </div>
      </main>
    
    </div>
  );
};

export default DayRoutine;
